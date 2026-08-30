"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
  IconCode,
  IconExternalLink,
  IconSparkles,
} from "@tabler/icons-react";

const projects = [
  {
    id: "nimbus",
    category: "Websites",
    categoryLabel: "Website",
    title: "Nimbus Studio",
    client: "Design Agency",
    description:
      "A modern marketing website designed to turn visitors into qualified conversations while maintaining a premium visual identity.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1800&auto=format&fit=crop",
    result: "+42%",
    resultLabel: "conversion rate",
    secondaryResult: "+68%",
    secondaryLabel: "organic traffic",
    technologies: ["Next.js", "Tailwind CSS", "Motion", "Sanity"],
    href: "/work/nimbus",
    externalHref: "#",
  },

  {
    id: "collabflow",
    category: "Web Apps",
    categoryLabel: "Web App",
    title: "CollabFlow",
    client: "Productivity SaaS",
    description:
      "A collaborative workspace that brings tasks, communication, and project visibility into one focused experience.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1800&auto=format&fit=crop",
    result: "+37%",
    resultLabel: "user engagement",
    secondaryResult: "-31%",
    secondaryLabel: "task completion time",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    href: "/work/collabflow",
    externalHref: "#",
  },

  {
    id: "vanta",
    category: "E-commerce",
    categoryLabel: "E-commerce",
    title: "Vanta Store",
    client: "Fashion & Lifestyle",
    description:
      "A conversion-focused e-commerce experience built around product discovery, trust, and a frictionless checkout journey.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1800&auto=format&fit=crop",
    result: "+54%",
    resultLabel: "revenue per visitor",
    secondaryResult: "+29%",
    secondaryLabel: "add-to-cart rate",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Vercel"],
    href: "/work/vanta",
    externalHref: "#",
  },

  {
    id: "foundry",
    category: "Landing Pages",
    categoryLabel: "Landing Page",
    title: "Foundry",
    client: "B2B Startup",
    description:
      "A focused launch page that explains a complex product clearly and moves visitors toward one primary action.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop",
    result: "+71%",
    resultLabel: "qualified leads",
    secondaryResult: "-44%",
    secondaryLabel: "bounce rate",
    technologies: ["React", "Tailwind CSS", "Motion", "Vercel"],
    href: "/work/foundry",
    externalHref: "#",
  },

  {
    id: "orbit",
    category: "Websites",
    categoryLabel: "Website",
    title: "Orbit Consulting",
    client: "Business Consulting",
    description:
      "A credibility-first website that transforms expertise into a clear digital experience for prospective clients.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1800&auto=format&fit=crop",
    result: "+63%",
    resultLabel: "lead submissions",
    secondaryResult: "+48%",
    secondaryLabel: "search visibility",
    technologies: ["Next.js", "Tailwind CSS", "SEO", "Vercel"],
    href: "/work/orbit",
    externalHref: "#",
  },

  {
    id: "pulse",
    category: "Web Apps",
    categoryLabel: "Web App",
    title: "Pulse Analytics",
    client: "Analytics Platform",
    description:
      "A real-time analytics interface designed to make complex business data easier to understand and act on.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop",
    result: "+46%",
    resultLabel: "weekly active users",
    secondaryResult: "-52%",
    secondaryLabel: "reporting time",
    technologies: ["React", "Node.js", "MongoDB", "Charts"],
    href: "/work/pulse",
    externalHref: "#",
  },
];

const filters = [
  {
    label: "All Projects",
    value: "All",
  },
  {
    label: "Websites",
    value: "Websites",
  },
  {
    label: "Web Apps",
    value: "Web Apps",
  },
  {
    label: "E-commerce",
    value: "E-commerce",
  },
  {
    label: "Landing Pages",
    value: "Landing Pages",
  },
];

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  const [activeIndex, setActiveIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeFilter]);

  useEffect(() => {
    if (isPaused || filteredProjects.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) =>
        current === filteredProjects.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, filteredProjects.length]);

  const activeProject = filteredProjects[activeIndex];

  if (!activeProject) {
    return null;
  }

  const previousIndex =
    activeIndex === 0 ? filteredProjects.length - 1 : activeIndex - 1;

  const nextIndex =
    activeIndex === filteredProjects.length - 1 ? 0 : activeIndex + 1;

  const previousProject = filteredProjects[previousIndex];

  const nextProject = filteredProjects[nextIndex];

  const goPrevious = () => {
    setActiveIndex(previousIndex);
  };

  const goNext = () => {
    setActiveIndex(nextIndex);
  };

  return (
    <section
      id="projects"
      className="
        relative
        w-full
        overflow-hidden
        bg-background
        py-24
        md:py-32
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ========================================================= */}
      {/* BACKGROUND                                               */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute
            left-1/2
            top-40
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-primary/10
            blur-[140px]
          "
        />
      </div>

      {/* ========================================================= */}
      {/* HEADER                                                    */}
      {/* ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-background/70
              px-4
              py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-muted-foreground
              shadow-sm
              backdrop-blur
            "
          >
            <span
              className="
                size-1.5
                rounded-full
                bg-primary
                shadow-[0_0_10px_currentColor]
              "
            />
            Client Projects
          </div>

          {/* Heading */}
          <h2
            className="
              text-4xl
              font-bold
              leading-[0.95]
              tracking-[-0.04em]
              text-foreground
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Real projects.
            <br />
            <span className="text-muted-foreground">Real results.</span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-muted-foreground
              md:text-lg
            "
          >
            A look at what we build for businesses, founders, and teams — from
            the first idea to a product people actually use.
          </p>
        </motion.div>

        {/* ======================================================= */}
        {/* FILTERS                                                 */}
        {/* ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.15,
          }}
          className="
            mt-10
            flex
            justify-center
            overflow-x-auto
            pb-2
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <div
            className="
              flex
              min-w-max
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-muted/50
              p-1.5
              shadow-inner
              backdrop-blur
            "
          >
            {filters.map((filter) => {
              const active = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`
                    relative
                    rounded-full
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {active && (
                    <motion.span
                      layoutId="activeProjectFilter"
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-primary
                        shadow-sm
                      "
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* PROJECT SHOWCASE                                         */}
      {/* ========================================================= */}

      <div
        className="
          relative
          z-10
          mt-16
          min-h-[650px]
          w-full
          overflow-hidden
          md:mt-20
          md:min-h-[720px]
        "
      >
        {/* Desktop side previews */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            hidden
            h-[570px]
            items-center
            justify-center
            md:flex
          "
        >
          {/* Previous */}
          {filteredProjects.length > 1 && (
            <motion.div
              key={`previous-${previousProject.id}`}
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 0.65,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                absolute
                left-[calc(50%-650px)]
                top-12
                h-[440px]
                w-[420px]
                -rotate-[7deg]
                overflow-hidden
                rounded-3xl
                border
                border-border
                bg-card
                shadow-2xl
              "
            >
              <ProjectImage project={previousProject} />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-background
                  via-background/20
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                "
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {previousProject.categoryLabel}
                </p>

                <p className="mt-2 text-xl font-semibold">
                  {previousProject.title}
                </p>
              </div>
            </motion.div>
          )}

          {/* Next */}
          {filteredProjects.length > 1 && (
            <motion.div
              key={`next-${nextProject.id}`}
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 0.65,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                absolute
                right-[calc(50%-650px)]
                top-12
                h-[440px]
                w-[420px]
                rotate-[7deg]
                overflow-hidden
                rounded-3xl
                border
                border-border
                bg-card
                shadow-2xl
              "
            >
              <ProjectImage project={nextProject} />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-background
                  via-background/20
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                "
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {nextProject.categoryLabel}
                </p>

                <p className="mt-2 text-xl font-semibold">
                  {nextProject.title}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* ======================================================= */}
        {/* CENTER PROJECT                                          */}
        {/* ======================================================= */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-4xl
            px-4
          "
        >
          <AnimatePresence mode="wait">
            <motion.article
              key={activeProject.id}
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -25,
                scale: 0.98,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                mx-auto
                max-w-3xl
                overflow-hidden
                rounded-[28px]
                border
                border-border
                bg-card
                shadow-[0_30px_100px_rgba(0,0,0,0.18)]
              "
            >
              {/* Project image */}
              <div
                className="
                  relative
                  aspect-[16/9]
                  overflow-hidden
                  bg-muted
                "
              >
                <ProjectImage project={activeProject} priority />

                {/* Image overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-black/20
                    via-transparent
                    to-black/60
                  "
                />

                {/* Category */}
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-white
                    backdrop-blur-md
                    md:left-7
                    md:top-7
                  "
                >
                  <IconCode className="size-3.5" />

                  {activeProject.categoryLabel}
                </div>

                {/* Visit button */}
                <Link
                  href={activeProject.href}
                  className="
                    absolute
                    right-5
                    top-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    px-4
                    py-2.5
                    text-xs
                    font-medium
                    text-white
                    opacity-0
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    hover:bg-white
                    hover:text-black
                    md:right-7
                    md:top-7
                  "
                >
                  View case study
                  <IconArrowUpRight className="size-4" />
                </Link>
              </div>

              {/* ================================================= */}
              {/* PROJECT DETAILS                                   */}
              {/* ================================================= */}

              <div className="p-6 md:p-8">
                <div
                  className="
                    flex
                    flex-col
                    gap-6
                    md:flex-row
                    md:items-start
                    md:justify-between
                  "
                >
                  {/* Title */}
                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          size-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-border
                          bg-muted
                          text-lg
                          font-semibold
                        "
                      >
                        {activeProject.title.charAt(0)}
                      </div>

                      <div>
                        <h3
                          className="
                            text-2xl
                            font-semibold
                            tracking-tight
                            text-foreground
                            md:text-3xl
                          "
                        >
                          {activeProject.title}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-sm
                            text-primary
                          "
                        >
                          {activeProject.client}
                        </p>
                      </div>
                    </div>

                    <p
                      className="
                        mt-5
                        max-w-2xl
                        text-sm
                        leading-relaxed
                        text-muted-foreground
                        md:text-base
                      "
                    >
                      {activeProject.description}
                    </p>
                  </div>

                  {/* External link */}
                  <a
                    href={activeProject.externalHref}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      hidden
                      shrink-0
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-border
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-foreground
                      transition-all
                      duration-200
                      hover:bg-muted
                      md:inline-flex
                    "
                  >
                    Visit site
                    <IconExternalLink className="size-4" />
                  </a>
                </div>

                {/* ================================================= */}
                {/* RESULTS                                            */}
                {/* ================================================= */}

                <div
                  className="
                    mt-7
                    grid
                    grid-cols-2
                    gap-3
                    md:max-w-md
                  "
                >
                  <ResultCard
                    value={activeProject.result}
                    label={activeProject.resultLabel}
                  />

                  <ResultCard
                    value={activeProject.secondaryResult}
                    label={activeProject.secondaryLabel}
                  />
                </div>

                {/* ================================================= */}
                {/* TECHNOLOGIES                                      */}
                {/* ================================================= */}

                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {activeProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                          rounded-lg
                          border
                          border-border
                          bg-muted/60
                          px-3
                          py-1.5
                          text-xs
                          font-medium
                          text-muted-foreground
                          transition-colors
                          duration-200
                          group-hover:text-foreground
                        "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[28px]
                  opacity-0
                  ring-1
                  ring-primary/40
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />
            </motion.article>
          </AnimatePresence>
        </div>

        {/* ======================================================= */}
        {/* CONTROLS                                                */}
        {/* ======================================================= */}

        <div
          className="
            relative
            z-30
            mx-auto
            mt-8
            flex
            max-w-3xl
            items-center
            justify-between
            px-4
          "
        >
          {/* Previous */}
          <button
            type="button"
            onClick={goPrevious}
            disabled={filteredProjects.length <= 1}
            aria-label="Previous project"
            className="
              flex
              size-11
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-background
              text-muted-foreground
              shadow-sm
              transition-all
              duration-200
              hover:-translate-x-0.5
              hover:bg-muted
              hover:text-foreground
              disabled:opacity-30
            "
          >
            <IconArrowLeft className="size-5" />
          </button>

          {/* Dots */}
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            {filteredProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${project.title}`}
                className="
                    flex
                    items-center
                    justify-center
                    p-1
                  "
              >
                <motion.span
                  animate={{
                    width: index === activeIndex ? 24 : 6,
                    opacity: index === activeIndex ? 1 : 0.35,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                      block
                      h-1.5
                      rounded-full
                      bg-primary
                    "
                />
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={goNext}
            disabled={filteredProjects.length <= 1}
            aria-label="Next project"
            className="
              flex
              size-11
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-background
              text-muted-foreground
              shadow-sm
              transition-all
              duration-200
              hover:translate-x-0.5
              hover:bg-muted
              hover:text-foreground
              disabled:opacity-30
            "
          >
            <IconArrowRight className="size-5" />
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM CTA                                               */}
      {/* ========================================================= */}

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
          once: false,
          amount: 0.25,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          relative
          z-10
          mx-auto
          mt-4
          max-w-5xl
          px-4
          md:mt-8
        "
      >
        <div
          className="
            flex
            flex-col
            gap-6
            rounded-3xl
            border
            border-border
            bg-muted/40
            p-6
            shadow-inner
            backdrop-blur-sm
            md:flex-row
            md:items-center
            md:justify-between
            md:p-7
          "
        >
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                size-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-border
                bg-background
              "
            >
              <IconSparkles className="size-5 text-primary" />
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                Have a project in mind?
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Let's build something useful.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-primary
                px-5
                py-3
                text-sm
                font-semibold
                text-primary-foreground
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              Start a project
              <IconArrowUpRight className="size-4" />
            </Link>

            <Link
              href="/work"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-border
                bg-background
                px-5
                py-3
                text-sm
                font-semibold
                text-foreground
                transition-all
                duration-200
                hover:bg-muted
              "
            >
              View all work
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* =============================================================== */
/* PROJECT IMAGE                                                   */
/* =============================================================== */

function ProjectImage({ project, priority = false }) {
  return (
    <img
      src={project.image}
      alt={`${project.title} project`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        transition-transform
        duration-700
        ease-out
        group-hover:scale-105
      "
    />
  );
}

/* =============================================================== */
/* RESULT CARD                                                     */
/* =============================================================== */

function ResultCard({ value, label }) {
  return (
    <div
      className="
        rounded-xl
        border
        border-border
        bg-muted/50
        p-4
        transition-all
        duration-300
        group-hover:bg-muted
      "
    >
      <p
        className="
          text-2xl
          font-bold
          tracking-tight
          text-foreground
          md:text-3xl
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1
          text-xs
          uppercase
          tracking-wider
          text-muted-foreground
        "
      >
        {label}
      </p>
    </div>
  );
}
