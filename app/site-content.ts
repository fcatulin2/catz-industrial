export const siteUrl = "https://www.catzindustrial.com";
export const serviceArea = ["Batangas, Philippines", "Philippines"];

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
    "CATZ Industrial OPC is a specialized industrial services company. We provide mechanical services and equipment rental for asset owners and EPC contractors in Power, Energy, LNG, Oil & Gas, Marine, and Petrochemical facilities.",
};

export const leadership = {
  name: "Ferdinand Catulin II",
  role: "Founder & General Manager - Mechanical Engineer",
  experience: "16+ years of industry experience",
  description:
    "CATZ is led by its Founder and General Manager, Ferdinand Catulin II, a Mechanical Engineer with 16+ years of experience in the industry. He personally plans, estimates, and oversees every project.",
};

export const industries = [
  "Power",
  "Energy",
  "LNG",
  "Oil & Gas",
  "Marine",
  "Petrochemical",
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
      "We match tools and construction equipment to each project through a vetted partner network and inspect them before delivery.",
    image: "/site-media/field-team.webp",
    alt: "Industrial field team working beside storage equipment",
    items: [
      "Equipment matched to project requirements",
      "Checklist and third-party certificate support",
      "Certified operator or safe-use briefing",
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
