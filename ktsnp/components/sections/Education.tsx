"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "@/lib/constants";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Academic background and continuous learning journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-muted/30 border border-border hover:border-accent/50 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      <GraduationCap size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-lg text-foreground/80">{edu.field}</p>
                      <p className="text-foreground/70">{edu.institution}</p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-secondary mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-secondary mb-4 leading-relaxed">{edu.description}</p>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-sm font-semibold mb-2">Highlights:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-secondary flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            <motion.div
              className="p-6 rounded-xl bg-muted/30 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-accent" size={24} />
                <span className="text-lg font-semibold">Certified In</span>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-accent/5 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <span className="text-sm text-foreground/80">{cert}</span>
                  </motion.div>
                ))}
              </div>

              {/* View All Button */}
              <motion.a
                href="/files/allinonecertificates.pdf"
                target="_blank"
                className="mt-6 w-full px-4 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Award size={18} />
                View All Certificates
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
