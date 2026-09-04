import LaunchPage from "@/components/launch/LaunchPage";


export const metadata = {
  title: "DASS DEV. — Launching Soon",
  description:
    "Something new is coming from DASS DEV. A digital experience built to create, innovate and grow.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LaunchRoute() {
  return <LaunchPage />;
}
