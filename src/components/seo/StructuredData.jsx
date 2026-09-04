const BASE_URL = "https://dassdev.vercel.app";

const ORGANIZATION_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: "DASS DEV.",
        url: BASE_URL,

        description:
          "DASS DEV. designs and builds websites, web applications, and agentic AI solutions for startups and businesses.",

        logo: {
          "@type": "ImageObject",
          "@id": `${BASE_URL}/#logo`,
          url: `${BASE_URL}/web-app-manifest-512x512.png`,
          width: 512,
          height: 512,
          caption: "DASS DEV. logo",
        },

        brand: {
          "@type": "Brand",
          "@id": `${BASE_URL}/#brand`,
          name: "DASS DEV.",
          logo: {
            "@type": "ImageObject",
            url: `${BASE_URL}/web-app-manifest-512x512.png`,
          },
        },

        sameAs: [
          "https://github.com/DassDev",
          "https://www.instagram.com/dassdev.in",
          "https://www.youtube.com/@DassDevtech",
        ],
      },

      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: BASE_URL,
        name: "DASS DEV.",
        description:
          "DASS DEV. designs and builds websites, web applications, and agentic AI solutions for startups and businesses.",
        inLanguage: "en-IN",

        publisher: {
          "@id": ORGANIZATION_ID,
        },

        about: {
          "@id": ORGANIZATION_ID,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
