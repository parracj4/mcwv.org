export const metadata = {
  title: "Available Sites | Mason County Development Authority",
  description:
    "Industrial sites with river access, rail service, and utility infrastructure ready for development.",
};

const sites = [
  {
    name: "New Haven Industrial Park",
    status: "Available",
    acreage: "280+ acres",
    location: "3567 Graham Station Road, Letart, WV 25253",
    highlight: "Former 1,100 MW Phillip Sporn Power Plant - brownfield redevelopment",
    features: [
      "Former site of the 1,100 MW Phillip Sporn Power Plant (AEP) - brownfield redevelopment",
      "10 warehouses, 2 offices ranging 2,000-25,000 sq ft",
      "80,000 sq ft total enclosed warehouse and office space",
      "23 certified available mooring cells on the Ohio River with 1 loader",
      "Private industrial site roads with gate access and guard house",
      "200,000+ workers within a 60-mile radius",
    ],
    transportation: [
      "CSX Class I railroad service with existing rail siding",
      "4,000+ ft of rail spur and sidings",
      "Ohio River frontage with 23 certified mooring cells",
      "Gate access to WV State Route 33",
    ],
    utilities: [
      "Municipal water, sewer, and electricity",
      "Fiber optic connectivity",
      "Substations ranging from 138 to 765 kV transmission capacity",
    ],
    targetIndustries:
      "Value-added metals & steel, Energy, Plastics, Data processing, Transportation logistics, Heavy industrial, Manufacturing, Transloading operations",
  },
  {
    name: "Camp Conley Site",
    status: "Available",
    acreage: "~87 acres",
    location: "Ohio River Road, WV Route 62, Point Pleasant, WV",
    highlight: "Historic site with three existing buildings totaling 188,000 sq ft",
    features: [
      "Three existing buildings: 100,000 sq ft, 28,000 sq ft, and 60,000 sq ft",
      "Ohio River access",
      "Historic site - former military camp, construction began 1927",
    ],
    transportation: ["WV Route 62 access", "Ohio River frontage"],
    utilities: ["Municipal water and sewer", "Electric service available"],
  },
  {
    name: "Point Pleasant Industrial Park",
    status: "Active",
    acreage: "~1,000 acres",
    location: "WV Route 62, Point Pleasant, WV 25550",
    highlight: "Approximately 1,000 acres with full multimodal access",
    features: [
      "Approximately 1,000 acres of industrial land",
      "Ohio River access for barge transportation",
      "Electric service available at any level",
      "All utilities in place",
    ],
    transportation: [
      "CSX rail service",
      "Ohio River barge access",
      "WV Route 62",
      "Within 35 minutes of Interstate 77",
      "Within 20 minutes of Route 35",
    ],
  },
  {
    name: "North Point Pleasant Site",
    status: "Under Option",
    acreage: "Contact for details",
    location: "Route 62 North, Point Pleasant, WV",
    highlight: "Adjacent to Mason County Airport, parallel to Ohio River",
    features: [
      "Located approximately 5 miles outside Point Pleasant city limits",
      "Situated on either side of Mason County Airport",
      "Runs parallel with the Ohio River",
    ],
    transportation: [
      "Route 62 North",
      "Adjacent to Mason County Airport",
      "Within 35 minutes of Interstate 77",
      "Within 20 minutes of Route 35",
    ],
  },
  {
    name: "MCDA Industrial Park",
    status: "Under Option",
    acreage: "7-204 acres",
    location: "2601 Madison Avenue, Point Pleasant, WV",
    highlight: "Flexible parcel sizes from 7 to 204 acres",
    features: [
      "Flexible parcel sizes from 7 to 204 acres",
      "Industrial and business park zoning",
    ],
    transportation: ["WV Route 62 access"],
    utilities: ["Full utility infrastructure available"],
  },
  {
    name: "Kimes Steel & Rail",
    status: "Available",
    acreage: "Contact for details",
    location: "Mason County, WV",
    highlight: "Industrial site with rail access",
    features: ["Industrial site with rail access"],
    transportation: ["Rail service available", "Road access"],
  },
  {
    name: "Deerfield Site",
    status: "Available",
    acreage: "Contact for details",
    location: "Mason County, WV",
    highlight: "Industrial development site",
    features: ["Industrial development site"],
  },
  {
    name: "Lannes Williamson Building",
    status: "Available",
    acreage: "N/A",
    location: "Mason County, WV",
    highlight: "Existing building for industrial or commercial use",
    features: ["Existing building available for industrial or commercial use"],
  },
  {
    name: "Fairground Road Building",
    status: "Available",
    acreage: "N/A",
    location: "Wattsworth Avenue, Point Pleasant, WV",
    highlight: "Existing building at WV Route 62 and Fairground Road",
    features: [
      "Located at WV Route 62 and Fairground Road",
      "Existing building available",
    ],
  },
];

const statusColors: Record<string, string> = {
  Available: "bg-green-500/20 text-green-400 border-green-500/30",
  Active: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Under Option": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

const statusDescriptions: Record<string, string> = {
  Available: "Open and ready for development",
  Active: "Operating site with space remaining",
  "Under Option": "Interest expressed, not yet finalized",
};

export default function Sites() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Available Sites
            </h1>
            <p className="text-xl text-gold-light">
              From brownfield redevelopment to greenfield opportunities, Mason County has
              industrial sites with river access, rail service, and utility infrastructure
              ready for your project.
            </p>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {Object.entries(statusDescriptions).map(([status, description]) => (
              <div key={status} className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm border ${statusColors[status]}`}>
                  {status}
                </span>
                <span className="text-cream/50 text-sm">{description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sites List */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-8">
            {sites.map((site) => (
              <div
                key={site.name}
                className="bg-slate/50 border border-gold/20 rounded-xl overflow-hidden"
              >
                <div className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="font-serif text-2xl text-cream">{site.name}</h2>
                        <span
                          className={`px-3 py-1 rounded-full text-sm border text-center whitespace-nowrap ${
                            statusColors[site.status]
                          }`}
                        >
                          {site.status}
                        </span>
                      </div>
                      <p className="text-cream/60 text-sm">{site.location}</p>
                    </div>
                    <div className="bg-navy/50 px-4 py-2 rounded-lg">
                      <div className="text-xs text-cream/60 uppercase tracking-wide">
                        Acreage
                      </div>
                      <div className="font-serif text-xl text-gold">{site.acreage}</div>
                    </div>
                  </div>

                  {/* Highlight */}
                  <p className="text-gold mb-6">{site.highlight}</p>

                  {/* Details Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Features */}
                    <div>
                      <h3 className="text-cream font-medium mb-3">Features</h3>
                      <ul className="space-y-2">
                        {site.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-gold mt-1 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-cream/70 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Transportation */}
                    {site.transportation && (
                      <div>
                        <h3 className="text-cream font-medium mb-3">Transportation</h3>
                        <ul className="space-y-2">
                          {site.transportation.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <svg
                                className="w-4 h-4 text-gold mt-1 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                />
                              </svg>
                              <span className="text-cream/70 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Utilities */}
                    {site.utilities && (
                      <div>
                        <h3 className="text-cream font-medium mb-3">Utilities</h3>
                        <ul className="space-y-2">
                          {site.utilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <svg
                                className="w-4 h-4 text-gold mt-1 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                              </svg>
                              <span className="text-cream/70 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Target Industries */}
                  {site.targetIndustries && (
                    <div className="mt-6 pt-6 border-t border-gold/10">
                      <h3 className="text-cream font-medium mb-2">Target Industries</h3>
                      <p className="text-cream/60 text-sm">{site.targetIndustries}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
            Find Your Site
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Contact us for detailed site information, virtual tours, and to discuss your
            project requirements.
          </p>
          <a
            href="/about/contact"
            className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
