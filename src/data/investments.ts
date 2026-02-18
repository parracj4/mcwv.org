export interface Investment {
  slug: string;
  company: string;
  headline: string;
  investment: string;
  jobs: string;
  timeline: string;
  summary: string;
  details: string[];
  impact: string;
  website: string;
  websiteLabel: string;
}

export const investments: Investment[] = [
  {
    slug: "nucor-steel",
    company: "Nucor Corporation",
    headline: "Largest Private Investment in West Virginia History",
    investment: "$2.7 Billion",
    jobs: "800 permanent + 1,000 construction",
    timeline: "Completion end of 2026",
    summary:
      "Nucor picked Mason County for the biggest investment their company has ever made. A $2.7 billion sheet steel mill on the Ohio River. It is also the largest private investment in the history of West Virginia.",
    details: [
      "Up to 3 million tons of sheet steel per year.",
      "84-inch sheet products with a 76-inch tandem cold mill and two galvanizing lines.",
      "Automotive galvanizing line with full inspection capabilities, plus a construction-grade line.",
      "Serves automotive, appliance, HVAC, heavy equipment, agricultural, transportation, and construction customers.",
      "Ohio River location gives barge access to the Midwest and Northeast, the two largest sheet-consuming regions in the country.",
      "Lower carbon footprint than the regional competitors it will replace.",
    ],
    impact:
      "When this mill is running at capacity, Mason County will be one of the most important steel production centers in North America.",
    website: "https://nucor.com/",
    websiteLabel: "nucor.com",
  },
  {
    slug: "frontieras-north-america",
    company: "Frontieras North America",
    headline: "First Commercial-Scale Coal Reformation Facility in the World",
    investment: "$850 Million",
    jobs: "2,000+ construction / 200+ permanent",
    timeline: "Construction 2026, operational mid-2028",
    summary:
      "Frontieras looked at sites in Texas and Wyoming before choosing Mason County for their $850 million FASForm facility. It will be the first commercial-scale plant using their patented coal reformation technology.",
    details: [
      "Converts coal into fuels, fertilizers, and industrial carbon products with zero waste and no emissions.",
      "183 acres of riverfront property with over a mile of Ohio River frontage for barge access.",
      "Class I rail via CSX and direct proximity to Appalachian coal reserves.",
      "Frontieras holds patents across five continents and nine countries, covering about 85% of global coal reserves.",
      "The company cited West Virginia's infrastructure, logistics, and business-friendly policies as the deciding factors over Texas and Wyoming.",
      "Processing capacity of 2.7 million tons of coal per year.",
    ],
    impact:
      "This is an entirely new use for coal. Not power generation, not steelmaking. Fuels, fertilizers, and industrial carbon products from a single facility right here in Mason County.",
    website: "https://www.frontieras.com/",
    websiteLabel: "frontieras.com",
  },
  {
    slug: "monarch-compute-campus",
    company: "American Intelligence & Power Corporation",
    headline: "2 to 8 Gigawatt AI Data Center Power Campus",
    investment: "Multi-Billion Dollar",
    jobs: "Significant construction and permanent positions",
    timeline: "First power delivery September 2026",
    summary:
      "Fidelis New Energy and 8090 Industries created American Intelligence & Power Corporation (AIP) with backing from LuminArx Capital Management. They are building the Monarch Compute Campus north of Point Pleasant to deliver 2 to 8 gigawatts of dedicated power for AI data centers.",
    details: [
      "Partnership with Caterpillar and Boyd CAT to deploy 2 gigawatts of natural gas power generation in the first phase.",
      "Full build-out targets 8 gigawatts using natural gas.",
      "Located along WV Route 62, the Ohio River, and CSX railroad tracks north of Point Pleasant.",
      "Fully self-supplied, behind-the-meter power. Will NOT increase rates for existing utility customers.",
      "First power delivery scheduled September 2026 through August 2027.",
      "Three years of development went into site selection and planning before this location was chosen.",
    ],
    impact:
      "When fully built out, this will be one of the largest dedicated AI power campuses in the country, and it is being built in Mason County.",
    website: "https://fidelisinfra.com/",
    websiteLabel: "fidelisinfra.com",
  },
];

export const totalInvestment = "$6+ Billion";
export const totalJobs = "5,000+";
