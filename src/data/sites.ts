export interface AvailableSite {
  name: string;
  slug: string;
  status: "available" | "under-option" | "active";
  acreage: string;
  location: string;
  features: string[];
  transportation: string[];
  utilities: string[];
  targetIndustries?: string[];
}

export const availableSites: AvailableSite[] = [
  {
    name: "New Haven Industrial Park",
    slug: "new-haven-industrial-park",
    status: "available",
    acreage: "280+ acres (4 parcels: 54, 85, 25, 95 acres)",
    location: "3567 Graham Station Road, Letart, WV 25253",
    features: [
      "Former site of the 1,100 MW Phillip Sporn Power Plant (AEP) — brownfield redevelopment.",
      "10 warehouses, 2 offices ranging 2,000–25,000 sq ft.",
      "80,000 sq ft total enclosed warehouse and office space.",
      "23 certified available mooring cells on the Ohio River with 1 loader.",
      "Private industrial site roads with gate access and guard house.",
      "975,000 qualified individuals in labor shed within 50 miles.",
    ],
    transportation: [
      "CSX Class I railroad service with existing rail siding.",
      "4,000+ ft of rail spur and sidings.",
      "Ohio River frontage with 23 certified mooring cells.",
      "Gate access to WV State Route 33.",
    ],
    utilities: [
      "Municipal water, sewer, and electricity.",
      "Fiber optic connectivity.",
      "Substations ranging from 138 to 765 kV transmission capacity.",
    ],
    targetIndustries: [
      "Value-added metals & steel",
      "Energy",
      "Plastics",
      "Data processing",
      "Transportation logistics",
      "Heavy industrial",
      "Manufacturing",
      "Transloading operations",
    ],
  },
  {
    name: "Camp Conley Site",
    slug: "camp-conley-site",
    status: "available",
    acreage: "~87 acres",
    location: "Ohio River Road, WV Route 62, Point Pleasant, WV",
    features: [
      "Three existing buildings: 100,000 sq ft, 28,000 sq ft, and 60,000 sq ft.",
      "Ohio River access.",
      "Historic site — former military camp, construction began 1927.",
    ],
    transportation: [
      "WV Route 62 access.",
      "Ohio River frontage.",
    ],
    utilities: [
      "Municipal water and sewer.",
      "Electric service available.",
    ],
  },
  {
    name: "Kimes Steel & Rail",
    slug: "kimes-steel-rail",
    status: "available",
    acreage: "Contact for details",
    location: "Mason County, WV",
    features: [
      "Industrial site with rail access.",
    ],
    transportation: [
      "Rail service available.",
      "Road access.",
    ],
    utilities: [
      "Contact for utility details.",
    ],
  },
  {
    name: "Point Pleasant Industrial Park",
    slug: "point-pleasant-industrial-park",
    status: "active",
    acreage: "~1,000 acres",
    location: "WV Route 62, Point Pleasant, WV 25550",
    features: [
      "Approximately 1,000 acres of industrial land.",
      "Ohio River access for barge transportation.",
      "Electric service available at any level.",
      "All utilities in place.",
    ],
    transportation: [
      "CSX rail service.",
      "Ohio River barge access.",
      "WV Route 62.",
      "Within 35 minutes of Interstate 77.",
      "Within 20 minutes of Route 35.",
    ],
    utilities: [
      "Full utility infrastructure.",
      "Electric service at any level.",
    ],
  },
  {
    name: "North Point Pleasant Site",
    slug: "north-point-pleasant-site",
    status: "under-option",
    acreage: "Contact for details",
    location: "Route 62 North, Point Pleasant, WV",
    features: [
      "Located approximately 5 miles outside Point Pleasant city limits.",
      "Situated on either side of Mason County Airport.",
      "Runs parallel with the Ohio River.",
    ],
    transportation: [
      "Route 62 North.",
      "Adjacent to Mason County Airport.",
      "Ohio River parallel.",
      "Within 35 minutes of Interstate 77.",
      "Within 20 minutes of Route 35.",
    ],
    utilities: [
      "Contact for utility details.",
    ],
  },
  {
    name: "MCDA Industrial Park",
    slug: "mason-county-development-authority-industrial-park",
    status: "under-option",
    acreage: "7–204 acres",
    location: "2601 Madison Avenue, Point Pleasant, WV",
    features: [
      "Flexible parcel sizes from 7 to 204 acres.",
      "Industrial and business park zoning.",
    ],
    transportation: [
      "WV Route 62 access.",
    ],
    utilities: [
      "Full utility infrastructure available.",
    ],
  },
  {
    name: "Kevin Thompson Site",
    slug: "kevin-thompson-site",
    status: "under-option",
    acreage: "Contact for details",
    location: "Mason County, WV",
    features: [
      "Currently under option for development.",
    ],
    transportation: [
      "Contact for transportation details.",
    ],
    utilities: [
      "Contact for utility details.",
    ],
  },
  {
    name: "Bartow Jones Site",
    slug: "bartow-jones-site",
    status: "under-option",
    acreage: "Contact for details",
    location: "WV Route 62, Point Pleasant, WV",
    features: [
      "Located on WV Route 62.",
      "Currently under option for development.",
    ],
    transportation: [
      "WV Route 62 access.",
    ],
    utilities: [
      "Contact for utility details.",
    ],
  },
  {
    name: "Deerfield Site",
    slug: "deerfield-site",
    status: "available",
    acreage: "Contact for details",
    location: "Mason County, WV",
    features: [
      "Industrial development site.",
    ],
    transportation: [
      "Contact for transportation details.",
    ],
    utilities: [
      "Contact for utility details.",
    ],
  },
  {
    name: "Lannes Williamson Building",
    slug: "lannes-williamson-building",
    status: "available",
    acreage: "Contact for details",
    location: "Mason County, WV",
    features: [
      "Existing building available for industrial or commercial use.",
    ],
    transportation: [
      "Contact for transportation details.",
    ],
    utilities: [
      "Contact for utility details.",
    ],
  },
  {
    name: "Fairground Road Building",
    slug: "fairground-road-building",
    status: "available",
    acreage: "Contact for details",
    location: "Wattsworth Avenue, Point Pleasant, WV",
    features: [
      "Located at WV Route 62 and Fairground Road.",
      "Existing building available.",
    ],
    transportation: [
      "WV Route 62 and Fairground Road access.",
    ],
    utilities: [
      "Contact for utility details.",
    ],
  },
];
