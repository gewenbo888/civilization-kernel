"use client";

import { motion } from "framer-motion";
import type { Layer } from "@/content/data";
import { LAYERS } from "@/content/data";
import { COPY } from "@/content/copy";
import { useLang, T } from "./LanguageProvider";

export default function LayerSection({ layer }: { layer: Layer }) {
  const { lang } = useLang();
  const fields = COPY.layerFields;
  const c = layer.color;

  // Find this layer's depth index for the mini-stack indicator
  const depth = LAYERS.findIndex((l) => l.id === layer.id);

  return (
    <section id={layer.id} className="relative py-24 px-5">
      <div className="mx-auto max-w-[1400px]">
        {/* eyebrow */}
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-widestest text-line mb-5">
          <span style={{ color: c }}>● {layer.idx}</span>
          <span style={{ color: c }}>{T(layer.name, lang).toUpperCase()}</span>
          <span className="text-line" style={{ fontFamily: "var(--font-han)" }}>· {layer.han}</span>
          <span className="flex-1 hairline-h max-w-[240px]" />
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-bone mb-2"
        >
          {T(layer.name, lang)}
          <span className="ml-3 align-baseline text-xl md:text-2xl text-line">{layer.idx}</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-xl md:text-2xl mb-8"
          style={{ color: c }}
        >
          “{T(layer.one, lang)}”
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-5 mb-6">
          {/* left — narrative */}
          <div className="lg:col-span-8">
            <div className="panel p-6 mb-4" style={{ borderTop: `2px solid ${c}` }}>
              <div className="font-mono text-[10px] tracking-widerer text-line mb-3">{T(fields.body, lang)}</div>
              <p
                className="text-base md:text-[17px] text-ash leading-[1.75] font-display"
                style={lang === "zh" ? { fontFamily: "var(--font-han)", letterSpacing: "0.02em" } : undefined}
              >
                {T(layer.body, lang)}
              </p>
            </div>

            <div className="panel p-5">
              <div className="font-mono text-[10px] tracking-widerer text-line mb-3">{T(fields.examples, lang)}</div>
              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                {layer.examples.map((ex, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-2 text-sm text-ash/85"
                  >
                    <span className="mt-1.5 inline-block w-1.5 h-1.5 shrink-0" style={{ background: c }} />
                    <span>{T(ex, lang)}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* right — metric + position + insight */}
          <div className="lg:col-span-4 space-y-4">
            <div className="panel p-5">
              <div className="font-mono text-[10px] tracking-widerer text-line mb-2">{T(fields.metric, lang)}</div>
              <div className="font-mono text-[10px] text-ash/65 mb-2 leading-snug">{T(layer.metric.label, lang)}</div>
              <div className="font-display text-3xl md:text-4xl num leading-none" style={{ color: c }}>
                {layer.metric.value}
              </div>
              <div className="font-mono text-[10px] text-ash/55 mt-3">{T(layer.metric.sub, lang)}</div>
            </div>

            {/* mini-stack with current layer highlighted */}
            <div className="panel-tight p-3">
              <div className="font-mono text-[10px] tracking-widerer text-line mb-2 px-1">POSITION IN STACK</div>
              <div className="space-y-px">
                {[...LAYERS].reverse().map((l, i) => {
                  const isThis = l.id === layer.id;
                  return (
                    <div
                      key={l.id}
                      className="flex items-center gap-2 px-2 py-1 text-[10px] font-mono"
                      style={{
                        background: isThis ? `${l.color}24` : "transparent",
                        borderLeft: `2px solid ${isThis ? l.color : "transparent"}`,
                        opacity: isThis ? 1 : 0.55,
                      }}
                    >
                      <span style={{ color: l.color }}>{l.idx}</span>
                      <span className="text-ash">{T(l.name, lang)}</span>
                    </div>
                  );
                })}
              </div>
              <div className="px-2 py-1 mt-1 font-mono text-[9px] text-line">
                {depth === 0 ? "BASE LAYER · no dependencies below" : `depends on L0…L${depth - 1}`}
              </div>
            </div>

            <div className="panel p-5" style={{ borderColor: `${c}55` }}>
              <div className="font-mono text-[10px] tracking-widerer mb-2" style={{ color: c }}>
                {T(fields.insight, lang)}
              </div>
              <div
                className="font-display text-lg md:text-xl leading-snug"
                style={{ color: c }}
              >
                “{T(layer.insight, lang)}”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
