"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import ProjectDetails from "./ProjectDetails";
import { projects } from "./projects-data";

function getDimensions(width) {
  if (width < 640) {
    return {
      cardWidth: 220,
      cardHeight: 300,
      gap: 18,
      arcDepth: 145,
    };
  }

  if (width < 1024) {
    return {
      cardWidth: 270,
      cardHeight: 365,
      gap: 24,
      arcDepth: 190,
    };
  }

  return {
    cardWidth: 310,
    cardHeight: 420,
    gap: 34,
    arcDepth: 250,
  };
}

function ArcCard({
  project,
  index,
  trackX,
  containerWidth,
  cardWidth,
  cardHeight,
  gap,
  arcDepth,
  onClick,
}) {
  const step = cardWidth + gap;

  const baseX = index * step;

  const x = useTransform(trackX, (value) => baseX + value);

  const relativeX = useTransform(
    x,
    (value) => value + cardWidth / 2 - containerWidth / 2,
  );

  const arcProgress = useTransform(relativeX, (value) => {
    if (!containerWidth) return 0;

    const normalized = value / (containerWidth * 0.65);

    return Math.max(-1, Math.min(1, normalized));
  });

  const y = useTransform(
    arcProgress,
    (value) => Math.pow(Math.abs(value), 2) * arcDepth,
  );

  const rotate = useTransform(
    arcProgress,
    [-1, -0.5, 0, 0.5, 1],
    [-22, -10, 0, 10, 22],
  );

  const scale = useTransform(
    arcProgress,
    [-1, -0.5, 0, 0.5, 1],
    [0.82, 0.94, 1, 0.94, 0.82],
  );

  const opacity = useTransform(
    arcProgress,
    [-1, -0.85, -0.5, 0, 0.5, 0.85, 1],
    [0, 0.45, 0.85, 1, 0.85, 0.45, 0],
  );

  const blur = useTransform(
    arcProgress,
    [-1, -0.7, 0, 0.7, 1],
    [3, 1, 0, 1, 3],
  );

  const filter = useTransform(
    blur,
    (value) => `blur(${value}px)`,
  );

  const zIndex = useTransform(
    arcProgress,
    (value) => Math.round(100 - Math.abs(value) * 50),
  );

  return (
    <motion.button
      type="button"
      onClick={() => onClick(project)}
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
        filter,
        width: cardWidth,
        height: cardHeight,
        zIndex,
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="group absolute left-0 top-0 origin-bottom overflow-hidden rounded-3xl bg-neutral-100 text-left shadow-[0_30px_90px_rgba(0,0,0,0.16)]"
    >
      <img
        src={project.image}
        alt={project.title}
        draggable="false"
        className="h-full w-full select-none object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        width={400}
        height={400}
      />

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-white/85 backdrop-blur-md sm:text-[10px]">
            {project.category}
          </span>

          <span className="text-[10px] font-medium tracking-widest text-white/50">
            {project.id}
          </span>
        </div>

        <h3 className="max-w-[92%] text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/65 sm:text-sm">
          {project.shortDescription}
        </p>

        <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-white transition-all duration-200 group-hover:gap-2">
          Explore project
          <ArrowRight className="size-3.5" />
        </div>
      </div>
    </motion.button>
  );
}

export default function ArcProjectCarousel() {
  const containerRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [dimensions, setDimensions] = useState({
    cardWidth: 310,
    cardHeight: 420,
    gap: 34,
    arcDepth: 250,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const isDragging = useRef(false);
  const lastPointerX = useRef(0);

  const trackX = useMotionValue(0);

  const totalProjects = projects.length;

  const repeatedProjects = useMemo(
    () => [...projects, ...projects, ...projects],
    [],
  );

  const step = dimensions.cardWidth + dimensions.gap;
  const copyWidth = totalProjects * step;

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const updateSize = () => {
      const width = element.offsetWidth;

      if (!width) return;

      setContainerWidth(width);
      setDimensions(getDimensions(width));
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!containerWidth) return;

    const centerOffset =
      containerWidth / 2 - dimensions.cardWidth / 2;

    trackX.set(-copyWidth + centerOffset);
  }, [
    containerWidth,
    dimensions.cardWidth,
    copyWidth,
    trackX,
  ]);

  const normalizeTrack = (value) => {
    let result = value;

    while (result > 0) {
      result -= copyWidth;
    }

    while (result < -copyWidth * 2) {
      result += copyWidth;
    }

    return result;
  };

  const getCurrentIndex = () => {
    if (!containerWidth) return 0;

    const centerOffset =
      containerWidth / 2 - dimensions.cardWidth / 2;

    return Math.round(
      -(trackX.get() + copyWidth - centerOffset) / step,
    );
  };

  const settle = () => {
    if (!containerWidth) return;

    const centerOffset =
      containerWidth / 2 - dimensions.cardWidth / 2;

    const index = getCurrentIndex();

    const target =
      -copyWidth +
      centerOffset -
      index * step;

    animate(trackX, normalizeTrack(target), {
      type: "spring",
      stiffness: 280,
      damping: 32,
      mass: 0.65,
    });

    setActiveIndex(
      ((index % totalProjects) + totalProjects) %
        totalProjects,
    );
  };

  const moveToProject = (direction) => {
    if (!containerWidth) return;

    const currentIndex = getCurrentIndex();
    const nextIndex = currentIndex + direction;

    const centerOffset =
      containerWidth / 2 - dimensions.cardWidth / 2;

    const target =
      -copyWidth +
      centerOffset -
      nextIndex * step;

    animate(trackX, normalizeTrack(target), {
      type: "spring",
      stiffness: 280,
      damping: 32,
      mass: 0.65,
    });

    setActiveIndex(
      ((nextIndex % totalProjects) + totalProjects) %
        totalProjects,
    );
  };

  const handlePointerDown = (event) => {
    if (selectedProject) return;

    /*
     * IMPORTANT:
     * If the pointer started on a card, do not start
     * carousel dragging. This allows the card's onClick
     * to work normally.
     */
    if (event.target.closest("button")) {
      return;
    }

    isDragging.current = true;
    lastPointerX.current = event.clientX;

    trackX.stop();

    event.currentTarget.setPointerCapture(
      event.pointerId,
    );
  };

  const handlePointerMove = (event) => {
    if (!isDragging.current) return;

    const delta =
      event.clientX - lastPointerX.current;

    lastPointerX.current = event.clientX;

    trackX.set(
      normalizeTrack(trackX.get() + delta),
    );
  };

  const handlePointerUp = (event) => {
    if (!isDragging.current) return;

    isDragging.current = false;

    settle();

    try {
      event.currentTarget.releasePointerCapture(
        event.pointerId,
      );
    } catch {}
  };

  const handlePointerCancel = () => {
    if (!isDragging.current) return;

    isDragging.current = false;

    settle();
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projects"
        className="relative w-full overflow-hidden bg-background py-24 sm:py-28 md:py-36"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Selected Work
            </p>

            <h2 className="text-4xl font-bold leading-[0.95] tracking-tighter text-foreground sm:text-5xl md:text-6xl">
              Built to make
              <br />
              <span className="text-muted-foreground">
                an impression.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              Explore the digital experiences we design,
              build and maintain for businesses, startups
              and growing teams.
            </p>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative mt-12 h-125 w-full overflow-hidden select-none sm:mt-16 sm:h-142.5 md:h-170"
          style={{ touchAction: "pan-y" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          <div className="absolute left-0 top-0 h-full w-full">
            {repeatedProjects.map((project, index) => (
              <ArcCard
                key={`${project.id}-${index}`}
                project={project}
                index={index}
                trackX={trackX}
                containerWidth={containerWidth}
                cardWidth={dimensions.cardWidth}
                cardHeight={dimensions.cardHeight}
                gap={dimensions.gap}
                arcDepth={dimensions.arcDepth}
                onClick={handleCardClick}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-36 bg-linear-to-t from-background via-background/70 to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-14 bg-linear-to-r from-background to-transparent sm:w-24 md:w-40" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-14 bg-linear-to-l from-background to-transparent sm:w-24 md:w-40" />
        </div>

        <div className="relative z-40 mx-auto flex max-w-7xl flex-col items-center px-5 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Drag to explore
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Our Projects
          </h3>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={() => moveToProject(-1)}
              aria-label="Previous project"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-200 hover:bg-muted active:scale-95"
            >
              <ArrowLeft className="size-4" />
            </button>

            <div className="min-w-20 text-center text-xs font-medium text-muted-foreground">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(totalProjects).padStart(2, "0")}
            </div>

            <button
              type="button"
              onClick={() => moveToProject(1)}
              aria-label="Next project"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-200 hover:bg-muted active:scale-95"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      <ProjectDetails
        project={selectedProject}
        open={selectedProject !== null}
        onClose={closeProject}
      />
    </>
  );
}

