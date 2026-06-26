const SITE_URL = "https://talentoya.com.co"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "TalentoYa",
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logos/isotipo.png`,
      description:
        "SaaS de gestión de talento humano para independientes y microempresas en Colombia.",
      areaServed: "CO",
      contactPoint: {
        "@type": "ContactPoint",
        email: "Info.talentoya@gmail.com",
        contactType: "customer support",
        availableLanguage: ["es"],
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "TalentoYa",
      inLanguage: "es-CO",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "TalentoYa",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: SITE_URL,
      inLanguage: "es-CO",
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "COP",
        lowPrice: "150000",
        highPrice: "400000",
        offerCount: "3",
      },
    },
  ],
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
