"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 border-t border-slate-100 dark:border-slate-800/80">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Column: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 sticky top-28"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 block">
            About Me
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 dark:text-white font-normal leading-tight">
            Curious mind, methodical execution.
          </h2>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-justify font-normal">
            I am a Full-Stack and Mobile Software Engineer dedicated to building smooth, reliable digital products. My strengths lie at the intersection of design and development—taking visual layouts and prototypes and turning them into fully functioning, high-performing applications.
            From engineering intuitive mobile modules to designing automated backend APIs and managing relational databases, I focus on creating seamless experiences for the end user. I love collaborating on complex problems, writing clean code, and building systems that scale.
          </p>
        </motion.div>

        {/* Right Column: Cards & Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="md:col-span-8 space-y-8"
        >
          {/* Card 1: Core Stacks & Tools */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm shadow-sm"
          >
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              01. Tech Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h5 className="font-serif text-base text-slate-950 dark:text-white mb-2">Frontend</h5>
                <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-2 font-mono">
                  <li>Flutter</li>
                  <li>HTML 5, CSS 3</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div>
                <h5 className="font-serif text-base text-slate-950 dark:text-white mb-2">Backend & Database</h5>
                <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-2 font-mono">
                  <li>Express.js</li>
                  <li>Laravel</li>
                  <li>Mysql</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Professional Experience */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm shadow-sm"
          >
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              02. Experience
            </h3>
            <div className="space-y-6">
              {/* Job 1 */}
              <div className="border-l-2 border-brand-yellow pl-4 py-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h4 className="font-serif text-base font-semibold text-slate-900 dark:text-white">
                    Mobile App Developer
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-450">
                    Samrith Ek
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Engineered native and cross-platform mobile products, optimizing interfaces and modular codebases for reliability and speed.
                </p>
              </div>

              {/* Job 2 */}
              <div className="border-l-2 border-slate-200 dark:border-slate-800 pl-4 py-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h4 className="font-serif text-base font-semibold text-slate-900 dark:text-white">
                    Application Support & Developer (Internship)
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-450">
                    Postcar Digital
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Maintained applications, analyzed runtime diagnostics, and coded full-stack enhancements to resolve active operational needs.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


