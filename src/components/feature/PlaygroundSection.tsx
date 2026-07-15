"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PlaygroundSection() {
  const [blur, setBlur] = useState(12);
  const [opacity, setOpacity] = useState(60);
  const [radius, setRadius] = useState(24);
  const [color, setColor] = useState("slate");

  const colorMap: { [key: string]: { light: string; dark: string } } = {
    slate: { light: "255, 255, 255", dark: "15, 23, 42" },
    purple: { light: "224, 215, 255", dark: "76, 29, 149" },
    teal: { light: "212, 245, 233", dark: "17, 94, 89" },
    orange: { light: "255, 213, 194", dark: "124, 45, 18" },
  };

  const selectedColor = colorMap[color] || colorMap.slate;

  // Generate CSS style strings
  const glassStyle = {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    borderRadius: `${radius}px`,
    background: `rgba(${selectedColor.light}, ${opacity / 100})`,
    border: `1px solid rgba(255, 255, 255, 0.4)`,
  };

  const glassDarkStyle = {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    borderRadius: `${radius}px`,
    background: `rgba(${selectedColor.dark}, ${opacity / 100})`,
    border: `1px solid rgba(255, 255, 255, 0.05)`,
  };

  return (
    <section id="playground" className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 border-t border-slate-100 dark:border-slate-800/80">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col mb-12 md:mb-16"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
          Interactive Experiments
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900 dark:text-white font-normal">
          The Design Engine Playground
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xl">
          A sandboxed interactive lab built to preview design configurations and dynamic styling variables on the fly.
        </p>
      </motion.div>

      {/* Interactive Tool Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* Left: Controls Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm flex flex-col justify-between"
        >
          <div className="space-y-6">
            <h3 className="font-serif text-lg text-slate-900 dark:text-white mb-2">
              Glassmorphism Customizer
            </h3>

            {/* Color Select */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                Theme Tone
              </span>
              <div className="flex gap-2">
                {Object.keys(colorMap).map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all cursor-pointer ${
                      color === c
                        ? "bg-slate-900 border-slate-900 text-white dark:bg-white dark:border-white dark:text-slate-900"
                        : "border-slate-250 hover:bg-slate-50 text-slate-600 dark:border-slate-800 dark:hover:bg-slate-850 dark:text-slate-400"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Blur */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="font-medium text-slate-400 uppercase tracking-wider">Backdrop Blur</span>
                <span className="text-slate-700 dark:text-slate-350">{blur}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="32"
                value={blur}
                onChange={(e) => setBlur(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
              />
            </div>

            {/* Slider 2: Opacity */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="font-medium text-slate-400 uppercase tracking-wider">Color Opacity</span>
                <span className="text-slate-700 dark:text-slate-350">{opacity}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="95"
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
              />
            </div>

            {/* Slider 3: Border Radius */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="font-medium text-slate-400 uppercase tracking-wider">Rounding Corners</span>
                <span className="text-slate-700 dark:text-slate-350">{radius}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="48"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
              />
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block mb-1">
              OUTPUT CLASSES
            </span>
            <code className="text-xs font-mono block p-2 bg-slate-50 dark:bg-slate-950/40 rounded-lg border border-slate-150 dark:border-slate-850/50 break-all text-slate-700 dark:text-slate-300">
              {`bg-${color}-${opacity} backdrop-blur-[${blur}px] rounded-[${radius}px]`}
            </code>
          </div>
        </motion.div>

        {/* Right: Live Preview Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-950/40 p-8 flex items-center justify-center relative overflow-hidden min-h-[300px]"
        >
          {/* Animated Background blobs just to showcase blur effect */}
          <div className="absolute top-1/4 left-1/4 h-24 w-24 rounded-full bg-brand-yellow/30 blur-2xl animate-float-medium" />
          <div className="absolute bottom-1/4 right-1/4 h-32 w-32 rounded-full bg-sky-400/20 blur-2xl animate-float-slow" />
          <div className="absolute top-1/2 right-1/3 h-20 w-20 rounded-full bg-pink-400/25 blur-xl animate-float-fast" />

          {/* Styled Card (Preview Object) */}
          <div
            style={glassStyle}
            className="w-full max-w-sm p-6 md:p-8 shadow-lg relative z-10 block dark:hidden select-none transition-all duration-300 border border-white/40"
          >
            <div className="h-3 w-12 rounded-full bg-slate-350/50 mb-6" />
            <h4 className="font-serif text-lg text-slate-900 mb-2">Dynamic Render Card</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Adjust sliders to watch this glassmorphic card live-compile colors, backdrop filters, and edge rounding variables.
            </p>
            <div className="flex justify-between items-center">
              <div className="h-6 w-16 rounded bg-slate-300/40" />
              <div className="h-6 w-6 rounded-full bg-slate-900" />
            </div>
          </div>

          <div
            style={glassDarkStyle}
            className="w-full max-w-sm p-6 md:p-8 shadow-2xl relative z-10 hidden dark:block select-none transition-all duration-300"
          >
            <div className="h-3 w-12 rounded-full bg-slate-700/50 mb-6" />
            <h4 className="font-serif text-lg text-white mb-2">Dynamic Render Card</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Adjust sliders to watch this glassmorphic card live-compile colors, backdrop filters, and edge rounding variables.
            </p>
            <div className="flex justify-between items-center">
              <div className="h-6 w-16 rounded bg-slate-800/40" />
              <div className="h-6 w-6 rounded-full bg-white" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


