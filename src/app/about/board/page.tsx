import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "The Mason County Development Authority is governed by an 18-member board of directors serving staggered terms.",
};

const officers = [
  { name: siteConfig.boardPresident, role: "President", affiliation: "Accountant (Retired)", term: "3-year" },
  { name: siteConfig.boardVicePresident, role: "Vice President", affiliation: "CPA", term: "3-year" },
  { name: siteConfig.boardTreasurer, role: "Treasurer", affiliation: "Farmer's Bank", term: "3-year" },
  { name: siteConfig.boardSecretary, role: "Secretary", affiliation: "ICL-IP", term: "1-year" },
];

const members = [
  { name: "Rick Handley", affiliation: "Mason County Commissioner", term: "1-year" },
  { name: "Leigh Ann Shepard", affiliation: "City National Bank", term: "2-year" },
  { name: "Bryan Stepp", affiliation: "OVB", term: "2-year" },
  { name: "Scott Brewer", affiliation: "Union Representative", term: "2-year" },
  { name: "Jack Cullen", affiliation: "Citizen", term: "1-year" },
  { name: "Brian Sayre", affiliation: "Citizen", term: "3-year" },
  { name: "Jared Nutter", affiliation: "JM Industrial", term: "1-year" },
  { name: "Robert Brinker", affiliation: "Brinker Machine", term: "2-year" },
  { name: "Jay Parrack", affiliation: "Jon Parrack Insurance", term: "2-year" },
  { name: "Denny Bellamy", affiliation: "Mason County Tourism", term: "1-year" },
  { name: "Steve Richardson", affiliation: "Mason County Schools Career Technology Programs", term: "3-year" },
  { name: "Jeremy Bryant", affiliation: "Pt. Pleasant Fire Department", term: "1-year" },
  { name: "Scott Raynes", affiliation: "Marshall Health Network", term: "3-year" },
  { name: "Jordan Brandon", affiliation: "Nucor", term: "2-year" },
];

export default function BoardPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Board of Directors</h1>
          <p>
            The MCDA is governed by an 18-member board serving staggered 1-, 2-,
            and 3-year terms.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-3">Officers</h2>
          <div className="card-grid">
            {officers.map((o) => (
              <div className="card" key={o.name}>
                <h3>{o.name}</h3>
                <p className="card-meta">{o.role}</p>
                <p>{o.affiliation}</p>
                <p style={{ fontSize: "0.8125rem", color: "var(--color-text-light)" }}>
                  {o.term} term
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="mb-3">Board Members</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Affiliation</th>
                  <th>Term</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m) => (
                  <tr key={m.name}>
                    <td style={{ fontWeight: 600 }}>{m.name}</td>
                    <td>{m.affiliation}</td>
                    <td>{m.term}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-3">Board Structure</h2>
          <p>
            The Mason County Development Authority board consists of 18 members
            serving staggered terms of 1, 2, or 3 years. The board provides
            oversight and strategic direction for all economic development
            activities in Mason County.
          </p>
          <p>
            Board meetings are open to the public. Meeting agendas and minutes
            are available on the{" "}
            <a href="/about/agendas-minutes">Agendas &amp; Minutes</a> page.
          </p>
        </div>
      </section>
    </>
  );
}
