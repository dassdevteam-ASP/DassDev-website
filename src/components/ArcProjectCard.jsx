"use client";

import { useTransform } from "motion/react";

import ProjectCard from "./ProjectCard";

export default function ArcProjectCard({
  project,
  index,
  trackX,
  containerWidth,
  cardWidth,
  cardHeight,
  gap,
  arcDepth,
  onOpen,
}) {
  const step = cardWidth + gap;
  const baseX = index * step - containerWidth / 2 + cardWidth / 2;
  const cardX = useTransform(trackX, (value) => baseX + value);

  const relativeX = useTransform(
    cardX,
    (value) => value + cardWidth / 2 - containerWidth / 2,
  );

  const arcProgress = useTransform(relativeX, (value) => {
    const normalized = value / (containerWidth * 0.72);
    return Math.max(-1.7, Math.min(1.7, normalized));
  });

  const verticalOffset = useTransform(
    arcProgress,
    (value) => Math.pow(Math.abs(value), 2.15) * arcDepth,
  );

  const rotation = useTransform(
    arcProgress,
    [-1.7, -1, 0, 1, 1.7],
    [-34, -18, 0, 18, 34],
  );

  const scale = useTransform(
    arcProgress,
    [-1.7, -1, 0, 1, 1.7],
    [0.76, 0.9, 1, 0.9, 0.76],
  );

  const opacity = useTransform(
    arcProgress,
    [-1.7, -1.25, -1, 0, 1, 1.25, 1.7],
    [0, 0.5, 0.82, 1, 0.82, 0.5, 0],
  );

  const blurAmount = useTransform(
    arcProgress,
    [-1.7, -1.2, 0, 1.2, 1.7],
    [3, 1, 0, 1, 3],
  );

  const blurFilter = useTransform(blurAmount, (value) => `blur(${value}px)`);

  const zIndex = useTransform(arcProgress, (value) =>
    Math.round(100 - Math.abs(value) * 20),
  );

  const layoutId = `arc-card-${project.id}-${index}`;

  return (
    <ProjectCard
      project={project}
      onOpen={() => onOpen(project, layoutId)}
      layoutId={layoutId}
      style={{
        x: cardX,
        y: verticalOffset,
        rotate: rotation,
        scale,
        opacity,
        filter: blurFilter,
        width: cardWidth,
        height: cardHeight,
      }}
      zIndex={zIndex}
    />
  );
}
