import Link from "next/link";
import { investments } from "@/data/investments";
import { newsArticles } from "@/data/news";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const latestNews = newsArticles.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <h1>
                The Best Place in America for Advanced Manufacturing &amp; AI
                Infrastructure
              </h1>
              <p className="hero-tagline">
                Over $6 billion in active investment. Nucor, Frontieras, and the
                Monarch Compute Campus all chose Mason County, West Virginia.
                River, rail, highway, and up to 8 gigawatts of new dedicated power.
                There is a reason the biggest names in industry keep landing here.
              </p>
              <Link href="/about/contact" className="cta-link">
                Start a Conversation
              </Link>
            </div>
            <div className="hero-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/MCDA logo SVG.webp"
                alt="Mason County Development Authority logo"
                width={280}
                height={280}
              />
            </div>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-value">$6B+</div>
              <div className="hero-stat-label">Active Investment</div>
            </div>
            <div>
              <div className="hero-stat-value">5,000+</div>
              <div className="hero-stat-label">Jobs Being Created</div>
            </div>
            <div>
              <div className="hero-stat-value">8 GW</div>
              <div className="hero-stat-label">Power Capacity Planned</div>
            </div>
            <div>
              <div className="hero-stat-value">50%</div>
              <div className="hero-stat-label">
                of U.S. Population Within a Day&apos;s Drive
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are */}
      <section className="section-alt">
        <div className="container">
          <h2 className="mb-3">Where We Are</h2>
          <div className="location-maps">
            <div className="location-map">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/USA wv outline SVG.webp"
                alt="Map of the United States with West Virginia highlighted"
                width={480}
                height={320}
              />
              <span className="location-map-label">West Virginia in the U.S.</span>
            </div>
            <div className="location-map">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/mason co outline SVG.webp"
                alt="Map of West Virginia with Mason County highlighted"
                width={400}
                height={400}
              />
              <span className="location-map-label">Mason County in West Virginia</span>
            </div>
          </div>
          <p style={{ fontSize: "1.125rem", maxWidth: "48rem", marginBottom: "1.5rem" }}>
            Mason County sits on the banks of the Ohio River in western West
            Virginia, at the confluence of the Ohio and Kanawha rivers. Point
            Pleasant, the county seat, is roughly 60 miles north of Charleston,
            WV, and within a day&apos;s drive of Pittsburgh, Columbus, Charlotte,
            and Washington, D.C.
          </p>
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-accent)" }}>60 mi</div>
              <div>north of Charleston, WV</div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-accent)" }}>170 mi</div>
              <div>from Columbus, OH</div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-accent)" }}>260 mi</div>
              <div>from Pittsburgh, PA</div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-accent)" }}>330 mi</div>
              <div>from Washington, D.C.</div>
            </div>
          </div>
          <p style={{ marginTop: "1rem", color: "var(--color-text-secondary)" }}>
            Served by U.S. Route 35, the Ohio River inland waterway system, and
            CSX Class I rail — connecting Mason County to the eastern seaboard,
            the Gulf Coast, and the industrial Midwest.
          </p>
        </div>
      </section>

      {/* Headline Investments */}
      <section className="section">
        <div className="container">
          <h2 className="mb-4">$6 Billion in Active Projects</h2>
          <div className="card-grid">
            {investments.map((inv) => (
              <article key={inv.slug} className="card investment-card">
                <div className="investment-amount">{inv.investment}</div>
                <div className="investment-jobs">{inv.jobs} jobs</div>
                <h3>{inv.company}</h3>
                <p className="card-meta">{inv.headline}</p>
                <p>{inv.summary}</p>
                <Link
                  href={`/business/investments#${inv.slug}`}
                  style={{ marginTop: "1rem", display: "inline-block" }}
                >
                  Full details &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mason County */}
      <section className="section-alt">
        <div className="container">
          <h2 className="mb-3">Why They Keep Choosing Mason County</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Location</h3>
              <p>
                Half the U.S. population is within a day&apos;s drive. 40%
                of the aerospace industry too. Highway, Ohio River barge, and CSX
                Class I rail all in one place.
              </p>
            </div>
            <div className="card">
              <h3>Abundant, Affordable Power</h3>
              <p>
                West Virginia ranks 5th nationally in total energy production.
                Substations ranging from 138 to 765 kV provide some of the
                largest transmission capacity in the country. 8 GW of new
                dedicated power planned.
              </p>
            </div>
            <div className="card">
              <h3>Low Cost, Fast Government</h3>
              <p>
                Among the lowest workers&apos; comp rates in the nation.
                Cost of living 16-22% below the national average.
                A tax structure that works for business and a state government
                that does not slow you down.
              </p>
            </div>
            <div className="card">
              <h3>Chemical &amp; Polymer Hub</h3>
              <p>
                Within a day&apos;s drive of 70%+ of America&apos;s
                polyethylene demand and 77% of North American polypropylene
                demand. Member of both Chemical and Polymer Alliance Zones.
              </p>
            </div>
            <div className="card">
              <h3>Workforce</h3>
              <p>
                200,000+ workers within 60 miles. Mason County Career
                Center runs a Simulated Workplace program that turns out
                graduates ready to work on day one. Regional partnerships
                with WorkForce West Virginia.
              </p>
            </div>
            <div className="card">
              <h3>Shovel-Ready Sites</h3>
              <p>
                Multiple industrial sites from 7 to 1,000+ acres with full
                utility infrastructure, Ohio River frontage, CSX rail service,
                and fiber optic connectivity.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/why-mason-county" className="cta-link" style={{ background: "var(--color-accent)", color: "#fff" }}>
              Explore All Advantages &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section">
        <div className="container">
          <h2 className="mb-4">Latest News</h2>
          <div className="card-grid">
            {latestNews.map((article) => (
              <article key={article.slug} className="card">
                <p className="card-meta">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <Link
                  href={`/news#${article.slug}`}
                  style={{ marginTop: "0.5rem", display: "inline-block" }}
                >
                  Read more &rarr;
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/news">View all news &rarr;</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Let&apos;s Talk</h2>
          <p>
            Contact us to discuss available sites, incentives, and what Mason
            County can do for your project.
          </p>
          <Link href="/about/contact" className="cta-link">
            Contact {siteConfig.director} &rarr;
          </Link>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            name: siteConfig.name,
            description: siteConfig.description,
            url: siteConfig.url,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address.street,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.state,
              postalCode: siteConfig.address.zip,
              addressCountry: "US",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Mason County, West Virginia",
            },
          }),
        }}
      />
    </>
  );
}
