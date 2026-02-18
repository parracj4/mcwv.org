import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact the Mason County Development Authority. Executive Director: ${siteConfig.director}. Phone: ${siteConfig.phone}. Email: ${siteConfig.email}. ${siteConfig.address.full}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            We are ready to help you explore what Mason County can offer your
            business.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="detail-grid">
            <div>
              <h2 className="mb-3">Get in Touch</h2>
              <p>
                The Mason County Development Authority is the point of contact
                for economic development in Mason County, West Virginia.
              </p>
              <p>
                We help with site selection, workforce recruitment, incentive
                applications, permitting, and introductions to the people you
                need to talk to.
              </p>

              <h3 className="mt-4 mb-2">Executive Director</h3>
              <p style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--color-text)" }}>
                {siteConfig.director}
              </p>
              <p>
                <a href={`mailto:${siteConfig.directorEmail}`}>
                  {siteConfig.directorEmail}
                </a>
              </p>
            </div>

            <aside className="detail-sidebar">
              <dl>
                <dt>Address</dt>
                <dd>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </dd>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                </dd>
                <dt>Fax</dt>
                <dd>{siteConfig.fax}</dd>
                <dt>General Email</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </dd>
                <dt>Director Email</dt>
                <dd>
                  <a href={`mailto:${siteConfig.directorEmail}`}>
                    {siteConfig.directorEmail}
                  </a>
                </dd>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* JSON-LD for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "GovernmentOrganization",
              name: siteConfig.name,
              telephone: siteConfig.phone,
              faxNumber: siteConfig.fax,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.state,
                postalCode: siteConfig.address.zip,
                addressCountry: "US",
              },
              employee: {
                "@type": "Person",
                name: siteConfig.director,
                jobTitle: "Executive Director",
                email: siteConfig.directorEmail,
              },
            },
          }),
        }}
      />
    </>
  );
}
