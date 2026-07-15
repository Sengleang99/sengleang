"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const, // Custom smooth cubic bezier
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-center px-4 pt-28 pb-12 md:pt-36 md:pb-16 max-w-4xl mx-auto"
    >
      {/* Mini Profile Info */}
      <motion.div
        variants={childVariants}
        className="flex items-center gap-2 mb-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-full pl-2 pr-4 py-1.5 shadow-sm"
      >
        {/* Profile Avatar / Image */}
        <div className="relative h-7 w-7 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center shadow-inner">
          <Image
            src="/images/photo_2024-09-03_23-25-36.jpg"
            alt="Seng Leang"
            width={28}
            height={28}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <span className="text-xs md:text-sm font-medium text-slate-600 dark:text-slate-300">
          Hello, I&apos;m <span className="font-semibold text-slate-900 dark:text-white">Seng Leang</span>
        </span>
      </motion.div>

      {/* Hero Headline */}
      {/* <motion.h1
        variants={childVariants}
        className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.15] text-slate-900 dark:text-white tracking-tight max-w-3xl mb-8"
      >
        I build software that{" "}
        <span className="italic font-light text-slate-700 dark:text-slate-300">
          feels
        </span>{" "}
        simple, even when it&apos;s not.
      </motion.h1> */}
      <motion.h1
        variants={childVariants}
        className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.15] text-slate-900 dark:text-white tracking-tight max-w-3xl mb-8"
      >
        Hello!{" "}
        <span className="italic font-light text-slate-700 dark:text-slate-300">
          I&apos;m Software Engineer
        </span>{" "}

      </motion.h1>

      {/* Hero Subtitle */}
      {/* <motion.p
        variants={childVariants}
        className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl font-normal leading-relaxed"
      >
        Currently developing{" "}
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          scalable full-stack applications
        </span>{" "}
        and a multi-service{" "}
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          performance design system
        </span>
        .
      </motion.p> */}
      <motion.p
        variants={childVariants}
        className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl font-normal leading-relaxed"
      >
        I design and develop software that is simple, efficient, and user-friendly.
      </motion.p>
    </motion.section>
  );
}

