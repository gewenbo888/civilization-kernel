"use client";

import { LanguageProvider } from "@/components/LanguageProvider";
import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import StackIntro from "@/components/StackIntro";
import LayerSection from "@/components/LayerSection";
import FailureCascade from "@/components/FailureCascade";
import NextStack from "@/components/NextStack";
import Sources from "@/components/Sources";
import Closing from "@/components/Closing";
import { LAYERS } from "@/content/data";

export default function Page() {
  return (
    <LanguageProvider>
      <Background />
      <Nav />
      <main className="relative">
        <Hero />
        <Ticker />
        <StackIntro />
        {LAYERS.map((l) => (
          <LayerSection key={l.id} layer={l} />
        ))}
        <FailureCascade />
        <NextStack />
        <Sources />
        <Closing />
      </main>
    </LanguageProvider>
  );
}
