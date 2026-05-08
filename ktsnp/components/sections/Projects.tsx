"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

import { PROJECTS } from "@/lib/constants";

function BrowserWindow({ url, title, image }: { url: string; title: string; image: string }) {
  const isLive = url && url !== "#";

  return (
    <div className="relative w-full aspect-video rounded-t-xl overflow-hidden border-b border-border bg-background group-hover:border-accent/30 transition-colors">
      {/* Browser Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 ml-4 h-5 rounded bg-background/50 border border-border flex items-center px-2">
          <span className="text-[10px] text-secondary truncate opacity-50">
            {isLive ? url : "local://projects/" + title.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>
      </div>

      {/* Browser Content */}
      <div className="relative w-full h-[calc(100%-36px)] overflow-hidden bg-muted/20">
        {isLive ? (
          <>
            <iframe
              src={url}
              className="w-full h-full border-none pointer-events-none scale-[0.25] origin-top-left"
              style={{ width: "400%", height: "400%" }}
              title={title}
              loading="lazy"
            />
            {/* Overlay to catch clicks and prevent iframe interaction issues during scroll */}
            <div className="absolute inset-0 z-10 bg-transparent" />
          </>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 px-6">
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
            A collection of products and platforms I&apos;ve built, focusing on AI innovation,
            scalable business systems, and immersive digital experiences.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${filter === "all"
              ? "bg-foreground text-background"
              : "text-secondary hover:text-foreground"
              }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${filter === "featured"
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
              className="group h-full"
            >
              <div className="flex flex-col h-full overflow-hidden rounded-xl border border-border bg-muted/10 hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-accent/5">
                {/* Browser Preview */}
                <BrowserWindow url={project.demo} title={project.title} image={project.image} />

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-accent transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-accent transition-colors"
                          aria-label="View live site"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-secondary mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-accent/5 text-accent border border-accent/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] text-secondary self-center">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
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
