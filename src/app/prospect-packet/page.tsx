import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Digital Prospect Packet — Mason County, WV",
  description:
    "Mason County, WV at a glance: $6B+ in active investment, available sites, tax incentives, workforce data, infrastructure, and quality of life. One page, everything you need.",
};

export default function ProspectPacketPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Digital Prospect Packet</h1>
          <p>
            One page with links to everything you need to evaluate Mason
            County for your project: investments, sites, incentives,
            workforce, data, and quality of life.
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="section">
        <div className="container">
          <h2 className="mb-3">Executive Summary</h2>
          <p style={{ fontSize: "1.125rem" }}>
            Mason County, West Virginia sits at the confluence of the Ohio and
            Kanawha Rivers. Over <strong>$6 billion in active investment</strong> is
            under development here right now. Highway, river barge, and CSX
            rail access. Up to 8 gigawatts of new dedicated power. A state
            government that moves fast and a cost structure that works.
          </p>

          <div className="hero-stats mt-4" style={{ borderTop: "1px solid var(--color-border)", background: "transparent" }}>
            <div>
              <div className="hero-stat-value" style={{ color: "var(--color-primary)" }}>$6B+</div>
              <div className="hero-stat-label" style={{ color: "var(--color-text-secondary)" }}>Active Investment</div>
            </div>
            <div>
              <div className="hero-stat-value" style={{ color: "var(--color-primary)" }}>5,000+</div>
              <div className="hero-stat-label" style={{ color: "var(--color-text-secondary)" }}>Jobs Being Created</div>
            </div>
            <div>
              <div className="hero-stat-value" style={{ color: "var(--color-primary)" }}>8 GW</div>
              <div className="hero-stat-label" style={{ color: "var(--color-text-secondary)" }}>Power Planned</div>
            </div>
            <div>
              <div className="hero-stat-value" style={{ color: "var(--color-primary)" }}>3rd</div>
              <div className="hero-stat-label" style={{ color: "var(--color-text-secondary)" }}>Lowest Workers&apos; Comp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Here */}
      <section className="section-alt">
        <div className="container">
          <h2 className="mb-3">Active Investments</h2>
          <div className="card-grid">
            <div className="card investment-card">
              <div className="investment-amount">$2.7 Billion</div>
              <h3>Nucor Corporation</h3>
              <p>
                Largest private investment in WV history. Sheet steel mill
                producing 3M tons/year. ~800 permanent jobs. Completion end
                of 2026.
              </p>
            </div>
            <div className="card investment-card">
              <div className="investment-amount">$850 Million</div>
              <h3>Frontieras North America</h3>
              <p>
                World&apos;s first commercial-scale FASForm coal reformation
                facility. Zero waste, zero emissions. 183 riverfront acres.
                Chose Mason County over Texas and Wyoming.
              </p>
            </div>
            <div className="card investment-card">
              <div className="investment-amount">2–8 GW</div>
              <h3>Monarch Compute Campus</h3>
              <p>
                AI data center power campus. Partnership with Caterpillar for
                power generation. Self-supplied, behind-the-meter. First
                delivery Sept 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Sections */}
      <section className="section">
        <div className="container">
          <h2 className="mb-4">Quick Reference Guide</h2>

          <div className="card-grid">
            <Link href="/why-mason-county" className="card" style={{ textDecoration: "none" }}>
              <h3>Location &amp; Advantages</h3>
              <ul className="feature-list">
                <li>50% of U.S. population within a day&apos;s drive</li>
                <li>40% of aerospace industry within a day&apos;s drive</li>
                <li>Highway, Ohio River barge, CSX Class I rail</li>
                <li>138–765 kV power substations</li>
                <li>Cost of living 16–22% below national average</li>
              </ul>
              <span className="text-accent mt-2" style={{ display: "inline-block" }}>
                Full details &rarr;
              </span>
            </Link>

            <Link href="/business/tax-incentives" className="card" style={{ textDecoration: "none" }}>
              <h3>Tax Incentives</h3>
              <ul className="feature-list">
                <li>6.5% corporate rate (proposed cut to 3.25%)</li>
                <li>Manufacturing Investment Credit: 60% tax offset</li>
                <li>Data centers: 5% property assessment, $0 sales tax</li>
                <li>100% Freeport Exemption on goods in transit</li>
                <li>Federal Opportunity Zone at Apple Grove</li>
              </ul>
              <span className="text-accent mt-2" style={{ display: "inline-block" }}>
                Full details &rarr;
              </span>
            </Link>

            <Link href="/community-data" className="card" style={{ textDecoration: "none" }}>
              <h3>Community Data</h3>
              <ul className="feature-list">
                <li>Population: 25,214</li>
                <li>County GDP: $1.09 billion (2024)</li>
                <li>200,000+ workers within 60 miles</li>
                <li>Workers&apos; comp 47% below national average</li>
                <li>82.1% homeownership rate</li>
              </ul>
              <span className="text-accent mt-2" style={{ display: "inline-block" }}>
                Full details &rarr;
              </span>
            </Link>

            <Link href="/sites" className="card" style={{ textDecoration: "none" }}>
              <h3>Available Sites</h3>
              <ul className="feature-list">
                <li>Sites from 7 to 1,000+ acres</li>
                <li>Ohio River frontage with mooring cells</li>
                <li>CSX rail with spurs and sidings</li>
                <li>Full utility infrastructure</li>
                <li>Fiber optic connectivity</li>
              </ul>
              <span className="text-accent mt-2" style={{ display: "inline-block" }}>
                View all sites &rarr;
              </span>
            </Link>

            <Link href="/business/employers" className="card" style={{ textDecoration: "none" }}>
              <h3>Existing Employers</h3>
              <ul className="feature-list">
                <li>24+ major employers in region</li>
                <li>Toyota, Constellium, Dow, AEP, NGK</li>
                <li>Manufacturing, chemical, energy, healthcare</li>
                <li>Deep supply chain ecosystem</li>
              </ul>
              <span className="text-accent mt-2" style={{ display: "inline-block" }}>
                View employers &rarr;
              </span>
            </Link>

            <Link href="/business/workforce" className="card" style={{ textDecoration: "none" }}>
              <h3>Workforce Development</h3>
              <ul className="feature-list">
                <li>Nationally recognized Simulated Workplace model</li>
                <li>WorkForce West Virginia partnerships</li>
                <li>Marshall University center in-county</li>
                <li>WV Invests: tuition-free community college</li>
              </ul>
              <span className="text-accent mt-2" style={{ display: "inline-block" }}>
                Learn more &rarr;
              </span>
            </Link>

            <Link href="/quality-of-life" className="card" style={{ textDecoration: "none" }}>
              <h3>Quality of Life</h3>
              <ul className="feature-list">
                <li>72 miles of Ohio &amp; Kanawha Rivers</li>
                <li>Krodel Park, Mothman Museum</li>
                <li>Median home price: $127,400</li>
                <li>Rivers Health medical services</li>
              </ul>
              <span className="text-accent mt-2" style={{ display: "inline-block" }}>
                Explore &rarr;
              </span>
            </Link>

            <Link href="/business/investments" className="card" style={{ textDecoration: "none" }}>
              <h3>Active Projects</h3>
              <ul className="feature-list">
                <li>Nucor: $2.7B steel mill (2026)</li>
                <li>Frontieras: $850M FASForm (2028)</li>
                <li>Monarch Campus: 8 GW AI power (2026+)</li>
                <li>$5.3M EDA infrastructure grant</li>
              </ul>
              <span className="text-accent mt-2" style={{ display: "inline-block" }}>
                View all projects &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>
            Contact {siteConfig.director}, Executive Director, for site
            packages, incentive analysis, or to schedule a visit.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about/contact" className="cta-link">
              Contact Us &rarr;
            </Link>
            <a
              href={`mailto:${siteConfig.directorEmail}`}
              className="cta-link"
              style={{ background: "transparent", border: "2px solid #fff", color: "#fff" }}
            >
              {siteConfig.directorEmail}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="cta-link"
              style={{ background: "transparent", border: "2px solid #fff", color: "#fff" }}
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
