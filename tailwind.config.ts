import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void:   "#05070d",
        carbon: "#080c14",
        steel:  "#0e1422",
        wire:   "#162038",
        line:   "#1f2b4a",
        ash:    "#bdc5d6",
        bone:   "#e9ecf4",
        // 8-layer spectrum, base→top
        L0: "#7a6048",  // physical (earth)
        L1: "#ff9a3d",  // energy (amber)
        L2: "#22c3ff",  // compute (electric blue)
        L3: "#3eb4ff",  // network (cool blue)
        L4: "#9b80ff",  // intelligence (neural violet)
        L5: "#1fc977",  // coordination (emerald)
        L6: "#ffd23d",  // governance (gold)
        L7: "#ff5e6c",  // narrative (signal red)
        red:    { 400: "#ff4d6a", 500: "#e0142c" },
        amber:  { 400: "#ffb13b" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Spectral", "serif"],
        body:    ["var(--font-body)",    "Inter", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)",    "JetBrains Mono", "monospace"],
        han:     ["var(--font-han)",     "Noto Serif SC", "Songti SC", "serif"],
      },
      letterSpacing: {
        widerer:   "0.18em",
        widestest: "0.32em",
      },
    },
  },
  plugins: [],
};
export default config;
