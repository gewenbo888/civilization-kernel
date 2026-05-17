"use client";

import { motion } from "framer-motion";
import { HERO_STATS } from "@/content/data";
import { COPY } from "@/content/copy";
import { useLang, T } from "./LanguageProvider";
import Counter from "./Counter";

function parseValue(v: string): { num: number; suffix?: string; prefix?: string; decimals: number } {
  const m = v.replace(/,/g, "").match(/^([^0-9~]*)([0-9.]+)(.*)$/);
  if (!m) return { num: 0, decimals: 0 };
  const prefix = (v.startsWith("~") ? "~" : "") + (m[1] || "");
  const num = parseFloat(m[2]);
  const decimals = m[2].includes(".") ? m[2].split(".")[1].length : 0;
  const suffix = (m[3] || "").trim();
  return { num, prefix, suffix: suffix || undefined, decimals };
}

export default function Hero() {
  const { lang } = useLang();
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end pt-24 pb-16 px-5">
      <div className="absolute inset-x-0 top-0 h-screen grid-bg opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] w-full">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 panel p-3 flex items-start gap-3"
        >
          <span className="font-mono text-[10px] tracking-widerer text-L4 flex items-center gap-2 shrink-0 pt-0.5">
            <span className="inline-block w-2 h-2 bg-L4 blip" />
            EDITORIAL
          </span>
          <span className="text-xs md:text-sm text-ash/85 leading-snug">{T(COPY.banner, lang)}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono text-[10px] tracking-widestest text-line mb-4"
        >
          {T(COPY.hero.eyebrow, lang)}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[13vw] md:text-[9vw] lg:text-[8rem] leading-[0.92] tracking-tight text-bone"
        >
          <span>{T(COPY.hero.titleA, lang)} </span>
          <span className="text-L1">{T(COPY.hero.titleB, lang)} </span>
          <span
            style={{
              background: "linear-gradient(90deg, #ff9a3d 0%, #22c3ff 50%, #ff5e6c 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {T(COPY.hero.titleC, lang)}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 max-w-3xl text-lg md:text-xl text-ash/85 leading-relaxed font-display"
        >
          {T(COPY.hero.sub, lang)}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-5 max-w-2xl text-sm text-ash/55 leading-relaxed italic"
        >
          {T(COPY.hero.note, lang)}
        </motion.p>

        {/* hero stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-14"
        >
          <div className="font-mono text-[10px] tracking-widerer text-line mb-3">
            {T(COPY.heroStatsTag, lang)}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {HERO_STATS.map((s, i) => {
              const p = parseValue(s.value);
              const colors = ["#7a6048", "#ff9a3d", "#22c3ff", "#3eb4ff", "#9b80ff", "#1fc977"];
              const c = colors[i % colors.length];
              return (
                <div key={i} className="panel p-4 relative" style={{ borderTop: `2px solid ${c}` }}>
                  <div className="font-mono text-[10px] tracking-widerer text-line mb-3 leading-snug">
                    {T(s.label, lang)}
                  </div>
                  <div className="font-display text-3xl md:text-4xl leading-none" style={{ color: c }}>
                    <Counter to={p.num} prefix={p.prefix} suffix={p.suffix} decimals={p.decimals} />
                  </div>
                  <div className="mt-3 font-mono text-[10px] text-ash/55 leading-snug">{T(s.unit, lang)}</div>
                  <div className="mt-1 font-mono text-[9px] text-ash/40 leading-snug">{T(s.note, lang)}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 flex items-center gap-3 font-mono text-[10px] tracking-widerer text-line"
        >
          <span className="w-12 h-px bg-line" />
          <span>{T(COPY.hero.scrollCue, lang)}</span>
        </motion.div>
      </div>
    </section>
  );
}
