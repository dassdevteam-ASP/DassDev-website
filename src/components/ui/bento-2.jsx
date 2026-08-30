"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

const bentoCardClass = cn(
  "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-muted p-4 lg:p-6 antialiased transition-all duration-500",
  "shadow-[inset_0_0_2px_2px_rgba(255,255,255,1),inset_0_0_0_1px_rgba(0,0,0,0.12),0_1px_2px_-1px_rgba(0,0,0,0.08),0_8px_24px_-12px_rgba(0,0,0,0.12)]",
  "dark:shadow-[inset_0_0_2px_2px_rgba(255,255,255,0.04),inset_0_0_0_1px_rgba(255,255,255,0.08),0_1px_2px_-1px_rgba(0,0,0,0.5),0_8px_24px_-12px_rgba(0,0,0,0.7)]",
);

function BrowserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01" />
      <path d="M10 6.5h.01" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path d="m12 3-1.4 5.6L5 10l5.6 1.4L12 17l1.4-5.6L19 10l-5.6-1.4L12 3Z" />
      <path d="m19 16-.6 2.4L16 19l2.4.6L19 22l.6-2.4L22 19l-2.4-.6L19 16Z" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 3v4" />
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <path d="M9 16h6" />
    </svg>
  );
}

function ShoppingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path d="M6 8h12l1 12H5L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <path d="M8 12h8" />
    </svg>
  );
}

function GaugeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path d="M4 16a8 8 0 1 1 16 0" />
      <path d="m12 12 4-4" />
      <path d="M7 19h10" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path d="M20 11a8.1 8.1 0 0 0-14.8-4L3 10" />
      <path d="M3 4v6h6" />
      <path d="M4 13a8.1 8.1 0 0 0 14.8 4L21 14" />
      <path d="M21 20v-6h-6" />
    </svg>
  );
}

function ServiceIcon({ children }) {
  return (
    <div className="relative z-20 flex size-11 items-center justify-center rounded-xl border border-border/50 bg-background/70 text-foreground shadow-sm backdrop-blur-md">
      {children}
    </div>
  );
}

function BrowserVisual({ hovered }) {
  return (
    <div className="relative w-full max-w-[470px]">
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-background shadow-xl"
        animate={
          hovered
            ? {
                y: -8,
                rotateX: 2,
                rotateY: -2,
              }
            : {
                y: 0,
                rotateX: 0,
                rotateY: 0,
              }
        }
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        style={{ transformPerspective: 1000 }}
      >
        <div className="flex h-8 items-center gap-1.5 border-b border-border/60 px-3">
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />

          <div className="ml-3 flex h-4 flex-1 items-center rounded-md bg-muted px-2">
            <span className="text-[6px] text-muted-foreground">
              yourbusiness.com
            </span>
          </div>
        </div>

        <div className="relative h-[190px] overflow-hidden p-5">
          <motion.div
            className="absolute inset-x-5 top-6"
            animate={
              hovered
                ? {
                    opacity: [0.5, 1, 0.5],
                  }
                : {
                    opacity: 0.55,
                  }
            }
            transition={{
              duration: 2,
              repeat: hovered ? Infinity : 0,
            }}
          >
            <div className="mb-3 h-2 w-20 rounded-full bg-primary/80" />
            <div className="h-4 w-56 rounded-md bg-foreground/10" />
            <div className="mt-2 h-2 w-40 rounded-full bg-foreground/5" />
          </motion.div>

          <motion.div
            className="absolute bottom-5 left-5 h-20 w-[55%] rounded-xl border border-border/50 bg-muted"
            animate={
              hovered
                ? {
                    scale: [1, 1.025, 1],
                  }
                : { scale: 1 }
            }
            transition={{
              duration: 2,
              repeat: hovered ? Infinity : 0,
            }}
          >
            <div className="flex h-full items-end gap-1.5 p-3">
              {[35, 55, 42, 70, 60, 85, 65, 92].map((height, index) => (
                <motion.div
                  key={index}
                  className="w-full rounded-t bg-primary/70"
                  animate={
                    hovered
                      ? {
                          height: [
                            `${height}%`,
                            `${Math.max(20, height - 20)}%`,
                            `${height}%`,
                          ],
                        }
                      : {
                          height: `${height}%`,
                        }
                  }
                  transition={{
                    duration: 1.6,
                    repeat: hovered ? Infinity : 0,
                    delay: index * 0.08,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="absolute right-5 bottom-5 flex h-20 w-[35%] items-center justify-center rounded-xl border border-border/50 bg-muted"
            animate={
              hovered
                ? {
                    y: [0, -5, 0],
                  }
                : { y: 0 }
            }
            transition={{
              duration: 2,
              repeat: hovered ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            <div className="relative size-12">
              <div className="absolute inset-0 rounded-full border-4 border-primary/15" />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary"
                animate={hovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{
                  duration: 2,
                  repeat: hovered ? Infinity : 0,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold">
                UI
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-3 -top-3 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-[8px] font-semibold shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          hovered
            ? {
                opacity: 1,
                scale: 1,
                y: [0, -3, 0],
              }
            : {
                opacity: 0,
                scale: 0.8,
              }
        }
        transition={{
          y: {
            duration: 1.8,
            repeat: hovered ? Infinity : 0,
          },
        }}
      >
        Responsive
      </motion.div>
    </div>
  );
}

function DesignVisual({ hovered }) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <motion.div
        className="relative h-[185px] w-[210px] rounded-xl border border-border/60 bg-background p-3 shadow-xl"
        animate={
          hovered
            ? {
                rotate: [-1, 1, -1],
                y: -5,
              }
            : {
                rotate: 0,
                y: 0,
              }
        }
        transition={{
          rotate: {
            duration: 2.5,
            repeat: hovered ? Infinity : 0,
            ease: "easeInOut",
          },
          y: {
            type: "spring",
            stiffness: 220,
          },
        }}
      >
        <div className="flex items-center justify-between">
          <div className="h-2 w-12 rounded-full bg-foreground/15" />
          <div className="size-3 rounded-full bg-primary/20" />
        </div>

        <div className="mt-5 flex gap-2">
          <div className="h-24 w-12 rounded-lg bg-muted" />

          <div className="flex flex-1 flex-col gap-2">
            <div className="h-3 w-16 rounded bg-foreground/15" />
            <div className="h-2 w-full rounded bg-foreground/5" />
            <div className="h-2 w-[75%] rounded bg-foreground/5" />

            <motion.div
              className="mt-3 h-7 w-20 rounded-lg bg-primary"
              animate={
                hovered
                  ? {
                      width: ["5rem", "6.5rem", "5rem"],
                    }
                  : {
                      width: "5rem",
                    }
              }
              transition={{
                duration: 1.8,
                repeat: hovered ? Infinity : 0,
              }}
            />
          </div>
        </div>

        <div className="absolute -bottom-5 -right-6 rounded-xl border border-border/60 bg-muted p-2 shadow-lg">
          <div className="flex gap-1">
            <motion.span
              className="size-3 rounded bg-foreground/20"
              animate={hovered ? { y: [-2, 2, -2] } : { y: 0 }}
              transition={{
                duration: 1,
                repeat: hovered ? Infinity : 0,
              }}
            />
            <motion.span
              className="size-3 rounded bg-primary/60"
              animate={hovered ? { y: [2, -2, 2] } : { y: 0 }}
              transition={{
                duration: 1,
                repeat: hovered ? Infinity : 0,
              }}
            />
            <span className="size-3 rounded bg-foreground/10" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
        animate={
          hovered
            ? {
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.7, 0.3],
              }
            : {
                scale: 1,
                opacity: 0.3,
              }
        }
        transition={{
          duration: 2,
          repeat: hovered ? Infinity : 0,
        }}
      />
    </div>
  );
}

function AIVisual({ hovered }) {
  const nodes = [
    { x: "8%", y: "45%", label: "Input" },
    { x: "34%", y: "18%", label: "AI" },
    { x: "34%", y: "72%", label: "Data" },
    { x: "68%", y: "45%", label: "Agent" },
    { x: "90%", y: "45%", label: "Output" },
  ];

  return (
    <div className="relative h-[200px] w-full">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 500 200"
        fill="none"
      >
        <motion.path
          d="M50 100 C120 100 120 55 170 55 C220 55 220 100 270 100 C320 100 320 100 340 100 C390 100 390 100 450 100"
          stroke="currentColor"
          className="text-border"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          animate={
            hovered
              ? {
                  strokeDashoffset: [0, -40],
                }
              : {
                  strokeDashoffset: 0,
                }
          }
          transition={{
            duration: 1.5,
            repeat: hovered ? Infinity : 0,
            ease: "linear",
          }}
        />

        <motion.path
          d="M50 100 C120 100 120 145 170 145 C220 145 220 100 270 100"
          stroke="currentColor"
          className="text-border"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          animate={
            hovered
              ? {
                  strokeDashoffset: [0, -40],
                }
              : {
                  strokeDashoffset: 0,
                }
          }
          transition={{
            duration: 1.5,
            repeat: hovered ? Infinity : 0,
            ease: "linear",
            delay: 0.3,
          }}
        />
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: node.x,
            top: node.y,
          }}
          animate={
            hovered
              ? {
                  y: index % 2 === 0 ? -5 : 5,
                }
              : {
                  y: 0,
                }
          }
          transition={{
            duration: 1.5,
            repeat: hovered ? Infinity : 0,
            repeatType: "reverse",
            delay: index * 0.15,
          }}
        >
          <div
            className={cn(
              "flex size-12 items-center justify-center rounded-xl border bg-background shadow-md",
              node.label === "AI" || node.label === "Agent"
                ? "border-primary/40"
                : "border-border/60",
            )}
          >
            {node.label === "AI" || node.label === "Agent" ? (
              <SparkIcon />
            ) : (
              <span className="text-[8px] font-semibold text-muted-foreground">
                {node.label}
              </span>
            )}
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute left-[68%] top-[45%] size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl"
        animate={
          hovered
            ? {
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2],
              }
            : {
                scale: 1,
                opacity: 0.2,
              }
        }
        transition={{
          duration: 1.8,
          repeat: hovered ? Infinity : 0,
        }}
      />
    </div>
  );
}

function EcommerceVisual({ hovered }) {
  return (
    <div className="relative flex h-[200px] w-full items-center justify-center">
      <motion.div
        className="relative w-[250px] overflow-hidden rounded-xl border border-border/60 bg-background p-4 shadow-xl"
        animate={
          hovered
            ? {
                y: -7,
              }
            : {
                y: 0,
              }
        }
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="h-2 w-20 rounded-full bg-foreground/15" />
          <div className="size-5 rounded-full bg-muted" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="rounded-lg border border-border/50 bg-muted p-2"
              animate={
                hovered
                  ? {
                      y: [0, -4, 0],
                    }
                  : {
                      y: 0,
                    }
              }
              transition={{
                duration: 1.5,
                repeat: hovered ? Infinity : 0,
                delay: item * 0.15,
              }}
            >
              <div className="mb-2 aspect-square rounded bg-background" />
              <div className="h-1.5 w-full rounded bg-foreground/10" />
              <div className="mt-1 h-1.5 w-[60%] rounded bg-foreground/5" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute -right-3 -bottom-3 flex size-14 items-center justify-center rounded-full border border-primary/30 bg-background shadow-lg"
          animate={
            hovered
              ? {
                  scale: [1, 1.12, 1],
                  rotate: [0, 8, 0],
                }
              : {
                  scale: 1,
                  rotate: 0,
                }
          }
          transition={{
            duration: 1.8,
            repeat: hovered ? Infinity : 0,
          }}
        >
          <ShoppingIcon />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-[15%] top-[20%] rounded-lg border border-border/60 bg-background px-3 py-2 shadow-md"
        initial={{ opacity: 0, x: 10 }}
        animate={
          hovered
            ? {
                opacity: 1,
                x: 0,
              }
            : {
                opacity: 0,
                x: 10,
              }
        }
        transition={{ type: "spring" }}
      >
        <span className="text-[8px] font-semibold">Order placed ✓</span>
      </motion.div>
    </div>
  );
}

function PerformanceVisual({ hovered }) {
  const metrics = [
    { label: "Performance", value: 96 },
    { label: "SEO", value: 98 },
    { label: "Accessibility", value: 94 },
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      {metrics.map((metric, index) => (
        <div key={metric.label}>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[9px] font-semibold text-foreground">
              {metric.label}
            </span>

            <motion.span
              className="font-mono text-[9px] font-bold text-primary"
              animate={
                hovered
                  ? {
                      opacity: [0.5, 1, 0.5],
                    }
                  : {
                      opacity: 0.7,
                    }
              }
              transition={{
                duration: 1.5,
                repeat: hovered ? Infinity : 0,
                delay: index * 0.15,
              }}
            >
              {metric.value}
            </motion.span>
          </div>

          <div className="relative h-2 overflow-hidden rounded-full bg-background shadow-inner">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-primary"
              initial={{ width: "0%" }}
              animate={
                hovered
                  ? {
                      width: `${metric.value}%`,
                    }
                  : {
                      width: `${metric.value - 15}%`,
                    }
              }
              transition={{
                duration: 0.8,
                delay: hovered ? index * 0.15 : 0,
                ease: "easeOut",
              }}
            />
          </div>
        </div>
      ))}

      <motion.div
        className="mt-1 flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 px-3 py-2"
        animate={
          hovered
            ? {
                x: [0, 3, 0],
              }
            : {
                x: 0,
              }
        }
        transition={{
          duration: 1.5,
          repeat: hovered ? Infinity : 0,
        }}
      >
        <GaugeIcon />
        <div>
          <div className="text-[9px] font-bold">Optimized experience</div>
          <div className="text-[7px] text-muted-foreground">
            Faster load · Better visibility · Higher conversion
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MaintenanceVisual({ hovered }) {
  return (
    <div className="relative flex h-[190px] w-full items-center justify-center">
      <motion.div
        className="relative flex size-28 items-center justify-center rounded-full border border-border/60 bg-background shadow-xl"
        animate={
          hovered
            ? {
                rotate: 360,
              }
            : {
                rotate: 0,
              }
        }
        transition={{
          duration: 5,
          repeat: hovered ? Infinity : 0,
          ease: "linear",
        }}
      >
        <div className="absolute inset-3 rounded-full border border-primary/20" />

        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary"
          animate={
            hovered
              ? {
                  rotate: -360,
                }
              : {
                  rotate: 0,
                }
          }
          transition={{
            duration: 2.5,
            repeat: hovered ? Infinity : 0,
            ease: "linear",
          }}
        />

        <RefreshIcon />
      </motion.div>

      {[
        {
          label: "Updates",
          x: "8%",
          y: "20%",
        },
        {
          label: "Security",
          x: "75%",
          y: "20%",
        },
        {
          label: "Backups",
          x: "10%",
          y: "72%",
        },
        {
          label: "Support",
          x: "75%",
          y: "72%",
        },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          className="absolute rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-[8px] font-semibold shadow-md"
          style={{
            left: item.x,
            top: item.y,
          }}
          animate={
            hovered
              ? {
                  y: [0, -4, 0],
                }
              : {
                  y: 0,
                }
          }
          transition={{
            duration: 1.8,
            repeat: hovered ? Infinity : 0,
            delay: index * 0.2,
          }}
        >
          {item.label}
        </motion.div>
      ))}
    </div>
  );
}

export default function Bento2({ className }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: "web",
      className: "md:col-span-2",
      icon: <BrowserIcon />,
      title: "Web Design & Development",
      description:
        "Fast, responsive websites designed around your brand and built to turn visitors into customers.",
      visual: <BrowserVisual hovered={hoveredCard === "web"} />,
    },
    {
      id: "design",
      className: "md:col-span-1",
      icon: <SparkIcon />,
      title: "UI/UX & Landing Pages",
      description:
        "Clean interfaces and focused landing pages that make your product easier to understand and use.",
      visual: <DesignVisual hovered={hoveredCard === "design"} />,
    },
    {
      id: "ai",
      className: "md:col-span-1",
      icon: <BotIcon />,
      title: "AI & Agentic Solutions",
      description:
        "AI-powered workflows, assistants and automation that solve real business problems.",
      visual: <AIVisual hovered={hoveredCard === "ai"} />,
    },
    {
      id: "commerce",
      className: "md:col-span-2",
      icon: <ShoppingIcon />,
      title: "E-commerce Solutions",
      description:
        "Product-focused stores with smooth shopping experiences, reliable checkout flows and scalable architecture.",
      visual: <EcommerceVisual hovered={hoveredCard === "commerce"} />,
    },
    {
      id: "performance",
      className: "md:col-span-1",
      icon: <GaugeIcon />,
      title: "SEO & Performance",
      description:
        "Technical optimization that improves speed, search visibility and the experience your customers get.",
      visual: <PerformanceVisual hovered={hoveredCard === "performance"} />,
    },
    {
      id: "maintenance",
      className: "md:col-span-2",
      icon: <RefreshIcon />,
      title: "Maintenance & Growth",
      description:
        "We don't disappear after launch. Updates, fixes, improvements and ongoing support keep your website healthy.",
      visual: <MaintenanceVisual hovered={hoveredCard === "maintenance"} />,
    },
  ];

  return (
    <section
      id="services"
      className={cn(
        "flex w-full items-center justify-center bg-background px-4 py-20 font-sans antialiased md:py-28",
        className,
      )}
    >
      <div className="w-full max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="mb-4 flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              What we build
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Everything you need
            <br />
            <span className="text-muted-foreground">
              to build and grow online.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            From a simple business website to AI-powered products, DASS DEV
            designs, builds, ships and maintains digital experiences that
            actually serve your business.
          </p>
        </div>

        {/* Bento */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <motion.article
              key={card.id}
              className={cn(
                bentoCardClass,
                "min-h-[370px]",
                card.className,
              )}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{
                y: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            >
              {/* Top content */}
              <div className="relative z-20">
                <ServiceIcon>{card.icon}</ServiceIcon>

                <div className="mt-5">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {card.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Animated visual */}
              <div className="relative z-10 mt-8 flex min-h-[190px] flex-1 items-center justify-center">
                {card.visual}
              </div>

              {/* Hover arrow */}
              <motion.div
                className="absolute bottom-5 right-5 flex size-8 items-center justify-center rounded-full border border-border/60 bg-background text-muted-foreground shadow-sm"
                animate={
                  hoveredCard === card.id
                    ? {
                        x: 3,
                        y: -3,
                      }
                    : {
                        x: 0,
                        y: 0,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-3.5"
                >
                  <path d="M5 19 19 5" />
                  <path d="M8 5h11v11" />
                </svg>
              </motion.div>

              {/* Subtle hover glow */}
              <motion.div
                className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
                animate={
                  hoveredCard === card.id
                    ? {
                        opacity: 1,
                        scale: 1.3,
                      }
                    : {
                        opacity: 0,
                        scale: 1,
                      }
                }
                transition={{ duration: 0.5 }}
              />
            </motion.article>
          ))}
        </div>

        {/* Bottom service statement */}
        <div className="mt-6 flex flex-col gap-3 border-t border-border/50 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            Need something custom?
          </p>

          <motion.a
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            whileHover={{ x: 3 }}
          >
            Tell us what you want to build
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}