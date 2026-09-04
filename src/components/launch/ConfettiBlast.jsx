"use client";

import { motion } from "motion/react";

const particles = Array.from({ length: 70 }, (_, index) => {
  const angle = (index / 70) * Math.PI * 2;

  const distance = 180 + ((index * 47) % 240);

  return {
    id: index,
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    rotate: (index * 67) % 720,
    scale: 0.5 + ((index * 13) % 100) / 100,
    delay: (index % 8) * 0.015,
  };
});

export default function ConfettiBlast() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center overflow-hidden">
      {/* Flash */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: [0, 0.9, 0],
          scale: [0, 1.5, 3],
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="absolute size-40 rounded-full bg-primary blur-3xl"
      />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: [1, 1, 0],
            scale: [0, particle.scale, particle.scale * 0.6],
            rotate: particle.rotate,
          }}
          transition={{
            duration: 1.1,
            delay: particle.delay,
            ease: "easeOut",
          }}
          className="absolute h-3 w-2 rounded-[2px] bg-primary"
          style={{
            transformOrigin: "center",
          }}
        />
      ))}

      {/* Second layer */}
      {particles.slice(0, 30).map((particle) => (
        <motion.span
          key={`second-${particle.id}`}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          animate={{
            x: particle.x * 0.65,
            y: particle.y * 0.65,
            opacity: [1, 0],
            rotate: particle.rotate * -1,
          }}
          transition={{
            duration: 0.8,
            delay: particle.delay,
            ease: "easeOut",
          }}
          className="absolute size-1.5 rounded-full bg-foreground"
        />
      ))}
    </div>
  );
}
