import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const TITLE_EN = "Civilization Kernel · Civilization runs like software";
const TITLE_ZH = "文明内核 · 文明像软件一样运行";
const DESC =
  "A bilingual 8-layer reading of modern civilization as an operating system — Physical · Energy · Compute · Network · Intelligence · Coordination · Governance · Narrative — and the next-generation stack rising under it.";

export const metadata: Metadata = {
  metadataBase: new URL("https://civilization-kernel.psyverse.fun"),
  title: `${TITLE_EN} | ${TITLE_ZH}`,
  description: DESC,
  keywords: [
    "civilization stack", "civilization kernel", "systems thinking",
    "operating system metaphor", "energy layer", "compute layer",
    "network layer", "intelligence layer", "coordination", "governance",
    "narrative", "failure cascade", "AI stack",
    "文明栈", "文明内核", "系统思维", "操作系统隐喻", "能源层", "算力层",
    "网络层", "智能层", "协作", "治理", "叙事", "崩溃级联", "AI 栈",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Civilization Kernel · 文明内核" }],
    title: TITLE_EN,
    description:
      "Civilization is an 8-layer stack. Each layer depends on the one below and programs the one above. When the bottom buckles, the top falls.",
    url: "https://civilization-kernel.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: TITLE_EN,
    description: "Eight layers, one machine. Civilization runs like software.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#05070d" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org", "@type": "WebSite",
              name: TITLE_EN, alternateName: TITLE_ZH, description: DESC,
              url: "https://civilization-kernel.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author:    { "@type": "Person",       name: "Gewenbo",  url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body className="bg-void text-ash">
        {children}
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
