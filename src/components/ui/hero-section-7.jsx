"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * @typedef FloatingImageProps
 * @property {string} src - The source URL for the image.
 * @property {string} alt - The alt text for the image for accessibility.
 * @property {string} className - Tailwind CSS classes for positioning, sizing, and animation.
 */
// Note: In JSX we use plain objects instead of TypeScript interfaces

/**
 * A decorative SVG component for the background swirl lines.
 */
const Swirls = () => (
  <>
    <svg
      className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 text-violet-200/40"
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M515.266 181.33C377.943 51.564 128.537 136.256 50.8123 293.565C-26.9127 450.874 125.728 600 125.728 600"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
    <svg
      className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-violet-200/40"
      width="700"
      height="700"
      viewBox="0 0 700 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M26.8838 528.274C193.934 689.816 480.051 637.218 594.397 451.983C708.742 266.748 543.953 2.22235 543.953 2.22235"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </>
);

/**
 * A responsive and animated hero section component.
 */
export function FloatingTechHero({
  title = "We Build Digital Experiences That Drive Results",
  description = "From powerful websites to scalable web applications, we help businesses grow with modern technology, clean design, and seamless user experiences.",
  images = [],
  className,
}) {
  return (
    <section
      className={cn(
        "relative w-full min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-violet-50/50 via-violet-100/30 to-violet-200/20 py-20 md:py-32",
        className,
      )}
    >
      <div className="absolute inset-0 z-0">
        <Swirls />
      </div>

      {/* Render floating images */}
      <div className="absolute inset-0 z-10">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className={cn("absolute object-contain", image.className)}
            style={{ animationDelay: `${index * 300}ms` }}
            width={400}
            height={400}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="relative z-20 container mx-auto px-4 text-center max-w-2xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
          <Sparkles className="size-3.5 text-violet-500" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
            DASS DEV
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-500/30"
          >
            Our Work
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-white"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default FloatingTechHero;
