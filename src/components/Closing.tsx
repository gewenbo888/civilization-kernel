"use client";

import { motion } from "framer-motion";
import { COPY } from "@/content/copy";
import { useLang, T } from "./LanguageProvider";

export default function Closing() {
  const { lang } = useLang();
  return (
    <section id="closing" className="relative min-h-screen flex items-center justify-center py-32 px-5 overflow-hidden">
      {/* spectrum of expanding rings, each in a different layer's color */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[
          "#7a6048", "#ff9a3d", "#22c3ff", "#3eb4ff",
          "#9b80ff", "#1fc977", "#ffd23d", "#ff5e6c",
        ].map((c, r) => (
          <motion.div
            key={r}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: [0, 1.4 + r * 0.4], opacity: [0.5, 0] }}
            transition={{ duration: 8, delay: r * 0.6, repeat: Infinity, ease: "easeOut" }}
            viewport={{ once: false }}
            className="absolute rounded-full border"
            style={{
              width: `${260 + r * 80}px`,
              height: `${260 + r * 80}px`,
              borderColor: `${c}33`,
            }}
          />
        ))}
        <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-40 glow-pulse"
             style={{ background: "radial-gradient(circle, #9b80ff 0%, transparent 70%)" }} />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-mono text-[10px] tracking-widestest text-line mb-8"
        >
          {T(COPY.close.eyebrow, lang)}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-bone"
        >
          {T(COPY.close.titleA, lang)}
          <span className="text-L4">{T(COPY.close.titleAcc, lang)}</span>
          {T(COPY.close.titleB, lang)}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 space-y-2 font-display text-lg md:text-xl text-ash"
        >
          {COPY.close.lines.map((l, i) => (
            <div key={i} className="leading-snug">{T(l.a, lang)}</div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 max-w-2xl mx-auto text-base text-ash/75 leading-relaxed"
        >
          {T(COPY.close.body, lang)}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 1.2 }}
          className="mt-14 panel p-8 max-w-2xl mx-auto"
          style={{ borderColor: "rgba(155,128,255,0.35)" }}
        >
          <div className="font-display text-xl md:text-2xl text-L4 leading-snug">
            “{COPY.close.quote.en}”
          </div>
          <div className="text-base text-ash/85 mt-3" style={{ fontFamily: "var(--font-han)" }}>
            “{COPY.close.quote.zh}”
          </div>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-12 font-mono text-[10px] tracking-widestest text-line"
        >
          {T(COPY.close.foot, lang)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-6 flex items-center justify-center gap-3 font-mono text-[10px] tracking-widerer text-line flex-wrap"
        >
          <a href="https://psyverse.fun" className="hover:text-bone transition-colors">psyverse.fun</a>
          <span>·</span>
          <a href="https://psyverse.fun/atlas.html" className="hover:text-bone transition-colors">atlas</a>
          <span>·</span>
          <a href="https://electric-civilization.psyverse.fun" className="hover:text-L1 transition-colors">electric-civilization</a>
          <span>·</span>
          <a href="https://token-civilization.psyverse.fun" className="hover:text-L5 transition-colors">token-civilization</a>
        </motion.div>
      </div>
    </section>
  );
}
