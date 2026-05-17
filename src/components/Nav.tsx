"use client";

import { useEffect, useState } from "react";
import { useLang, T } from "./LanguageProvider";
import { COPY } from "@/content/copy";

export default function Nav() {
  const { lang, toggle } = useLang();
  const [active, setActive] = useState("hero");
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () => setClock(new Date().toISOString().replace("T", " ").slice(0, 19) + "Z");
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { for (const e of entries) if (e.isIntersecting) setActive(e.target.id); },
      { threshold: 0.35 }
    );
    COPY.navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="bg-void/85 backdrop-blur-md border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-2.5 flex items-center gap-6 font-mono text-[10px] tracking-widerer text-ash">
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="inline-block w-2 h-2 bg-L7 blip" />
            <span className="text-bone font-display tracking-widerer text-sm">{T(COPY.brand, lang)}</span>
            <span className="text-line hidden sm:inline">{T(COPY.brandSub, lang)}</span>
          </a>
          <nav className="hidden xl:flex items-center gap-3 ml-2 overflow-x-auto">
            {COPY.navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`hover:text-bone transition-colors whitespace-nowrap ${
                  active === l.id ? "text-bone" : "text-ash/60"
                }`}
              >
                {T(l.label, lang)}
              </a>
            ))}
          </nav>
          <div className="flex-1" />
          <div className="hidden md:flex items-center gap-3 text-[10px] num text-ash/70">
            <span className="text-line">UTC</span>
            <span>{clock}</span>
            <span className="text-line">RUNTIME</span>
            <span className="text-bone">HOLOCENE</span>
          </div>
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="ml-2 px-3 py-1 border border-line hover:border-bone transition-colors flex items-center gap-1.5"
          >
            <span className={lang === "en" ? "text-bone" : "text-line"}>EN</span>
            <span className="text-line">/</span>
            <span className={lang === "zh" ? "text-bone" : "text-line"} style={{ fontFamily: "Noto Sans SC, sans-serif" }}>中</span>
          </button>
        </div>
      </div>
    </header>
  );
}
