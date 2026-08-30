"use client";

import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          Build Something
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
            {" "}
            Amazing
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Create stunning web experiences with modern animations and beautiful
          design. Your journey starts here.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-slate-500 text-white font-semibold rounded-lg hover:border-blue-400 transition-colors"
            whileHover={{
              scale: 1.05,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
