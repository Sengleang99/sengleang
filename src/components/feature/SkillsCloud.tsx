"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

interface SkillBadge {
  id: number;
  label: string;
  emoji: string;
  colorClass: string; // Tailwind class for background
  textClass: string; // Tailwind class for text
  rotate: number; // degrees
  animationClass: string; // floating animation class
  size: "sm" | "md" | "lg";
}

const INITIAL_SKILLS: SkillBadge[] = [
  {
    id: 1,
    label: "TESTING",
    emoji: "✎",
    colorClass: "bg-pastel-purple hover:bg-indigo-300 dark:hover:bg-indigo-700/80",
    textClass: "text-indigo-950 dark:text-indigo-100",
    rotate: -4,
    animationClass: "animate-float-slow",
    size: "md",
  },
  {
    id: 2,
    label: "THINKING SYSTEMS",
    emoji: "🌐",
    colorClass: "bg-pastel-pink hover:bg-pink-300 dark:hover:bg-pink-700/80",
    textClass: "text-pink-950 dark:text-pink-100",
    rotate: 2,
    animationClass: "animate-float-medium",
    size: "lg",
  },
  {
    id: 3,
    label: "REFRAMING PROBLEMS",
    emoji: "♯",
    colorClass: "bg-pastel-teal hover:bg-emerald-300 dark:hover:bg-emerald-700/80",
    textClass: "text-emerald-950 dark:text-emerald-100",
    rotate: -1.5,
    animationClass: "animate-float-fast",
    size: "lg",
  },
  {
    id: 4,
    label: "IMPROVING UX",
    emoji: "☺",
    colorClass: "bg-pastel-yellow hover:bg-yellow-300 dark:hover:bg-yellow-700/80",
    textClass: "text-amber-950 dark:text-amber-100",
    rotate: 6,
    animationClass: "animate-float-slow",
    size: "md",
  },
  {
    id: 5,
    label: "MAKING IT POP",
    emoji: "🖌",
    colorClass: "bg-pastel-orange hover:bg-orange-300 dark:hover:bg-orange-700/80",
    textClass: "text-orange-950 dark:text-orange-100",
    rotate: -3,
    animationClass: "animate-float-medium",
    size: "lg",
  },
  {
    id: 6,
    label: "PROTOTYPING",
    emoji: "⇄",
    colorClass: "bg-pastel-gray hover:bg-slate-300 dark:hover:bg-slate-700/80",
    textClass: "text-slate-900 dark:text-slate-200",
    rotate: 12,
    animationClass: "animate-float-fast",
    size: "md",
  },
  {
    id: 7,
    label: "ROUNDING CORNERS",
    emoji: "☖",
    colorClass: "bg-pastel-lime hover:bg-lime-300 dark:hover:bg-lime-700/80",
    textClass: "text-lime-950 dark:text-lime-100",
    rotate: -8,
    animationClass: "animate-float-slow",
    size: "lg",
  },
  {
    id: 8,
    label: "CLEAN CODE",
    emoji: "⌨",
    colorClass: "bg-pastel-blue hover:bg-sky-300 dark:hover:bg-sky-700/80",
    textClass: "text-sky-950 dark:text-sky-100",
    rotate: 4,
    animationClass: "animate-float-medium",
    size: "md",
  },
  {
    id: 9,
    label: "SECURE APIs",
    emoji: "🛡",
    colorClass: "bg-red-100 hover:bg-red-200 dark:bg-red-950/40 dark:hover:bg-red-900/60",
    textClass: "text-red-950 dark:text-red-200",
    rotate: -2,
    animationClass: "animate-float-fast",
    size: "md",
  },
  {
    id: 10,
    label: "PERFORMANCE",
    emoji: "⚡",
    colorClass: "bg-brand-yellow hover:bg-yellow-400",
    textClass: "text-slate-950 font-bold",
    rotate: 5,
    animationClass: "animate-float-slow",
    size: "lg",
  },
];

export default function SkillsCloud() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full py-12 md:py-20 select-none overflow-visible relative flex flex-col items-center">
      {/* Visual Instruction Banner */}
      <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-8 animate-pulse">
        ✦ Interactive Playground: Drag & throw the badges ✦
      </span>

      {/* Cloud Container */}
      <div
        ref={containerRef}
        className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-5xl px-4 md:px-8 relative min-h-[320px] w-full overflow-visible"
      >
        {INITIAL_SKILLS.map((skill) => {
          const sizeClasses =
            skill.size === "lg"
              ? "px-5 py-3 md:px-7 md:py-4.5 text-xs md:text-sm"
              : "px-4 py-2.5 md:px-5.5 md:py-3.5 text-xs";

          return (
            <motion.div
              key={skill.id}
              drag
              dragConstraints={containerRef}
              dragElastic={0.45}
              dragMomentum={true}
              whileHover={{ scale: 1.08 }}
              whileDrag={{ scale: 1.15, zIndex: 100 }}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 14,
                delay: skill.id * 0.05,
              }}
            >
              <div
                style={{ transform: `rotate(${skill.rotate}deg)` }}
                className={`
                  ${skill.colorClass} 
                  ${skill.textClass} 
                  ${sizeClasses}
                  ${skill.animationClass}
                  font-mono rounded-full font-medium tracking-wide shadow-sm border border-black/5 dark:border-white/5 
                  cursor-grab active:cursor-grabbing transition-shadow duration-200
                  flex items-center gap-2 whitespace-nowrap
                  hover:shadow-md active:shadow-xl
                `}
              >
                <span>{skill.label}</span>
                <span className="text-base leading-none select-none">{skill.emoji}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

