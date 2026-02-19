"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface TopoJSON {
  type: string;
  objects: {
    states: {
      type: string;
      geometries: Array<{
        type: string;
        arcs: number[][] | number[][][];
        properties: { name: string };
      }>;
    };
  };
  arcs: number[][][];
  transform?: {
    scale: [number, number];
    translate: [number, number];
  };
}

interface GeoFeature {
  properties: { name: string };
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
}

// Mason County pin coordinates (Point Pleasant, WV)
const MASON_COUNTY_CENTER: [number, number] = [-82.14, 38.84];

// Visual center of WV state (for centering the viewport)
const WV_CENTER: [number, number] = [-80.6, 38.8];

// Continental US center for initial view (shifted east to show Maine better)
const US_CENTER: [number, number] = [-96.5, 39.5];

// Easing function for smooth animation
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Lerp speed — higher = snappier, lower = smoother (0.06–0.12 is a good range)
const LERP_SPEED = 0.08;

export default function ScrollZoomMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const topoDataRef = useRef<TopoJSON | null>(null);
  const featuresRef = useRef<GeoFeature[] | null>(null);
  const loopRef = useRef<number | null>(null);

  // Scroll target (updated by scroll handler — cheap)
  const targetProgressRef = useRef(0);
  // Smoothly interpolated current value (used for rendering)
  const currentProgressRef = useRef(0);

  const [displayProgress, setDisplayProgress] = useState(0);

  // Convert TopoJSON arc to coordinates
  const arcToCoordinates = useCallback(
    (
      arcIndex: number,
      arcs: number[][][],
      transform?: { scale: [number, number]; translate: [number, number] }
    ): number[][] => {
      const arc = arcs[arcIndex < 0 ? ~arcIndex : arcIndex];
      if (!arc) return [];

      let x = 0,
        y = 0;
      const coords: number[][] = [];

      for (const point of arc) {
        x += point[0];
        y += point[1];

        if (transform) {
          coords.push([
            x * transform.scale[0] + transform.translate[0],
            y * transform.scale[1] + transform.translate[1],
          ]);
        } else {
          coords.push([x, y]);
        }
      }

      return arcIndex < 0 ? coords.reverse() : coords;
    },
    []
  );

  // Convert TopoJSON to GeoJSON features (cached)
  const topoToGeo = useCallback(
    (topo: TopoJSON): GeoFeature[] => {
      if (featuresRef.current) return featuresRef.current;

      const features: GeoFeature[] = [];
      const states = topo.objects.states;

      for (const geom of states.geometries) {
        let coordinates: number[][][] | number[][][][] = [];

        if (geom.type === "Polygon") {
          coordinates = (geom.arcs as number[][]).map((ring) =>
            ring.flatMap((arcIdx) =>
              arcToCoordinates(arcIdx, topo.arcs, topo.transform)
            )
          );
        } else if (geom.type === "MultiPolygon") {
          coordinates = (geom.arcs as number[][][]).map((polygon) =>
            polygon.map((ring) =>
              ring.flatMap((arcIdx) =>
                arcToCoordinates(arcIdx, topo.arcs, topo.transform)
              )
            )
          );
        }

        features.push({
          properties: geom.properties,
          geometry: {
            type: geom.type,
            coordinates,
          },
        });
      }

      featuresRef.current = features;
      return features;
    },
    [arcToCoordinates]
  );

  // Project coordinates using Albers USA projection (simplified)
  const projectAlbersUSA = useCallback(
    (
      lon: number,
      lat: number,
      width: number,
      height: number,
      scale: number,
      centerLon: number,
      centerLat: number
    ): [number, number] => {
      const phi0 = (29.5 * Math.PI) / 180;
      const phi1 = (45.5 * Math.PI) / 180;
      const lambda0 = (-96 * Math.PI) / 180;

      const n = (Math.sin(phi0) + Math.sin(phi1)) / 2;
      const C = Math.cos(phi0) ** 2 + 2 * n * Math.sin(phi0);
      const rho0 = Math.sqrt(C - 2 * n * Math.sin((38 * Math.PI) / 180)) / n;

      const lambda = (lon * Math.PI) / 180;
      const phi = (lat * Math.PI) / 180;

      const rho = Math.sqrt(C - 2 * n * Math.sin(phi)) / n;
      const theta = n * (lambda - lambda0);

      let x = rho * Math.sin(theta);
      let y = rho0 - rho * Math.cos(theta);

      const centerLambda = (centerLon * Math.PI) / 180;
      const centerPhi = (centerLat * Math.PI) / 180;
      const centerRho = Math.sqrt(C - 2 * n * Math.sin(centerPhi)) / n;
      const centerTheta = n * (centerLambda - lambda0);
      const centerX = centerRho * Math.sin(centerTheta);
      const centerY = rho0 - centerRho * Math.cos(centerTheta);

      x = (x - centerX) * scale + width / 2;
      // Flip Y axis - canvas Y increases downward, but projection Y increases upward
      y = -(y - centerY) * scale + height / 2;

      return [x, y];
    },
    []
  );

  // Draw the map
  const drawMap = useCallback(
    (prog: number) => {
      const canvas = canvasRef.current;
      const topoData = topoDataRef.current;
      if (!canvas || !topoData) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      // Clear canvas
      ctx.fillStyle = "#0a1628";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate zoom and pan based on progress
      const easedProgress = easeInOutCubic(prog);

      // Smart scaling based on aspect ratio
      const aspectRatio = width / height;
      const isLandscape = aspectRatio > 1;

      // Calculate scale to fill screen with US (minimal ocean)
      const baseScale = isLandscape ? height * 2.0 : width * 1.3;
      // Final zoom based on height ensures consistent vertical visible range
      const maxScale = height * 6;
      const scale = baseScale + (maxScale - baseScale) * easedProgress;

      // Pan to Mason County FASTER than zoom increases so WV stays visible
      const panProgress = Math.min(1, easedProgress * 2);
      const centerLon = US_CENTER[0] + (WV_CENTER[0] - US_CENTER[0]) * panProgress;
      const centerLat = US_CENTER[1] + (WV_CENTER[1] - US_CENTER[1]) * panProgress;

      // Get cached features
      const features = topoToGeo(topoData);

      // Shift map upward as zoom progresses so WV sits above text
      const mapShiftUp = height * 0.12 * easedProgress;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.translate(0, -mapShiftUp);

      // Draw each state (skip Alaska and Hawaii)
      for (const feature of features) {
        const stateName = feature.properties.name;
        if (stateName === "Alaska" || stateName === "Hawaii") continue;

        const isWV = stateName === "West Virginia";

        ctx.beginPath();

        const drawPolygon = (coords: number[][]) => {
          let first = true;
          for (const coord of coords) {
            const [x, y] = projectAlbersUSA(
              coord[0],
              coord[1],
              width,
              height,
              scale,
              centerLon,
              centerLat
            );
            if (first) {
              ctx.moveTo(x, y);
              first = false;
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.closePath();
        };

        if (feature.geometry.type === "Polygon") {
          for (const ring of feature.geometry.coordinates as number[][][]) {
            drawPolygon(ring);
          }
        } else if (feature.geometry.type === "MultiPolygon") {
          for (const polygon of feature.geometry.coordinates as number[][][][]) {
            for (const ring of polygon) {
              drawPolygon(ring);
            }
          }
        }

        // Fill
        if (isWV) {
          const goldIntensity = Math.min(1, easedProgress * 2);
          ctx.fillStyle = `rgba(200, 164, 78, ${0.3 + goldIntensity * 0.5})`;
        } else {
          ctx.fillStyle = "#1e2d42";
        }
        ctx.fill();

        // Stroke
        ctx.strokeStyle = isWV ? "#c8a44e" : "rgba(200, 164, 78, 0.3)";
        ctx.lineWidth = isWV ? 2 : 0.5;
        ctx.stroke();
      }

      // Draw pin when zoomed in enough
      if (prog > 0.6) {
        const pinOpacity = Math.min(1, (prog - 0.6) / 0.2);
        const [pinX, pinY] = projectAlbersUSA(
          MASON_COUNTY_CENTER[0],
          MASON_COUNTY_CENTER[1],
          width,
          height,
          scale,
          centerLon,
          centerLat
        );

        // Pin shadow
        ctx.beginPath();
        ctx.ellipse(pinX, pinY + 15, 8, 3, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${0.3 * pinOpacity})`;
        ctx.fill();

        // Pin body
        ctx.beginPath();
        ctx.moveTo(pinX, pinY);
        ctx.bezierCurveTo(pinX - 12, pinY - 20, pinX - 12, pinY - 35, pinX, pinY - 35);
        ctx.bezierCurveTo(pinX + 12, pinY - 35, pinX + 12, pinY - 20, pinX, pinY);
        ctx.fillStyle = `rgba(200, 164, 78, ${pinOpacity})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(245, 240, 232, ${pinOpacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Pin dot
        ctx.beginPath();
        ctx.arc(pinX, pinY - 25, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10, 22, 40, ${pinOpacity})`;
        ctx.fill();
      }

      ctx.restore();

      // Position text overlay directly below WV's southern border
      const [, wvSouthY] = projectAlbersUSA(
        -80.6, 37.2, width, height, scale, centerLon, centerLat
      );
      const textTop = wvSouthY - mapShiftUp + 24;
      if (textRef.current) {
        textRef.current.style.top = `${Math.min(textTop, height * 0.65)}px`;
      }
    },
    [topoToGeo, projectAlbersUSA]
  );

  // Handle resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    drawMap(currentProgressRef.current);
  }, [drawMap]);

  useEffect(() => {
    // Scroll handler — only updates target, no rendering
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollHeight = container.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      targetProgressRef.current = Math.max(0, Math.min(1, scrolled / scrollHeight));
    };

    // Continuous animation loop — lerps toward target and redraws
    const tick = () => {
      const target = targetProgressRef.current;
      const current = currentProgressRef.current;
      const diff = target - current;

      // Only redraw if we haven't converged yet
      if (Math.abs(diff) > 0.0005) {
        const next = current + diff * LERP_SPEED;
        currentProgressRef.current = next;

        // Update React state for text opacity (throttled to avoid excessive re-renders)
        const rounded = Math.round(next * 200) / 200;
        setDisplayProgress(rounded);

        drawMap(next);
      }

      loopRef.current = requestAnimationFrame(tick);
    };

    // Load TopoJSON data
    fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json")
      .then((res) => res.json())
      .then((data: TopoJSON) => {
        topoDataRef.current = data;
        handleResize();
        handleScroll();
        // Start animation loop after data loads
        loopRef.current = requestAnimationFrame(tick);
      })
      .catch(console.error);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (loopRef.current) {
        cancelAnimationFrame(loopRef.current);
      }
    };
  }, [drawMap, handleResize]);

  // Calculate text opacities based on smoothed progress
  const introOpacity = Math.max(0, 1 - displayProgress * 4);
  const finalOpacity = Math.max(0, Math.min(1, (displayProgress - 0.7) * 4));
  const scrollIndicatorOpacity = Math.max(0, 1 - displayProgress * 5);

  return (
    <div ref={containerRef} className="relative h-[150vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        />

        {/* Intro text - visible at start */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: introOpacity }}
        >
          <div className="text-center px-4 max-w-4xl">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream mb-6">
              The Best Place in America
            </h1>
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-gold-light">
              for Advanced Manufacturing &amp; AI Infrastructure
            </p>
          </div>
        </div>

        {/* Final text - Mason County */}
        <div
          ref={textRef}
          className="absolute inset-x-0 flex flex-col items-center pointer-events-none"
          style={{ opacity: finalOpacity, top: '65%' }}
        >
          <div className="text-center px-4 max-w-4xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold mb-1">
              Mason County
            </h2>
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-cream/60 mb-4">
              West Virginia
            </p>
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-cream/80 mb-8">
              $6 billion in active investment and growing
            </p>
            <a
              href="#content"
              className="inline-block px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-lg hover:bg-gold-light transition-colors pointer-events-auto"
            >
              Explore Our Opportunities
            </a>
          </div>
        </div>

        {/* Scroll indicator — bottom-20 (80px) clears iPhone home bar */}
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-sm font-sans uppercase tracking-widest">
            Scroll to explore
          </span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
