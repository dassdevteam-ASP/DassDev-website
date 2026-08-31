"use client";

import { useEffect, useState } from "react";

const LETTERS = ["D", "A", "S", "S", "D", "E", "V"];

function DassDevLogo() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 220 220"
        className="
          h-32
          w-32
          overflow-visible
          sm:h-36
          sm:w-36
          md:h-40
          md:w-40
        "
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="dass-dev-logo-gradient"
            x1="35"
            y1="20"
            x2="190"
            y2="190"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0"
              className="[stop-color:var(--loader-logo-start)]"
            />

            <stop
              offset="0.5"
              className="[stop-color:var(--loader-logo-mid)]"
            />

            <stop offset="1" className="[stop-color:var(--loader-logo-end)]" />
          </linearGradient>

          <filter
            id="dass-dev-logo-glow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="3" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main D outer shape */}
        <path
          d="
            M42 35
            H112
            C158 35 188 65 188 110
            C188 155 158 185 112 185
            H42
            L78 149
            H111
            C133 149 146 135 146 110
            C146 85 133 71 111 71
            H78
            V113
          "
          pathLength="1"
          className="
            dass-logo-path
            stroke-[url(#dass-dev-logo-gradient)]
            [filter:url(#dass-dev-logo-glow)]
          "
        />

        {/* Inner D stroke */}
        <path
          d="
            M78 71
            H111
            C133 71 146 85 146 110
            C146 135 133 149 111 149
            H78
          "
          pathLength="1"
          className="
            dass-logo-inner
            stroke-[url(#dass-dev-logo-gradient)]
          "
        />

        {/* Writing point */}
        <circle
          cx="42"
          cy="35"
          r="4"
          className="
            dass-logo-dot
            fill-[var(--loader-logo-mid)]
          "
        />
      </svg>
    </div>
  );
}

function BrandText() {
  return (
    <div
      className="
        mt-5
        flex
        items-center
        justify-center
        gap-[0.08em]
        overflow-hidden
        text-2xl
        font-semibold
        tracking-[-0.04em]
        sm:text-3xl
      "
      aria-label="DASS DEV"
    >
      {LETTERS.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="
            dass-letter
            inline-block
            text-foreground
          "
          style={{
            animationDelay: `${1.35 + index * 0.08}s`,
          }}
        >
          {letter}
        </span>
      ))}

      <span
        className="
          dass-letter
          text-muted-foreground
        "
        style={{
          animationDelay: "1.91s",
        }}
      >
        .
      </span>
    </div>
  );
}

export default function DassDevLoader({ showProgress = true }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!showProgress) {
      return;
    }

    let frame;
    const start = performance.now();
    const duration = 1800;

    const updateProgress = (time) => {
      const elapsed = time - start;
      const percentage = Math.min((elapsed / duration) * 100, 100);

      setProgress(percentage);

      if (percentage < 100) {
        frame = requestAnimationFrame(updateProgress);
      }
    };

    frame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [showProgress]);

  return (
    <main
      className="
        fixed
        inset-0
        z-[99999]
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-background
        text-foreground
      "
      role="status"
      aria-label="Loading DASS DEV."
    >
      <div
        className="
          flex
          w-full
          flex-col
          items-center
          justify-center
          px-6
        "
      >
        <DassDevLogo />

        <BrandText />

        {showProgress && (
          <div
            className="
              mt-7
              flex
              w-40
              flex-col
              items-center
              gap-2
              sm:w-48
            "
          >
            <div
              className="
                h-px
                w-full
                overflow-hidden
                rounded-full
                bg-border
              "
            >
              <div
                className="
                  h-full
                  bg-foreground
                  transition-[width]
                  duration-100
                  ease-linear
                "
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-muted-foreground
              "
            >
              Loading
            </span>
          </div>
        )}
      </div>
    </main>
  );
}
