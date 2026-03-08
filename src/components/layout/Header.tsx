"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { mainNav, portfolioNav } from "@/config/navigation";
import MobileNav from "./MobileNav";

const navVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{ background: 'rgba(10,10,15,0.85)' }}>
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl px-6 flex items-center justify-between py-4 border-b border-border"
      >
        <motion.div variants={itemVariants}>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link
              href="/"
              className="text-lg font-bold font-display text-accent block leading-normal"
            >
              qyrn://blog
            </Link>
          </motion.div>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6">
          {mainNav.map((item) => (
            <motion.div key={item.href} variants={itemVariants}>
              <Link
                href={item.href}
                className="text-xs text-text-dim hover:text-accent transition-colors tracking-wide uppercase"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}

          <motion.span variants={itemVariants} className="w-px h-4 bg-border" />

          {portfolioNav.map((item) => (
            <motion.div key={item.href} variants={itemVariants}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wide uppercase transition-colors"
                style={{ color: item.color }}
                title={item.description}
              >
                {item.label}
              </a>
            </motion.div>
          ))}
        </nav>

        <motion.button
          variants={itemVariants}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-dim hover:text-accent transition-colors p-1"
          aria-label="Menu"
          whileTap={{ scale: 0.9 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </motion.div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
