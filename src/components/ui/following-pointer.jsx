"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 700,
    damping: 35,
    mass: 0.25,
  });

  const y = useSpring(mouseY, {
    stiffness: 700,
    damping: 35,
    mass: 0.25,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        x,
        y,
      }}
      initial={{
        opacity: 0,
        scale: 0.6,
      }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.6,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      <div
        className="relative -translate-x-1/2 -translate-y-1/2"
      >
        {/* Cursor dot */}
        <motion.div
          className="size-3 rounded-full bg-foregroundshadow-[0_0_20px_rgba(255,255,255,0.25)"
        />

        {/* Soft outer ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/30"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}