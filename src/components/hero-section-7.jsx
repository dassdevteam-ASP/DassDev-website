"use client";

import React from "react";
import { ArrowRight, Menu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import StatsParallax from "./stats-2";

const DeviceScreen = ({ type }) => {
  if (type === "laptop") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-background">
        <div className="flex h-7 items-center justify-between border-b border-border px-3">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            <span className="text-[7px] font-semibold tracking-wide text-foreground">
              DASS DEV
            </span>
          </div>

          <div className="flex items-center gap-2 text-[6px] text-muted-foreground">
            <span>Home</span>
            <span>Projects</span>
            <span>Services</span>
            <span>About</span>

            <span className="rounded bg-slate-600 px-1.5 py-0.5 text-white">
              Contact
            </span>
          </div>
        </div>

        <div className="grid h-[calc(100%-28px)] grid-cols-[1.15fr_0.85fr] gap-3 p-4">
          <div className="flex flex-col justify-center">
            <p className="text-[7px] font-medium text-violet-500">
              DIGITAL PRODUCTS
            </p>

            <h3 className="mt-2 text-[17px] font-bold leading-[1.05] text-foreground">
              Building Digital
              <br />
              <span className="text-violet-500">
                Solutions That Scale
              </span>
            </h3>

            <p className="mt-2 max-w-36.25 text-[6px] leading-relaxed text-muted-foreground">
              We design, build, and deploy exceptional digital products for
              modern businesses.
            </p>

            <div className="mt-3 w-fit rounded bg-foreground px-2 py-1 text-[6px] font-semibold text-background">
              Get Started
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-xl bg-violet-500/10 blur-xl" />

            <div className="relative w-full space-y-2">
              <div className="rounded-lg border border-border bg-muted/40 p-2">
                <div className="flex items-center justify-between">
                  <span className="text-[5px] text-muted-foreground">
                    Performance
                  </span>

                  <span className="text-[6px] text-emerald-500">
                    +42%
                  </span>
                </div>

                <div className="mt-2 flex h-12 items-end gap-1">
                  <div className="h-[35%] flex-1 rounded-sm bg-violet-500/30" />
                  <div className="h-[48%] flex-1 rounded-sm bg-violet-500/40" />
                  <div className="h-[42%] flex-1 rounded-sm bg-violet-500/50" />
                  <div className="h-[67%] flex-1 rounded-sm bg-violet-500/60" />
                  <div className="h-[82%] flex-1 rounded-sm bg-violet-500/80" />
                  <div className="h-full flex-1 rounded-sm bg-violet-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-border bg-muted/40 p-2">
                  <p className="text-[5px] text-muted-foreground">
                    Conversion
                  </p>

                  <p className="mt-1 text-[11px] font-bold text-foreground">
                    +27%
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted/40 p-2">
                  <p className="text-[5px] text-muted-foreground">
                    Speed
                  </p>

                  <p className="mt-1 text-[11px] font-bold text-foreground">
                    &lt;50ms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "tablet") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-background">
        <div className="flex h-7 items-center justify-between border-b border-border px-3">
          <span className="text-[7px] font-semibold text-violet-600 dark:text-violet-400">
            DASS DEV
          </span>

          <Menu className="size-3 text-muted-foreground" />
        </div>

        <div className="grid h-[calc(100%-28px)] grid-cols-[1fr_0.9fr] gap-3 p-4">
          <div className="flex flex-col justify-center">
            <p className="text-[6px] font-medium uppercase tracking-wide text-violet-500">
              Digital Experience
            </p>

            <h3 className="mt-2 text-[15px] font-bold leading-[1.05] text-foreground">
              Innovative
              <br />
              Solutions for
              <br />
              Modern Business
            </h3>

            <p className="mt-2 text-[6px] leading-relaxed text-muted-foreground">
              Modern technology, thoughtful design and scalable engineering.
            </p>

            <div className="mt-3 w-fit rounded-md bg-slate-600 px-2 py-1 text-[6px] font-medium text-white">
              Explore Services
            </div>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden rounded-xl bg-violet-100 dark:bg-violet-950/40">
            <div className="absolute -right-8 -top-8 size-24 rounded-full bg-violet-400/30 blur-xl" />

            <div className="relative size-20 rotate-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-700 shadow-xl">
              <div className="absolute inset-3 rounded-xl border border-white/20" />

              <div className="absolute left-4 top-5 h-1 w-10 rounded-full bg-white/50" />

              <div className="absolute left-4 top-8 h-1 w-7 rounded-full bg-white/30" />

              <div className="absolute bottom-4 right-4 size-5 rounded-full bg-white/20 backdrop-blur" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-background">
      <div className="flex h-8 items-center justify-between border-b border-border px-3">
        <span className="text-[6px] font-semibold text-violet-600 dark:text-violet-400">
          DASS DEV
        </span>

        <Menu className="size-3 text-muted-foreground" />
      </div>

      <div className="flex h-[calc(100%-32px)] flex-col justify-between p-4">
        <div>
          <p className="text-[6px] font-medium text-violet-600 dark:text-violet-400">
            USER EXPERIENCE
          </p>

          <h3 className="mt-2 text-[13px] font-bold leading-[1.05] text-foreground">
            Crafting
            <br />
            Experiences
            <br />
            <span className="text-violet-600 dark:text-violet-400">
              Users Love
            </span>
          </h3>

          <p className="mt-2 text-[5px] leading-relaxed text-muted-foreground">
            Intuitive, performant digital products.
          </p>

          <div className="mt-3 rounded-md bg-slate-600 px-2 py-1 text-center text-[5px] font-medium text-white">
            Start a Project
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-violet-100 p-2 text-center dark:bg-violet-950/40">
            <p className="text-[10px] font-bold text-violet-600 dark:text-violet-400">
              50+
            </p>

            <p className="mt-0.5 text-[5px] text-muted-foreground">
              Projects
            </p>
          </div>

          <div className="rounded-lg bg-violet-100 p-2 text-center dark:bg-violet-950/40">
            <p className="text-[10px] font-bold text-violet-600 dark:text-violet-400">
              20+
            </p>

            <p className="mt-0.5 text-[5px] text-muted-foreground">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Laptop = () => {
  return (
    <div className="relative w-[320px] sm:w-97.5 md:w-112.5 lg:w-130 ">
      <div className="relative aspect-16/10 rounded-t-[14px] border-[5px] border-border bg-muted p-1 shadow-2xl border-[5px] border-slate-700">
        <div className="absolute left-1/2 top-1 size-1 -translate-x-1/2 rounded-full bg-muted-foreground/50" />

        <div className="h-full w-full overflow-hidden rounded-[7px]">
          <DeviceScreen type="laptop" />
        </div>
      </div>

      <div className="relative -mx-[7%] h-4 rounded-b-[60%] bg-gradient-to-b from-muted-foreground/70 to-muted-foreground shadow-2xl">
        <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-full bg-muted-foreground" />
      </div>
    </div>
  );
};

const Tablet = () => {
  return (
    <div className="w-46.25 rotate-[7deg] sm:w-55 md:w-62.5">
      <div className="relative aspect-4/3 rounded-[18px] border-[5px] border-border bg-muted p-1.5 shadow-2xl border-[5px] border-slate-700">
        <div className="absolute left-1/2 top-1 size-1 -translate-x-1/2 rounded-full bg-muted-foreground/50" />

        <div className="h-full w-full overflow-hidden rounded-[11px]">
          <DeviceScreen type="tablet" />
        </div>
      </div>
    </div>
  );
};

const Phone = () => {
  return (
    <div className="w-26.25 rotate-10 sm:w-31.25 md:w-36.25">
      <div className="relative aspect-9/18 rounded-[22px] border-[5px] border-border bg-muted p-1 shadow-2xl border-[5px] border-slate-700">
        <div className="absolute left-1/2 top-1 z-10 h-2 w-10 -translate-x-1/2 rounded-full bg-muted-foreground" />

        <div className="h-full w-full overflow-hidden rounded-[16px]">
          <DeviceScreen type="phone" />
        </div>
      </div>
    </div>
  );
};

const DecorativeLines = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute -left-32 top-0 h-125 w-162.5 text-violet-300/40 dark:text-violet-500/20"
        viewBox="0 0 650 500"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M600 20C430 20 450 160 250 170C70 180 30 310 130 430"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <svg
        className="absolute -right-40 -bottom-25 h-137.5 w-175 text-violet-300/40 dark:text-violet-500/20"
        viewBox="0 0 700 550"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M40 500C200 520 210 350 400 350C570 350 660 220 540 40"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute left-[28%] top-[30%] size-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(139,92,246,0.8)]" />

      <div className="absolute right-[18%] top-[18%] size-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(139,92,246,0.8)]" />

      <div className="absolute bottom-[25%] left-[55%] size-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(139,92,246,0.8)]" />
    </div>
  );
};

export function FloatingTechHero({
  className,
  title = "We Build Digital Experiences That Drive Results.",
  description = "From powerful websites to scalable web applications, we help businesses grow with modern technology, clean design, and seamless user experiences.",
}) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden ",
        className,
      )}
    >
      <DecorativeLines />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <div className="relative z-20 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 shadow-sm backdrop-blur">
              <Sparkles className="size-3.5 text-muted-foreground" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                DASS DEV
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.4rem]">
              We Build Digital
              <br />
              <span className="text-muted-foreground">
                Experiences
              </span>
              <br />
              That Drive Results.
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg lg:mx-0">
              {description}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-xl hover:shadow-violet-500/30"
              >
                Our Work

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background/80 px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400 hover:bg-background"
              >
                Let's Talk
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground lg:justify-start">
              <span>Web Development</span>

              <span className="size-1 rounded-full bg-violet-400" />

              <span>UI/UX Design</span>

              <span className="size-1 rounded-full bg-violet-400" />

              <span>Agentic AI</span>
            </div>
          </div>

          <div className="relative mx-auto flex h-97.5 w-full max-w-162.5 items-center justify-center sm:h-117.5">
            <div className="absolute left-1/2 top-1/2 size-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/20 blur-22.5 dark:bg-violet-500/10 sm:size-105" />

            <div className="absolute left-[1%] top-[25%] z-20 animate-[float_5s_ease-in-out_infinite]">
              <Laptop />
            </div>

            <div className="absolute right-[3%] top-[5%] z-30 animate-[float_4.5s_ease-in-out_infinite] [animation-delay:500ms]">
              <Tablet />
            </div>

            <div className="absolute bottom-[2%] right-[14%] z-40 animate-[float_4s_ease-in-out_infinite] [animation-delay:900ms]">
              <Phone />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/60 to-transparent" />

      <div className="relative z-30 mt-8 sm:mt-10 lg:mt-4">
        <StatsParallax />
      </div>
    </section>
  );
}

export default FloatingTechHero;