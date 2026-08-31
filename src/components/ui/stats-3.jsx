"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import {
  FaCode,
  FaRocket,
  FaWandMagicSparkles,
  FaArrowRight,
  FaCheck,
  FaGaugeHigh,
  FaMagnifyingGlass,
  FaShieldHalved,
  FaChartLine,
  FaArrowsRotate,
  FaHeadset,
} from "react-icons/fa6";

const stages = [
  {
    number: "01",
    title: "Build",
    subtitle: "Turn ideas into a real product.",
    description:
      "We design and develop your website or digital product around your users, business goals and brand.",
    icon: FaCode,
    iconColor: "text-violet-500",
    items: [
      {
        icon: FaWandMagicSparkles,
        label: "UI / UX Design",
      },
      {
        icon: FaCode,
        label: "Development",
      },
      {
        icon: FaGaugeHigh,
        label: "Performance",
      },
    ],
  },
  {
    number: "02",
    title: "Ship",
    subtitle: "Make it ready for the real world.",
    description:
      "We test, optimize and deploy your product so it is fast, discoverable, responsive and production-ready.",
    icon: FaRocket,
    iconColor: "text-blue-500",
    items: [
      {
        icon: FaGaugeHigh,
        label: "Speed Optimization",
      },
      {
        icon: FaMagnifyingGlass,
        label: "Technical SEO",
      },
      {
        icon: FaShieldHalved,
        label: "Testing & Security",
      },
    ],
  },
  {
    number: "03",
    title: "Maintain",
    subtitle: "Keep improving after launch.",
    description:
      "Launching is not the finish line. We help keep your website secure, updated, measurable and continuously improving.",
    icon: FaArrowsRotate,
    iconColor: "text-emerald-500",
    items: [
      {
        icon: FaChartLine,
        label: "Analytics",
      },
      {
        icon: FaArrowsRotate,
        label: "Updates & Improvements",
      },
      {
        icon: FaHeadset,
        label: "Ongoing Support",
      },
    ],
  },
];

const processPoints = [
  "Clear communication",
  "Modern technology",
  "Performance focused",
  "Built to evolve",
];

export default function BuildShipMaintain() {
  return (
    <section className="relative w-full overflow-hidden bg-background px-4 py-20 sm:px-6 md:px-8 md:py-28">
      {/* Background decoration */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-violet-500/[0.06]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-96
          w-96
          translate-x-1/3
          translate-y-1/3
          rounded-full
          bg-blue-500/[0.04]
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ============================================================= */}
        {/* HEADER                                                        */}
        {/* ============================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p
            className="
              mb-5
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-muted-foreground
            "
          >
            From idea to impact
          </p>

          <h2
            className="
              text-3xl
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              text-foreground
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Build<span className="text-muted-foreground">→</span>
            <span className="text-muted-foreground">
              Ship<span className="text-muted-foreground">→</span>
            </span>
            {"\u00a0"}Maintain.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-6
              text-muted-foreground
              sm:text-base
              sm:leading-7
              md:text-lg
            "
          >
            We don't disappear after your website goes live. From the
            first idea to continuous improvement, we help you build
            something that keeps working for your business.
          </p>
        </motion.div>

        {/* ============================================================= */}
        {/* PROCESS LINE                                                   */}
        {/* ============================================================= */}

        <div className="relative mt-14 md:mt-20">
          {/* Desktop connecting line */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[16.66%]
              right-[16.66%]
              top-8
              hidden
              h-px
              bg-border
              md:block
            "
          />

          <motion.div
            aria-hidden="true"
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[16.66%]
              right-[16.66%]
              top-8
              hidden
              h-px
              origin-left
              bg-gradient-to-r
              from-violet-500
              via-blue-500
              to-emerald-500
              md:block
            "
          />

          {/* =========================================================== */}
          {/* STAGES                                                       */}
          {/* =========================================================== */}

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.article
                  key={stage.number}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-border
                    bg-card
                    p-5
                    shadow-sm
                    transition-shadow
                    duration-300
                    hover:shadow-xl
                    sm:p-6
                    md:p-7
                  "
                >
                  {/* Card glow */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      size-48
                      rounded-full
                      bg-violet-500/[0.07]
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Stage indicator */}

                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className="
                        flex
                        size-16
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-border
                        bg-muted
                        shadow-sm
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    >
                      <Icon
                        className={`size-6 ${stage.iconColor}`}
                      />
                    </div>

                    <span
                      className="
                        text-xs
                        font-semibold
                        tracking-[0.2em]
                        text-muted-foreground/50
                      "
                    >
                      {stage.number}
                    </span>
                  </div>

                  {/* Title */}

                  <div className="relative z-10 mt-7">
                    <h3
                      className="
                        text-2xl
                        font-bold
                        tracking-tight
                        text-foreground
                        sm:text-3xl
                      "
                    >
                      {stage.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        text-sm
                        font-medium
                        text-foreground/70
                      "
                    >
                      {stage.subtitle}
                    </p>

                    <p
                      className="
                        mt-4
                        text-sm
                        leading-6
                        text-muted-foreground
                      "
                    >
                      {stage.description}
                    </p>
                  </div>

                  {/* Feature list */}

                  <div className="relative z-10 mt-6 space-y-2">
                    {stage.items.map((item) => {
                      const ItemIcon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-border/70
                            bg-muted/40
                            px-3
                            py-2.5
                            transition-colors
                            duration-300
                            group-hover:bg-muted/70
                          "
                        >
                          <ItemIcon
                            className="
                              size-3.5
                              shrink-0
                              text-muted-foreground
                            "
                          />

                          <span
                            className="
                              text-xs
                              font-medium
                              text-foreground/75
                              sm:text-sm
                            "
                          >
                            {item.label}
                          </span>

                          <FaCheck
                            className="
                              ml-auto
                              size-3
                              text-emerald-500
                              opacity-0
                              transition-opacity
                              duration-300
                              group-hover:opacity-100
                            "
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom stage label */}

                  <div
                    className="
                      relative
                      z-10
                      mt-6
                      flex
                      items-center
                      gap-2
                      border-t
                      border-border
                      pt-5
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-muted-foreground
                      "
                    >
                      DASS DEV
                    </span>

                    <FaArrowRight
                      className="
                        size-3
                        text-muted-foreground
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ============================================================= */}
        {/* BOTTOM STATEMENT                                               */}
        {/* ============================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-10
            max-w-4xl
            rounded-3xl
            border
            border-border
            bg-muted/40
            px-5
            py-6
            sm:px-7
            sm:py-7
            md:mt-12
          "
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <p className="text-sm font-semibold text-foreground sm:text-base">
                One partner from first idea to long-term growth.
              </p>

              <p className="mt-1.5 text-xs leading-5 text-muted-foreground sm:text-sm">
                No handoffs between multiple teams. No disappearing after
                launch. Just a clear process and a product that keeps getting
                better.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-4 md:shrink-0">
              {processPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2"
                >
                  <span
                    className="
                      flex
                      size-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-foreground
                      text-background
                    "
                  >
                    <FaCheck className="size-2.5" />
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-medium
                      leading-tight
                      text-muted-foreground
                      sm:text-xs
                    "
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}