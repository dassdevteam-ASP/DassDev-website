"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { animate, useMotionValue } from "motion/react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import ArcProjectCard from "./ArcProjectCard";

import { ProjectDetails } from "./ProjectCard";

import { projects } from "./projects-data";

function getDimensions(width) {
  if (width < 640) {
    return { cardWidth: 220, cardHeight: 300, gap: 18, arcDepth: 145 };
  }
  if (width < 1024) {
    return { cardWidth: 270, cardHeight: 365, gap: 24, arcDepth: 190 };
  }
  return { cardWidth: 310, cardHeight: 420, gap: 34, arcDepth: 250 };
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

  // NEW: track both the project data AND the unique layoutId of the
  // specific card instance that was clicked (there are 3 duplicates
  // of each project on screen at once, so project.id alone isn't unique).
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedLayoutId, setSelectedLayoutId] = useState(null);

  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const lastPointerX = useRef(0);

  const trackX = useMotionValue(0);

  const totalProjects = projects.length;

  const repeatedProjects = useMemo(
    () => [...projects, ...projects, ...projects],
    [],
  );

  const step = dimensions.cardWidth + dimensions.gap;
  const copyWidth = totalProjects * step;
  const middleCopyOffset = -copyWidth;

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
    const centerOffset = containerWidth / 2 - dimensions.cardWidth / 2;
    trackX.set(middleCopyOffset + centerOffset);
  }, [containerWidth, dimensions.cardWidth, middleCopyOffset, trackX]);

  const normalizeTrack = (value) => {
    let nextValue = value;
    const upperBoundary = middleCopyOffset + copyWidth;
    const lowerBoundary = middleCopyOffset - copyWidth;

    if (nextValue > upperBoundary) nextValue -= copyWidth;
    if (nextValue < lowerBoundary) nextValue += copyWidth;

    return nextValue;
  };

  const getGlobalIndex = () => {
    if (!containerWidth) return 0;
    const centerOffset = containerWidth / 2 - dimensions.cardWidth / 2;
    const current = trackX.get();
    return Math.round(-(current - middleCopyOffset - centerOffset) / step);
  };

  const getProjectIndex = (globalIndex) => {
    return ((globalIndex % totalProjects) + totalProjects) % totalProjects;
  };

  const settleToNearestCard = (velocity = 0) => {
    if (!containerWidth) return;

    const centerOffset = containerWidth / 2 - dimensions.cardWidth / 2;
    const globalIndex = getGlobalIndex();
    const target = middleCopyOffset + centerOffset - globalIndex * step;
    const normalizedTarget = normalizeTrack(target);

    animate(trackX, normalizedTarget, {
      type: "spring",
      stiffness: 280,
      damping: 32,
      mass: 0.65,
      velocity: velocity * 0.08,
    });

    setActiveIndex(getProjectIndex(globalIndex));
  };

  const moveToProject = (direction) => {
    if (!containerWidth) return;

    const currentGlobalIndex = getGlobalIndex();
    const targetGlobalIndex = currentGlobalIndex + direction;
    const centerOffset = containerWidth / 2 - dimensions.cardWidth / 2;
    const target = middleCopyOffset + centerOffset - targetGlobalIndex * step;

    animate(trackX, normalizeTrack(target), {
      type: "spring",
      stiffness: 280,
      damping: 32,
      mass: 0.65,
    });

    setActiveIndex(getProjectIndex(targetGlobalIndex));
  };

  const handlePointerDown = (event) => {
    if (selectedProject) return;

    isDragging.current = true;
    didDrag.current = false;
    lastPointerX.current = event.clientX;

    trackX.stop();
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!isDragging.current) return;

    const delta = event.clientX - lastPointerX.current;
    if (Math.abs(delta) > 3) {
      didDrag.current = true;
    }

    lastPointerX.current = event.clientX;

    const nextValue = trackX.get() + delta;
    trackX.set(normalizeTrack(nextValue));
  };

  const handlePointerUp = (event) => {
    if (!isDragging.current) return;

    isDragging.current = false;
    settleToNearestCard();

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {}

    if (didDrag.current) {
      window.setTimeout(() => {
        didDrag.current = false;
      }, 100);
    }
  };

  const handlePointerCancel = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    settleToNearestCard();
  };

  // NEW: now receives the unique per-instance layoutId from ArcProjectCard
  const handleOpenProject = (project, layoutId) => {
    if (didDrag.current) return;
    console.log("opening");
    setSelectedProject(project);
    setSelectedLayoutId(layoutId);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setSelectedLayoutId(null);
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
              <span className="text-muted-foreground">an impression.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              Explore the digital experiences we design, build and maintain for
              businesses, startups and growing teams.
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
              <ArcProjectCard
                key={`${project.id}-${index}`}
                project={project}
                index={index}
                trackX={trackX}
                containerWidth={containerWidth}
                cardWidth={dimensions.cardWidth}
                cardHeight={dimensions.cardHeight}
                gap={dimensions.gap}
                arcDepth={dimensions.arcDepth}
                copyWidth={copyWidth}
                middleCopyOffset={middleCopyOffset}
                onOpen={handleOpenProject}
                // hide the exact instance currently expanded into the modal,
                // so the shared layoutId only has one visible occupant
                isExpanded={
                  selectedLayoutId === `arc-card-${project.id}-${index}`
                }
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
        open={Boolean(selectedProject)}
        onClose={handleCloseProject}
        layoutId={selectedLayoutId}
      />
    </>
  );
}
