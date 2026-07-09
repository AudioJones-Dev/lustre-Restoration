export const landingPage = {
  phoneDisplay: "(305) 555-0188",
  phoneHref: "tel:+13055550188",
  textHref:
    "sms:+13055550188?&body=Hi%20Lustre%2C%20I%27d%20like%20a%20photo%20quote%20for%20surface%20restoration.",
  nav: [
    { label: "Process", href: "#process" },
    { label: "Services", href: "#services" },
    { label: "Materials", href: "#materials" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    headline: "Refresh countertops and cabinets without a full remodel.",
    subheadline:
      "Lustre Surface Restoration helps South Florida homeowners, landlords, Airbnb hosts, and property managers renew high-visibility surfaces with premium wraps and restoration options - fast, clean, and without demolition.",
    promise: "Premium surface transformations without replacement.",
    supporting:
      "Upload photos of your countertop, cabinets, vanity, or commercial surface and get a fast preliminary quote range.",
  },
  audiences: [
    {
      title: "Homeowners",
      copy: "Refresh dated kitchens, bathrooms, and built-ins without weeks of remodeling.",
      cta: "Quote My Kitchen",
      projectType: "Countertop + cabinet wrapping",
    },
    {
      title: "Rentals & Airbnbs",
      copy: "Turn units faster with photo-ready surfaces and less vacancy downtime.",
      cta: "Quote a Rental Refresh",
      projectType: "Rental / Airbnb refresh",
    },
    {
      title: "Commercial Spaces",
      copy: "Upgrade counters, desks, bars, fixtures, and high-visibility surfaces without replacement.",
      cta: "Quote a Commercial Surface",
      projectType: "Commercial surface",
    },
  ],
  painPoints: [
    "Dated kitchen surfaces",
    "Damaged or worn cabinet fronts",
    "Rental units that need faster turns",
    "Airbnb photos that look outdated",
    "Commercial counters and desks that make a space feel old",
    "Remodel quotes that exceed the budget",
  ],
  process: [
    {
      title: "Send photos",
      copy: "Upload or text photos of the surface.",
    },
    {
      title: "Get a quote range",
      copy: "We review scope, surface condition, and finish direction.",
    },
    {
      title: "Approve samples",
      copy: "Choose from professional-grade finish options.",
    },
    {
      title: "Schedule install",
      copy: "Work is scheduled with clear scope and expectations.",
    },
    {
      title: "Reveal the transformation",
      copy: "Final photos, care guidance, and review request.",
    },
  ],
  services: [
    "Countertop wrapping",
    "Cabinet wrapping",
    "Bathroom vanity wrapping",
    "Rental and Airbnb refresh packages",
    "Commercial architectural surface film",
    "Property-manager unit-turn refreshes",
  ],
  packages: [
    {
      title: "Investor Refresh",
      audience: "For landlords, Airbnb hosts, flippers, and property managers.",
      points: [
        "Fast visual improvement",
        "Cost-controlled finishes",
        "Repeat-unit pricing path",
        "Best for rentals and turnover work",
      ],
      cta: "Quote an Investor Refresh",
    },
    {
      title: "Signature Surface Wrap",
      audience: "For homeowners and condo owners.",
      points: [
        "Premium look without replacement",
        "Material sample review",
        "Written scope",
        "Workmanship documentation",
      ],
      cta: "Quote My Home Project",
    },
    {
      title: "Premium Architectural Finish",
      audience: "For commercial, hospitality, luxury, and high-visibility interiors.",
      points: [
        "Premium finish selection",
        "Commercial scope documentation",
        "Higher-touch consultation",
        "Best for desks, bars, counters, fixtures, and offices",
      ],
      cta: "Quote a Premium Finish",
    },
  ],
  collections: [
    "Carrara Collection",
    "Palm Collection",
    "Soho Collection",
    "Executive Collection",
    "Rental Refresh Collection",
  ],
  serviceAreas: ["Miami-Dade", "Broward", "Palm Beach"],
  priorityAreas: [
    "South Beach",
    "North Beach",
    "NW Miami / West Little River / Gladeview",
    "Allapattah",
    "Deerfield Beach",
    "Lauderhill",
    "Plantation",
    "Boca Raton",
    "West Palm Beach",
    "Delray Beach",
  ],
  faqs: [
    {
      question: "Is this the same as a full remodel?",
      answer:
        "No. Lustre focuses on visible surface restoration and wrapping, not structural remodeling, plumbing, electrical, or fabrication.",
    },
    {
      question: "Can every surface be wrapped?",
      answer:
        "No. Surface condition, material, heat exposure, water exposure, texture, and damage all affect suitability.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Submit photos, ZIP code, project type, and desired timeline. Lustre will reply with a rough range or request an on-site review if needed.",
    },
    {
      question: "Is this permanent?",
      answer:
        "It is a professional surface finish, but not a replacement for stone, quartz, or new cabinetry. Durability depends on material, substrate, prep, use, cleaning, and exposure.",
    },
    {
      question: "Do you offer floor restoration?",
      answer:
        "Floor restoration is planned as a future service division. It should not be sold publicly until training, equipment, insurance, SOPs, and quality-control standards are complete.",
    },
  ],
};

export const projectTypeOptions = [
  "Countertop wrapping",
  "Cabinet wrapping",
  "Countertop + cabinet wrapping",
  "Bathroom vanity",
  "Rental / Airbnb refresh",
  "Commercial surface",
  "Unsure / need recommendation",
  "Future floor or stone restoration inquiry",
] as const;

export const propertyTypeOptions = [
  "Homeowner",
  "Condo owner",
  "Landlord / rental owner",
  "Airbnb / short-term rental operator",
  "Property manager",
  "Fix-and-flip investor",
  "Realtor / stager",
  "Commercial property / business",
  "Other",
] as const;

export const timelineOptions = [
  "ASAP",
  "This week",
  "1-2 weeks",
  "30 days",
  "60+ days",
  "Just researching",
] as const;
