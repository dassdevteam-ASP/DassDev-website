import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "DASS DEV. builds — Websites, Web Apps & Agentic AI",
    template: "%s | DASS DEV.",
  },
  description:
    "DASS DEV builds, designs, and maintains modern websites, web applications, and AI-powered digital solutions.",
  manifest: "/site.webmanifest",
  authors: [
    {
      name: "DASS DEV.",
    },
  ],
  creator: "DASS DEV.",
  publisher: "DASS DEV.",
  applicationName: "DASS DEV.",

  alternates: {
    canonical: "/",
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

  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "DASS DEV. builds - Websites, Web Apps & Agentic AI",
    description:
      "DASS DEV builds, designs, and maintains modern websites, web applications, and AI-powered digital solutions.",
    url: "/",
    siteName: "DASS DEV.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DASS DEV. builds — Websites, Web Apps & Agentic AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DASS DEV. builds — Websites, Web Apps & Agentic AI",
    description:
      "DASS DEV builds, designs, and maintains modern websites, web applications, and AI-powered digital solutions.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/web-app-manifest-192x192.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
