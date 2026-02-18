export const siteConfig = {
  name: "Mason County Development Authority",
  shortName: "MCDA",
  tagline: "A Place to Grow",
  description:
    "Mason County, West Virginia. Over $6 billion in active investment from Nucor, Frontieras North America, and the Monarch Compute Campus. Multimodal transportation, abundant power, and a workforce that shows up.",
  url: "https://masoncounty.org",
  address: {
    street: "305 Main Street",
    city: "Point Pleasant",
    state: "WV",
    zip: "25550",
    full: "305 Main Street, Point Pleasant, WV 25550",
  },
  phone: "304-675-1497",
  fax: "304-675-1601",
  email: "info@masoncounty.org",
  directorEmail: "Anna.Rittenhouse@masoncounty.org",
  director: "Anna M. Rittenhouse",
  boardPresident: "Jim Rossi",
  boardVicePresident: "Dennis Brumfield",
  boardTreasurer: "Mark Groves",
  boardSecretary: "Missy Deem",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Why Mason County",
    href: "/why-mason-county",
  },
  {
    label: "Business & Industry",
    href: "/business",
    children: [
      { label: "Major Investments", href: "/business/investments" },
      { label: "Top Employers", href: "/business/employers" },
      { label: "Workforce Development", href: "/business/workforce" },
      { label: "Tax Incentives", href: "/business/tax-incentives" },
    ],
  },
  { label: "Available Sites", href: "/sites" },
  {
    label: "Data & Resources",
    href: "/community-data",
    children: [
      { label: "Community Data", href: "/community-data" },
      { label: "Prospect Packet", href: "/prospect-packet" },
    ],
  },
  { label: "Quality of Life", href: "/quality-of-life" },
  { label: "News", href: "/news" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Board of Directors", href: "/about/board" },
      { label: "Agendas & Minutes", href: "/about/agendas-minutes" },
      { label: "Contact", href: "/about/contact" },
    ],
  },
] as const;
