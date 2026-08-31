"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext(null);

const THEME_STORAGE_KEY = "dass-dev-theme";

export function useSwipeTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useSwipeTheme must be used within a SwipeThemeProvider");
  }

  return context;
}

/* -------------------------------------------------------------------------- */
/* Theme helpers                                                              */
/* -------------------------------------------------------------------------- */

const getStoredTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
  } catch {
    // localStorage may be unavailable
  }

  return "light";
};

const applyThemeToDocument = (theme) => {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;

  root.setAttribute("data-theme", theme);

  root.classList.toggle("dark", theme === "dark");

  root.style.colorScheme = theme;
};

const persistTheme = (theme) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore localStorage errors
  }
};

/* -------------------------------------------------------------------------- */
/* Direction                                                                  */
/* -------------------------------------------------------------------------- */

const normalizeDirection = (direction) => {
  switch (direction) {
    case "left":
      return "left-to-right";

    case "right":
      return "right-to-left";

    case "top":
      return "top-to-bottom";

    case "bottom":
      return "bottom-to-top";

    default:
      return direction;
  }
};

/* -------------------------------------------------------------------------- */
/* View transition keyframes                                                  */
/* -------------------------------------------------------------------------- */

const getClipPathKeyframes = (direction, angle) => {
  const rad = ((angle - 90) * Math.PI) / 180;

  const skew = Math.tan(rad) * 100;

  const pad = Math.abs(skew);

  switch (direction) {
    case "left-to-right":
      return [
        {
          clipPath: `polygon(
            ${-10 - pad}% 0,
            ${-10 - pad}% 0,
            ${-10 - pad - skew}% 100%,
            ${-10 - pad - skew}% 100%
          )`,
        },
        {
          clipPath: `polygon(
            ${-10 - pad}% 0,
            ${110 + pad}% 0,
            ${110 + pad - skew}% 100%,
            ${-10 - pad - skew}% 100%
          )`,
        },
      ];

    case "right-to-left":
      return [
        {
          clipPath: `polygon(
            ${110 + pad}% 0,
            ${110 + pad}% 0,
            ${110 + pad - skew}% 100%,
            ${110 + pad - skew}% 100%
          )`,
        },
        {
          clipPath: `polygon(
            ${-10 - pad}% 0,
            ${110 + pad}% 0,
            ${110 + pad - skew}% 100%,
            ${-10 - pad - skew}% 100%
          )`,
        },
      ];

    case "top-to-bottom":
      return [
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
      ];

    case "bottom-to-top":
      return [
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
      ];

    case "top-left":
      return [
        {
          clipPath: "polygon(0 0, 0 0, 0 0)",
        },
        {
          clipPath: "polygon(0 0, 200% 0, 0 200%)",
        },
      ];

    case "top-right":
      return [
        {
          clipPath: "polygon(100% 0, 100% 0, 100% 0)",
        },
        {
          clipPath: "polygon(100% 0, -100% 0, 100% 200%)",
        },
      ];

    case "bottom-left":
      return [
        {
          clipPath: "polygon(0 100%, 0 100%, 0 100%)",
        },
        {
          clipPath: "polygon(0 100%, 200% 100%, 0 -100%)",
        },
      ];

    case "bottom-right":
      return [
        {
          clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)",
        },
        {
          clipPath: "polygon(100% 100%, -100% 100%, 100% -100%)",
        },
      ];

    default:
      return [];
  }
};

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export default function SwipeThemeProvider({
  children,
  duration = 650,
  easing = "ease-in-out",
  onSwipe,
  theme: themeProp,
  onThemeChange,
  getKeyframes,
  direction: defaultDirection = "left",
  angle = 0,
}) {
  /*
   * IMPORTANT:
   *
   * Start with light for SSR.
   *
   * We then restore localStorage in the first client effect.
   *
   * This avoids using window/localStorage during server rendering.
   */
  const [localTheme, setLocalTheme] = useState("light");

  const [isAnimating, setIsAnimating] = useState(false);

  const [mounted, setMounted] = useState(false);

  const isControlled = themeProp !== undefined;

  const activeTheme = isControlled ? themeProp : localTheme;

  /* ---------------------------------------------------------------------- */
  /* Restore persisted theme                                                */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    const storedTheme = getStoredTheme();

    if (!isControlled) {
      setLocalTheme(storedTheme);
    }

    applyThemeToDocument(isControlled ? themeProp : storedTheme);

    setMounted(true);
  }, [isControlled, themeProp]);

  /* ---------------------------------------------------------------------- */
  /* Keep DOM synchronized with active theme                                */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    if (!mounted) {
      return;
    }

    applyThemeToDocument(activeTheme);

    if (!isControlled) {
      persistTheme(activeTheme);
    }
  }, [activeTheme, isControlled, mounted]);

  /* ---------------------------------------------------------------------- */
  /* View transition styles                                                 */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    const styleId = "dass-dev-view-transition-styles";

    if (document.getElementById(styleId)) {
      return;
    }

    const style = document.createElement("style");

    style.id = styleId;

    style.textContent = `
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation: none !important;
        mix-blend-mode: normal !important;
        display: block !important;
        height: 100% !important;
        width: 100% !important;
        object-fit: cover !important;
      }

      ::view-transition-image-pair(root) {
        isolation: auto !important;
      }

      ::view-transition-old(root) {
        z-index: 1 !important;
      }

      ::view-transition-new(root) {
        z-index: 9999 !important;
      }
    `;

    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  /* ---------------------------------------------------------------------- */
  /* Theme transition                                                       */
  /* ---------------------------------------------------------------------- */

  const triggerSwipe = useCallback(
    (selectedDirection) => {
      if (isAnimating) {
        return;
      }

      const activeDirection = normalizeDirection(
        selectedDirection || defaultDirection,
      );

      const defaultAngle =
        activeDirection === "top-to-bottom" ||
        activeDirection === "bottom-to-top"
          ? 0
          : 90;

      const activeAngle = defaultAngle + angle;

      const targetTheme = activeTheme === "light" ? "dark" : "light";

      const applyThemeChange = () => {
        if (!isControlled) {
          setLocalTheme(targetTheme);
        }

        applyThemeToDocument(targetTheme);

        persistTheme(targetTheme);

        onThemeChange?.(targetTheme);
      };

      const doc = document;

      /* ------------------------------------------------------------------ */
      /* Browser fallback                                                    */
      /* ------------------------------------------------------------------ */

      if (
        !doc.startViewTransition ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        applyThemeChange();

        onSwipe?.();

        return;
      }

      /* ------------------------------------------------------------------ */
      /* View transition                                                     */
      /* ------------------------------------------------------------------ */

      setIsAnimating(true);

      let transition;

      try {
        transition = doc.startViewTransition(() => {
          flushSync(() => {
            applyThemeChange();
            onSwipe?.();
          });
        });
      } catch {
        applyThemeChange();
        onSwipe?.();
        setIsAnimating(false);

        return;
      }

      const rawKeyframes = getKeyframes
        ? getKeyframes(activeDirection)
        : getClipPathKeyframes(activeDirection, activeAngle);

      const keyframes = Array.isArray(rawKeyframes)
        ? rawKeyframes.map((frame) => ({
            ...frame,
            webkitClipPath: frame.clipPath,
          }))
        : rawKeyframes;

      transition.ready
        .then(() => {
          if (!keyframes || !keyframes.length) {
            setIsAnimating(false);
            return;
          }

          const animation = document.documentElement.animate(keyframes, {
            duration,
            easing,
            pseudoElement: "::view-transition-new(root)",
            fill: "both",
          });

          animation.onfinish = () => {
            setIsAnimating(false);
          };

          animation.oncancel = () => {
            setIsAnimating(false);
          };
        })
        .catch(() => {
          setIsAnimating(false);
        });
    },
    [
      activeTheme,
      angle,
      defaultDirection,
      duration,
      easing,
      getKeyframes,
      isAnimating,
      isControlled,
      onSwipe,
      onThemeChange,
    ],
  );

  /* ---------------------------------------------------------------------- */
  /* Avoid rendering until theme restoration                                */
  /* ---------------------------------------------------------------------- */

  if (!mounted) {
    return null;
  }

  const contextValue = {
    theme: activeTheme,
    direction: defaultDirection,
    triggerSwipe,
    isAnimating,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
