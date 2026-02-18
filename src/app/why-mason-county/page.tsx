import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Mason County — The #1 Location for Advanced Manufacturing & AI",
  description:
    "Nucor, Frontieras, and American Intelligence & Power all chose Mason County, WV. Here is why: logistics, power, low costs, and a workforce that shows up.",
};

export default function WhyMasonCountyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Why Mason County</h1>
          <p>
            Nucor, Frontieras, and AIP Corp all looked at sites across the
            country. They all ended up here. These are the reasons why.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-4">Strategic Location</h2>
          <ul className="feature-list">
            <li>
              Within a day&apos;s drive of <strong>50% of the U.S. population</strong>.
            </li>
            <li>
              Within a day&apos;s drive of approximately <strong>40% of the aerospace
              industry</strong> market.
            </li>
            <li>
              <strong>Three ways to move product</strong>: Highway (US 35 to I-64, 35 miles),
              Ohio River barge (72 miles of navigable waterway), and CSX Class I
              rail.
            </li>
            <li>
              Point Pleasant sits midway between Pittsburgh and Cincinnati,
              with direct access to the Midwest and Northeast markets, <strong>the two
              largest sheet-consuming regions</strong> in the country.
            </li>
            <li>
              Part of the <strong>Advantage Valley</strong> nine-county economic corridor,
              providing regional collaboration and shared resources.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="mb-4">Energy &amp; Power</h2>
          <ul className="feature-list">
            <li>
              West Virginia ranks <strong>5th in the nation</strong> in total energy
              production.
            </li>
            <li>
              Substations ranging from <strong>138 to 765 kV</strong> provide some of the
              largest transmission power capacity in the entire country.
            </li>
            <li>
              <strong>8 gigawatts</strong> of new dedicated power generation planned through
              the Monarch Compute Campus — enough to power millions of homes.
            </li>
            <li>
              The state government actively supports energy-intensive industrial
              development. HB 2014, signed in 2025, created a fast-track framework
              for data center microgrids.
            </li>
            <li>
              Behind-the-meter power options available. New industrial power
              will <strong>not increase rates</strong> for existing utility customers.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-4">Workforce</h2>
          <ul className="feature-list">
            <li>
              <strong>975,000 qualified workers</strong> in the labor shed within a 50-mile
              radius.
            </li>
            <li>
              Mason County Career Center operates a nationally recognized{" "}
              <strong>Simulated Workplace</strong> model — combining professional skills
              (punctuality, teamwork, safety) with technical training.
            </li>
            <li>
              Supported by <strong>WorkForce West Virginia</strong> and Workforce Development
              Region 4, connecting employers with talent across the region.
            </li>
            <li>
              Some of the <strong>lowest workers&apos; compensation rates</strong> in the
              entire nation.
            </li>
            <li>
              Nucor, Frontieras, and AIP Corp all cited the ready, reliable
              workforce as a key factor in their site selection.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="mb-4">Business Climate</h2>
          <ul className="feature-list">
            <li>
              Cost of living <strong>16-22% below the national average</strong>.
            </li>
            <li>
              No franchise tax. No unitary combined reporting. Corporate income tax
              at 6.5% with a proposed cut to 3.25%.
            </li>
            <li>
              Frontieras chose Mason County over Texas and Wyoming.{" "}
              <strong>&quot;West Virginia gave us every reason to build here,&quot;</strong>{" "}
              said CEO Matthew McKean, citing natural resources, logistics, and a
              government that understands industrial growth.
            </li>
            <li>
              Federal investment backing: $5.3 million EDA wastewater
              infrastructure grant supporting manufacturing growth.
            </li>
            <li>
              Over <strong>$6 billion in active private investment</strong> and growing.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-4">Chemical &amp; Polymer Industry Hub</h2>
          <ul className="feature-list">
            <li>
              Within a single day&apos;s drive of <strong>70%+ of America&apos;s
              polyethylene</strong> demand.
            </li>
            <li>
              <strong>77% of North American polypropylene</strong> demand within a day&apos;s
              drive.
            </li>
            <li>
              Decades of chemical and polymer production experience in the region.
            </li>
            <li>
              Member of both the <strong>Chemical Alliance Zone</strong> and <strong>Polymer
              Alliance Zone</strong>.
            </li>
            <li>
              Existing base of chemical manufacturers including Dow Chemical,
              Chemours, and ICL-IP America.
            </li>
          </ul>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>See It for Yourself</h2>
          <p>
            Tour our available sites and learn how Mason County can work for
            your next project.
          </p>
          <Link href="/sites" className="cta-link">
            View Available Sites &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
