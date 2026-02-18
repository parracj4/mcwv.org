import type { Metadata } from "next";
import Link from "next/link";
import { availableSites } from "@/data/sites";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Available Sites — Industrial Land & Buildings",
  description:
    "Explore 11 industrial sites in Mason County, WV from 7 to 1,000+ acres. Ohio River frontage, CSX rail, full utilities, fiber optic, and power substations up to 765 kV.",
};

function StatusBadge({ status }: { status: string }) {
  const cls =
    status === "available"
      ? "badge badge-available"
      : status === "under-option"
        ? "badge badge-under-option"
        : "badge badge-active";
  const label =
    status === "available"
      ? "Available"
      : status === "under-option"
        ? "Under Option"
        : "Active";
  return <span className={cls}>{label}</span>;
}

export default function SitesPage() {
  const available = availableSites.filter((s) => s.status === "available");
  const underOption = availableSites.filter((s) => s.status === "under-option");
  const active = availableSites.filter((s) => s.status === "active");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Available Sites</h1>
          <p>
            Shovel-ready industrial sites from 7 to 1,000+ acres with Ohio
            River frontage, CSX Class I rail, full utility infrastructure, and
            power substations up to 765 kV.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-4">Available Sites</h2>
          <div className="card-grid">
            {available.map((site) => (
              <article key={site.slug} className="card" id={site.slug}>
                <StatusBadge status={site.status} />
                <h3 className="mt-2">{site.name}</h3>
                <p className="card-meta">{site.location}</p>
                <dl className="detail-sidebar" style={{ position: "static", marginBottom: "1rem" }}>
                  <dt>Acreage</dt>
                  <dd>{site.acreage}</dd>
                </dl>
                <h4>Key Features</h4>
                <ul className="feature-list">
                  {site.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                {site.transportation.length > 0 && (
                  <>
                    <h4 className="mt-3">Transportation</h4>
                    <ul className="feature-list">
                      {site.transportation.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </>
                )}
                {site.utilities.length > 0 && (
                  <>
                    <h4 className="mt-3">Utilities</h4>
                    <ul className="feature-list">
                      {site.utilities.map((u, i) => (
                        <li key={i}>{u}</li>
                      ))}
                    </ul>
                  </>
                )}
                {site.targetIndustries && (
                  <>
                    <h4 className="mt-3">Target Industries</h4>
                    <p>{site.targetIndustries.join(" · ")}</p>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {active.length > 0 && (
        <section className="section-alt">
          <div className="container">
            <h2 className="mb-4">Active Industrial Parks</h2>
            <div className="card-grid">
              {active.map((site) => (
                <article key={site.slug} className="card" id={site.slug}>
                  <StatusBadge status={site.status} />
                  <h3 className="mt-2">{site.name}</h3>
                  <p className="card-meta">{site.location}</p>
                  <p><strong>Acreage:</strong> {site.acreage}</p>
                  <ul className="feature-list mt-2">
                    {site.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <h4 className="mt-3">Transportation</h4>
                  <ul className="feature-list">
                    {site.transportation.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {underOption.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="mb-4">Sites Under Option</h2>
            <p className="mb-3">
              These sites are currently under option for development. Contact us
              for the latest availability.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Site</th>
                    <th>Location</th>
                    <th>Acreage</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {underOption.map((site) => (
                    <tr key={site.slug}>
                      <td style={{ fontWeight: 600, color: "var(--color-text)" }}>
                        {site.name}
                      </td>
                      <td>{site.location}</td>
                      <td>{site.acreage}</td>
                      <td>
                        <StatusBadge status={site.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <section className="cta-banner">
        <div className="container">
          <h2>Schedule a Tour</h2>
          <p>
            Contact {siteConfig.director} to visit any of these sites or
            request detailed site packages.
          </p>
          <Link href="/about/contact" className="cta-link">
            Contact Us &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
