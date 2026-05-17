"use client";

import { motion } from "framer-motion";
import { LAYERS } from "@/content/data";
import { useLang, T } from "./LanguageProvider";

export default function StackTower({ interactive = true }: { interactive?: boolean }) {
  const { lang } = useLang();
  // Render top-to-bottom (L7 at top, L0 at base)
  const layersTopDown = [...LAYERS].reverse();

  return (
    <div className="panel p-5">
      <div className="flex items-center justify-between font-mono text-[10px] tracking-widerer text-line mb-4">
        <span>STACK · BASE → TOP / 栈 · 自下而上</span>
        <span>{interactive ? "▶ CLICK TO JUMP" : ""}</span>
      </div>
      <div className="space-y-1.5">
        {layersTopDown.map((l, i) => (
          <motion.a
            key={l.id}
            href={interactive ? `#${l.id}` : undefined}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="block relative group"
          >
            <div
              className="layer-bar flex items-center gap-4 px-4 py-3 transition-transform group-hover:translate-x-1"
              style={{
                background: `linear-gradient(90deg, ${l.color}26 0%, ${l.color}06 80%, transparent 100%)`,
                borderLeft: `2px solid ${l.color}`,
                ["--bar-color" as string]: `${l.color}1c`,
              }}
            >
              <span className="font-mono text-[11px] tracking-widerer w-10" style={{ color: l.color }}>
                {l.idx}
              </span>
              <span className="font-display text-xl text-bone w-44 shrink-0">{T(l.name, lang)}</span>
              <span className="font-mono text-[11px] text-ash/55 hidden sm:inline" style={{ fontFamily: "var(--font-han)" }}>
                {l.han}
              </span>
              <span className="flex-1 text-sm text-ash/85 hidden md:inline">{T(l.one, lang)}</span>
            </div>
            {/* dependency arrow */}
            {i < layersTopDown.length - 1 && (
              <div className="absolute left-12 -bottom-1 text-[10px] text-line">↑ depends on</div>
            )}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
