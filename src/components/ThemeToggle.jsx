"use client";

import { useSwipeTheme } from "@/components/ui/SwipeThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, triggerSwipe, isAnimating } = useSwipeTheme();

  return (
    <button
      onClick={() => triggerSwipe("top-left")}
      disabled={isAnimating}
      className="fixed top-4 left-4 z-50 p-3 rounded-full bg-background border border-border shadow-lg hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
}
