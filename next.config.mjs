/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // allowedDevOrigins: [
  //   "outcomes-cos-spoken-merger.trycloudflare.com",
  // ],
};

export default nextConfig;
