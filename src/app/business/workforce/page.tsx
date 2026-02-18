import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workforce Development",
  description:
    "200,000+ workers within 60 miles. Career center training programs, regional workforce partnerships, and workers' comp rates 47% below the national average.",
};

export default function WorkforcePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Workforce Development</h1>
          <p>
            Every company that has picked Mason County cites the workforce as a
            key reason. Here is what the numbers look like.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-3">By the Numbers</h2>
          <div className="card-grid">
            <div className="card">
              <div className="hero-stat-value" style={{ color: "var(--color-primary)" }}>975,000</div>
              <p>Qualified workers within a 50-mile radius</p>
            </div>
            <div className="card">
              <div className="hero-stat-value" style={{ color: "var(--color-primary)" }}>Lowest</div>
              <p>Workers&apos; compensation rates in the nation</p>
            </div>
            <div className="card">
              <div className="hero-stat-value" style={{ color: "var(--color-primary)" }}>12%</div>
              <p>Below national average cost of living</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="mb-3">Mason County Career Center</h2>
          <p>
            The Mason County Career Center is a public career and technical
            education school in Point Pleasant serving approximately 500
            students in grades 9–12. It operates a nationally recognized{" "}
            <strong>Simulated Workplace</strong> model that combines the
            teaching of professional skills — punctuality, teamwork, safety
            protocols — with hands-on technical training.
          </p>
          <p>
            Graduates come out with both the technical skills and the work habits
            that employers actually need.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-3">Regional Partnerships</h2>
          <ul className="feature-list">
            <li>
              <strong>WorkForce West Virginia</strong> — State-level workforce
              development agency providing recruitment, training, and placement
              services for employers.
            </li>
            <li>
              <strong>Workforce Development Region 4</strong> — Regional
              partnership connecting employers with employees across the
              multi-county area.
            </li>
            <li>
              <strong>Advantage Valley</strong> — Nine-county economic corridor
              providing collaborative workforce development and shared
              training resources.
            </li>
            <li>
              <strong>University Partnerships</strong> — Nucor and other major
              employers have announced partnerships with West Virginia colleges
              and universities for workforce development programs.
            </li>
          </ul>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Build Your Team Here</h2>
          <p>
            Let us connect you with workforce resources tailored to your
            industry.
          </p>
          <Link href="/about/contact" className="cta-link">
            Contact Us &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
