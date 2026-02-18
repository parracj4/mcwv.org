import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business & Industry",
  description:
    "Over $6 billion in active projects in Mason County, WV. Major investments, top employers, workforce programs, and tax incentives for manufacturing, data centers, and industrial development.",
};

export default function BusinessPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Business &amp; Industry</h1>
          <p>
            Over $6 billion in active investment, 24 major employers, and a
            tax structure built for manufacturing, energy, and technology.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            <Link href="/business/investments" className="card" style={{ textDecoration: "none" }}>
              <h3>Major Investments</h3>
              <p>
                Over $6 billion in active projects including Nucor&apos;s $2.7B
                steel mill, Frontieras&apos; $850M FASForm facility, and the
                Monarch Compute Campus with up to 8 GW of AI power
                infrastructure.
              </p>
              <span className="text-accent">View investments &rarr;</span>
            </Link>
            <Link href="/business/employers" className="card" style={{ textDecoration: "none" }}>
              <h3>Top Employers</h3>
              <p>
                24 major employers spanning automotive manufacturing, specialty
                metals, chemical production, energy generation, healthcare, and
                marine transportation.
              </p>
              <span className="text-accent">View employers &rarr;</span>
            </Link>
            <Link href="/business/workforce" className="card" style={{ textDecoration: "none" }}>
              <h3>Workforce Development</h3>
              <p>
                975,000 workers within 50 miles. Nationally recognized training
                programs, regional workforce partnerships, and some of the
                lowest workers&apos; compensation rates in America.
              </p>
              <span className="text-accent">Learn more &rarr;</span>
            </Link>
            <Link href="/business/tax-incentives" className="card" style={{ textDecoration: "none" }}>
              <h3>Tax Incentives</h3>
              <p>
                Up to 100% corporate tax offset, sales tax exemptions on
                manufacturing equipment, 5% property assessment on data center
                assets, Opportunity Zones, and dozens more state and federal
                incentive programs.
              </p>
              <span className="text-accent">Explore incentives &rarr;</span>
            </Link>
          </div>

          <div className="mt-4">
            <h2 className="mb-3">A Place to Grow</h2>
            <p>
              The Mason County Development Authority works to attract new
              business, help existing companies grow, and create jobs. We focus
              on workforce development, infrastructure, incentive programs,
              and connecting companies with the resources they need.
            </p>
            <p>
              Mason County has decades of experience in chemical and polymer
              production and is a member of both the Chemical and Polymer
              Alliance Zones. Now, the largest private investments in West
              Virginia history are adding steel, advanced energy, and AI
              infrastructure to that base.
            </p>
            <p>
              Whether you need a greenfield site or room to expand an existing
              operation, we can help you evaluate what Mason County has to offer.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Let&apos;s Build Something Together</h2>
          <p>
            Contact us to discuss how Mason County can support your next
            project.
          </p>
          <Link href="/about/contact" className="cta-link">
            Get in Touch &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
