"use client";

import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: PERSONAL_INFO.github, label: "GitHub" },
  { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: PERSONAL_INFO.twitter, label: "Twitter" },
  { icon: Instagram, href: PERSONAL_INFO.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-foreground transition-colors"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Email */}
          <motion.a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-sm text-secondary hover:text-accent transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {PERSONAL_INFO.email}
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-secondary text-center">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
