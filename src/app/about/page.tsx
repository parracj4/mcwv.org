import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About the Mason County Development Authority",
  description:
    "The Mason County Development Authority stimulates and promotes the expansion of business and industrial activity to advance economic development and improve the standard of living for Mason County citizens.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About MCDA</h1>
          <p>
            Who we are, what we do, and how to reach us.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-3">Our Mission</h2>
          <blockquote
            style={{
              borderLeft: "4px solid var(--color-gold)",
              paddingLeft: "1.5rem",
              fontStyle: "italic",
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              margin: "0 0 2rem",
            }}
          >
            To stimulate and promote the expansion of all kinds of business and
            industrial activity which will tend to advance business and
            industrial development and maintain the economic stability of the
            county, provide maximum opportunities for employment, encourage
            thrift, and improve the standard of living of the citizens of the
            county.
          </blockquote>

          <h2 className="mb-3">What We Do</h2>
          <p>
            The Mason County Development Authority is a non-profit economic
            development organization that works as an arm of state and local
            government. We attract new business, help existing companies grow,
            and create job opportunities.
          </p>
          <h3 className="mt-3 mb-2">Our Focus Areas</h3>
          <ul className="feature-list">
            <li>
              <strong>Business Attraction</strong> — Recruiting new companies
              and investments to Mason County.
            </li>
            <li>
              <strong>Business Expansion</strong> — Supporting existing
              employers in growing their operations.
            </li>
            <li>
              <strong>Workforce Development</strong> — Connecting employers
              with skilled talent through regional partnerships.
            </li>
            <li>
              <strong>Infrastructure Modernization</strong> — Investing in the
              utilities, transportation, and site infrastructure that industry
              needs.
            </li>
            <li>
              <strong>Innovation &amp; Entrepreneurship</strong> — Building
              supply chain networks and supporting new businesses.
            </li>
            <li>
              <strong>Incentive Programs</strong> — Helping businesses identify
              and apply for state, local, and federal incentives.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="mb-3">Leadership</h2>
          <div className="card-grid">
            <div className="card">
              <h3>{siteConfig.director}</h3>
              <p className="card-meta">Executive Director</p>
              <p>
                {siteConfig.director} leads the day-to-day operations of the
                MCDA and serves as the primary point of contact for businesses
                exploring Mason County.
              </p>
              <p className="mt-2">
                <a href={`mailto:${siteConfig.directorEmail}`}>
                  {siteConfig.directorEmail}
                </a>
                <br />
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </p>
            </div>
            <div className="card">
              <h3>{siteConfig.boardPresident}</h3>
              <p className="card-meta">Board President</p>
            </div>
            <div className="card">
              <h3>{siteConfig.boardVicePresident}</h3>
              <p className="card-meta">Board Vice President</p>
            </div>
            <div className="card">
              <h3>{siteConfig.boardTreasurer}</h3>
              <p className="card-meta">Board Treasurer</p>
            </div>
            <div className="card">
              <h3>{siteConfig.boardSecretary}</h3>
              <p className="card-meta">Board Secretary</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-3">Quick Links</h2>
          <div className="card-grid">
            <Link href="/about/board" className="card" style={{ textDecoration: "none" }}>
              <h3>Board of Directors</h3>
              <p>18-member board serving staggered terms.</p>
              <span className="text-accent">View board &rarr;</span>
            </Link>
            <Link href="/about/agendas-minutes" className="card" style={{ textDecoration: "none" }}>
              <h3>Agendas &amp; Minutes</h3>
              <p>Board meeting agendas and minutes.</p>
              <span className="text-accent">View documents &rarr;</span>
            </Link>
            <Link href="/about/contact" className="card" style={{ textDecoration: "none" }}>
              <h3>Contact Us</h3>
              <p>Get in touch with the MCDA team.</p>
              <span className="text-accent">Contact &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
