"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{ABOUT.title}</h2>
        </motion.div>

        {/* Story */}
        <div className="space-y-6 mb-16">
          {ABOUT.story.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-lg text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {ABOUT.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-muted/50 border border-border"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {highlight.value}
              </div>
              <div className="text-sm text-secondary">{highlight.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
