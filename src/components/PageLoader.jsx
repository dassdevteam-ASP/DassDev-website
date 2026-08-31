"use client";

import { useEffect, useState } from "react";
import DassDevLoader from "./DassDevLoader";
export default function PageLoadering() {
  const [mounted, setMounted] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const minimumTime = 2500;
    const startTime = performance.now();

    const finish = () => {
      const elapsed = performance.now() - startTime;

      const remaining = Math.max(
        minimumTime - elapsed,
        0,
      );

      window.setTimeout(() => {
        setVisible(false);

        window.setTimeout(() => {
          setMounted(false);
        }, 500);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener(
        "load",
        finish,
        { once: true },
      );
    }

    return () => {
      window.removeEventListener(
        "load",
        finish,
      );
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`
        transition-opacity
        duration-500
        ease-out
        ${
          visible
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
    >
      <DassDevLoader />
    </div>
  );
}