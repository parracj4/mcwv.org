import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-heading">{siteConfig.name}</p>
            <address style={{ fontStyle: "normal" }}>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.zip}
              <br />
              <br />
              Phone:{" "}
              <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              <br />
              Email:{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </address>
          </div>
          <div>
            <p className="footer-heading">Invest</p>
            <ul className="footer-links">
              <li>
                <Link href="/why-mason-county">Why Mason County</Link>
              </li>
              <li>
                <Link href="/business/investments">Major Investments</Link>
              </li>
              <li>
                <Link href="/sites">Available Sites</Link>
              </li>
              <li>
                <Link href="/business/employers">Top Employers</Link>
              </li>
              <li>
                <Link href="/business/workforce">Workforce Development</Link>
              </li>
              <li>
                <Link href="/business/tax-incentives">Tax Incentives</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">Resources</p>
            <ul className="footer-links">
              <li>
                <Link href="/prospect-packet">Prospect Packet</Link>
              </li>
              <li>
                <Link href="/community-data">Community Data</Link>
              </li>
            </ul>
            <p className="footer-heading" style={{ marginTop: "1.5rem" }}>Discover</p>
            <ul className="footer-links">
              <li>
                <Link href="/quality-of-life">Quality of Life</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/about">About MCDA</Link>
              </li>
              <li>
                <Link href="/about/board">Board of Directors</Link>
              </li>
              <li>
                <Link href="/about/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>
            {siteConfig.address.city}, {siteConfig.address.state} &mdash; A
            Place to Grow
          </p>
        </div>
      </div>
    </footer>
  );
}
