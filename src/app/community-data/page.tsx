import type { Metadata } from "next";
import {
  demographics,
  workforce,
  economy,
  education,
  infrastructure,
} from "@/data/community";

export const metadata: Metadata = {
  title: "Community Data — Demographics, Workforce & Economic Profile",
  description:
    "Mason County, WV data at a glance: population 25,214, GDP $1.09B, 200,000+ workers within 60 miles, cost of living 16-22% below national average, workers' comp 47% below national average, 82% homeownership rate.",
};

export default function CommunityDataPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Community Data</h1>
          <p>
            Demographics, workforce, economic data, education, and
            infrastructure for Mason County, West Virginia.
          </p>
        </div>
      </section>

      {/* Key Metrics Banner */}
      <section className="section-dark">
        <div className="container">
          <div className="hero-stats" style={{ borderTop: "none", marginTop: 0, paddingTop: 0 }}>
            <div>
              <div className="hero-stat-value">$1.09B</div>
              <div className="hero-stat-label">County GDP (2024)</div>
            </div>
            <div>
              <div className="hero-stat-value">200K+</div>
              <div className="hero-stat-label">Workers Within 60 Miles</div>
            </div>
            <div>
              <div className="hero-stat-value">16–22%</div>
              <div className="hero-stat-label">Below Avg Cost of Living</div>
            </div>
            <div>
              <div className="hero-stat-value">47%</div>
              <div className="hero-stat-label">Below Avg Workers&apos; Comp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demographics */}
      <section className="section">
        <div className="container">
          <h2 className="mb-3">Demographics</h2>
          <div className="detail-grid">
            <div>
              <div style={{ overflowX: "auto" }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total Population</td>
                      <td style={{ fontWeight: 600 }}>{demographics.population}</td>
                    </tr>
                    <tr>
                      <td>Median Age</td>
                      <td style={{ fontWeight: 600 }}>{demographics.medianAge} years</td>
                    </tr>
                    <tr>
                      <td>Median Household Income</td>
                      <td style={{ fontWeight: 600 }}>{demographics.medianHouseholdIncome}</td>
                    </tr>
                    <tr>
                      <td>Per Capita Income</td>
                      <td style={{ fontWeight: 600 }}>{demographics.perCapitaIncome}</td>
                    </tr>
                    <tr>
                      <td>Homeownership Rate</td>
                      <td style={{ fontWeight: 600 }}>{demographics.homeownershipRate}</td>
                    </tr>
                    <tr>
                      <td>Total Housing Units</td>
                      <td style={{ fontWeight: 600 }}>{demographics.totalHousingUnits}</td>
                    </tr>
                    <tr>
                      <td>County Area</td>
                      <td style={{ fontWeight: 600 }}>{demographics.countyArea}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2" style={{ fontSize: "0.8125rem", color: "var(--color-text-light)" }}>
                Source: U.S. Census Bureau, American Community Survey 2023
              </p>
            </div>
            <aside className="detail-sidebar">
              <h4 style={{ marginBottom: "0.75rem" }}>Racial &amp; Ethnic Composition</h4>
              {demographics.racialBreakdown.map((r) => (
                <div key={r.group} style={{ display: "flex", justifyContent: "space-between", padding: "0.375rem 0", borderBottom: "1px solid var(--color-border)" }}>
                  <span style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>{r.group}</span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>{r.pct}</span>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* Workforce */}
      <section className="section-alt">
        <div className="container">
          <h2 className="mb-3">Workforce</h2>

          <h3 className="mb-2">Labor Availability by Radius</h3>
          <div style={{ overflowX: "auto" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Geography</th>
                  <th>Available Workers</th>
                </tr>
              </thead>
              <tbody>
                {workforce.laborForceRadius.map((r) => (
                  <tr key={r.radius}>
                    <td>{r.radius}</td>
                    <td style={{ fontWeight: 600 }}>{r.workers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-grid mt-4">
            <div className="card">
              <h4>Workers&apos; Compensation</h4>
              <div className="hero-stat-value" style={{ color: "var(--color-primary)", fontSize: "1.5rem" }}>
                {workforce.workersCompRate}
              </div>
              <p className="card-meta">vs. {workforce.workersCompNational} national average</p>
              <p>
                West Virginia ranks <strong>{workforce.workersCompRanking}</strong> — {workforce.workersCompSavings}. Rates have declined for 20+ consecutive years.
              </p>
            </div>
            <div className="card">
              <h4>Employment Snapshot</h4>
              <div className="hero-stat-value" style={{ color: "var(--color-primary)", fontSize: "1.5rem" }}>
                {workforce.unemploymentRate}
              </div>
              <p className="card-meta">Unemployment rate ({workforce.unemploymentRateDate})</p>
              <p>
                {workforce.employedPopulation} employed residents. Average commute: {workforce.averageCommute}.
              </p>
            </div>
          </div>

          <div className="detail-grid mt-4">
            <div>
              <h3 className="mb-2">Top Employment Sectors</h3>
              <div style={{ overflowX: "auto" }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Sector</th>
                      <th>Employed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workforce.topSectors.map((s) => (
                      <tr key={s.sector}>
                        <td>{s.sector}</td>
                        <td style={{ fontWeight: 600 }}>{s.employed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="mb-2">Highest-Paying Sectors</h3>
              <div style={{ overflowX: "auto" }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Sector</th>
                      <th>Avg. Wage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workforce.highestPayingSectors.map((s) => (
                      <tr key={s.sector}>
                        <td>{s.sector}</td>
                        <td style={{ fontWeight: 600 }}>{s.avgWage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <p className="mt-2" style={{ fontSize: "0.8125rem", color: "var(--color-text-light)" }}>
            Sources: Bureau of Labor Statistics, DataUSA, NCCI
          </p>
        </div>
      </section>

      {/* Economy & Cost of Living */}
      <section className="section">
        <div className="container">
          <h2 className="mb-3">Economy &amp; Cost of Living</h2>
          <div className="card-grid">
            <div className="card">
              <h4>Gross Domestic Product</h4>
              <div className="hero-stat-value" style={{ color: "var(--color-primary)", fontSize: "1.5rem" }}>
                {economy.gdp}
              </div>
              <p className="card-meta">Mason County GDP ({economy.gdpYear})</p>
              <p>Up from $941M in 2023. The $6B+ in new investment has not yet hit GDP figures.</p>
            </div>
            <div className="card">
              <h4>Cost of Living Index</h4>
              <div className="hero-stat-value" style={{ color: "var(--color-primary)", fontSize: "1.5rem" }}>
                {economy.costOfLivingIndex}
              </div>
              <p className="card-meta">vs. {economy.costOfLivingNational} national average</p>
              <p>{economy.costOfLivingSavings}.</p>
            </div>
            <div className="card">
              <h4>Property Tax</h4>
              <div className="hero-stat-value" style={{ color: "var(--color-primary)", fontSize: "1.5rem" }}>
                {economy.medianPropertyTax}
              </div>
              <p className="card-meta">Median annual property tax</p>
              <p>Effective rate: {economy.propertyTaxRate} of assessed value. Among the lowest in the nation.</p>
            </div>
          </div>

          <h3 className="mt-4 mb-2">Housing Market</h3>
          <div className="detail-grid">
            <div>
              <div style={{ overflowX: "auto" }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Median Home Value (ACS)</td>
                      <td style={{ fontWeight: 600 }}>{economy.medianHomeValue}</td>
                    </tr>
                    <tr>
                      <td>Median Sale Price (Market)</td>
                      <td style={{ fontWeight: 600 }}>{economy.medianMarketPrice}</td>
                    </tr>
                    <tr>
                      <td>Homeownership Rate</td>
                      <td style={{ fontWeight: 600 }}>{demographics.homeownershipRate}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h4 className="mb-2">Fair Market Rents (2025 HUD)</h4>
              <div style={{ overflowX: "auto" }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Unit Size</th>
                      <th>Monthly Rent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {economy.fairMarketRents.map((r) => (
                      <tr key={r.size}>
                        <td>{r.size}</td>
                        <td style={{ fontWeight: 600 }}>{r.rent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-alt">
        <div className="container">
          <h2 className="mb-3">Education</h2>
          <div className="card-grid">
            <div className="card">
              <h4>K–12 Schools</h4>
              <p>
                <strong>{education.publicSchools}</strong> public schools serving <strong>{education.totalStudents}</strong> students with a <strong>{education.graduationRate}%</strong> graduation rate. Mason County Career Center offers welding, electrical, machine tool, HVAC, automotive, and pre-engineering programs.
              </p>
            </div>
            <div className="card">
              <h4>Adult Attainment</h4>
              <p>
                <strong>{education.hsOrHigher}</strong> of adults hold a high school diploma or higher. <strong>{education.bachelorsOrHigher}</strong> hold a bachelor&apos;s degree or higher.
              </p>
            </div>
          </div>

          <h3 className="mt-4 mb-2">Higher Education Nearby</h3>
          <div style={{ overflowX: "auto" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Institution</th>
                  <th>Location</th>
                  <th>Programs</th>
                </tr>
              </thead>
              <tbody>
                {education.nearbyInstitutions.map((inst) => (
                  <tr key={inst.name}>
                    <td style={{ fontWeight: 600, color: "var(--color-text)" }}>{inst.name}</td>
                    <td>{inst.location}</td>
                    <td>{inst.programs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2" style={{ fontSize: "0.8125rem", color: "var(--color-text-light)" }}>
            WV Invests Grant provides tuition-free community college for eligible students.
          </p>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section">
        <div className="container">
          <h2 className="mb-3">Infrastructure &amp; Transportation</h2>
          <div className="card-grid">
            <div className="card">
              <h4>Highways</h4>
              <ul className="feature-list">
                {infrastructure.highways.map((h) => (
                  <li key={h.name}>
                    <strong>{h.name}</strong> — {h.detail}
                  </li>
                ))}
              </ul>
              <p className="mt-2">Distance to I-64: {infrastructure.distanceToI64}</p>
            </div>
            <div className="card">
              <h4>Rail &amp; Port</h4>
              <p><strong>Rail:</strong> {infrastructure.rail}</p>
              <p className="mt-2"><strong>Port:</strong> {infrastructure.port}</p>
            </div>
            <div className="card">
              <h4>Rivers</h4>
              <ul className="feature-list">
                {infrastructure.rivers.map((r) => (
                  <li key={r.name}>
                    <strong>{r.name}</strong> — {r.detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h4>Airports</h4>
              <ul className="feature-list">
                {infrastructure.airports.map((a) => (
                  <li key={a.name}>
                    <strong>{a.name}</strong> — {a.distance}. {a.service}.
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h4>Broadband</h4>
              <p>{infrastructure.broadband}</p>
            </div>
            <div className="card">
              <h4>Federal Opportunity Zone</h4>
              <p>
                Census Tract <strong>{infrastructure.opportunityZone.tract}</strong> ({infrastructure.opportunityZone.location}) designated as a Qualified Opportunity Zone through {infrastructure.opportunityZone.expiration}. Tax deferral on capital gains and tax-free appreciation on 10+ year holds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="section-alt">
        <div className="container">
          <h2 className="mb-3">Data Sources</h2>
          <p>
            All data sourced from official government databases including: U.S. Census Bureau (American Community Survey 2023), Bureau of Labor Statistics, Bureau of Economic Analysis (FRED), HUD Fair Market Rents 2025, NCCI Workers&apos; Compensation Rate Filings, DataUSA, and the West Virginia Development Office. Custom labor availability analyses for specific project sites are available from WorkForce West Virginia upon request.
          </p>
        </div>
      </section>
    </>
  );
}
