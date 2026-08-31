"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  Compass,
  Layers3,
  Rocket,
  Sparkles,
  X,
} from "lucide-react";

const differences = [
  {
    icon: Compass,
    title: "We start with the problem",
    typical: "The project starts with a list of features or pages to build.",
    dass: "We first understand the business, users, goals, and constraints before deciding what to build.",
  },
  {
    icon: Layers3,
    title: "Design and development stay connected",
    typical:
      "Design is often treated as a separate phase before development begins.",
    dass: "Design and engineering evolve together so the final product is both beautiful and practical.",
  },
  {
    icon: BrainCircuit,
    title: "Technology follows the need",
    typical:
      "New technologies can become part of the solution simply because they are available.",
    dass: "We use modern web technology, automation, AI, or agentic AI only when it creates real value.",
  },
  {
    icon: Rocket,
    title: "Launch is not the finish line",
    typical:
      "Once the website or product launches, the project is largely considered complete.",
    dass: "We think about performance, iteration, maintenance, analytics, and what should improve next.",
  },
];

const principles = [
  "Understand before building",
  "Design with the real user in mind",
  "Build for the business, not just the brief",
  "Use technology with purpose",
];

export default function WhyDassDev() {
  return (
    <section
      id="why-us"
      className="scroll-mt-20 w-full overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-28"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" />
              Why DASS DEV
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
              Not just another
              <br />
              <span className="text-muted-foreground">development agency.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Many digital agencies can build a website. We believe the
              difficult part is knowing what to build, why it matters, and how
              to make it work for the business.
            </p>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              DASS DEV brings strategy, design, engineering, and emerging
              technology together around one goal: turning an idea or business
              problem into something useful, usable, and built to grow.
            </p>

            {/* PRINCIPLES */}

            <div className="mt-8 space-y-3">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-3 text-sm font-medium text-foreground"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>

                  {principle}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COMPARISON */}

          <div className="space-y-4">
            {/* HEADER */}

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-[1fr_auto] gap-4 px-5 pb-2 sm:grid-cols-[1fr_1fr] sm:gap-6"
            >
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Typical agency approach
              </div>

              <div className="text-right text-xs font-medium uppercase tracking-[0.16em] text-primary sm:text-left">
                DASS DEV approach
              </div>
            </motion.div>

            {differences.map((difference, index) => {
              const Icon = difference.icon;

              return (
                <motion.div
                  key={difference.title}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    transition-colors
                    duration-300
                    hover:border-primary/30
                  "
                >
                  {/* TITLE */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      border-b
                      border-border
                      px-5
                      py-4
                    "
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                      <Icon className="size-4" />
                    </div>

                    <h3 className="text-sm font-semibold text-foreground sm:text-base">
                      {difference.title}
                    </h3>
                  </div>

                  {/* COMPARISON */}

                  <div className="grid sm:grid-cols-2">
                    {/* TYPICAL */}

                    <div
                      className="
                        flex
                        gap-3
                        border-b
                        border-border
                        px-5
                        py-5
                        sm:border-b-0
                        sm:border-r
                        sm:py-6
                      "
                    >
                      <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/60" />

                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {difference.typical}
                      </p>
                    </div>

                    {/* DASS DEV */}

                    <div className="flex gap-3 bg-primary/[0.025] px-5 py-5 sm:py-6">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />

                      <p className="text-sm leading-relaxed text-foreground">
                        {difference.dass}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* BOTTOM STATEMENT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.45,
                delay: 0.15,
              }}
              className="
                group
                mt-6
                flex
                flex-col
                gap-4
                rounded-2xl
                border
                border-primary/20
                bg-primary/[0.04]
                p-5
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:p-6
              "
            >
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Have an idea but not sure what to build?
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  That's exactly where the conversation should start.
                </p>
              </div>

              <a
                href="#contact"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-primary
                  transition-colors
                  hover:text-primary/80
                "
              >
                Let's talk
                <ArrowRight
                  className="
                    size-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
