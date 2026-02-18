export interface Incentive {
  id: string;
  name: string;
  category: string;
  benefit: string;
  summary: string;
  highlights?: string[];
  sourceUrl: string;
  sourceName: string;
}

export const incentiveCategories = [
  {
    id: "property-tax",
    label: "Property Tax Incentives",
    description:
      "Reduce the cost of owning and operating industrial facilities.",
  },
  {
    id: "income-tax",
    label: "Corporate & Income Tax Credits",
    description:
      "Offset up to 100% of corporate net income tax for qualifying businesses.",
  },
  {
    id: "sales-tax",
    label: "Sales Tax Exemptions",
    description:
      "Eliminate sales tax on manufacturing equipment, materials, and construction.",
  },
  {
    id: "data-center",
    label: "Data Center & Technology",
    description:
      "Strong new incentives for data centers, AI, and technology operations.",
  },
  {
    id: "workforce",
    label: "Workforce & Job Creation",
    description:
      "Credits for creating quality jobs and investing in workforce.",
  },
  {
    id: "housing",
    label: "Housing & Community",
    description:
      "Support housing construction to attract workers and strengthen communities.",
  },
  {
    id: "tourism",
    label: "Tourism & Hospitality",
    description: "Credits for investments that grow the tourism economy.",
  },
  {
    id: "financing",
    label: "Financing & Development Tools",
    description:
      "Public financing mechanisms to offset infrastructure and development costs.",
  },
  {
    id: "federal",
    label: "Federal Programs",
    description:
      "Federal incentives that layer on top of state programs in Mason County.",
  },
] as const;

export const incentives: Incentive[] = [
  // === PROPERTY TAX ===
  {
    id: "freeport-exemption",
    name: "Freeport Exemption",
    category: "property-tax",
    benefit: "100% property tax exemption on goods in transit",
    summary:
      "Manufactured products and goods moving through West Virginia in interstate commerce are fully exempt from property tax. Critical for manufacturers, warehousing, and distribution.",
    highlights: [
      "Covers finished goods stored briefly before moving into interstate commerce",
      "Storage should not exceed six months to maintain eligibility",
      "Does not apply to raw materials or goods in process",
    ],
    sourceUrl: "https://code.wvlegislature.gov/11-15-9/",
    sourceName: "WV Code §11-15-9",
  },
  {
    id: "five-for-ten",
    name: "Five for Ten Program",
    category: "property-tax",
    benefit: "Property valued at 5% of cost for 10 years (95% reduction)",
    summary:
      "Large manufacturing facilities ($50M+ new investment, $100M+ existing) get property assessed at just 5% of cost for a decade.",
    highlights: [
      "Applies to real property and personal property (excluding raw land)",
      "Also available for natural gas liquid fractionating plants",
    ],
    sourceUrl: "https://code.wvlegislature.gov/11-6N/",
    sourceName: "WV Code Article 11-6N",
  },
  {
    id: "manufacturing-inventory-credit",
    name: "Manufacturing Inventory Tax Credit",
    category: "property-tax",
    benefit: "Dollar-for-dollar credit against income tax for property tax paid on inventory",
    summary:
      "Manufacturers claim a credit against corporate net income tax equal to property taxes paid on manufacturing inventory — effectively neutralizing the cost.",
    sourceUrl: "https://code.wvlegislature.gov/11-13Y/",
    sourceName: "WV Code Article 11-13Y",
  },

  // === INCOME TAX ===
  {
    id: "manufacturing-investment-tax-credit",
    name: "Manufacturing Investment Tax Credit",
    category: "income-tax",
    benefit: "Up to 60% offset of corporate income tax for 10 years",
    summary:
      "A 5% credit on qualified investment, pro-rated over 10 years, that offsets up to 60% of corporate net income and severance tax. No job creation required — purely investment-based.",
    highlights: [
      "Qualifying NAICS codes: 31, 32, or 33 (manufacturing)",
      "Covers real property, improvements, and tangible personal property",
    ],
    sourceUrl: "https://code.wvlegislature.gov/11-13S/",
    sourceName: "WV Code Article 11-13S",
  },
  {
    id: "economic-opportunity-tax-credit",
    name: "Economic Opportunity Tax Credit",
    category: "income-tax",
    benefit: "Up to 80\u2013100% offset of corporate income tax",
    summary:
      "Job creation credit: 20+ new jobs offsets 80% of income tax. Pay above the statewide average wage and it jumps to 100%. Small business option: $3,000/job for 5 years.",
    highlights: [
      "100% offset if median wage exceeds statewide average",
      "Small business: 10+ jobs at $35,700+/year with health insurance",
    ],
    sourceUrl: "https://code.wvlegislature.gov/11-13Q/",
    sourceName: "WV Code Article 11-13Q",
  },
  {
    id: "corporate-income-tax-rate",
    name: "Competitive Corporate Tax Rate",
    category: "income-tax",
    benefit: "6.5% rate (proposed cut to 3.25%)",
    summary:
      "West Virginia's 6.5% corporate income tax is among the region's lowest. HB 3293 proposes cutting it to 3.25%. No franchise tax, no unitary combined reporting.",
    sourceUrl:
      "https://tax.wv.gov/business/corporateincometax/pages/corporateincometax.aspx",
    sourceName: "WV Tax Division — Corporate Income Tax",
  },

  // === SALES TAX ===
  {
    id: "manufacturing-sales-tax-exemption",
    name: "Manufacturing Sales Tax Exemption",
    category: "sales-tax",
    benefit: "0% sales tax on equipment, materials, and construction",
    summary:
      "All tangible property directly used in manufacturing is exempt from the 6% state and 1% municipal sales tax — including building materials and process equipment for facility construction.",
    sourceUrl: "https://code.wvlegislature.gov/11-15-9/",
    sourceName: "WV Code §11-15-9",
  },
  {
    id: "warehouse-distribution-exemption",
    name: "Warehouse & Distribution Exemption",
    category: "sales-tax",
    benefit: "Full sales tax exemption for $50M+ distribution facilities",
    summary:
      "Warehouse and distribution operations with $50M+ investment and 300+ full-time jobs qualify for sales tax exemptions on all tangible personal property at the facility.",
    sourceUrl: "https://code.wvlegislature.gov/11-15-9h/",
    sourceName: "WV Code §11-15-9h",
  },

  // === DATA CENTER & TECHNOLOGY ===
  {
    id: "high-technology-valuation-act",
    name: "High Technology Valuation Act",
    category: "data-center",
    benefit: "5% property tax assessment + full sales tax elimination on tech purchases",
    summary:
      "Servers and equipment in technology businesses are assessed at 5% of original cost for property tax. Sales tax is eliminated on computers, servers, software, hardware, and building materials.",
    sourceUrl: "https://code.wvlegislature.gov/11-6J/",
    sourceName: "WV Code Article 11-6J",
  },
  {
    id: "high-technology-manufacturing-credit",
    name: "High-Tech Manufacturing Credit",
    category: "data-center",
    benefit: "100% tax offset for 20 years (transferable)",
    summary:
      "Manufacturers of computers, electronic components, or semiconductors that create 20+ jobs can offset 100% of B&O and corporate income tax for 20 consecutive years. The credit is transferable.",
    sourceUrl: "https://code.wvlegislature.gov/11-13Q/",
    sourceName: "WV Code Article 11-13Q",
  },
  {
    id: "hb-2014-data-center-microgrid",
    name: "Certified Microgrid & Data Center Program (HB 2014)",
    category: "data-center",
    benefit: "PSC exemption for on-site power + streamlined siting",
    summary:
      "Signed into law April 2025. Data centers can build dedicated on-site power generation without Public Service Commission jurisdiction. This is the law that makes the Monarch Compute Campus possible.",
    highlights: [
      "70%+ of generated electricity must serve data centers in the district",
      "Tax distribution: 50% income tax reduction fund, 30% host county, 10% all counties, 5% state grants",
      "Impact assessment and mitigation plans required",
    ],
    sourceUrl:
      "https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=hb2014+sub1+enr.htm&yr=2025&sesstype=RS&i=2014",
    sourceName: "HB 2014 Enrolled Bill Text",
  },
  {
    id: "sb-623-coal-powered-data-center",
    name: "Coal-Powered Data Center Incentive (SB 623)",
    category: "data-center",
    benefit:
      "Sales tax exemption + property tax at salvage value (~5%)",
    summary:
      "Tax incentives for data centers committing to coal-generated electricity: sales tax exemption on equipment, property tax at salvage value, and a 10-year investment credit. Requires $50M+ investment and 50+ jobs.",
    sourceUrl:
      "https://www.wvlegislature.gov/Bill_Status/Bills_history.cfm?input=623&year=2024&sessiontype=RS&btype=bill",
    sourceName: "SB 623 Bill History",
  },

  // === WORKFORCE ===
  {
    id: "high-wage-growth-tax-credit",
    name: "High Wage Growth Tax Credit",
    category: "workforce",
    benefit: "Up to 10% payroll credit for high-paying jobs, 5 years",
    summary:
      "Create 10+ jobs paying at least 2.25x the state median salary with health benefits. Credit up to 10% of payroll for 5 consecutive years. $5M statewide annual cap.",
    sourceUrl: "https://westvirginia.gov/high-wage-growth-tax-credit/",
    sourceName: "WV Dept. of Economic Development",
  },
  {
    id: "return-to-wv-tax-credit",
    name: "Return to West Virginia Tax Credit",
    category: "workforce",
    benefit: "$25,000 personal income tax credit for returning residents",
    summary:
      "Former West Virginians who return after 10+ years away receive a $25,000 nonrefundable personal income tax credit. Helps attract experienced professionals back to the state. Expires 2030.",
    sourceUrl: "https://westvirginia.gov/wv-incentives/",
    sourceName: "WV Dept. of Economic Development",
  },
  {
    id: "small-business-growth-act",
    name: "Small Business Growth Act (SB 1)",
    category: "workforce",
    benefit: "Tax credits for investors in certified small business growth funds",
    summary:
      "New 2026 program channeling private capital into WV small businesses through certified growth funds. Investors receive non-refundable tax credits starting in 2029. Passed House 87-3.",
    sourceUrl:
      "http://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=sb1+intr.htm&yr=2026&sesstype=RS&i=1",
    sourceName: "SB 1 Bill Text",
  },

  // === HOUSING ===
  {
    id: "build-wv-act",
    name: "BUILD WV Act",
    category: "housing",
    benefit:
      "Sales tax exemption + up to $100K/year income tax credit for 10 years",
    summary:
      "Developers building 6+ residential units or investing $3M+ get sales tax exemptions on construction, a refundable income tax credit for 10 years, and B&O tax relief. 610 units approved statewide in FY 2024-25.",
    sourceUrl: "https://westvirginia.gov/build-wv-act/",
    sourceName: "WV Dept. of Economic Development",
  },

  // === TOURISM ===
  {
    id: "tourism-development-act",
    name: "Tourism Development Act",
    category: "tourism",
    benefit: "25\u201335% sales tax credit over 10+ years",
    summary:
      "Tourism destination projects investing $1M+ that attract 25%+ out-of-state visitors receive a sales tax credit of 25% of project costs (35% near abandoned mine land or recreation areas) over 10 years, with a 15-year extension available.",
    sourceUrl: "https://westvirginia.gov/tourism-development-act/",
    sourceName: "WV Dept. of Economic Development",
  },

  // === FINANCING ===
  {
    id: "tif",
    name: "Tax Increment Financing (TIF)",
    category: "financing",
    benefit:
      "Finance projects using future tax revenue growth — no rate increases",
    summary:
      "Counties and municipalities capture future property and sales tax revenue increases from new development to finance the project itself. No increase to existing tax rates.",
    sourceUrl: "https://revenue.wv.gov/Documents/tifhandbook.pdf",
    sourceName: "WV Dept. of Revenue — TIF Handbook",
  },

  // === FEDERAL ===
  {
    id: "opportunity-zones",
    name: "Federal Opportunity Zones",
    category: "federal",
    benefit: "Tax-free appreciation on 10+ year investments",
    summary:
      "Mason County's Apple Grove tract is a designated Opportunity Zone. Capital gains invested through Qualified Opportunity Funds receive tax deferral, and appreciation is tax-free after 10 years.",
    sourceUrl:
      "https://www.irs.gov/credits-deductions/businesses/opportunity-zones",
    sourceName: "IRS — Opportunity Zones",
  },
  {
    id: "new-markets-tax-credits",
    name: "New Markets Tax Credits",
    category: "federal",
    benefit: "39% federal tax credit over 7 years (20\u201330% project cost reduction)",
    summary:
      "Equity investments through certified Community Development Entities in low-income communities earn a 39% federal tax credit over 7 years. Can reduce total project cost by 20-30%.",
    sourceUrl:
      "https://www.cdfifund.gov/programs-training/programs/new-markets-tax-credit",
    sourceName: "CDFI Fund — NMTC Program",
  },
  {
    id: "arc-grants",
    name: "Appalachian Regional Commission Grants",
    category: "federal",
    benefit: "Federal grants for infrastructure, site development, and workforce",
    summary:
      "All 55 WV counties qualify for ARC grants supporting water/wastewater, broadband, site development, and workforce training. Mason County has received prior ARC investment including a $5.3M EDA wastewater grant.",
    sourceUrl: "https://www.arc.gov/grants-and-opportunities/",
    sourceName: "ARC — Grants & Opportunities",
  },
  {
    id: "eda-grants",
    name: "EDA Public Works Grants",
    category: "federal",
    benefit: "Federal grants for infrastructure and economic development",
    summary:
      "The U.S. Economic Development Administration funds public works and economic adjustment in distressed communities. Mason County secured a $5.3M wastewater infrastructure grant.",
    sourceUrl: "https://www.eda.gov/funding/programs/public-works",
    sourceName: "EDA — Public Works Program",
  },
  {
    id: "sba-loans",
    name: "SBA Loan Programs",
    category: "federal",
    benefit: "7(a), 504, and Microloan financing",
    summary:
      "SBA provides 7(a) loans for working capital, 504 loans for fixed assets (land, buildings, equipment), and Microloans for startups. WV Small Business Development Center offers free application assistance.",
    sourceUrl: "https://www.sba.gov/funding-programs/loans",
    sourceName: "SBA — Loan Programs",
  },
];

export const masonCountyTaxFacts = {
  propertyTaxRate:
    "~0.61\u20130.71% of assessed value (varies by district and class)",
  medianPropertyTax: "$487/year",
  assessmentRatio: "60% of fair market value",
  propertyClasses: [
    {
      className: "Class I",
      description: "Intangible personal property (mostly exempt)",
      rate: "Lowest rate",
    },
    {
      className: "Class II",
      description: "Owner-occupied residential property",
      rate: "Base rate",
    },
    {
      className: "Class III",
      description: "Commercial/industrial outside municipalities",
      rate: "2x Class II",
    },
    {
      className: "Class IV",
      description: "Commercial/industrial inside municipalities",
      rate: "2x Class II + municipal levy",
    },
  ],
  opportunityZone: "Apple Grove (FIPS 54053)",
  corporateIncomeTaxRate: "6.5% (proposed reduction to 3.25%)",
  salesTaxRate: "6% state + 1% municipal",
} as const;
