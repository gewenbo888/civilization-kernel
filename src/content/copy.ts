import type { Bi } from "@/components/LanguageProvider";

export const COPY = {
  brand:    { en: "CIVILIZATION.KERNEL", zh: "CIVILIZATION.KERNEL" },
  brandSub: { en: "an 8-layer reading",  zh: "八层栈视角" },

  navLinks: [
    { id: "hero",        label: { en: "00 / OPEN",       zh: "00 / 开场" } },
    { id: "stack",       label: { en: "01 / STACK",      zh: "01 / 栈" } },
    { id: "physical",    label: { en: "L0 / PHYSICAL",   zh: "L0 / 物理" } },
    { id: "energy",      label: { en: "L1 / ENERGY",     zh: "L1 / 能源" } },
    { id: "compute",     label: { en: "L2 / COMPUTE",    zh: "L2 / 算力" } },
    { id: "network",     label: { en: "L3 / NETWORK",    zh: "L3 / 网络" } },
    { id: "intelligence",label: { en: "L4 / INTEL",      zh: "L4 / 智能" } },
    { id: "coordination",label: { en: "L5 / COORD",      zh: "L5 / 协作" } },
    { id: "governance",  label: { en: "L6 / GOV",        zh: "L6 / 治理" } },
    { id: "narrative",   label: { en: "L7 / NARRATIVE",  zh: "L7 / 叙事" } },
    { id: "failure",     label: { en: "09 / FAILURE",    zh: "09 / 故障" } },
    { id: "next",        label: { en: "10 / NEXT",       zh: "10 / 下一栈" } },
    { id: "closing",     label: { en: "11 / CODA",       zh: "11 / 终章" } },
  ] as { id: string; label: Bi }[],

  banner: {
    en: "READ AS AN OPERATING SYSTEM. Each layer depends on the one below it and programs the one above. Failure cascades up. Innovation cascades down.",
    zh: "请将其当作一套操作系统来读。每一层依赖其下一层,并对其上一层进行编程。故障向上级联,创新向下级联。",
  },

  hero: {
    eyebrow: { en: "00 / OPENING", zh: "00 / 开场" },
    titleA:  { en: "Civilization",  zh: "文明" },
    titleB:  { en: "runs like",     zh: "像" },
    titleC:  { en: "software.",     zh: "软件一样运行。" },
    sub: {
      en: "Industrial civilization organized matter. Electrical civilization organized energy. Informational civilization organized knowledge. The civilization now under construction organizes all of the above, in eight layers, on one stack.",
      zh: "工业文明组织物质,电气化文明组织能量,信息文明组织知识。如今正在建造的文明,把以上一切组织起来——八层,一栈。",
    },
    note: {
      en: "Read top-to-bottom or bottom-to-top. Both directions tell the same story.",
      zh: "可自上而下,也可自下而上。两种方向,讲同一个故事。",
    },
    scrollCue: { en: "ENTER THE KERNEL", zh: "进入内核" },
  },

  heroStatsTag: { en: "BASELINE · CIVILIZATION RUNTIME", zh: "基线 · 文明运行时" },

  // Section 1 — what is a stack
  stack: {
    eyebrow: { en: "01 / WHAT IS A CIVILIZATION STACK", zh: "01 / 什么是文明技术栈" },
    titleA:  { en: "Eight layers, ", zh: "八层," },
    titleAcc:{ en: "one machine",     zh: "一台机器" },
    titleB:  { en: ".",               zh: "。" },
    sub: {
      en: "Modern civilization behaves like an operating system. The lowest layer is physics; the highest is the story we tell about it. Every layer depends on the layers beneath, and every layer programs the layers above. When the bottom buckles, the top falls — slowly, then suddenly.",
      zh: "现代文明的运转方式,像一套操作系统。最底层是物理,最顶层是我们关于它的叙事。每一层都依赖其下层,并对其上层进行编程。底层一旦凹陷,顶层即坠落——先是缓慢,而后突然。",
    },
    stackHead: { en: "THE STACK · BASE → TOP", zh: "栈 · 自下而上" },
    doctrine: {
      en: "Every civilization is ultimately constrained by its lowest layer.",
      zh: "所有文明,最终都受制于最底层。",
    },
  },

  // Layer-section field labels
  layerFields: {
    tagline:   { en: "TAGLINE",   zh: "一句话" },
    body:      { en: "READING",   zh: "解读" },
    examples:  { en: "EXAMPLES",  zh: "实例" },
    metric:    { en: "INDICATOR", zh: "指标" },
    insight:   { en: "INSIGHT",   zh: "心要" },
  },

  // Section 9 — failure
  failure: {
    eyebrow: { en: "09 / FAILURE MODES", zh: "09 / 故障模式" },
    titleA:  { en: "When the layers ",   zh: "当层级" },
    titleAcc:{ en: "let go",             zh: "松开" },
    titleB:  { en: ".",                  zh: "之时。" },
    sub: {
      en: "Civilizations rarely die from one bad day. They die from cascades — Layer 0 hiccups, Layer 1 throttles, Layer 2 stalls, the markets stop pricing, the rules stop binding, the story stops cohering. Each historical collapse is a snapshot of a different failure path through the same eight layers.",
      zh: "文明很少死于某一个糟糕的日子。它们死于级联——L0 打嗝,L1 节流,L2 停摆,市场停止定价,规则不再约束,叙事不再聚合。每一次历史上的崩溃,都是穿过同一八层的不同失效路径的快照。",
    },
    cascadeHead: { en: "CASCADE · UPWARD FROM ENERGY", zh: "级联 · 自能源向上" },
    histHead:    { en: "HISTORICAL FAILURE PATHS",     zh: "历史中的失效路径" },
    secLabel:    { en: "T = ",  zh: "T = " },
  },

  // Section 10 — next stack
  next: {
    eyebrow: { en: "10 / NEXT GENERATION", zh: "10 / 下一代" },
    titleA:  { en: "The next stack adds ",zh: "下一栈,新增" },
    titleAcc:{ en: "two layers",          zh: "两层" },
    titleB:  { en: ".",                   zh: "。" },
    sub: {
      en: "Agents and Tokens are the load-bearing additions. With them, governance becomes code and code becomes governance. Intelligence becomes a fungible market input. Coordination becomes settle-able in seconds. The kernel does not change. The number of programs running on it does.",
      zh: "智能体与 Token,是承重的两层新增。有了它们,治理变为代码,代码也变为治理;智能成为可替代的市场要素;协作可在数秒内清算。内核未变,在其上运行的程序数量,变了。",
    },
    stackHead: { en: "10 LAYERS · INCLUDING AGENTS & TOKENS", zh: "10 层 · 包含智能体与 Token" },
    thesisTag: { en: "THESIS",  zh: "总论" },
    thesisHead: {
      en: "Civilization is becoming programmable.",
      zh: "文明,正在变成可编程系统。",
    },
  },

  // Closing
  close: {
    eyebrow: { en: "11 / CODA", zh: "11 / 终章" },
    titleA:  { en: "Civilization is the ", zh: "文明,是" },
    titleAcc:{ en: "largest machine",      zh: "人类建造过最大的" },
    titleB:  { en: " humanity ever built.", zh: "机器。" },
    lines: [
      { a: { en: "Industrial civilization organized matter.",        zh: "工业文明组织物质。" } },
      { a: { en: "Electrical civilization organized energy.",         zh: "电气化文明组织能量。" } },
      { a: { en: "Informational civilization organized knowledge.",   zh: "信息文明组织知识。" } },
      { a: { en: "AI civilization may organize intelligence itself.", zh: "AI 文明,或将组织智能本身。" } },
    ] as { a: Bi }[],
    body: {
      en: "A stack is an honest object. It does not pretend to be more than the sum of its layers; nor less. To understand the moment we are in, draw the eight layers, then draw the dependencies, and ask which layer is asking too much of the one below it. That is where the next decade will be lived.",
      zh: "栈是一个诚实之物。它既不假装大于其层级之和,也不小于。要理解当下,先画出八层,再画出依赖,然后追问:哪一层,正向其下一层索取过多?下一个十年,就将在那里度过。",
    },
    quote: {
      en: "Civilization runs like software.",
      zh: "文明,像软件一样运行。",
    },
    foot: { en: "Public sources · IEA · Epoch AI · IMF · World Bank · WTO · DataReportal · Tainter · Diamond", zh: "公开来源 · IEA · Epoch AI · IMF · 世界银行 · WTO · DataReportal · Tainter · Diamond" },
  },

  sourcesEyebrow: { en: "SOURCES & FURTHER READING", zh: "来源与延伸阅读" },
  sourcesSub: {
    en: "Public sources and frameworks behind the numbers and the architecture.",
    zh: "本页数字与架构所依据的公开来源与思想框架。",
  },
};
