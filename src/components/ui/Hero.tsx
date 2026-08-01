"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-center px-4 pt-28 pb-12 md:pt-36 md:pb-20 max-w-4xl mx-auto relative z-10"
    >
      {/* Professional Profile Status Badge */}
      <motion.div
        variants={childVariants}
        className="flex items-center gap-3 mb-6 bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md rounded-full pl-2 pr-4 py-1.5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group"
      >
        {/* Profile Avatar with Status Pulse */}
        <div className="relative">
          <div className="relative h-8 w-8 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 ring-2 ring-slate-900/10 dark:ring-white/10 shadow-inner">
            <Image
              src="/images/photo_2024-09-03_23-25-36.jpg"
              alt="Seng Leang"
              width={32}
              height={32}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          {/* Active Status Indicator */}
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
          </span>
        </div>

        <div className="flex flex-col text-left sm:flex-row sm:items-center sm:gap-2">
          <span className="text-xs font-semibold text-slate-900 dark:text-white tracking-wide">
            Seng Leang
          </span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
          <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
            Software Engineer & UX/UI Designer
          </span>
        </div>
      </motion.div>

      {/* Hero Headline - Articulate, Authoritative, Professional */}
      <motion.h1
        variants={childVariants}
        className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.15] text-slate-900 dark:text-white tracking-tight max-w-3xl mb-6"
      >
        Architecting{" "}
        <span className="italic font-light text-slate-700 dark:text-slate-300">
          scalable web systems
        </span>{" "}
        & seamless mobile experiences.
      </motion.h1>

      {/* Hero Subtitle / Description - High Technical Knowledge */}
      <motion.p
        variants={childVariants}
        className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed mb-8"
      >
        I design and engineer end-to-end software solutions—specializing in{" "}
        <span className="font-semibold text-slate-900 dark:text-white">
          Next.js
        </span>
        ,{" "}
        <span className="font-semibold text-slate-900 dark:text-white">
          Flutter
        </span>
        , and robust backend architectures. Dedicated to clean code, performance, and intuitive user experiences.
      </motion.p>

      {/* Tech Knowledge Pills */}
      <motion.div
        variants={childVariants}
        className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs font-mono"
      >
        {["Next.js", "TypeScript", "Flutter", "Express.js", "MySQL & MongoDB", "Figma"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-slate-100/80 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 transition-colors hover:border-slate-400 dark:hover:border-slate-500"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </motion.section>
  );
}
