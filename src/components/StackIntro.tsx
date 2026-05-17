"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import StackTower from "./StackTower";
import { COPY } from "@/content/copy";
import { useLang, T } from "./LanguageProvider";

export default function StackIntro() {
  const { lang } = useLang();
  return (
    <section id="stack" className="relative py-28 px-5">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          color="#9b80ff"
          eyebrow={T(COPY.stack.eyebrow, lang)}
          title={
            <>
              {T(COPY.stack.titleA, lang)}
              <span className="text-L4">{T(COPY.stack.titleAcc, lang)}</span>
              {T(COPY.stack.titleB, lang)}
            </>
          }
          sub={T(COPY.stack.sub, lang)}
        />

        <StackTower interactive />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-8 panel p-6 text-center"
          style={{ borderColor: "rgba(155,128,255,0.35)" }}
        >
          <div className="font-mono text-[10px] tracking-widestest text-line mb-2">DOCTRINE</div>
          <div className="font-display text-2xl md:text-3xl text-L4 leading-snug">
            “{T(COPY.stack.doctrine, lang)}”
          </div>
        </motion.div>
      </div>
    </section>
  );
}
