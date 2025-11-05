"use client";

import { motion } from "framer-motion";
import { ESSENTIAL_ALGORITHMS } from "@/lib/constants";

export default function AlgorithmShowcase() {
  return (
    <section id="algorithms" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">

        {/* Essential Algorithms List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Essential Algorithms Every Programmer Should Know</h2>
          <p className="text-secondary text-center max-w-2xl mx-auto mb-12">
            A comprehensive list of fundamental algorithms across different categories that form the foundation of computer science and software engineering.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(ESSENTIAL_ALGORITHMS).map(([key, category], catIndex) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="p-6 rounded-xl bg-background border border-border hover:border-foreground/20 transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
                <div className="space-y-3">
                  {category.algorithms.map((algo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-foreground">{algo.name}</span>
                          <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">
                            {algo.complexity}
                          </span>
                        </div>
                        <p className="text-sm text-secondary">{algo.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
