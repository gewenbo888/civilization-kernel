"use client";

import { motion } from "framer-motion";

export default function SectionHead({
  eyebrow, title, sub, color = "#9b80ff",
}: { eyebrow: string; title: string | React.ReactNode; sub?: string; color?: string }) {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 font-mono text-[10px] tracking-widestest text-line mb-5"
      >
        <span style={{ color }}>●</span>
        <span>{eyebrow}</span>
        <span className="flex-1 hairline-h max-w-[260px]" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-bone"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-5 max-w-3xl text-lg text-ash/80 leading-relaxed"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
