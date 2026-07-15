"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    // Simulate API call for form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 border-t border-slate-100 dark:border-slate-800/80">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 sticky top-28"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 block">
            Say Hello
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 dark:text-white font-normal leading-tight">
            Let&apos;s contact each other.
          </h2>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
            I’m always open to new challenges and collaborations. If you’d like to discuss a project, explore potential opportunities, or simply want to say hello, feel free to reach out using the form.
          </p>
        </motion.div>

        {/* Right column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-8"
        >
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/20 backdrop-blur-sm shadow-sm space-y-6"
          >
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-slate-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-slate-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Row 2: Message */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="What project are you working on?"
                className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-slate-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Submit & Status info */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-yellow text-slate-950 text-sm font-semibold tracking-wide shadow-md hover:shadow-lg hover:bg-yellow-400 active:scale-95 transition-all duration-300 disabled:opacity-55 cursor-pointer"
              >
                {status === "submitting" ? "Sending..." : "Submit Message"}
              </button>

              {status === "success" && (
                <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/30 animate-pulse">
                  ✓ Message sent! I will respond shortly.
                </span>
              )}

              {status === "error" && (
                <span className="text-xs font-mono font-semibold text-rose-600 dark:text-rose-450 bg-rose-50 dark:bg-rose-950/20 px-3.5 py-1.5 rounded-full border border-rose-100 dark:border-rose-900/30">
                  ✗ An error occurred. Please try again.
                </span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}


