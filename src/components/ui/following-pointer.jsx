"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 900,
    damping: 45,
    mass: 0.15,
  });

  const y = useSpring(mouseY, {
    stiffness: 900,
    damping: 45,
    mass: 0.15,
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

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handlePointerOver = (event) => {
      const target = event.target;

      if (
        target instanceof Element &&
        target.closest("a, button, input, textarea, select, [role='button']")
      ) {
        setHovering(true);
      }
    };

    const handlePointerOut = (event) => {
      const target = event.target;

      if (
        target instanceof Element &&
        target.closest("a, button, input, textarea, select, [role='button']")
      ) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);

    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    document.addEventListener("mouseover", handlePointerOver);

    document.addEventListener("mouseout", handlePointerOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("mouseenter", handleMouseEnter);

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      document.removeEventListener("mouseover", handlePointerOver);

      document.removeEventListener("mouseout", handlePointerOut);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-9999 hidden md:block"
      style={{
        x,
        y,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.15,
        ease: "easeOut",
      }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        {/* Outer magnetic ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/30"
          animate={{
            width: hovering ? 52 : 34,
            height: hovering ? 52 : 34,
            opacity: hovering ? 0.8 : 0.45,
            borderWidth: hovering ? 1.5 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.4,
          }}
        />

        {/* Inner cursor */}
        <motion.div
          className="relative size-2.5 rounded-full bg-foreground shadow-[0_0_12px_rgba(255,255,255,0.35)]"
          animate={{
            scale: hovering ? 1.35 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 25,
          }}
        />

        {/* Small accent dot */}
        <motion.div
          className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background"
          animate={{
            scale: hovering ? 1 : 0,
            opacity: hovering ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
        />
      </div>
    </motion.div>
  );
}
