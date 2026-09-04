"use client";

import { motion } from "motion/react";

export default function LaunchDecorations() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Krishna left */}
      <motion.div
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.4,
        }}
        className="absolute -left-10 bottom-10 hidden w-56 sm:block lg:-left-5 lg:w-72"
      >
        <KrishnaSilhouette />
      </motion.div>

      {/* Krishna right small silhouette */}
      <motion.div
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 0.5,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.7,
        }}
        className="absolute -right-10 bottom-20 hidden w-44 sm:block lg:right-5 lg:w-52"
      >
        <KrishnaFluteSilhouette />
      </motion.div>

      {/* Peacock feather top left */}
      <motion.div
        animate={{
          rotate: [-4, 4, -4],
          y: [-3, 3, -3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[7%] top-[15%] opacity-60"
      >
        <PeacockFeather />
      </motion.div>

      {/* Peacock feather top right */}
      <motion.div
        animate={{
          rotate: [5, -5, 5],
          y: [3, -3, 3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[8%] top-[18%] opacity-40"
      >
        <PeacockFeather />
      </motion.div>

      {/* Flute */}
      <motion.div
        animate={{
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[45%] hidden opacity-25 md:block"
      >
        <Flute />
      </motion.div>

      {/* Diya */}
      <div className="absolute bottom-[13%] right-[22%] hidden opacity-40 lg:block">
        <Diya />
      </div>

      {/* Lotus */}
      <motion.div
        animate={{
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[12%] left-[24%] opacity-30"
      >
        <Lotus />
      </motion.div>

      {/* Temple line art */}
      <div className="absolute right-[3%] top-[34%] hidden opacity-20 lg:block">
        <Temple />
      </div>

      {/* Floating petals */}
      <Petal className="left-[18%] top-[28%]" delay={0} />
      <Petal className="right-[20%] top-[31%]" delay={1.2} />
      <Petal className="left-[28%] bottom-[25%]" delay={2} />
      <Petal className="right-[32%] bottom-[28%]" delay={0.7} />
    </div>
  );
}

function KrishnaSilhouette() {
  return (
    <svg viewBox="0 0 300 400" fill="none" className="h-auto w-full">
      <defs>
        <linearGradient id="krishnaGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      {/* aura */}
      <circle cx="145" cy="150" r="105" fill="url(#krishnaGradient)" />

      {/* head */}
      <circle cx="145" cy="125" r="42" fill="currentColor" opacity="0.12" />

      {/* hair */}
      <path
        d="M108 130C90 95 103 66 135 65C160 45 195 72 184 110C177 93 166 86 151 84C142 104 126 117 108 130Z"
        fill="currentColor"
        opacity="0.15"
      />

      {/* peacock feather */}
      <path
        d="M144 70C134 40 149 20 170 8C170 35 164 55 153 73"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.18"
      />

      <ellipse
        cx="165"
        cy="28"
        rx="9"
        ry="15"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.18"
      />

      {/* body */}
      <path
        d="M112 165C92 195 92 238 105 285C113 312 137 326 162 319C190 311 199 280 192 242C187 215 178 186 168 164Z"
        fill="currentColor"
        opacity="0.1"
      />

      {/* flute */}
      <path
        d="M65 170L220 145"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.17"
      />

      {/* arms */}
      <path
        d="M115 180L75 164L65 170"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.1"
      />

      <path
        d="M167 177L211 151L220 145"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.1"
      />

      {/* legs */}
      <path
        d="M125 300L100 370"
        stroke="currentColor"
        strokeWidth="22"
        strokeLinecap="round"
        opacity="0.09"
      />

      <path
        d="M158 302L190 370"
        stroke="currentColor"
        strokeWidth="22"
        strokeLinecap="round"
        opacity="0.09"
      />
    </svg>
  );
}

function KrishnaFluteSilhouette() {
  return (
    <svg viewBox="0 0 220 280" fill="none" className="w-full">
      <circle cx="110" cy="95" r="55" fill="currentColor" opacity="0.06" />

      <circle cx="110" cy="95" r="32" fill="currentColor" opacity="0.09" />

      <path
        d="M110 132C88 155 85 188 96 220"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
        opacity="0.08"
      />

      <path
        d="M110 145L55 112"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.1"
      />

      <path
        d="M50 108L180 85"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.16"
      />
    </svg>
  );
}

function PeacockFeather() {
  return (
    <svg viewBox="0 0 80 120" className="h-24 w-16" fill="none">
      <path
        d="M39 116C39 88 34 58 43 31C49 13 64 6 74 8C73 30 65 48 50 57C43 62 40 80 39 116Z"
        fill="currentColor"
        opacity="0.12"
      />

      <ellipse
        cx="59"
        cy="27"
        rx="14"
        ry="20"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.35"
      />

      <ellipse
        cx="59"
        cy="27"
        rx="8"
        ry="12"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />

      <ellipse
        cx="59"
        cy="27"
        rx="3"
        ry="6"
        fill="currentColor"
        opacity="0.4"
      />

      <path
        d="M39 116C39 88 34 58 43 31"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

function Flute() {
  return (
    <svg viewBox="0 0 220 60" className="h-14 w-48" fill="none">
      <path
        d="M15 38L205 15"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <circle cx="70" cy="31" r="3" fill="currentColor" />
      <circle cx="95" cy="28" r="3" fill="currentColor" />
      <circle cx="120" cy="25" r="3" fill="currentColor" />
      <circle cx="145" cy="22" r="3" fill="currentColor" />
    </svg>
  );
}

function Diya() {
  return (
    <svg viewBox="0 0 80 100" className="size-20" fill="none">
      <path
        d="M20 62C25 80 55 80 60 62"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path d="M15 62H65" stroke="currentColor" strokeWidth="3" />

      <path
        d="M40 10C30 25 34 35 40 42C46 35 50 25 40 10Z"
        fill="currentColor"
        opacity="0.35"
      />

      <path d="M40 42V62" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function Lotus() {
  return (
    <svg viewBox="0 0 100 70" className="w-20" fill="none">
      <path
        d="M50 60C30 55 15 45 15 30C30 30 42 38 50 50C58 38 70 30 85 30C85 45 70 55 50 60Z"
        fill="currentColor"
        opacity="0.1"
      />

      <path
        d="M50 52C45 35 48 20 50 12C52 20 55 35 50 52Z"
        fill="currentColor"
        opacity="0.12"
      />
    </svg>
  );
}

function Temple() {
  return (
    <svg viewBox="0 0 180 220" className="w-36" fill="none">
      <path
        d="M30 200V110L90 40L150 110V200"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path d="M55 200V125H125V200" stroke="currentColor" strokeWidth="3" />

      <path d="M90 40V15" stroke="currentColor" strokeWidth="3" />

      <path d="M78 15H102" stroke="currentColor" strokeWidth="3" />

      <path d="M40 110H140" stroke="currentColor" strokeWidth="3" />

      <path
        d="M70 200V155C70 130 110 130 110 155V200"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}

function Petal({ className, delay }) {
  return (
    <motion.span
      className={`absolute h-2 w-1.5 rotate-45 rounded-full bg-primary/30 ${className}`}
      animate={{
        y: [0, -20, 0],
        x: [0, 8, -4, 0],
        rotate: [45, 65, 35, 45],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}
