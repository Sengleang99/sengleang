"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getExperiences } from "@/services/experience.service";
import { getEducations } from "@/services/education.service";
import { Experience } from "@/types/experience";
import { Education } from "@/types/education";

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

const formatYear = (dateStr: string) => {
  if (!dateStr) return "";
  if (dateStr.includes("-")) {
    return dateStr.split("-")[0];
  }
  return dateStr;
};

const formatYearRange = (fromStr: string, toStr: string) => {
  const fromYear = formatYear(fromStr);
  const toYear = formatYear(toStr);
  if (!fromYear && !toYear) return "";
  if (fromYear === toYear || !toYear) return fromYear;
  return `${fromYear} - ${toYear}`;
};

export default function AboutSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [expData, eduData] = await Promise.all([
          getExperiences(),
          getEducations(),
        ]);
        setExperiences(expData);
        setEducations(eduData);
      } catch (err) {
        console.error("Failed to load section data:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 border-t border-slate-100 dark:border-slate-800/80"
    >
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
            Who Am I?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 dark:text-white font-normal leading-tight">
            Curious mind, methodical execution.
          </h2>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-justify font-normal leading-relaxed">
            Energetic and detail-oriented Software Developer with professional
            experience in mobile and web application development (Flutter,
            Vue.js, Next.js). Proven track record of building cross-platform
            applications, integrating RESTful APIs, and optimizing database
            interactions. A strong problem solver skilled in UI/UX prototyping
            with Figma and agile team collaboration, eager to drive technical
            solutions in a dynamic growth environment.
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
          {/* Card 1: Education */}
          <motion.div
            variants={cardVariants}
            className="p-6 md:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/90 bg-white/60 dark:bg-slate-950/40 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-500/5"
          >
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-slate-800 dark:text-slate-200 font-medium">
                  01. Education
                </h3>
              </div>
              {educations.length > 0 && (
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  {educations.length}{" "}
                  {educations.length === 1 ? "Degree" : "Degrees"}
                </span>
              )}
            </div>

            <div className="space-y-6">
              {isLoading ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-lg w-3/4"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg w-1/2"></div>
                  <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-xl w-full"></div>
                </div>
              ) : educations.length === 0 ? (
                <p className="text-xs text-slate-400 italic">
                  No education records found.
                </p>
              ) : (
                educations.map((edu, index) => (
                  <div
                    key={edu._id}
                    className="group relative pl-5 border-l-2 border-amber-400/80 dark:border-amber-400/60 hover:border-amber-500 transition-colors duration-200"
                  >
                    {/* Header Row: Degree & Year */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-serif text-lg font-medium text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
                          {edu.degree}
                        </h4>
                        {edu.major && (
                          <span className="inline-block mt-1 text-xs font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-0.5 rounded-md border border-amber-200/60 dark:border-amber-900/40">
                            Major: {edu.major}
                          </span>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 whitespace-nowrap self-start">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {formatYearRange(edu.start_year, edu.end_year)}
                      </span>
                    </div>

                    {/* Institution */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium mb-3">
                      <svg
                        className="w-3.5 h-3.5 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V9a2 2 0 012-2h2a2 2 0 012 2v12"
                        />
                      </svg>
                      <span>{edu.university}</span>
                    </div>

                    {/* Description */}
                    {edu.descr && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                        {edu.descr}
                      </p>
                    )}

                    {index < educations.length - 1 && (
                      <div className="my-5 border-b border-slate-100 dark:border-slate-800/60" />
                    )}
                  </div>
                ))
              )}
            </div>
          </motion.div>

          {/* Card 2: Professional Experience */}
          <motion.div
            variants={cardVariants}
            className="p-6 md:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/90 bg-white/60 dark:bg-slate-950/40 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-500/5"
          >
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-slate-800 dark:text-slate-200 font-medium">
                  02. Experience
                </h3>
              </div>
              {experiences.length > 0 && (
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  {experiences.length}{" "}
                  {experiences.length === 1 ? "Role" : "Roles"}
                </span>
              )}
            </div>

            <div className="space-y-6">
              {isLoading ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-lg w-3/4"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg w-1/2"></div>
                  <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-xl w-full"></div>
                </div>
              ) : experiences.length === 0 ? (
                <p className="text-xs text-slate-400 italic">
                  No experience records found.
                </p>
              ) : (
                experiences.map((exp, index) => (
                  <div
                    key={exp._id}
                    className="group relative pl-5 border-l-2 border-amber-400/80 dark:border-amber-400/60 hover:border-amber-500 transition-colors duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-serif text-lg font-medium text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
                          {exp.position}
                        </h4>
                        <span className="inline-block mt-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                          {exp.company}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-full whitespace-nowrap self-start">
                        {formatYearRange(exp.from_year, exp.to_year)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                      {exp.descr}
                    </p>

                    {index < experiences.length - 1 && (
                      <div className="my-5 border-b border-slate-100 dark:border-slate-800/60" />
                    )}
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
