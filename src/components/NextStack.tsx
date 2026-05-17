"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { NEXT_STACK } from "@/content/data";
import { COPY } from "@/content/copy";
import { useLang, T } from "./LanguageProvider";

export default function NextStack() {
  const { lang } = useLang();
  const layersTopDown = [...NEXT_STACK].reverse();

  return (
    <section id="next" className="relative py-28 px-5">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          color="#1fc977"
          eyebrow={T(COPY.next.eyebrow, lang)}
          title={
            <>
              {T(COPY.next.titleA, lang)}
              <span className="text-L5">{T(COPY.next.titleAcc, lang)}</span>
              {T(COPY.next.titleB, lang)}
            </>
          }
          sub={T(COPY.next.sub, lang)}
        />

        <div className="panel p-5 mb-8">
          <div className="font-mono text-[10px] tracking-widerer text-line mb-4">
            {T(COPY.next.stackHead, lang)}
          </div>
          <div className="space-y-1.5">
            {layersTopDown.map((l, i) => {
              const isNew = l.idx === "L5" || l.idx === "L6"; // Agents + Tokens
              return (
                <motion.div
                  key={l.idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-4 px-4 py-3"
                  style={{
                    background: `linear-gradient(90deg, ${l.color}26 0%, ${l.color}06 80%, transparent 100%)`,
                    borderLeft: `2px solid ${l.color}`,
                  }}
                >
                  <span className="font-mono text-[11px] tracking-widerer w-10" style={{ color: l.color }}>
                    {l.idx}
                  </span>
                  <span className="font-display text-xl text-bone w-44 shrink-0">{T(l.name, lang)}</span>
                  <span className="font-mono text-[11px] text-ash/55 hidden sm:inline" style={{ fontFamily: "var(--font-han)" }}>
                    {l.han}
                  </span>
                  <span className="flex-1 text-sm text-ash/85">{T(l.body, lang)}</span>
                  {isNew && (
                    <span
                      className="font-mono text-[9px] tracking-widerer px-2 py-0.5 border ml-2 shrink-0"
                      style={{ color: l.color, borderColor: `${l.color}88` }}
                    >
                      + NEW
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="panel p-8 text-center"
          style={{ borderColor: "rgba(31,201,119,0.35)" }}
        >
          <div className="font-mono text-[10px] tracking-widestest text-line mb-3">{T(COPY.next.thesisTag, lang)}</div>
          <div className="font-display text-3xl md:text-5xl text-L5 leading-tight">
            {T(COPY.next.thesisHead, lang)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
