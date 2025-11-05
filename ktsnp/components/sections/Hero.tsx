"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import dynamic from "next/dynamic";

// Dynamically import 3D avatar to avoid SSR issues
const AvatarCanvas = dynamic(() => import("@/components/3d/AvatarCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  const words = ["Developer", "Designer", "Problem Solver"];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
                             linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Section - Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm text-secondary">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            className="text-xl md:text-2xl text-secondary mb-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatedText words={words} />
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-base md:text-lg text-secondary mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors font-medium"
            >
              Get in touch
            </a>
            <a
              href="/files/KrishankShahResume.pdf"
              download
              className="px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-border transition-colors font-medium inline-flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center lg:justify-start gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Avatar Section - Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block h-[600px] relative"
        >
          <AvatarCanvas />
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
        }}
      >
        <a href="#about" className="text-secondary hover:text-foreground transition-colors">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}

// Animated text component for rotating words
function AnimatedText({ words }: { words: string[] }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-foreground">I'm a</span>
      <motion.span
        key={words[0]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-accent font-semibold"
      >
        {words[0]}
      </motion.span>
    </div>
  );
}
