"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, X } from "lucide-react";

export default function ProjectCard({
  project,
  style,
  zIndex,
  onOpen,
  layoutId,
  hidden = false,
}) {
  return (
    <motion.article
      layoutId={layoutId}
      style={{
        ...style,
        opacity: hidden ? 0 : style.opacity,
        pointerEvents: hidden ? "none" : "auto",
      }}
      whileHover={{
        scale: 1.035,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="group absolute left-0 top-0 origin-bottom overflow-hidden rounded-3xl bg-neutral-100 shadow-[0_30px_90px_rgba(0,0,0,0.16)]"
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative block h-full w-full cursor-pointer overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`View ${project.title} project`}
      >
        <img
          src={project.image}
          alt={project.title}
          draggable="false"
          className="h-full w-full select-none object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          width={400}
          height={400}
          sizes="(max-width: 640px) 220px,(max-width: 1024px) 270px,310px"
          loading="lazy"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />

        {/* Card content */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          {/* Category + project number */}
          <div className="mb-3 flex items-center justify-between gap-3">
            <motion.span
              layoutId={layoutId ? `${layoutId}-category` : undefined}
              className="rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-white/85 backdrop-blur-md sm:text-[10px]"
            >
              {project.category}
            </motion.span>

            <span className="text-[10px] font-medium tracking-widest text-white/50">
              {project.id}
            </span>
          </div>

          {/* Project title */}
          <motion.h3
            layoutId={layoutId ? `${layoutId}-title` : undefined}
            className="max-w-[92%] text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl"
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/65 sm:text-sm">
            {project.shortDescription}
          </p>

          {/* Explore */}
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-white transition-all duration-200 group-hover:gap-2 group-hover:opacity-80">
            Explore project
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </button>
    </motion.article>
  );
}

export function ProjectDetails({ project, open, onClose, layoutId }) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && project && (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-xl"
          />

          {/* Modal container */}
          <div className="relative z-[110] flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              layoutId={layoutId}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative grid w-full max-w-6xl overflow-hidden rounded-[28px] border border-black/10 bg-background shadow-2xl"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:right-6 sm:top-6"
              >
                <X className="size-5" />
              </button>

              <div className="grid min-h-130 md:grid-cols-[0.95fr_1.05fr]">
                {/* Left image */}
                <div className="relative min-h-75 overflow-hidden bg-neutral-900 md:min-h-162.5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    width={1200}
                    height={1600}
                    sizes="(max-width: 768px) 100vw,50vw"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">
                    <motion.p
                      layoutId={layoutId ? `${layoutId}-category` : undefined}
                      className="text-xs font-medium uppercase tracking-[0.2em] text-white/60"
                    >
                      {project.category}
                    </motion.p>

                    <motion.h2
                      layoutId={layoutId ? `${layoutId}-title` : undefined}
                      className="mt-3 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
                    >
                      {project.title}
                    </motion.h2>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-white/65">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Right details */}
                <div className="max-h-162.5 overflow-y-auto px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
                  <div className="max-w-xl">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Project Approach
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      From idea to
                      <span className="text-muted-foreground">
                        {" "}
                        production.
                      </span>
                    </h3>

                    <div className="mt-10">
                      <ProjectDetailSection number="01" title="The Client Idea">
                        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                          {project.clientIdea}
                        </p>
                      </ProjectDetailSection>

                      <ProjectDetailSection number="02" title="The Problem">
                        <ul className="space-y-3">
                          {project.problem.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-muted-foreground sm:text-base"
                            >
                              <Check className="mt-1 size-4 shrink-0 text-foreground" />

                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </ProjectDetailSection>

                      <ProjectDetailSection number="03" title="Our Solution">
                        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                          {project.solution}
                        </p>
                      </ProjectDetailSection>

                      <ProjectDetailSection
                        number="04"
                        title="How We Approached It"
                      >
                        <ul className="space-y-3">
                          {project.approach.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-muted-foreground sm:text-base"
                            >
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />

                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </ProjectDetailSection>

                      <ProjectDetailSection number="05" title="Outcome">
                        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                          {project.outcome}
                        </p>
                      </ProjectDetailSection>

                      <ProjectDetailSection number="06" title="Technology" last>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-foreground"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </ProjectDetailSection>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

function ProjectDetailSection({ number, title, children, last = false }) {
  return (
    <section className={last ? "" : "mb-8 border-b border-border pb-8"}>
      <div className="flex gap-4">
        <span className="pt-1 text-[10px] font-semibold tracking-widest text-muted-foreground">
          {number}
        </span>

        <div className="flex-1">
          <h4 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
            {title}
          </h4>

          <div className="mt-3">{children}</div>
        </div>
      </div>
    </section>
  );
}
