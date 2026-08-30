"use client";

import React, { useId, useRef, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({ text = "DASS DEV.", duration = 0.2 }) => {
  const svgRef = useRef(null);

  const [cursor, setCursor] = useState({
    x: 50,
    y: 50,
  });

  const [hovered, setHovered] = useState(false);

  const gradientId = useId();
  const maskGradientId = useId();
  const maskId = useId();

  const handleMouseMove = (event) => {
    const rect = svgRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setCursor({
      x,
      y,
    });
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="160"
      viewBox="0 0 1200 160"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="h-auto w-full select-none"
      aria-hidden="true"
    >
      <defs>
        {/* Base gradient */}
        <linearGradient id={`${gradientId}-base`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />

          <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
        </linearGradient>

        {/* Cursor reveal gradient */}
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="1200"
          y2="0"
        >
          <stop offset="0%" stopColor="#5B7CFF" stopOpacity="0" />

          <stop offset="25%" stopColor="#5B7CFF" stopOpacity="0.35" />

          <stop offset="50%" stopColor="#5B7CFF" stopOpacity="1" />

          <stop offset="75%" stopColor="#5B7CFF" stopOpacity="0.35" />

          <stop offset="100%" stopColor="#5B7CFF" stopOpacity="0" />
        </linearGradient>

        {/* Cursor radial reveal */}
        <motion.radialGradient
          id={maskGradientId}
          gradientUnits="userSpaceOnUse"
          r="180"
          initial={{
            cx: "50%",
            cy: "50%",
          }}
          animate={{
            cx: `${cursor.x}%`,
            cy: `${cursor.y}%`,
          }}
          transition={{
            duration,
            ease: "easeOut",
          }}
        >
          <stop offset="0%" stopColor="white" stopOpacity="1" />

          <stop offset="55%" stopColor="white" stopOpacity="0.8" />

          <stop offset="100%" stopColor="black" stopOpacity="0" />
        </motion.radialGradient>

        <mask id={maskId}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${maskGradientId})`}
          />
        </mask>
      </defs>

      {/* Base wordmark */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        textLength="80%"
        lengthAdjust="spacing"
        fontSize="100"
        fontFamily="Helvetica, Arial, sans-serif"
        fontWeight="500"
        fill={`url(#${gradientId}-base)`}
        className="select-none"
      >
        {text}
      </text>

      {/* Static outline */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        textLength="80%"
        lengthAdjust="spacing"
        fontSize="100"
        fontFamily="Helvetica, Arial, sans-serif"
        fontWeight="500"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeOpacity="0.15"
        className="select-none"
      >
        {text}
      </text>

      {/* Animated reveal outline */}
      <motion.text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        textLength="80%"
        lengthAdjust="spacing"
        fontSize="100"
        fontFamily="Helvetica, Arial, sans-serif"
        fontWeight="500"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeOpacity="0.35"
        className="select-none"
        initial={{
          opacity: 0,
          pathLength: 0,
        }}
        animate={{
          opacity: hovered ? 1 : 0.5,
          pathLength: 1,
        }}
        transition={{
          pathLength: {
            duration: 1.8,
            ease: "easeInOut",
          },
          opacity: {
            duration: 0.3,
          },
        }}
      >
        {text}
      </motion.text>

      {/* Cursor blue reveal */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        textLength="80%"
        lengthAdjust="spacing"
        fontSize="100"
        fontFamily="Helvetica, Arial, sans-serif"
        fontWeight="500"
        fill="transparent"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.2"
        mask={`url(#${maskId})`}
        className="select-none"
      >
        {text}
      </text>
    </svg>
  );
};

export default TextHoverEffect;
