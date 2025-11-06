"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

const skillCategories = [
  { name: "Languages", skills: SKILLS.languages, icon: "💻" },
  { name: "Frontend", skills: SKILLS.frontend, icon: "🎨" },
  { name: "Backend", skills: SKILLS.backend, icon: "⚙️" },
  { name: "Tools", skills: SKILLS.tools, icon: "🔧" },
  { name: "Concepts", skills: SKILLS.concepts, icon: "🧠" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit built through years of learning, building, and solving
            real-world problems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="p-6 rounded-xl border border-border bg-background hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1 text-sm rounded-full bg-muted text-foreground hover:bg-accent hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
