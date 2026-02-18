export const demographics = {
  population: "25,214",
  populationSource: "ACS 2023",
  medianAge: "44.2",
  medianHouseholdIncome: "$53,454",
  perCapitaIncome: "$29,428",
  povertyRate: "17.9%",
  homeownershipRate: "82.1%",
  totalHousingUnits: "12,179",
  countyArea: "445 sq mi",
  populationDensity: "58.1 per sq mi",
  racialBreakdown: [
    { group: "White (Non-Hispanic)", pct: "95.7%" },
    { group: "Two or More Races", pct: "2.3%" },
    { group: "Black or African American", pct: "1.0%" },
    { group: "Hispanic/Latino", pct: "0.6%" },
    { group: "Asian", pct: "0.4%" },
  ],
};

export const workforce = {
  employedPopulation: "9,376",
  unemploymentRate: "4.3%",
  unemploymentRateDate: "December 2025",
  averageCommute: "26.6 min",
  workersCompRate: "$0.54 per $100 payroll",
  workersCompNational: "$1.03 per $100 payroll",
  workersCompRanking: "3rd lowest in the nation",
  workersCompSavings: "47% below national average",
  laborForceRadius: [
    { radius: "Mason County", workers: "15,000+" },
    { radius: "30-mile radius", workers: "75,000+" },
    { radius: "50-mile radius", workers: "150,000+" },
    { radius: "60-mile radius", workers: "200,000+" },
  ],
  topSectors: [
    { sector: "Retail Trade", employed: "1,439" },
    { sector: "Health Care & Social Assistance", employed: "1,427" },
    { sector: "Manufacturing", employed: "1,311" },
  ],
  highestPayingSectors: [
    { sector: "Information", avgWage: "$65,167" },
    { sector: "Utilities", avgWage: "$62,266" },
    { sector: "Manufacturing", avgWage: "$61,006" },
  ],
};

export const economy = {
  gdp: "$1.09 Billion",
  gdpYear: "2024",
  costOfLivingIndex: "77.9–84.2",
  costOfLivingNational: "100",
  costOfLivingSavings: "16–22% below national average",
  medianHomeValue: "$127,400",
  medianMarketPrice: "$165,000",
  propertyTaxRate: "0.61–0.71%",
  medianPropertyTax: "$487/year",
  fairMarketRents: [
    { size: "Studio", rent: "$658" },
    { size: "1-Bedroom", rent: "$769" },
    { size: "2-Bedroom", rent: "$852" },
    { size: "3-Bedroom", rent: "$1,026" },
    { size: "4-Bedroom", rent: "$1,130" },
  ],
};

export const education = {
  publicSchools: "12",
  totalStudents: "3,788",
  graduationRate: "91–94%",
  hsOrHigher: "87.2%",
  bachelorsOrHigher: "16.3%",
  nearbyInstitutions: [
    {
      name: "Marshall University — Mid-Ohio Valley Center",
      location: "Point Pleasant (in-county)",
      programs: "BSN Nursing, Social Work, Regents BA, MSN",
    },
    {
      name: "Mountwest Community & Technical College",
      location: "Huntington (~40 mi)",
      programs: "Associate degrees, certificates, workforce training",
    },
    {
      name: "BridgeValley Community & Technical College",
      location: "South Charleston (~50 mi)",
      programs: "Associate degrees, technical programs",
    },
    {
      name: "Marshall University (main campus)",
      location: "Huntington (~40 mi)",
      programs: "Full university programs",
    },
    {
      name: "WVU at Parkersburg",
      location: "Parkersburg (~60 mi)",
      programs: "Associate and bachelor's degrees",
    },
  ],
};

export const infrastructure = {
  rivers: [
    {
      name: "Ohio River",
      detail: "Forms the entire western boundary. Point Pleasant at mile marker ~265.",
    },
    {
      name: "Kanawha River",
      detail:
        "Divides northern and southern county. Meets the Ohio River at Point Pleasant.",
    },
  ],
  highways: [
    {
      name: "US Route 35",
      detail: "4-lane divided highway, 34–37 miles to I-64 at Scott Depot.",
    },
    {
      name: "WV Route 2",
      detail: "North-south along Ohio River. Connects to Huntington and Parkersburg.",
    },
    {
      name: "WV Route 62",
      detail: "Key industrial corridor running parallel to the Ohio River.",
    },
  ],
  distanceToI64: "~35 miles via US 35 (4-lane highway)",
  rail: "CSX Class I railroad service with multiple spurs and sidings",
  port: "Port of West Virginia — up to 1,000 acres, 8,000+ ft Ohio River frontage, rail-to-barge intermodal",
  airports: [
    {
      name: "Huntington Tri-State Airport (HTS)",
      distance: "~40 miles",
      service: "Commercial passenger service",
    },
    {
      name: "Yeager Airport, Charleston (CRW)",
      distance: "~44 miles",
      service: "Commercial passenger service",
    },
  ],
  broadband:
    "Fiber expansion funded: $7.7M for Mason, Jackson, and Putnam counties. ~362 miles of new fiber infrastructure planned.",
  opportunityZone: {
    tract: "54053955102",
    location: "Apple Grove area",
    designation: "2018 (Opportunity Zone 1.0)",
    expiration: "December 31, 2028",
  },
};
