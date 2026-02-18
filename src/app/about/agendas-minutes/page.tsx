import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agendas & Minutes",
  description:
    "Board meeting agendas and minutes for the Mason County Development Authority.",
};

export default function AgendasMinutesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Agendas &amp; Minutes</h1>
          <p>
            Board meeting agendas and minutes for the Mason County Development
            Authority. Meetings are open to the public.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>
            Board meeting agendas and approved minutes will be posted here as
            they become available. The Mason County Development Authority board
            meets regularly to discuss economic development strategy, review
            active projects, and conduct organizational business.
          </p>
          <p>
            For questions about upcoming meetings or to request copies of past
            agendas and minutes, please{" "}
            <a href="/about/contact">contact us</a>.
          </p>
        </div>
      </section>
    </>
  );
}
