export interface Employer {
  name: string;
  slug: string;
  category: "local" | "regional";
  sector: string;
}

export const employers: Employer[] = [
  { name: "Toyota Motors", slug: "toyota-motors", category: "local", sector: "Automotive Manufacturing" },
  { name: "Constellium", slug: "constellium", category: "local", sector: "Aluminum Manufacturing" },
  { name: "Rivers Health", slug: "rivers-health", category: "local", sector: "Healthcare" },
  { name: "Mason County Board of Education", slug: "mason-board-of-education", category: "local", sector: "Education" },
  { name: "NGK Spark Plug", slug: "ngk-sparkplug", category: "local", sector: "Automotive Parts Manufacturing" },
  { name: "WV Steel", slug: "wv-steel", category: "local", sector: "Steel Manufacturing" },
  { name: "Special Metals", slug: "special-metals", category: "local", sector: "Specialty Metals Manufacturing" },
  { name: "Rubberlite Inc.", slug: "rubberlite-inc", category: "local", sector: "Rubber & Polymer Manufacturing" },
  { name: "Bob's Market & Greenhouses", slug: "bobs-market-greenhouses", category: "local", sector: "Agriculture & Retail" },
  { name: "Steel Specialties LLC", slug: "steel-specialties-llc", category: "local", sector: "Steel Fabrication" },
  { name: "AEP Power", slug: "aep-power", category: "regional", sector: "Energy & Utilities" },
  { name: "John Amos Plant", slug: "john-amos-plant", category: "regional", sector: "Power Generation" },
  { name: "Gavin Plant", slug: "gavin-plant", category: "regional", sector: "Power Generation" },
  { name: "Kyger Creek Plant", slug: "kyger-creek-plant", category: "regional", sector: "Power Generation" },
  { name: "Alcon Laboratories", slug: "alcon-laboratories", category: "regional", sector: "Pharmaceuticals" },
  { name: "Dow Chemical Co.", slug: "dow-chemical-co", category: "regional", sector: "Chemical Manufacturing" },
  { name: "Chemours Belle Plant", slug: "chemours-belle-plant", category: "regional", sector: "Chemical Manufacturing" },
  { name: "Mountaineer Plant", slug: "mountaineer-plant", category: "regional", sector: "Power Generation" },
  { name: "ICL-IP America Inc.", slug: "icl-ip-america-inc", category: "regional", sector: "Chemical Manufacturing" },
  { name: "APG Polytech", slug: "apple-grove-ploytech", category: "regional", sector: "Polymer Manufacturing" },
  { name: "Felman Production", slug: "felman-industries", category: "regional", sector: "Metals & Alloys" },
  { name: "R&L National Service", slug: "rl-national-service", category: "regional", sector: "Logistics & Transportation" },
  { name: "Appalachian RailCar", slug: "appalachian-railcar", category: "regional", sector: "Rail Equipment" },
  { name: "Amherst Madison Inc.", slug: "amherst-madison-inc", category: "regional", sector: "Marine Transportation" },
];

export const sectors = [...new Set(employers.map((e) => e.sector))].sort();
