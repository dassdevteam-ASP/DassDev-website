"use client";

import SwipeThemeProvider from "@/components/ui/SwipeThemeProvider";
import Navigation2 from "@/components/ui/navigation-2";

export default function ThemeProvider({ children }) {
  return (
    <SwipeThemeProvider
      direction="top-left"
      duration={650}
      easing="ease-in-out"
    >
      <Navigation2 />

      {children}
    </SwipeThemeProvider>
  );
}
