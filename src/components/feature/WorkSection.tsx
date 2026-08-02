"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getCaseStudies } from "@/services/case.study.service";
import { CaseStudy } from "@/types/case.study";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function WorkSection() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCaseStudies() {
      try {
        const data = await getCaseStudies();
        setCaseStudies(data);
      } catch (err) {
        console.error("Failed to load case studies:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadCaseStudies();
  }, []);

  return (
    <section
      id="work"
      className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 border-t border-slate-100 dark:border-slate-800/80"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col mb-12 md:mb-16"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
          Selected Engineering Work
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900 dark:text-white font-normal">
          Building stable architectures & fast user interfaces
        </h2>
      </motion.div>

      {/* Projects Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="p-5 sm:p-6 md:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/90 bg-white/60 dark:bg-slate-950/40 backdrop-blur-md shadow-sm animate-pulse flex flex-col justify-between h-[280px]"
            >
              <div className="space-y-4">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-1/3"></div>
                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-3/4"></div>
                <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-xl w-full"></div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-md w-12"></div>
                  <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-md w-14"></div>
                  <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-md w-10"></div>
                </div>
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-md w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      ) : caseStudies.length > 0 ? (
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((project) => (
            <motion.div
              key={project._id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="flex flex-col justify-between p-5 sm:p-6 md:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/90 bg-white/60 dark:bg-slate-950/40 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-amber-400/40 dark:hover:border-amber-400/30 hover:shadow-xl hover:shadow-amber-500/5 group relative overflow-hidden min-h-[300px]"
            >
              <div>
                {/* Header: Tag */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium tracking-wider uppercase text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    {project.tag || "Case Study"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-medium text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                {project.description && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed text-justify mb-6 line-clamp-4">
                    {project.description}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
                {/* Tech Stack Badges */}
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 px-2.5 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* External Action Links */}
                {(project.githubUrl || project.demoUrl) && (
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white px-3 py-1.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.385-4.365-9.75-9.75-9.75z"
                          />
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 transition-all duration-200"
                      >
                        <span>Live Demo</span>
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm flex flex-col items-center justify-center text-center shadow-sm"
        >
          <div className="h-12 w-12 rounded-full bg-pastel-yellow dark:bg-amber-950/45 flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
            <svg
              className="h-6 w-6 animate-pulse"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-19.5 0A2.25 2.25 0 004.5 15h15a2.25 2.25 0 002.25-2.25m-19.5 0v.25A2.25 2.25 0 004.5 17.5h15a2.25 2.25 0 002.25-2.25v-.25M2.25 9.75V9A2.25 2.25 0 014.5 6.75h5.062C10.98 6.75 12.114 7.4 12.77 8.51l.73 1.24H21.75"
              />
            </svg>
          </div>
          <h3 className="font-serif text-xl text-slate-900 dark:text-white mb-2">
            Case Studies Under Construction
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            I am currently refactoring and packaging my production codebase
            archives. Selected engineering projects and system architecture
            schematics will be published here shortly.
          </p>
        </motion.div>
      )}
    </section>
  );
}
