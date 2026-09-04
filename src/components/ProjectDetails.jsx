"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, X } from "lucide-react";
import Link from "next/link";

export default function ProjectDetails({ project, open, onClose }) {
  useEffect(() => {
    if (!open) return;

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
        <motion.div
          className="fixed inset-0 z-99999 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Close project details"
            className="fixed inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-xl"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div className="relative z-10 flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} project details`}
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 24,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 24,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative grid w-full max-w-6xl overflow-hidden rounded-[28px] border border-black/10 bg-background shadow-2xl"
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-transform duration-200 hover:scale-105 sm:right-6 sm:top-6"
              >
                <X className="size-5" />
              </button>

              <div className="grid min-h-130 md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-75 overflow-hidden bg-neutral-900 md:min-h-162.5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    width={1200}
                    height={1600}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                      {project.category}
                    </p>

                    <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                      {project.title}
                    </h2>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-white/65">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="max-h-162.5 overflow-y-auto px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
                  <div className="max-w-xl">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                          Project Approach
                        </p>

                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                          From idea to{" "}
                          <span className="text-muted-foreground">
                            production.
                          </span>
                        </h3>
                      </div>

                      {project?.url && (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-1 inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:bg-foreground hover:text-background"
                        >
                          Visit website
                          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      )}
                    </div>

                    <div className="mt-10">
                      <DetailSection number="01" title="The Client Idea">
                        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                          {project.clientIdea}
                        </p>
                      </DetailSection>

                      <DetailSection number="02" title="The Problem">
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
                      </DetailSection>

                      <DetailSection number="03" title="Our Solution">
                        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                          {project.solution}
                        </p>
                      </DetailSection>

                      <DetailSection number="04" title="How We Approached It">
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
                      </DetailSection>

                      <DetailSection number="05" title="Outcome">
                        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                          {project.outcome}
                        </p>
                      </DetailSection>

                      <DetailSection number="06" title="Technology" last>
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
                      </DetailSection>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DetailSection({ number, title, children, last = false }) {
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
