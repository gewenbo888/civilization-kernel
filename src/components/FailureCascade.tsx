"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { CASCADE, FAILURE_HISTORY } from "@/content/data";
import { COPY } from "@/content/copy";
import { useLang, T } from "./LanguageProvider";

function formatSec(sec: number, lang: "en" | "zh") {
  if (sec === 0) return lang === "zh" ? "0" : "T=0";
  if (sec < 60) return `${sec}s`;
  if (sec < 3600) return `${Math.round(sec / 60)}m`;
  if (sec < 86400) return `${Math.round(sec / 3600)}h`;
  if (sec < 604800) return `${Math.round(sec / 86400)}d`;
  return `${Math.round(sec / 604800)}w`;
}

export default function FailureCascade() {
  const { lang } = useLang();
  return (
    <section id="failure" className="relative py-28 px-5">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          color="#ff5e6c"
          eyebrow={T(COPY.failure.eyebrow, lang)}
          title={
            <>
              {T(COPY.failure.titleA, lang)}
              <span className="text-red-400">{T(COPY.failure.titleAcc, lang)}</span>
              {T(COPY.failure.titleB, lang)}
            </>
          }
          sub={T(COPY.failure.sub, lang)}
        />

        <div className="grid lg:grid-cols-12 gap-5">
          {/* cascade visualization */}
          <div className="lg:col-span-7">
            <div className="font-mono text-[10px] tracking-widerer text-line mb-3">
              {T(COPY.failure.cascadeHead, lang)}
            </div>
            <div className="panel-danger p-5">
              <div className="space-y-2">
                {CASCADE.map((n, i) => (
                  <motion.div
                    key={n.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-8"
                  >
                    {/* timeline dot */}
                    <span
                      className="absolute left-0 top-2 w-3 h-3 rounded-full blip"
                      style={{
                        background: i === 0 ? "#ff9a3d" : `rgba(255,77,106,${0.45 + i * 0.08})`,
                        boxShadow: i === 0 ? "0 0 12px #ff9a3d" : "0 0 12px rgba(255,77,106,0.6)",
                      }}
                    />
                    {/* line down to next */}
                    {i < CASCADE.length - 1 && (
                      <span
                        className="absolute left-[5px] top-5 w-px"
                        style={{
                          height: "calc(100% + 4px)",
                          background: "linear-gradient(180deg, rgba(255,77,106,0.5) 0%, rgba(255,77,106,0.1) 100%)",
                        }}
                      />
                    )}
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="font-mono text-[10px] text-line">{T(COPY.failure.secLabel, lang)}{formatSec(n.sec, lang)}</span>
                      <span className="font-display text-xl text-bone">{T(n.label, lang)}</span>
                    </div>
                    <div className="text-sm text-ash/85 mt-1 leading-snug">{T(n.impact, lang)}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* historical sidebar */}
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] tracking-widerer text-line mb-3">
              {T(COPY.failure.histHead, lang)}
            </div>
            <div className="panel overflow-hidden">
              {FAILURE_HISTORY.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="px-4 py-3 border-b border-line/60 last:border-0"
                >
                  <div className="font-display text-base text-bone">{T(h.who, lang)}</div>
                  <div className="text-xs text-ash/75 leading-snug mt-1">{T(h.what, lang)}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
