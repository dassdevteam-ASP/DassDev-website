"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { LAUNCH_AT } from "@/lib/launch-config";
import LaunchCountdown from "./LaunchCountdown";
import LaunchDecorations from "./LaunchDecorations";
import ConfettiBlast from "./ConfettiBlast";
import Image from "next/image";

function DassDevLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="flex flex-col items-center"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute size-28 rounded-full bg-primary/10 blur-3xl" />
        <Image
          src="/apple-icon.png"
          alt="DassDev logo"
          width={100}
          height={100}
          className={"grayscale-50 pb-1"}
        />
      </div>

      <div className="mt-3 text-center">
        <div className="text-2xl font-bold tracking-[0.28em] text-foreground sm:text-3xl">
          DASS DEV<span className="text-primary">.</span>
        </div>

        <div className="mt-2 text-[9px] font-medium uppercase tracking-[0.42em] text-muted-foreground sm:text-[10px]">
          Build · Create · Grow
        </div>
      </div>
    </motion.div>
  );
}

export default function LaunchPage() {
  const [isLaunched, setIsLaunched] = useState(false);
  const [showBlast, setShowBlast] = useState(false);

  useEffect(() => {
    const target = new Date(LAUNCH_AT).getTime();

    const checkLaunch = () => {
      if (Date.now() >= target) {
        setIsLaunched(true);
      }
    };

    checkLaunch();

    const interval = setInterval(checkLaunch, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    if (!isLaunched) return;

    // Remember that this visitor has entered DASS DEV.
    document.cookie =
      "dassdev_launch_entered=1; Path=/; Max-Age=31536000; SameSite=Lax";

    setShowBlast(true);

    setTimeout(() => {
      window.location.href = "/";
    }, 1200);
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      {/* ================================================== */}
      {/* BACKGROUND IMAGE                                   */}
      {/* ================================================== */}

      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/launch-bg2.png')",
        }}
        aria-hidden="true"
      />

      {/* ================================================== */}
      {/* BACKGROUND OVERLAY                                 */}
      {/* ================================================== */}

      <div
        className="pointer-events-none absolute inset-0 bg-background/25"
        aria-hidden="true"
      />

      {/* ================================================== */}
      {/* SOFT CENTER OVERLAY                                 */}
      {/* ================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 20%, hsl(var(--background) / 0.18) 75%, hsl(var(--background) / 0.45) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ================================================== */}
      {/* CONFETTI                                            */}
      {/* ================================================== */}

      <AnimatePresence>{showBlast && <ConfettiBlast />}</AnimatePresence>

      {/* ================================================== */}
      {/* MAIN CONTENT                                        */}
      {/* ================================================== */}

      <div className="relative z-20 flex min-h-screen flex-col items-center px-5 py-10 sm:px-8 sm:py-14">
        {/* Logo */}
        <div className="flex flex-1 items-start justify-center pt-4 sm:pt-8">
          <DassDevLogo />
        </div>

        {/* Center */}
        <div className="flex w-full max-w-3xl flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.8,
            }}
            className="mb-7 text-center"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground/70 sm:text-xs">
              The wait is almost over
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground drop-shadow-sm sm:text-5xl">
              Something special
              <br />
              <span className="text-foreground/60">is on the way.</span>
            </h1>
          </motion.div>

          {/* Countdown */}
          <LaunchCountdown
            targetDate={LAUNCH_AT}
            onLaunch={() => setIsLaunched(true)}
          />

          {/* Enter button */}
          <motion.button
            type="button"
            onClick={handleEnter}
            disabled={!isLaunched || showBlast}
            whileHover={
              isLaunched && !showBlast
                ? {
                    scale: 1.03,
                  }
                : undefined
            }
            whileTap={
              isLaunched && !showBlast
                ? {
                    scale: 0.97,
                  }
                : undefined
            }
            className={[
              "mt-8 flex h-14 w-full max-w-sm items-center justify-center gap-3 rounded-full border px-8 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-500",
              isLaunched
                ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                : "cursor-not-allowed border-border/60 bg-background/60 text-muted-foreground backdrop-blur-md",
            ].join(" ")}
          >
            {!isLaunched ? (
              <>
                <LockIcon />
                <span>Website Locked</span>
              </>
            ) : (
              <>
                <span>Enter Website</span>
                <ArrowIcon />
              </>
            )}
          </motion.button>

          {/* Status */}
          <AnimatePresence mode="wait">
            {!isLaunched ? (
              <motion.p
                key="waiting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-5 text-center text-xs text-foreground/60"
              >
                The website will unlock when the countdown reaches zero.
              </motion.p>
            ) : (
              <motion.p
                key="ready"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 text-center text-xs font-medium text-primary"
              >
                The gates are open. Welcome to DASS DEV.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom */}
        <div className="flex flex-1 items-end justify-center pb-2 pt-12 sm:pb-5">
          <div className="flex flex-col items-center text-center text-black">
            <p className="max-w-md text-2xl leading-relaxed">
              When purpose meets technology,
              <br />
              beautiful things happen.
            </p>

            <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} DASS DEV.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PeacockFeather() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="size-6 text-primary"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 37C19 28 18 20 22 13C25 8 31 6 35 7C34 13 31 18 25 20C22 21 20 25 20 37Z"
        fill="currentColor"
        opacity="0.18"
      />

      <ellipse
        cx="28"
        cy="12"
        rx="5"
        ry="7"
        stroke="currentColor"
        strokeWidth="1"
      />

      <ellipse
        cx="28"
        cy="12"
        rx="2.8"
        ry="4"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M20 37C19 28 18 20 22 13"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
