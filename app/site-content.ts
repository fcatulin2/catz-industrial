export const siteUrl = "https://www.catzindustrial.com";
export const serviceArea = ["Batangas, Philippines"];

export const company = {
  name: "CATZ Industrial OPC",
  descriptor: "Specialized industrial services",
  phone: "+63 949 613 1890",
  email: "info@catzindustrial.com",
  location: "Manghinao Proper, Bauan, Batangas",
  website: "www.catzindustrial.com",
};

export const companyProfile = {
  overview:
    "CATZ Industrial OPC is a specialized industrial services company. We provide mechanical works and equipment rental for asset owners and EPC contractors in Power, Energy, LNG, Oil & Gas, Marine, and Petrochemical facilities.",
  mission:
    "To protect and extend clients' critical assets through safe, quality-assured, and cost-efficient specialized services. We combine skilled people and sound engineering, and continuously improve through technology and automation.",
  vision:
    "To be a trusted and reliable specialized industrial contractor in the region, known for engineering discipline, safety, and on-time delivery.",
};

export const coreValues = [
  {
    name: "Safety first",
    description: "We plan work around site controls, permits, and safe execution.",
  },
  {
    name: "Accountability",
    description: "One accountable point of contact keeps scope and decisions moving.",
  },
  {
    name: "Fit-for-purpose engineering",
    description: "Practical solutions matched to the equipment and operating context.",
  },
  {
    name: "Efficiency",
    description: "Clear planning, coordinated crews, and disciplined execution reduce wasted time.",
  },
  {
    name: "Quality",
    description: "Documented inspections, testing, and handover support reliable closeout.",
  },
];

export const leadership = {
  name: "Ferdinand Catulin II",
  role: "Founder & General Manager - Mechanical Engineer",
  experience: "16+ years of industry experience",
  description:
    "CATZ is led by its Founder and General Manager, Ferdinand Catulin II, a Mechanical Engineer with 16+ years of experience in the industry. He personally plans, estimates, and oversees every project.",
  background:
    "Before founding CATZ, he managed international and local contracting companies and secured, executed, and completed specialized industrial service contracts. His experience includes HSE, QA/QC, and project closeout requirements.",
  strengths: [
    "Mechanical engineering judgment",
    "Client specifications, ITPs, method statements, and permit-to-work requirements",
    "A network of skilled supervisors, foremen, and craftsmen",
    "AI and automation for estimating, planning, reporting, and QA/QC",
  ],
};

export const industries = [
  { name: "Power", description: "Boilers, turbines, HRSGs, and steam lines" },
  { name: "Energy", description: "Renewable and conventional energy facilities" },
  { name: "LNG", description: "Cryogenic lines, storage tanks, and process units" },
  { name: "Oil & Gas", description: "Terminals, depots, and process facilities" },
  { name: "Marine", description: "Vessels and jetties" },
  { name: "Petrochemical", description: "Process plants and refineries" },
];

export const equipmentRental = {
  description:
    "Tools and construction equipment are sourced through a partner network and matched to each project's requirements. Clients can hire equipment rental, mechanical works, or both under one coordinated scope.",
  details: [
    "Inspect each unit before delivery.",
    "Provide a checklist and third-party certificate where applicable.",
    "Arrange a certified operator or a safe-use briefing.",
    "Secure a DOLE Permit to Operate where required.",
  ],
};

export const whyCatz = [
  {
    title: "Quick queries",
    description: "Direct engineer oversight keeps technical questions and decisions moving.",
  },
  {
    title: "Skilled field teams",
    description: "Experienced fitters, pipefitters, welders, and riggers support site execution.",
  },
  {
    title: "One accountable decision maker",
    description: "A clear point of ownership helps align scope, execution, and closeout.",
  },
  {
    title: "Lean coordination",
    description: "An asset-light model uses vetted suppliers and rental partners as needed.",
  },
  {
    title: "Technology and automation",
    description: "AI and automation support estimating, scheduling, daily progress, and QA/QC.",
  },
  {
    title: "One coordinated contract",
    description: "Maintenance crews and equipment can be managed under one contract and supervisor.",
  },
];

export const services = [
  {
    title: "Mechanical services for plant maintenance",
    description:
      "Preventive, corrective, and shutdown or turnaround maintenance for static and rotating equipment in operating plants.",
    image: "/site-media/mechanical-maintenance.webp",
    alt: "Industrial mechanical equipment opened for maintenance",
    items: [
      "Preventive maintenance",
      "Corrective maintenance",
      "Shutdown and turnaround maintenance",
    ],
  },
  {
    title: "Equipment rental",
    description:
      "We match tools and construction equipment to each project through a vetted partner network, inspect them before delivery, and support the required documentation and safe use.",
    image: "/site-media/field-team.webp",
    alt: "Industrial field team working beside storage equipment",
    items: [
      "Equipment matched to project requirements",
      "Checklist and third-party certificate support",
      "Certified operator, safe-use briefing, and required permits",
    ],
  },
];

export const equipment = [
  "Pumps",
  "Compressors",
  "Valves",
  "Turbines",
  "Heat exchangers",
  "Boilers",
  "Pressure vessels",
  "Storage tanks",
];

export const representativeGallery = [
  {
    title: "Rotating equipment",
    image: "/site-media/projects/gallery-01.png",
    alt: "Industrial rotating equipment opened for maintenance",
  },
  {
    title: "Valve and piping systems",
    image: "/site-media/projects/gallery-02.png",
    alt: "Technician working on industrial piping",
  },
  {
    title: "Industrial fabrication",
    image: "/site-media/projects/gallery-03.png",
    alt: "Industrial fabrication work",
  },
  {
    title: "Field coordination",
    image: "/site-media/projects/gallery-04.png",
    alt: "Industrial workers coordinating work at a plant site",
  },
  {
    title: "Plant inspection",
    image: "/site-media/projects/gallery-05.png",
    alt: "Maintenance team inspecting industrial equipment",
  },
  {
    title: "Site execution",
    image: "/site-media/projects/gallery-06.png",
    alt: "Industrial worker carrying out field work at a facility",
  },
] as const;
