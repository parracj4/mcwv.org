import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality of Life — Live, Work, and Play",
  description:
    "Mason County, WV: cost of living 16-22% below national average, 72 miles of river, fishing, boating, Krodel Park, the Mothman Museum, and a community that takes care of its own.",
};

export default function QualityOfLifePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Quality of Life</h1>
          <p>
            Low cost of living, 72 miles of river, and a community where people
            know each other. Mason County is a good place to live, not just
            a good place to do business.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-3">Cost of Living</h2>
          <div className="card-grid">
            <div className="card">
              <div className="hero-stat-value" style={{ color: "var(--color-primary)" }}>16-22%</div>
              <p>Below the national average cost of living</p>
            </div>
            <div className="card">
              <div className="hero-stat-value" style={{ color: "var(--color-primary)" }}>82%</div>
              <p>
                Homeownership rate. People buy here and stay here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="mb-3">Location &amp; Geography</h2>
          <ul className="feature-list">
            <li>
              Point Pleasant sits at the <strong>confluence of the Ohio and
              Kanawha Rivers</strong>.
            </li>
            <li>
              <strong>Midway between Pittsburgh and Cincinnati</strong>.
            </li>
            <li>
              Mason County has more flatwater than almost any county in West
              Virginia — <strong>72 miles</strong> of Ohio and Great Kanawha Rivers.
            </li>
            <li>
              <strong>11 public access boat launches</strong> provide easy
              access to the water year-round.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-3">Outdoor Recreation</h2>
          <ul className="feature-list">
            <li>
              <strong>Ohio River</strong> — Boating, kayaking, jet skiing, and
              river cruises.
            </li>
            <li>
              <strong>Sport Fishing</strong> — Bass, walleye, sauger, catfish,
              and crappie in some of the best freshwater fishing in the eastern
              U.S.
            </li>
            <li>
              <strong>Krodel Park</strong> — Fort Randolph reconstruction, 64-site campground,
              picnic shelters, playground, splash pad, walking trail, kayak
              rentals, and a 22-acre lake stocked with trout, catfish, bass,
              bluegill, and crappie.
            </li>
            <li>
              Bird watching, camping, hunting, hiking, and cycling across the
              region.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="mb-3">Culture &amp; Tourism</h2>
          <ul className="feature-list">
            <li>
              <strong>Downtown Point Pleasant</strong> — Historic Main Street
              with local shops, restaurants, and small-town charm.
            </li>
            <li>
              <strong>Mothman Museum</strong> — The world&apos;s only Mothman
              museum and research center, drawing visitors from around the
              globe.
            </li>
            <li>
              <strong>Annual Mothman Festival</strong> — 10,000 to 12,000 attendees
              every year.
            </li>
            <li>
              <strong>Silver Bridge Memorial</strong> — Honoring the 1967 bridge
              collapse.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-3">Healthcare</h2>
          <ul className="feature-list">
            <li>
              <strong>Rivers Health</strong> — Comprehensive medical services
              for the Mason County community.
            </li>
            <li>
              <strong>Mason County Schools On-Site Healthcare</strong> —
              Comprehensive Healthy Kids Program providing healthcare access
              directly within schools.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
