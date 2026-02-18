import type { Metadata } from "next";
import Link from "next/link";
import { investments } from "@/data/investments";

export const metadata: Metadata = {
  title: "Major Investments — $6+ Billion in Active Projects",
  description:
    "Nucor's $2.7 billion steel mill, Frontieras' $850 million FASForm facility, and the Monarch Compute Campus with up to 8 GW of AI power. All in Mason County, WV.",
};

export default function InvestmentsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Major Investments</h1>
          <p>
            Three projects totaling over $6 billion in investment, all under
            development right now in Mason County.
          </p>
        </div>
      </section>

      {investments.map((inv, idx) => (
        <section
          key={inv.slug}
          id={inv.slug}
          className={idx % 2 === 0 ? "section" : "section-alt"}
        >
          <div className="container">
            <div className="detail-grid">
              <div>
                <h2 className="mb-1">{inv.company}</h2>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "var(--color-text-light)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {inv.headline}
                </p>
                <p>{inv.summary}</p>
                <h3 className="mt-3 mb-2">Project Details</h3>
                <ul className="feature-list">
                  {inv.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <h3 className="mt-3 mb-2">Economic Impact</h3>
                <p>{inv.impact}</p>
              </div>
              <aside className="detail-sidebar">
                <dl>
                  <dt>Investment</dt>
                  <dd>{inv.investment}</dd>
                  <dt>Jobs</dt>
                  <dd>{inv.jobs}</dd>
                  <dt>Timeline</dt>
                  <dd>{inv.timeline}</dd>
                  <dt>Website</dt>
                  <dd>
                    <a
                      href={inv.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {inv.websiteLabel} &rarr;
                    </a>
                  </dd>
                </dl>
              </aside>
            </div>
          </div>
        </section>
      ))}

      <section className="cta-banner">
        <div className="container">
          <h2>Available Sites</h2>
          <p>
            There is still room. See what sites are available and what
            infrastructure is already in place.
          </p>
          <Link href="/sites" className="cta-link">
            View Available Sites &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
