"use client";

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

const EDUCATIONS = [
  {
    id: '1',
    title: "Associate of Software Engineering",
    description: "Beltei International University (2022-2024)",
    year: "2022-2024",
  },
];

const EXPERIENCES = [
  {
    id: '1',
    title: "Mobile App Developer",
    company: "Samrith Ek",
    description: "Engineered native and cross-platform mobile products, optimizing interfaces and modular codebases for reliability and speed.",
    year: "2025 - 2026",
  },
  {
    id: '2',
    title: "Application Support & Developer (Internship)",
    company: "Postcar Digital",
    description: "Maintained applications, analyzed runtime diagnostics, and coded full-stack enhancements to resolve active operational needs.",
    year: "2024 - 2024",
  },
];

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
            Who Am I?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 dark:text-white font-normal leading-tight">
            Curious mind, methodical execution.
          </h2>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-justify font-normal">
            Energetic and detail-oriented Software Developer with professional experience in mobile and web application development (Flutter, Vue.js, Next.js). Proven track record of building cross-platform applications, integrating RESTful APIs, and optimizing database interactions. A strong problem solver skilled in UI/UX prototyping with Figma and agile team collaboration, eager to drive technical   solutions in a dynamic growth environment.
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
          {/* Card 2: Education */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm shadow-sm"
          >
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              01. Education
            </h3>
            <div className="space-y-4">
              {EDUCATIONS.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`border-l-2 ${index === 0 ? "border-brand-yellow" : "border-slate-200 dark:border-slate-800"
                    } pl-4 py-0.5`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="font-serif text-base font-semibold text-slate-900 dark:text-white">
                      {edu.title}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Professional Experience */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm shadow-sm"
          >
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              02. Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCES.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`border-l-2 ${index === 0 ? "border-brand-yellow" : "border-slate-200 dark:border-slate-800"
                    } pl-4 py-0.5`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="font-serif text-base font-semibold text-slate-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        {exp.company}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                        ({exp.year})
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


