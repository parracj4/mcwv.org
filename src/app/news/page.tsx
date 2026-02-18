import type { Metadata } from "next";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "News — Latest Developments",
  description:
    "The latest news from Mason County including major investment announcements, infrastructure developments, and economic growth updates.",
};

export default function NewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>News</h1>
          <p>
            Investment announcements, infrastructure updates, and what is
            happening in Mason County.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {newsArticles.map((article, idx) => (
            <article
              key={article.slug}
              id={article.slug}
              style={{
                paddingBottom: "2.5rem",
                marginBottom: "2.5rem",
                borderBottom:
                  idx < newsArticles.length - 1
                    ? "1px solid var(--color-border)"
                    : "none",
              }}
            >
              <p className="card-meta">
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                &middot; {article.category}
              </p>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                {article.title}
              </h2>
              {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
