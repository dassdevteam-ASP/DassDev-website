export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://dassdev.vercel.app/sitemap.xml",
  };
}