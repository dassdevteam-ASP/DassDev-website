"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

function getRemainingTime(targetDate) {
  const difference = Math.max(0, new Date(targetDate).getTime() - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

export default function LaunchCountdown({ targetDate, onLaunch }) {
  const [time, setTime] = useState(() => getRemainingTime(targetDate));

  useEffect(() => {
    const update = () => {
      const remaining = getRemainingTime(targetDate);

      setTime(remaining);

      if (
        remaining.days === 0 &&
        remaining.hours === 0 &&
        remaining.minutes === 0 &&
        remaining.seconds === 0
      ) {
        onLaunch?.();
      }
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onLaunch]);

  const units = [
    {
      label: "Days",
      value: time.days,
    },
    {
      label: "Hours",
      value: time.hours,
    },
    {
      label: "Minutes",
      value: time.minutes,
    },
    {
      label: "Seconds",
      value: time.seconds,
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="relative w-full max-w-2xl"
    >
      {/* Outer square frame */}
      <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-background/75 p-4 shadow-2xl shadow-primary/5 backdrop-blur-xl sm:p-6">
        {/* Inner glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

        {/* Decorative corners */}
        <div className="absolute left-5 top-5 size-3 border-l border-t border-primary/40" />
        <div className="absolute right-5 top-5 size-3 border-r border-t border-primary/40" />
        <div className="absolute bottom-5 left-5 size-3 border-b border-l border-primary/40" />
        <div className="absolute bottom-5 right-5 size-3 border-b border-r border-primary/40" />

        <div className="relative z-10 rounded-[1.5rem] border border-border/50 bg-muted/30 p-5 sm:p-8">
          <div className="mb-6 text-center">
            <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-muted-foreground sm:text-[10px]">
              Launching in
            </span>
          </div>

          <div className="grid grid-cols-2 divide-x divide-y divide-border/50 overflow-hidden rounded-2xl border border-border/50 bg-background/60 sm:grid-cols-4 sm:divide-y-0">
            {units.map((unit, index) => (
              <div
                key={unit.label}
                className="relative flex min-h-28 flex-col items-center justify-center px-3 py-5 sm:min-h-32 sm:px-4"
              >
                <motion.div
                  key={`${unit.label}-${unit.value}`}
                  initial={{
                    opacity: 0.5,
                    y: -3,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                >
                  {index === 0
                    ? String(unit.value).padStart(2, "0")
                    : pad(unit.value)}
                </motion.div>

                <div className="mt-2 text-[8px] font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:text-[9px]">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="size-1.5 rounded-full bg-primary" />

            <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Until the experience begins
            </span>

            <span className="size-1.5 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
