"use client";

import { motion } from "framer-motion";
import { SOURCES } from "@/content/data";
import { COPY } from "@/content/copy";
import { useLang, T } from "./LanguageProvider";

export default function Sources() {
  const { lang } = useLang();
  return (
    <section className="py-20 px-5">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-widestest text-line mb-3">
          <span className="text-L4">●</span>
          <span>{T(COPY.sourcesEyebrow, lang)}</span>
          <span className="flex-1 hairline-h max-w-[280px]" />
        </div>
        <p className="text-sm text-ash/70 max-w-3xl mb-6 italic leading-relaxed">{T(COPY.sourcesSub, lang)}</p>
        <div className="panel overflow-hidden">
          {SOURCES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="grid grid-cols-12 gap-3 px-4 py-3 border-b border-line/60 last:border-0"
            >
              <div className="col-span-12 md:col-span-5 font-display text-base text-bone">{T(s.who, lang)}</div>
              <div className="col-span-12 md:col-span-7 text-sm text-ash/75 leading-snug">{T(s.what, lang)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
