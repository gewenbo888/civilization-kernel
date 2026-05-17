// All numbers are public, widely-reported, ~2024 vintage.
// Sources: IEA, IEEFA, Epoch AI, Visa Onchain, ITU, Statista,
// World Bank, IMF, UNESCO, public academic literature.

import type { Bi } from "@/components/LanguageProvider";

export type Layer = {
  id: string;
  idx: string;
  name: Bi;
  han: string;
  one: Bi;          // one-line tagline
  body: Bi;
  examples: Bi[];
  metric: { label: Bi; value: string; sub: Bi };
  insight: Bi;
  color: string;
};

export const HERO_STATS: { label: Bi; value: string; unit: Bi; note: Bi }[] = [
  { label: { en: "Civilization age (Holocene)",      zh: "全新世文明" },         value: "11,700",  unit: { en: "yr",         zh: "年" },         note: { en: "Roughly the climate window that allowed agriculture", zh: "大致是允许农业出现的气候窗口" } },
  { label: { en: "Living humans",                     zh: "在世人口" },           value: "8.1",     unit: { en: "B (2024)",   zh: "十亿 (2024)" },  note: { en: "Roughly 7% of all who ever lived",                    zh: "约占曾经存在的人类总数的 7%" } },
  { label: { en: "Global GDP",                        zh: "全球 GDP" },           value: "$108",    unit: { en: "T / yr",     zh: "万亿美元 / 年" }, note: { en: "World Bank 2024 nominal",                              zh: "世界银行 2024 名义" } },
  { label: { en: "Electricity / yr",                  zh: "年用电量" },           value: "30,500",  unit: { en: "TWh",        zh: "太瓦时" },        note: { en: "Substrate of the upper layers",                        zh: "上层文明的底层" } },
  { label: { en: "Internet-connected devices",        zh: "联网设备" },           value: "30",      unit: { en: "B",          zh: "十亿" },          note: { en: "IoT + traditional endpoints",                         zh: "IoT 与传统终端合计" } },
  { label: { en: "AI compute (frontier training)",    zh: "前沿训练算力" },        value: "~2e25",   unit: { en: "FLOPs (GPT-4 class)", zh: "FLOPs (GPT-4 量级)" }, note: { en: "Epoch AI",        zh: "Epoch AI" } },
];

export const TICKER: Bi[] = [
  { en: "CIVILIZATION.KERNEL  v0.1",            zh: "文明内核  v0.1" },
  { en: "8 LAYERS · 1 STACK",                   zh: "8 层 · 一个栈" },
  { en: "READ TOP-DOWN OR BOTTOM-UP",            zh: "可从上向下,也可从下向上" },
  { en: "EVERY LAYER DEPENDS ON THE ONE BELOW", zh: "每一层,都依赖其下一层" },
  { en: "EVERY LAYER PROGRAMS THE ONE ABOVE",    zh: "每一层,都对其上一层进行编程" },
  { en: "FAILURE CASCADES DOWNWARD-TO-UPWARD",   zh: "故障自下而上级联" },
  { en: "RUNTIME · HOLOCENE",                    zh: "运行时 · 全新世" },
];

// The 8-layer stack, base→top
export const LAYERS: Layer[] = [
  {
    id: "physical", idx: "L0",
    name: { en: "Physical Reality",  zh: "物理现实" }, han: "物理层",
    one: { en: "The substrate that doesn't ask permission.", zh: "不向你请求许可的底层。" },
    body: { en: "Atoms, climate, oceans, soils, ore bodies, the half-life of uranium, the mass of the moon. Every other layer of the stack is a tenant on this one. Tenants pay rent in entropy.",
            zh: "原子、气候、海洋、土壤、矿体、铀的半衰期、月球的质量。其上每一层,都是这一层上的租客。租金,以熵的形式偿付。" },
    examples: [
      { en: "Holocene climate stability (~10K years)",  zh: "全新世气候稳定(约一万年)" },
      { en: "Concentrated mineral deposits",            zh: "矿藏的集中性" },
      { en: "Arable land geography",                     zh: "可耕地地理" },
      { en: "Watersheds and river deltas",              zh: "流域与三角洲" },
      { en: "Plate-tectonic stability windows",         zh: "板块稳定窗口" },
    ],
    metric: { label: { en: "Earth mass / energy budget", zh: "地球质量 / 能量收支" }, value: "5.97e24 kg", sub: { en: "Solar input ≈ 174 PW",  zh: "太阳输入约 174 PW" } },
    insight: { en: "Every civilization is ultimately constrained by its lowest layer.", zh: "所有文明,最终都受制于最底层。" },
    color: "#7a6048",
  },
  {
    id: "energy", idx: "L1",
    name: { en: "Energy", zh: "能源" }, han: "能源层",
    one: { en: "The kernel. Nothing above runs without it.", zh: "内核。其上一切,无电无以运行。" },
    body: { en: "Wood → coal → oil → electricity → fission → renewables. Each transition multiplied total throughput by roughly 10×. The current transition demands another 5× by 2050 just to keep the upper layers solvent.",
            zh: "柴 → 煤 → 油 → 电 → 裂变 → 再生。每一次过渡,总通量约增 10 倍。当下这一轮过渡,仅为维持上层运转,2050 年前还需再增 5 倍。" },
    examples: [
      { en: "Global power generation ~30,500 TWh/yr", zh: "全球发电约 30,500 太瓦时/年" },
      { en: "440+ operable nuclear reactors",         zh: "400+ 座在运核反应堆" },
      { en: "Saudi Aramco — single-firm carbon footprint comparable to G20 nations", zh: "沙特阿美——单家公司碳足迹堪比 G20 国家" },
      { en: "Solar capacity growing ~30% per year",    zh: "光伏装机年增约 30%" },
      { en: "Datacenter share ~1.5% and climbing",     zh: "数据中心占比 ~1.5% 并攀升" },
    ],
    metric: { label: { en: "Annual primary energy",  zh: "年一次能源消费" }, value: "620 EJ", sub: { en: "~80% still fossil",        zh: "~80% 仍为化石" } },
    insight: { en: "Civilization is fundamentally an energy-allocation problem.", zh: "文明,本质上是一个能量分配问题。" },
    color: "#ff9a3d",
  },
  {
    id: "compute", idx: "L2",
    name: { en: "Compute", zh: "算力" }, han: "算力层",
    one: { en: "Electricity becomes intelligence here.", zh: "电力,在这里被转化为智能。" },
    body: { en: "Transistors per chip × chips per cluster × clusters per planet. A 100k-GPU AI campus is the largest discrete machine humans have ever built. Compute is becoming the new measure of industrial power, the way steel tonnage was in 1900 and barrels-per-day were in 1970.",
            zh: "每芯晶体管 × 每集群芯片 × 每行星集群。十万卡 AI 园区,是人类建造过最大的单台离散机器。算力正成为工业力量的新度量,正如 1900 年的钢产量、1970 年的日产桶数。" },
    examples: [
      { en: "Frontier model: ~2e25 FLOPs (GPT-4 class)", zh: "前沿模型约 2e25 FLOPs (GPT-4 量级)" },
      { en: "NVIDIA H100 → B200: ~2.5× throughput in 18 months", zh: "英伟达 H100 → B200:18 个月吞吐约 2.5 倍" },
      { en: "ASML EUV — single supplier choke point", zh: "ASML EUV——单一供应方咽喉" },
      { en: "Hyperscale DC: 500 MW – 1 GW each",       zh: "超大规模数据中心:每座 500 MW – 1 GW" },
      { en: "TSMC ≈ 9% of Taiwan's grid",             zh: "台积电约占台湾电网 9%" },
    ],
    metric: { label: { en: "Frontier-training cost (2024)", zh: "前沿训练成本 (2024)" }, value: "~$100M", sub: { en: "Doubling roughly each generation", zh: "约每代翻倍" } },
    insight: { en: "The AI era is, fundamentally, a compute civilization.", zh: "AI 时代,本质上是一种算力文明。" },
    color: "#22c3ff",
  },
  {
    id: "network", idx: "L3",
    name: { en: "Network", zh: "网络" }, han: "网络层",
    one: { en: "How far and how fast civilization can reach.", zh: "文明,能伸多远、动多快。" },
    body: { en: "Roads, sea lanes, rails, fiber, satellites, financial rails. Every empire was a network upgrade — Roman roads, Mongol relays, the Cunard Line, SWIFT, IPv4, Starlink. The reach of governance never exceeds the reach of its routing table.",
            zh: "道路、海道、铁路、光纤、卫星、金融通路。每一个帝国,都是一次网络升级——罗马大道、蒙古驿、Cunard 邮轮、SWIFT、IPv4、Starlink。治理的触达,永远不超过其路由表的触达。" },
    examples: [
      { en: "1.4 M km of subsea cable",                 zh: "海底光缆约 140 万公里" },
      { en: "9,000+ active satellites",                  zh: "9,000+ 在轨卫星" },
      { en: "Container shipping moves ~80% of trade by volume", zh: "集装箱运输承担全球约 80% 的贸易体量" },
      { en: "SWIFT clears ~50 M messages/day",           zh: "SWIFT 每日约清算 5,000 万笔报文" },
      { en: "Mobile broadband — 5.5 B subscribers",      zh: "移动宽带用户约 55 亿" },
    ],
    metric: { label: { en: "Internet traffic / month", zh: "互联网月流量" }, value: "~600 EB", sub: { en: "Doubling every 3 years",  zh: "每三年翻倍" } },
    insight: { en: "The speed of a civilization equals the speed of its networks.", zh: "文明的速度,等于其网络的速度。" },
    color: "#3eb4ff",
  },
  {
    id: "intelligence", idx: "L4",
    name: { en: "Intelligence", zh: "智能" }, han: "智能层",
    one: { en: "From cognition to industrialized cognition.", zh: "从认知,到工业化的认知。" },
    body: { en: "Brains, libraries, universities, peer review, search engines, language models. For 300,000 years intelligence lived only inside skulls. For 30,000 it could also live on cave walls. For 30 it has also lived on silicon. The newest residence is rented by the token.",
            zh: "大脑、图书馆、大学、同行评议、搜索引擎、语言模型。三十万年来,智能仅住在颅骨内;三万年来,也住在岩壁上;近三十年来,也住在硅片上。最新的居所,以 token 为单位计租。" },
    examples: [
      { en: "Wikipedia: ~62 M articles, 320+ languages", zh: "维基百科:约 6,200 万词条,320+ 语言" },
      { en: "~30 M scientific papers published since 2000", zh: "2000 年以来发表科学论文约 3,000 万篇" },
      { en: "ChatGPT — 600M+ weekly users",              zh: "ChatGPT — 周活超 6 亿" },
      { en: "Frontier model context: 1–2 M tokens",       zh: "前沿模型上下文:100–200 万 token" },
      { en: "Higher-education enrollment: ~250 M",        zh: "高等教育在学人数:约 2.5 亿" },
    ],
    metric: { label: { en: "Tokens generated / day (LLM industry est.)", zh: "日产 token (LLM 行业估)" }, value: "~5 T", sub: { en: "Substrate of synthetic thought", zh: "合成思考的底层" } },
    insight: { en: "Civilization is becoming machine-assisted cognition.", zh: "文明,正在变成一种机器辅助的认知。" },
    color: "#9b80ff",
  },
  {
    id: "coordination", idx: "L5",
    name: { en: "Coordination", zh: "协作" }, han: "协作层",
    one: { en: "How strangers cooperate without breaking the bank.", zh: "陌生人如何协作,而不破产。" },
    body: { en: "Money, markets, contracts, supply chains, platforms, protocols. The price of a chair in 2024 trades the work of ~600 people across ~30 countries. The price mechanism is the cheapest known way to do that.",
            zh: "货币、市场、合约、供应链、平台、协议。2024 年一把椅子的价格,交易着 30 多个国家约 600 个工人的劳动。价格机制,是已知最便宜的方法。" },
    examples: [
      { en: "Stablecoin annual settlement: ~$28 T",       zh: "稳定币年结算:约 28 万亿美元" },
      { en: "Containerized supply chains: 24 M TEU fleet", zh: "集装箱供应链:2,400 万 TEU 船队" },
      { en: "S&P 500 — 500 firms, ~$50 T market cap",    zh: "标普 500 — 500 家公司,市值约 50 万亿美元" },
      { en: "Smart contracts: ~$80 B TVL (Sept 2024)",   zh: "智能合约:总锁仓约 800 亿美元 (2024.9)" },
      { en: "GitHub: 100 M+ developers coordinating online", zh: "GitHub:1 亿+ 开发者在线协作" },
    ],
    metric: { label: { en: "Annual cross-border trade",  zh: "年跨境贸易" }, value: "$33 T", sub: { en: "WTO 2024",                  zh: "WTO 2024" } },
    insight: { en: "Civilization advances by lowering the cost of coordination.", zh: "文明,通过降低协作成本而进化。" },
    color: "#1fc977",
  },
  {
    id: "governance", idx: "L6",
    name: { en: "Governance", zh: "治理" }, han: "治理层",
    one: { en: "The rules that decide whose rules win.", zh: "决定谁的规则胜出的那些规则。" },
    body: { en: "Constitutions, courts, bureaucracies, central banks, regulators, treaties, platform policies, smart-contract governance. Where coordination is bottom-up, governance is the deliberate rule-set on top. When the rules drift away from physics — Layer 0 — the whole stack starts to wobble.",
            zh: "宪法、法院、官僚体系、央行、监管者、条约、平台政策、合约治理。协作是自下而上,治理则是其上有意为之的规则集。当规则偏离物理——L0——整个栈即开始摇摆。" },
    examples: [
      { en: "~193 UN member states",                       zh: "联合国成员国约 193 个" },
      { en: "150+ central banks setting monetary policy", zh: "150+ 央行制定货币政策" },
      { en: "EU GDPR / AI Act: extraterritorial digital governance", zh: "欧盟 GDPR / AI 法案:数字治理的域外效力" },
      { en: "ICANN governs the DNS root",                  zh: "ICANN 治理 DNS 根" },
      { en: "DAOs: programmable governance experiments",   zh: "DAO:可编程治理的实验" },
    ],
    metric: { label: { en: "Annual sovereign debt service", zh: "年主权债务利息" }, value: "$2.4 T", sub: { en: "IMF, 2024 estimate",       zh: "IMF 2024 估算" } },
    insight: { en: "Future governance will be increasingly software-mediated, AI-assisted, protocol-driven.", zh: "未来的治理,将日益由软件中介、AI 辅助、协议驱动。" },
    color: "#ffd23d",
  },
  {
    id: "narrative", idx: "L7",
    name: { en: "Narrative", zh: "叙事" }, han: "叙事层",
    one: { en: "The software that runs on human minds.", zh: "在人类心智上运行的软件。" },
    body: { en: "Religion, ideology, nationhood, brands, memes, recommender feeds. Stories are the runtime in which billions of people execute the same code at once. The substrate is human attention; the programs are sometimes ancient and sometimes refreshed hourly.",
            zh: "宗教、意识形态、民族认同、品牌、迷因、推荐流。叙事,是数十亿人同时执行同一段代码的运行时。底层是人类注意力;其上程序,有的远古,有的每小时更新一次。" },
    examples: [
      { en: "World religions — billions of adherents apiece", zh: "世界主要宗教 — 信众各以十亿计" },
      { en: "TikTok serves ~1B+ MAU short-video runtime",     zh: "TikTok 约 10 亿+ 月活短视频运行时" },
      { en: "Nationalism — the most-installed political OS of the modern era", zh: "民族主义 — 现代史上安装量最大的政治 OS" },
      { en: "AI-generated content at search-result scale",     zh: "AI 生成内容已达搜索结果级规模" },
      { en: "Cultural memes spread at network-packet speed",   zh: "文化迷因,以网络数据包速度传播" },
    ],
    metric: { label: { en: "Daily attention spent on screens (avg.)", zh: "日均屏幕注意力(平均)" }, value: "6h 40m", sub: { en: "DataReportal 2024",          zh: "DataReportal 2024" } },
    insight: { en: "Narrative is the software layer of civilization.", zh: "叙事,是文明的软件层。" },
    color: "#ff5e6c",
  },
];

// SECTION 9 — failure cascade
export type CascadeNode = { id: string; label: Bi; impact: Bi; sec: number };
export const CASCADE: CascadeNode[] = [
  { id: "energy",       label: { en: "Energy failure",        zh: "能源故障" },   impact: { en: "Substations down, fuel rationed",       zh: "变电站宕机,燃料配给" }, sec: 0 },
  { id: "compute",      label: { en: "Compute failure",       zh: "算力故障" },   impact: { en: "Datacenters dark, models offline",       zh: "数据中心熄灯,模型离线" }, sec: 30 },
  { id: "network",      label: { en: "Network failure",       zh: "网络故障" },   impact: { en: "Internet & SWIFT lose continuity",       zh: "互联网与 SWIFT 失续" }, sec: 600 },
  { id: "intelligence", label: { en: "Intelligence failure",  zh: "智能故障" },   impact: { en: "Decisions revert to local memory",       zh: "决策回退到本地记忆" }, sec: 1800 },
  { id: "coord",        label: { en: "Coordination failure",  zh: "协作故障" },   impact: { en: "Markets close, contracts un-settle",     zh: "市场关闭,合约不清算" }, sec: 3600 },
  { id: "governance",   label: { en: "Governance failure",    zh: "治理故障" },   impact: { en: "Institutions act in isolation",          zh: "机构各自为政" }, sec: 86400 },
  { id: "narrative",    label: { en: "Narrative failure",     zh: "叙事故障" },   impact: { en: "Shared reality fragments; coordination ends", zh: "共同现实破碎,协作终结" }, sec: 604800 },
];

export const FAILURE_HISTORY: { who: Bi; what: Bi }[] = [
  { who: { en: "Bronze-Age Collapse, ~1177 BCE",         zh: "青铜时代崩溃,约公元前 1177" }, what: { en: "Trade routes + climate + invasions; multi-civilization", zh: "贸易、气候、外侵叠加;跨文明崩溃" } },
  { who: { en: "Roman West, 5th c.",                      zh: "西罗马,5 世纪" },              what: { en: "Tax base, military, fiat coin debasement",                 zh: "税基、军事、金属货币贬值" } },
  { who: { en: "Late Bronze Maya, 8th–9th c.",            zh: "玛雅古典期晚期,8–9 世纪" },     what: { en: "Drought + over-cropping + dynastic warfare",               zh: "干旱 + 过耕 + 王朝内战" } },
  { who: { en: "Soviet Union, 1991",                      zh: "苏联,1991" },                   what: { en: "Coordination + narrative + energy revenue collapse",        zh: "协作 + 叙事 + 能源收入全面崩溃" } },
  { who: { en: "Lehman Brothers cascade, 2008",            zh: "雷曼级联,2008" },               what: { en: "Coordination-layer correlation failure",                   zh: "协作层关联性失效" } },
  { who: { en: "AWS US-EAST-1 outages",                    zh: "AWS US-EAST-1 故障" },          what: { en: "Modern network-layer single-region dependency",            zh: "现代网络层单区依赖" } },
];

// SECTION 10 — Next-generation AI stack
export type NextLayer = { idx: string; name: Bi; han: string; body: Bi; color: string };
export const NEXT_STACK: NextLayer[] = [
  { idx: "L0",  name: { en: "Physical",                    zh: "物理" },                  han: "物理", body: { en: "Earth, climate, minerals.",                                 zh: "地球、气候、矿藏。" },                                  color: "#7a6048" },
  { idx: "L1",  name: { en: "Energy",                      zh: "能源" },                  han: "能源", body: { en: "Grids, reactors, renewables.",                              zh: "电网、反应堆、再生能源。" },                            color: "#ff9a3d" },
  { idx: "L2",  name: { en: "Compute",                     zh: "算力" },                  han: "算力", body: { en: "GPUs, fabs, datacenters.",                                  zh: "GPU、晶圆、数据中心。" },                                color: "#22c3ff" },
  { idx: "L3",  name: { en: "Network",                     zh: "网络" },                  han: "网络", body: { en: "Fiber, satellites, settlement rails.",                      zh: "光纤、卫星、清算通路。" },                                color: "#3eb4ff" },
  { idx: "L4",  name: { en: "AI",                          zh: "AI" },                    han: "AI",   body: { en: "Foundation models, RL, multimodal.",                        zh: "基础模型、RL、多模态。" },                              color: "#9b80ff" },
  { idx: "L5",  name: { en: "Agents",                      zh: "智能体" },                han: "智能体", body: { en: "Tool-using, memory-equipped agents with wallets.",          zh: "会使用工具、有记忆、带钱包的智能体。" },                  color: "#c4a3ff" },
  { idx: "L6",  name: { en: "Tokens",                      zh: "Token" },                 han: "Token", body: { en: "Programmable value + information primitives.",              zh: "可编程的价值与信息原语。" },                            color: "#1fc977" },
  { idx: "L7",  name: { en: "Autonomous coordination",     zh: "自主协作" },              han: "自治", body: { en: "Smart contracts, DAOs, agent-to-agent settlement.",         zh: "智能合约、DAO、智能体对智能体的清算。" },                color: "#94f0c4" },
  { idx: "L8",  name: { en: "Programmable governance",     zh: "可编程治理" },             han: "治理", body: { en: "Code-defined institutions, machine-readable rules.",         zh: "由代码定义的机构,机器可读的规则。" },                    color: "#ffd23d" },
  { idx: "L9",  name: { en: "Civilization-scale intelligence", zh: "文明级智能" },         han: "智能", body: { en: "Aggregate cognition, machine + human, planet-wide.",         zh: "总和认知:机器与人类,行星尺度。" },                       color: "#ff5e6c" },
];

// Sources
export const SOURCES: { who: Bi; what: Bi }[] = [
  { who: { en: "IEA World Energy Outlook",          zh: "IEA 世界能源展望" },           what: { en: "Energy-layer baseline",                            zh: "能源层基线" } },
  { who: { en: "Epoch AI",                           zh: "Epoch AI" },                   what: { en: "Frontier-compute & training-cost estimates",       zh: "前沿算力与训练成本估算" } },
  { who: { en: "ITU Measuring Digital Development",  zh: "ITU 数字发展测度" },            what: { en: "Network & connectivity baselines",                 zh: "网络与连接基线" } },
  { who: { en: "Visa Onchain Analytics",             zh: "Visa 链上分析" },               what: { en: "Stablecoin settlement methodology",                zh: "稳定币结算方法学" } },
  { who: { en: "World Bank, IMF, WTO",               zh: "世界银行、IMF、WTO" },           what: { en: "GDP, debt, trade",                                 zh: "GDP、债务、贸易" } },
  { who: { en: "DataReportal Digital reports",       zh: "DataReportal 数字报告" },        what: { en: "Attention/usage statistics",                       zh: "注意力与使用数据" } },
  { who: { en: "Joseph Tainter — The Collapse of Complex Societies", zh: "Joseph Tainter《复杂社会的崩溃》" }, what: { en: "Cascading-failure framework",                zh: "级联失效框架" } },
  { who: { en: "Jared Diamond — Collapse",           zh: "Jared Diamond《崩溃》" },        what: { en: "Civilization failure case studies",                zh: "文明崩溃案例" } },
];
