const BASE_URL = "https://arun-kumar-durgollu.vercel.app";

export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    }
  ];
}