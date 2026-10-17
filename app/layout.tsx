import type { Metadata } from "next";
import "./globals.css";
import { company, companyProfile, leadership, services, serviceArea, siteUrl } from "./site-content";

const pageTitle = "CATZ Industrial | Mechanical Services & Equipment Rental";
const pageDescription =
  "CATZ Industrial provides mechanical services for plant maintenance and equipment rental for industrial facilities in Batangas and across the Philippines.";

const organizationId = `${siteUrl}#organization`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: company.name,
      alternateName: "CATZ Industrial",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/site-media/catz-logo.png`,
      },
      image: `${siteUrl}/site-media/hero-plant.webp`,
      description: companyProfile.overview,
      email: company.email,
      telephone: company.phone,
      areaServed: serviceArea,
      founder: { "@id": `${siteUrl}#founder` },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: company.email,
        telephone: company.phone,
        areaServed: "PH",
        availableLanguage: "en",
      },
      knowsAbout: [
        ...services.map((service) => service.title),
        "Plant maintenance",
        "Static and rotating equipment",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}#founder`,
      name: leadership.name,
      jobTitle: "Founder and General Manager",
      description: leadership.description,
      worksFor: { "@id": organizationId },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "CATZ Industrial",
      description: pageDescription,
      publisher: { "@id": organizationId },
      inLanguage: "en-PH",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}#webpage`,
      url: siteUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: { "@id": `${siteUrl}#website` },
      about: { "@id": organizationId },
      inLanguage: "en-PH",
    },
    ...services.map((service, index) => ({
      "@type": "Service",
      "@id": `${siteUrl}#service-${index + 1}`,
      name: service.title,
      serviceType: service.title,
      description: service.description,
      provider: { "@id": organizationId },
      areaServed: serviceArea,
    })),
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: "%s | CATZ Industrial",
  },
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "/",
    siteName: "CATZ Industrial",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/site-media/hero-plant.webp",
        alt: "Industrial plant equipment supported by CATZ Industrial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/site-media/hero-plant.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-PH">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/dae1bou.css" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
