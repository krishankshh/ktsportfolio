"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "/images/project1.jpg",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task manager with real-time updates, drag-and-drop interface, and team features.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/images/project2.jpg",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather app with forecasts, historical data, and interactive maps using multiple APIs.",
    tech: ["React", "OpenWeather API", "Charts.js"],
    image: "/images/project3.jpg",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Portfolio Generator",
    description:
      "SaaS platform that helps developers create and deploy beautiful portfolios in minutes.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
    image: "/images/project4.jpg",
    github: "#",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.featured);

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-secondary max-w-2xl">
            A collection of projects that showcase my skills in web development, UI/UX design,
            and problem-solving. Each project is built with attention to detail and user
            experience.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === "all"
                ? "bg-foreground text-background"
                : "text-secondary hover:text-foreground"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === "featured"
                ? "bg-foreground text-background"
                : "text-secondary hover:text-foreground"
            }`}
          >
            Featured
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl border border-border bg-muted/30 hover:border-foreground/20 transition-all duration-300">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                  <span className="text-6xl opacity-10">🚀</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="text-secondary hover:text-foreground transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.live}
                        className="text-secondary hover:text-foreground transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-muted text-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
          >
            View all projects on GitHub
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const PERSONAL_INFO = {
  github: "https://github.com/krishankshh",
};
