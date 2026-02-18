import type { Metadata } from "next";
import Link from "next/link";
import {
  incentives,
  incentiveCategories,
  masonCountyTaxFacts,
} from "@/data/incentives";

export const metadata: Metadata = {
  title: "Tax Incentives — West Virginia & Mason County Programs",
  description:
    "West Virginia and Mason County tax incentives: Freeport Exemption, Manufacturing Investment Tax Credit, data center property tax programs, Opportunity Zones, sales tax exemptions, and more.",
};

export default function TaxIncentivesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Tax Incentives</h1>
          <p>
            West Virginia offers deep incentive programs for manufacturers, data
            centers, and industrial investors. Many can be stacked. Here is what
            is available.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-dark">
        <div className="container">
          <h2 className="mb-3" style={{ textAlign: "center" }}>
            At a Glance
          </h2>
          <div className="incentive-stats-grid">
            <div className="incentive-stat">
              <span className="incentive-stat-value">6.5%</span>
              <span className="incentive-stat-label">
                Corporate Income Tax
                <br />
                (proposed cut to 3.25%)
              </span>
            </div>
            <div className="incentive-stat">
              <span className="incentive-stat-value">100%</span>
              <span className="incentive-stat-label">
                Max Tax Offset
                <br />
                for High-Tech Manufacturers
              </span>
            </div>
            <div className="incentive-stat">
              <span className="incentive-stat-value">$0</span>
              <span className="incentive-stat-label">
                Sales Tax on Mfg.
                <br />
                Equipment &amp; Materials
              </span>
            </div>
            <div className="incentive-stat">
              <span className="incentive-stat-value">5%</span>
              <span className="incentive-stat-label">
                Property Tax Assessment
                <br />
                on Data Center Equipment
              </span>
            </div>
            <div className="incentive-stat">
              <span className="incentive-stat-value">$0</span>
              <span className="incentive-stat-label">
                Franchise Tax
                <br />
                (WV has none)
              </span>
            </div>
            <div className="incentive-stat">
              <span className="incentive-stat-value">$487</span>
              <span className="incentive-stat-label">
                Median Property Tax
                <br />
                per Year
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion by Category */}
      <section className="section">
        <div className="container">
          <h2 className="mb-2">
            {incentives.length} Incentive Programs in 9 Categories
          </h2>
          <p className="mb-4">
            Most of these programs can be combined. Click any category to see
            available programs with official source links.
          </p>

          <div className="accordion-group">
            {incentiveCategories.map((cat) => {
              const items = incentives.filter((i) => i.category === cat.id);
              if (items.length === 0) return null;

              return (
                <details key={cat.id} className="accordion" id={cat.id}>
                  <summary className="accordion-trigger">
                    <span className="accordion-title">{cat.label}</span>
                    <span className="accordion-meta">
                      {items.length} program{items.length !== 1 ? "s" : ""}{" "}
                      &mdash; {cat.description}
                    </span>
                  </summary>
                  <div className="accordion-content">
                    {items.map((item) => (
                      <div key={item.id} className="incentive-row">
                        <div className="incentive-row-header">
                          <h3>{item.name}</h3>
                          <span className="incentive-benefit-badge">
                            {item.benefit}
                          </span>
                        </div>
                        <p>{item.summary}</p>
                        {item.highlights && item.highlights.length > 0 && (
                          <ul className="incentive-highlights">
                            {item.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        )}
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="incentive-source"
                        >
                          {item.sourceName} &rarr;
                        </a>
                      </div>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stacking Examples */}
      <section className="section-alt">
        <div className="container">
          <h2 className="mb-3">Stacking: Real-World Examples</h2>
          <p className="mb-4">
            Most programs can be combined. Here is what that looks like for three
            common project types.
          </p>

          <div className="card-grid">
            <div className="card investment-card">
              <h3>Advanced Manufacturer</h3>
              <p style={{ fontWeight: 600, color: "var(--color-primary)" }}>
                $200M facility, 150 jobs
              </p>
              <ul className="feature-list" style={{ fontSize: "0.875rem" }}>
                <li>Manufacturing Investment Credit (60% income tax offset, 10 yrs)</li>
                <li>Sales tax exemption on all equipment and building materials</li>
                <li>Freeport Exemption on finished goods in transit</li>
                <li>Manufacturing Inventory Tax Credit on property taxes paid</li>
                <li>Economic Opportunity Tax Credit (up to 100%)</li>
                <li>Opportunity Zone benefits (Apple Grove site)</li>
              </ul>
            </div>

            <div className="card investment-card">
              <h3>Data Center / AI Campus</h3>
              <p style={{ fontWeight: 600, color: "var(--color-primary)" }}>
                $500M+ facility, 50+ jobs
              </p>
              <ul className="feature-list" style={{ fontSize: "0.875rem" }}>
                <li>High Technology Valuation Act (5% property tax assessment)</li>
                <li>HB 2014 Certified Microgrid (PSC exemption for on-site power)</li>
                <li>SB 623 coal-powered incentives (sales tax + salvage value)</li>
                <li>High-Tech Manufacturing Credit (100% offset, 20 yrs)</li>
                <li>Sales tax exemption on servers, software, and hardware</li>
                <li>New Markets Tax Credits (20-30% cost reduction)</li>
              </ul>
            </div>

            <div className="card investment-card">
              <h3>Tourism / Hospitality</h3>
              <p style={{ fontWeight: 600, color: "var(--color-primary)" }}>
                $5M destination project
              </p>
              <ul className="feature-list" style={{ fontSize: "0.875rem" }}>
                <li>Tourism Development Act (25-35% sales tax credit, 10+ yrs)</li>
                <li>Economic Opportunity Tax Credit for new jobs</li>
                <li>BUILD WV Act (if includes housing component)</li>
                <li>TIF financing for infrastructure</li>
                <li>ARC grants for tourism-related development</li>
                <li>Opportunity Zone capital gains benefits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mason County Tax Facts */}
      <section className="section">
        <div className="container">
          <h2 className="mb-3">Mason County Property Tax</h2>
          <div className="detail-grid">
            <div>
              <p className="mb-3">
                West Virginia assesses all property at 60% of fair market value.
                Mason County&apos;s effective property tax rates are among the
                most competitive in the region.
              </p>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Description</th>
                    <th>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {masonCountyTaxFacts.propertyClasses.map((pc, i) => (
                    <tr key={i}>
                      <td>
                        <strong>{pc.className}</strong>
                      </td>
                      <td>{pc.description}</td>
                      <td>{pc.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <aside className="detail-sidebar">
              <h4
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "1rem",
                }}
              >
                Quick Reference
              </h4>
              <dl>
                <dt>Property Tax Rate</dt>
                <dd>{masonCountyTaxFacts.propertyTaxRate}</dd>
                <dt>Median Property Tax</dt>
                <dd>{masonCountyTaxFacts.medianPropertyTax}</dd>
                <dt>Assessment Ratio</dt>
                <dd>{masonCountyTaxFacts.assessmentRatio}</dd>
                <dt>Corporate Income Tax</dt>
                <dd>{masonCountyTaxFacts.corporateIncomeTaxRate}</dd>
                <dt>Sales Tax</dt>
                <dd>{masonCountyTaxFacts.salesTaxRate}</dd>
                <dt>Opportunity Zone</dt>
                <dd>{masonCountyTaxFacts.opportunityZone}</dd>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>We Can Walk You Through It</h2>
          <p>
            We work directly with businesses to identify which programs apply and
            help you through the application process.
          </p>
          <Link href="/about/contact" className="cta-link">
            Request an Incentive Analysis &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
