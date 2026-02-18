export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "aip-caterpillar-2gw-power-alliance",
    title:
      "American Intelligence & Power Forms Strategic Alliance with Caterpillar and Boyd CAT to Deploy 2 Gigawatts of Dedicated Power for Hyperscale AI Infrastructure",
    date: "2026-01-31",
    category: "In the News",
    excerpt:
      "AIP Corp partners with Caterpillar and Boyd CAT for the Monarch Compute Campus, delivering 2 gigawatts of power generation for AI data centers in Mason County.",
    content: [
      "American Intelligence & Power Corporation has formed a strategic alliance with Caterpillar and Boyd CAT to deploy 2 gigawatts of dedicated power generation for the Monarch Compute Campus in Mason County, West Virginia.",
      "The deal covers a 2 GW natural gas generator order for delivery between September 2026 and August 2027.",
      "The full build-out targets 8 GW of power generation using natural gas. That would make the Monarch Compute Campus one of the largest AI infrastructure projects in the country.",
      "Located along WV Route 62, the Ohio River, and CSX railroad tracks north of Point Pleasant, the campus is designed as a fully self-supplied, behind-the-meter power platform that will not increase rates for existing utility customers.",
    ],
  },
  {
    slug: "aip-corporation-launch",
    title:
      "Fidelis New Energy and 8090 Industries Launch American Intelligence & Power Corporation",
    date: "2026-01-29",
    category: "In the News",
    excerpt:
      "Fidelis New Energy and 8090 Industries launch AIP Corp, an AI infrastructure company anchored by the Monarch Compute Campus in Mason County, with backing from LuminArx Capital Management.",
    content: [
      "Fidelis New Energy and 8090 Industries have launched American Intelligence & Power Corporation (AIP), with backing from LuminArx Capital Management.",
      "AIP is built around the Monarch Compute Campus in Mason County, West Virginia. More than 3 years of development went into site selection and planning.",
      "The company will deliver AI computing infrastructure with dedicated, behind-the-meter power generation in Mason County.",
    ],
  },
  {
    slug: "frontieras-closes-183-acre-site",
    title:
      "Frontieras North America Closes on 183-Acre Site in West Virginia for $850M FASForm Facility",
    date: "2026-01-20",
    category: "In the News",
    excerpt:
      "Frontieras North America finalizes acquisition of 183 riverfront acres in Mason County for its $850 million FASForm facility, the first commercial-scale coal reformation plant.",
    content: [
      "Frontieras North America has closed on 183 riverfront acres in Mason County, West Virginia for its $850 million FASForm facility.",
      "The plant will be the first commercial-scale use of Frontieras' patented coal reformation technology, which converts coal into fuels, fertilizers, and industrial carbon products with zero waste and no emissions.",
      "The site offers more than a mile of Ohio River frontage for barge transport, Class I rail access via CSX, and close proximity to Appalachian coal reserves alongside a skilled regional workforce.",
      "The project is projected to generate more than 2,000 construction jobs and over 200 permanent positions. Construction is estimated to begin later in 2026 with the plant operational by mid-2028.",
      "Frontieras holds patents spanning five continents and nine countries, covering approximately 85% of global coal reserves. The company chose Mason County over competing locations in Texas and Wyoming, citing West Virginia's infrastructure, logistical advantages, and business-friendly policies.",
    ],
  },
  {
    slug: "governor-morrisey-frontieras-announcement",
    title:
      "Governor Morrisey Announces $850 Million Frontieras North America Investment",
    date: "2026-01-20",
    category: "In the News",
    excerpt:
      "Governor Patrick Morrisey announces Frontieras North America's $850 million investment in Mason County, aligning with West Virginia's energy strategy and job creation goals.",
    content: [
      "Governor Patrick Morrisey announced that Frontieras North America has acquired 183 acres in Mason County to construct a flagship $850 million advanced coal reformation facility.",
      "\"We are excited to welcome Frontieras North America and its state-of-the-art project to Mason County,\" said Governor Morrisey, emphasizing the investment aligns with the state's \"50 by 50\" energy plan and regulatory streamlining initiatives.",
      "Matthew McKean, CEO and Co-Founder of Frontieras, remarked: \"West Virginia gave us every reason to build here — natural resources, world-class logistics, and a government that understands the importance of industrial growth.\"",
      "Governor Morrisey underscored expanding coal's commercial applications beyond traditional electricity generation and steelmaking: \"This project strengthens our coal communities by creating new demand for Appalachian coal.\"",
    ],
  },
  {
    slug: "mason-county-secret-harder-to-keep",
    title: "Mason County, West Virginia — A Secret That's Getting Harder to Keep",
    date: "2022-10-10",
    category: "Feature",
    excerpt:
      "A profile of Mason County highlighting its Appalachian beauty, Ohio River location, growing employer base, and position within the Advantage Valley economic corridor.",
    content: [
      "Mason County, West Virginia sits at the confluence of the Ohio and Kanawha Rivers, where Appalachian beauty meets industrial strength.",
      "Point Pleasant, the county seat, has been steadily building an economic development story that is getting national attention.",
      "With major employers spanning automotive manufacturing, specialty metals, chemical production, and energy generation, Mason County offers something increasingly rare: a diverse industrial base with room to grow.",
      "As part of the Advantage Valley nine-county economic corridor, Mason County benefits from regional collaboration while maintaining its own distinct identity and competitive advantages.",
    ],
  },
  {
    slug: "eda-5-3-million-wastewater-investment",
    title:
      "U.S. Department of Commerce Invests $5.3 Million in American Rescue Plan Funds for Wastewater Infrastructure",
    date: "2022-09-20",
    category: "In the News",
    excerpt:
      "The U.S. Economic Development Administration awards $5.3 million to Mason County Public Service District for wastewater infrastructure supporting manufacturing growth.",
    content: [
      "The U.S. Economic Development Administration has awarded $5.3 million in American Rescue Plan funds to the Mason County Public Service District for critical wastewater infrastructure.",
      "The investment supports manufacturing growth in the region, with the infrastructure expected to help create 800 jobs and generate $2.7 billion in private investment.",
      "The grant provides the wastewater infrastructure needed to support the manufacturing growth already underway in Mason County.",
    ],
  },
  {
    slug: "frontieras-selects-wv-fasform-plant",
    title:
      "Frontieras North America Selects West Virginia for Site of Its First FASForm Plant",
    date: "2022-04-13",
    category: "In the News",
    excerpt:
      "Frontieras North America selects Mason County for its inaugural FASForm plant with processing capacity of 2.7 million tons of coal annually and 500 projected positions.",
    content: [
      "Frontieras North America has selected Mason County, West Virginia as the site for its inaugural FASForm™ plant.",
      "The facility will have processing capacity of 2.7 million tons of coal annually, leveraging the region's raw material access, skilled workforce, and Ohio River transportation infrastructure.",
      "The project is projected to create approximately 500 positions, adding to Mason County's growing list of major industrial investments.",
    ],
  },
  {
    slug: "nucor-2-7-billion-sheet-mill",
    title:
      "Nucor Selects West Virginia as Location for New, State-of-the-Art Sheet Mill",
    date: "2022-01-12",
    category: "In the News",
    excerpt:
      "Nucor Corporation announces a record $2.7 billion investment in Mason County for a new sheet steel mill, the largest private investment in West Virginia history.",
    content: [
      "Nucor Corporation has announced it will build its new sheet mill in Mason County, West Virginia, a record investment exceeding $2.7 billion. It is the largest private investment in West Virginia history and the biggest single investment Nucor has ever made.",
      "When fully operational, the new mill will employ approximately 800 full-time teammates, with construction creating an additional 1,000 jobs.",
      "The mill will have the capacity to produce up to 3 million tons of sheet steel per year, producing 84-inch sheet products equipped with a 76-inch tandem cold mill and two galvanizing lines.",
      "The West Virginia location on the Ohio River provides Nucor with important transportation and logistics advantages, and a strengthened ability to serve customers in the Midwest and Northeast — the two largest sheet consuming regions in the United States.",
      "\"We are thrilled to make this significant investment in West Virginia and enhance our presence in this important region,\" said Leon Topalian, President and CEO of Nucor Corporation.",
      "The new greenfield mill will have a significantly lower carbon footprint than competitors who have historically supplied the region, targeting automotive, appliance, HVAC, heavy equipment, agricultural, transportation, and construction markets.",
    ],
  },
];
