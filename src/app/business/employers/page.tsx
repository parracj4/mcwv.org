import type { Metadata } from "next";
import { employers } from "@/data/employers";

export const metadata: Metadata = {
  title: "Top Employers — 24+ Major Companies",
  description:
    "Mason County and the Advantage Valley region are home to 24+ major employers spanning automotive, steel, chemical manufacturing, energy, healthcare, and technology.",
};

export default function EmployersPage() {
  const local = employers.filter((e) => e.category === "local");
  const regional = employers.filter((e) => e.category === "regional");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Top Employers</h1>
          <p>
            24 major employers across manufacturing, chemicals, energy,
            healthcare, and marine transportation in Mason County and the
            surrounding Advantage Valley region.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-3">Mason County Employers</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Sector</th>
                </tr>
              </thead>
              <tbody>
                {local.map((emp) => (
                  <tr key={emp.slug}>
                    <td style={{ fontWeight: 600, color: "var(--color-text)" }}>
                      {emp.name}
                    </td>
                    <td>{emp.sector}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="mb-3">Regional Employers (Advantage Valley)</h2>
          <p className="mb-3">
            Major employers in the nine-county Advantage Valley corridor
            surrounding Mason County.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Sector</th>
                </tr>
              </thead>
              <tbody>
                {regional.map((emp) => (
                  <tr key={emp.slug}>
                    <td style={{ fontWeight: 600, color: "var(--color-text)" }}>
                      {emp.name}
                    </td>
                    <td>{emp.sector}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-3">Coming Soon</h2>
          <p>
            Three major projects are under development right now:
          </p>
          <ul className="feature-list mt-3">
            <li>
              <strong>Nucor Corporation</strong> — $2.7 billion sheet steel
              mill, approximately 800 permanent positions.
            </li>
            <li>
              <strong>Frontieras North America</strong> — $850 million FASForm
              coal reformation facility, 200+ permanent positions.
            </li>
            <li>
              <strong>American Intelligence &amp; Power Corp</strong> — Monarch
              Compute Campus, 2–8 GW AI data center power infrastructure.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
