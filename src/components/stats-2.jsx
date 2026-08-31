"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

import {
  FaBolt,
  FaMagnifyingGlass,
  FaGaugeHigh,
  FaChartLine,
  FaRocket,
  FaMobileScreen,
  FaUniversalAccess,
  FaServer,
  FaWandMagicSparkles,
  FaLayerGroup,
  FaCloudArrowUp,
  FaShieldHalved,
  FaChartSimple,
  FaHeadset,
} from "react-icons/fa6";

const stats = [
  {
    title: "Performance",
    metric: "+42%",
    label: "Faster page performance",
    description: "Optimized rendering, assets, code splitting and delivery.",
    category: "Speed",
    icon: FaBolt,
    iconColor: "text-amber-500",
  },
  {
    title: "SEO",
    metric: "+68%",
    label: "Search visibility",
    description: "Technical SEO foundations built into every page.",
    category: "Search",
    icon: FaMagnifyingGlass,
    iconColor: "text-emerald-500",
  },
  {
    title: "Load Time",
    metric: "-31%",
    label: "Lower load time",
    description: "Lean frontend architecture and optimized resources.",
    category: "Performance",
    icon: FaGaugeHigh,
    iconColor: "text-blue-500",
  },
  {
    title: "Conversion",
    metric: "+27%",
    label: "Conversion potential",
    description: "Clearer journeys, stronger CTAs and friction-free UX.",
    category: "UX",
    icon: FaChartLine,
    iconColor: "text-violet-500",
  },
  {
    title: "Lighthouse",
    metric: "95+",
    label: "Performance target",
    description:
      "Built with Core Web Vitals and real-world performance in mind.",
    category: "Quality",
    icon: FaRocket,
    iconColor: "text-orange-500",
  },
  {
    title: "Responsive",
    metric: "100%",
    label: "Responsive layouts",
    description:
      "Designed to work beautifully across phones, tablets and desktops.",
    category: "Responsive",
    icon: FaMobileScreen,
    iconColor: "text-cyan-500",
  },
  {
    title: "Accessibility",
    metric: "AA",
    label: "Accessibility focused",
    description: "Semantic interfaces and accessible interaction patterns.",
    category: "Accessibility",
    icon: FaUniversalAccess,
    iconColor: "text-indigo-500",
  },
  {
    title: "Uptime",
    metric: "99.9%",
    label: "Reliable delivery",
    description: "Production-ready deployment and monitoring practices.",
    category: "Reliability",
    icon: FaServer,
    iconColor: "text-emerald-500",
  },
  {
    title: "Maintainability",
    metric: "∞",
    label: "Built to evolve",
    description: "Clean architecture that makes future changes easier.",
    category: "Engineering",
    icon: FaWandMagicSparkles,
    iconColor: "text-purple-500",
  },
  {
    title: "Mobile",
    metric: "Fast",
    label: "Mobile-first experience",
    description: "Fast, usable experiences even on smaller screens.",
    category: "Mobile",
    icon: FaMobileScreen,
    iconColor: "text-pink-500",
  },
  {
    title: "Architecture",
    metric: "Clean",
    label: "Scalable foundation",
    description: "Structured codebases designed for long-term development.",
    category: "Engineering",
    icon: FaLayerGroup,
    iconColor: "text-blue-500",
  },
  {
    title: "Deployment",
    metric: "Ready",
    label: "Production deployment",
    description: "From local development to a live production environment.",
    category: "Delivery",
    icon: FaCloudArrowUp,
    iconColor: "text-sky-500",
  },
  {
    title: "Security",
    metric: "Built-in",
    label: "Security conscious",
    description: "Secure development practices from frontend to backend.",
    category: "Security",
    icon: FaShieldHalved,
    iconColor: "text-red-500",
  },
  {
    title: "Analytics",
    metric: "Live",
    label: "Track what matters",
    description: "Analytics and measurement setup for meaningful decisions.",
    category: "Analytics",
    icon: FaChartSimple,
    iconColor: "text-fuchsia-500",
  },
  {
    title: "Support",
    metric: "Ongoing",
    label: "Post-launch support",
    description:
      "We continue improving and maintaining your website after launch.",
    category: "Support",
    icon: FaHeadset,
    iconColor: "text-teal-500",
  },
];

export default function StatsParallax({ products = stats }) {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = {
    stiffness: 300,
    damping: 30,
    bounce: 100,
  };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      <div className="relative md:h-[190vh] md:perspective-[1000px] md:transform-3d">
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="hidden md:block"
        >
          <motion.div className="mb-10 flex flex-row-reverse space-x-6 space-x-reverse lg:mb-14 lg:space-x-8 xl:space-x-10">
            {firstRow.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                translate={translateX}
              />
            ))}
          </motion.div>

          <motion.div className="mb-10 flex flex-row space-x-6 lg:mb-14 lg:space-x-8 xl:space-x-10">
            {secondRow.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                translate={translateXReverse}
              />
            ))}
          </motion.div>

          <motion.div className="flex flex-row-reverse space-x-6 space-x-reverse lg:space-x-8 xl:space-x-10">
            {thirdRow.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                translate={translateX}
              />
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 px-4 md:hidden">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, translate }) {
  const Icon = product.icon;

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product relative h-44 w-full shrink-0 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.07)] sm:h-52 sm:w-76 md:h-68 md:w-88 md:rounded-3xl lg:h-72 lg:w-[24rem] xl:w-104 dark:border-white/10 dark:bg-zinc-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-20 dark:[background-image:linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"
      />

      <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-black/10 bg-white/70 px-2.5 py-1.5 text-[8px] font-medium uppercase tracking-widest text-black/50 backdrop-blur-md sm:text-[9px] md:left-6 md:top-6 md:text-[10px] dark:border-white/10 dark:bg-black/30 dark:text-white/50">
        {Icon && <Icon className={`size-3 ${product.iconColor}`} />}

        {product.category}
      </div>

      <div className="absolute right-4 top-5 z-10 flex items-center gap-1.5 md:right-6 md:top-6">
        <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

        <span className="hidden text-[9px] font-medium uppercase tracking-wider text-black/30 sm:block dark:text-white/30">
          optimized
        </span>
      </div>

      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 sm:inset-x-5 md:inset-x-6">
        <div className="text-4xl font-bold leading-none tracking-[-0.08em] text-black transition-transform duration-500 group-hover/product:scale-105 sm:text-5xl md:text-6xl dark:text-white">
          {product.metric}
        </div>

        <div className="mt-2 text-xs font-semibold tracking-tight text-black sm:text-sm md:text-base dark:text-white">
          {product.label}
        </div>

        <p className="mt-1.5 line-clamp-2 max-w-sm text-[9px] leading-4 text-black/50 sm:text-[10px] md:text-xs md:leading-5 dark:text-white/50">
          {product.description}
        </p>
      </div>

      <div className="absolute bottom-4 left-4 text-[7px] font-medium uppercase tracking-[0.15em] text-black/35 sm:text-[9px] md:bottom-6 md:left-6 md:text-[10px] dark:text-white/35">
        DASS DEV / {product.title}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover/product:opacity-100"
      />
    </motion.div>
  );
}

export { stats };
