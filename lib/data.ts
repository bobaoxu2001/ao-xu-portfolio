// Central content configuration. Most portfolio copy should live here.

export const siteConfig = {
  name: "Ao (Allen) Xu",
  shortName: "Ao Xu",
  title: "AI Builder · Data Scientist",
  tagline: "AI Builder · Data Scientist · Product-minded Engineer",
  headline: "I build AI and data systems that turn messy workflows into measurable decisions.",
  positioning:
    "M.S. Data Science (NYU). I design, build, and evaluate LLM workflows, decision systems, and product analytics — at China Telecom's AI Center, TikTok/ByteDance, and S&P Global × NYU.",
  currentlyBuilding:
    "Currently building AI-native products across sports prediction, financial intelligence, sales automation, and data quality workflows.",
  roles: ["AI Engineer", "Data Scientist", "AI Product Manager", "AI Strategist"],
  email: "ax2183@nyu.edu",
  linkedin: "https://www.linkedin.com/in/ao-xu/",
  github: "https://github.com/bobaoxu2001",
  resumeUrl: "/resume/Allen_Xu_Resume.pdf",
  seoTitle: "Ao Xu | AI Builder, Data Scientist & Product-minded Engineer",
  seoDescription:
    "Portfolio of Ao Xu, an AI builder and data scientist focused on LLM workflows, product analytics, NLP systems, forecasting, and AI strategy.",
  ogImage: "/images/ao-xu-headshot.png",
};

// "Proof in numbers" strip under the hero — one number per flagship result.
export const heroMetrics = [
  { value: "20K+", label: "dialogue logs structured" },
  { value: "170+", label: "intent labels designed" },
  { value: "+21.1 pts", label: "Macro-F1 lift in routing" },
  { value: "71%", label: "forecasting MAE reduction" },
  { value: "48%", label: "conversion-lift opportunity identified" },
];

// ─── Projects, grouped into "AI + X" thematic tracks ─────────────────────────
// Each project is defined once here, then composed into thematic tracks (for
// the Projects page) and a flagship-first featured list (for the homepage).

export type Project = {
  id: string;
  title: string;
  category: string;
  summary?: string;
  problem?: string;
  built?: string;
  impact?: string;
  description?: string;
  technologies: string[];
  tags?: string[];
  github: string | null;
  liveDemo: string | null;
  highlight: string;
  // Optional 3 short, recruiter-facing impact bullets used by featured cards.
  bullets?: string[];
  // Optional internal route to a structured case study page.
  caseStudy?: string;
  // Optional local banner image (rendered by the flagship product card).
  bannerImage?: string;
};

export type ProjectTrack = {
  id: string;
  label: string;
  tagline: string;
  headline: string;
  accent: string;
  projects: Project[];
};

// ─── Latest AI products (shipped, live, product-first) ───────────────────────

const unhappyBuster = {
  id: "unhappy-buster",
  title: "Unhappy Buster",
  category: "AI Consumer Product · Stress Arcade",
  summary:
    "A private 30-second stress arcade that turns frustration into a fictional boss — privacy-aware AI generation with graceful fallbacks. Shipped v1.0.",
  description:
    "A shipped, live consumer AI product: vent a frustration (or fight today's public boss), watch it become a named fictional monster, fight it in a 30-second counter-based arena, and close with honest closure — no account, no stored vents.",
  problem:
    "People want a fast emotional reset after an annoying interaction, but wellness tools feel too slow and serious — and typing raw frustration into an AI product raises real privacy and safety concerns.",
  built:
    "Designed and built the full product: the vent-to-boss AI pipeline with PII redaction, safety gates, and output scans; the 30-second arena engine; local-first progression; and curated fallbacks that keep the loop playable when AI is unavailable.",
  impact:
    "Shipped v1.0 to production with 47 deterministic tests, clean lint/typecheck, verified responsive builds, and a core loop that works end-to-end even without live AI generation.",
  technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion", "OpenAI API"],
  tags: ["Shipped v1.0", "Privacy-by-Design", "Local-first", "AI Fallbacks"],
  github: "https://github.com/bobaoxu2001/fuck-your-unhappy",
  liveDemo: "https://fuck-your-unhappy.vercel.app",
  highlight: "Shipped v1.0 · live",
  bullets: [
    "Turned venting into a 30-second boss fight: frustration → fictional boss → arena → honest closure, with zero accounts.",
    "Built a privacy-aware AI pipeline: PII redaction, sensitive-input gates, structured generation, output scans, curated fallbacks.",
    "Shipped v1.0 to production — 47 deterministic tests, responsive builds verified, playable even when live AI is down.",
  ],
  caseStudy: "/case-studies/unhappy-buster",
  bannerImage: "/projects/unhappy-buster/cover.png",
};

const worldcupOracle = {
  id: "worldcup-oracle-agent",
  title: "WorldCup Oracle Agent",
  category: "AI Agent · Sports Analytics · Prediction System",
  summary:
    "A news-aware AI agent that predicts World Cup 2026 matchups, runs 10K Monte Carlo simulations, explains its reasoning, and answers follow-ups in real time.",
  description:
    "An AI-powered World Cup prediction agent that combines football data, probability modeling, scenario analysis, and LLM reasoning to generate interactive match predictions and tournament insights.",
  technologies: ["Next.js 15", "TypeScript", "MongoDB", "Gemini", "Monte Carlo", "Tailwind"],
  tags: ["AI Agent", "Monte Carlo", "MongoDB Memory", "News-aware"],
  github: "https://github.com/bobaoxu2001/worldcup-oracle-agent",
  liveDemo: "https://worldcup-oracle-agent.vercel.app",
  highlight: "Live · agentic predictions",
  bullets: [
    "Built an agentic workflow that plans the analysis, pulls live injury & squad news, and runs 10,000 Monte Carlo simulations per matchup.",
    "Designed prediction logic around probability, uncertainty, and base-vs-adjusted scenario comparison with transparent reasoning.",
    "Shipped a productized chat interface with a MongoDB memory layer for follow-up 'what-if' questions across sessions.",
  ],
};

const aiStockPlatform = {
  id: "ai-stock-platform",
  title: "FactorForge · AI Stock Platform",
  category: "FinTech AI · Market Intelligence · AI Research Platform",
  summary:
    "An AI quant research workbench for factor discovery, cost-aware backtesting, market-stress analysis, and a simulated model portfolio benchmarked against SPY/QQQ.",
  description:
    "An AI-powered stock market research platform that helps users analyze market signals, compare strategies, summarize financial data, and generate investment research insights through a productized AI interface.",
  technologies: ["Next.js 14", "TypeScript", "SQLite", "Recharts", "LLM", "Docker"],
  tags: ["FinTech AI", "Backtesting", "Factor Research", "Market Stress"],
  github: "https://github.com/bobaoxu2001/FactorForge",
  liveDemo: "https://factor-forge-ashy.vercel.app/",
  highlight: "Live · quant research lab",
  bullets: [
    "Built a finance-focused AI research workflow: deterministic engines compute factors and backtests, then LLM calls turn validated payloads into prose.",
    "Integrated market data, five rule-based strategies, factor-attribution regressions, and a simulated model portfolio with provenance-aware metadata.",
    "Designed a clean dashboard product with a safe public demo mode — optional keys, labeled fallbacks, and no trade-execution path.",
  ],
};

const worldCupLab = {
  id: "world-cup-ai-lab",
  title: "World Cup AI Lab",
  category: "AI Lab · Sports Data Product · Tournament Simulation",
  summary:
    "A commercial-MVP World Cup 2026 prediction product — match probabilities, expected scores, upset alerts, and full tournament simulations behind a freemium paywall.",
  description:
    "A World Cup-focused AI lab for experimenting with football prediction, tournament simulation, and data storytelling — packaged as a premium product, not a notebook.",
  technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Monte Carlo", "shadcn/ui"],
  tags: ["Sports Analytics", "Tournament Sim", "Freemium", "Elo · Poisson"],
  github: "https://github.com/bobaoxu2001/world-cup-ai-lab",
  liveDemo: "https://world-cup-ai-lab.vercel.app",
  highlight: "Live · freemium MVP",
  bullets: [
    "Ported an Elo → Dixon-Coles bivariate Poisson → Monte Carlo engine to TypeScript behind clean prediction APIs.",
    "Modeled all 48 teams and 72 group matches from the confirmed 2026 draw, with upset-risk and confidence-level outputs.",
    "Packaged the data-science work as a mobile-first product with a freemium paywall, Supabase auth, and Stripe checkout.",
  ],
};

const socCopilot = {
  id: "soc-engineering-copilot",
  title: "SOC Engineering Knowledge Copilot",
  category: "Flagship · RAG / Agent Workflow",
  summary:
    "RAG assistant with agent triage, human-review gates, and a built-in evaluation harness.",
  problem:
    "Engineering teams need cited answers, auditable retrieval, and reliable first-pass triage for build, verification, and workflow failures.",
  built:
    "Built a RAG + agent workflow assistant with cited answers, dense/hybrid retrieval inspection, deterministic workflow routing, human-review gates, and evaluation dashboards.",
  impact:
    "On synthetic held-out eval sets: 95% retrieval hit rate, 90% grounded-answer rate, and 100% out-of-scope safety handling.",
  technologies: ["RAG", "Python", "Streamlit", "FastAPI", "FAISS", "Evaluation"],
  tags: ["RAG", "FAISS", "FastAPI", "LLM Evaluation"],
  github:
    "https://github.com/bobaoxu2001/SOC-Engineering-Copilot-RAG-Agent-Workflow-Assistant",
  liveDemo: "https://soc-ai-copilot.streamlit.app/",
  highlight: "95% retrieval hit · 90% grounded",
  caseStudy: "/case-studies/soc-engineering-copilot",
};

const chinaTelecom = {
  id: "china-telecom-ai-workflow",
  title: "China Telecom LLM Workflow Platform",
  category: "Enterprise · LLM Workflow",
  summary:
    "Enterprise LLM workflows for intent classification, structured output review, and prompt evaluation.",
  problem:
    "An enterprise AI team needed to turn messy dialogue logs into a reliable intent taxonomy, with QA loops for prompt outputs and workflow reliability.",
  built:
    "Designed LLM/NLP workflows for intent classification, briefing generation, and structured output review; built prompt A/B tests and QA loops.",
  impact:
    "Structured 20K+ dialogue logs into 8 categories and 170+ intent labels, with repeatable QA loops for workflow reliability.",
  technologies: ["LLM Workflow", "NLP", "Dify", "Prompt Evaluation", "AI Operations"],
  tags: ["LLM Workflow", "Intent Classification", "Prompt Eval", "QA Loops"],
  github: null,
  liveDemo: null,
  highlight: "20K+ logs · 170+ intent labels",
  caseStudy: "/case-studies/china-telecom-ai-platform",
};

const digitalHumanPlatform = {
  id: "digital-human-platform",
  title: "China Telecom Digital Human Management Platform",
  category: "Enterprise · 0→1 AI Product",
  summary:
    "0→1 management platform for enterprise digital-human operations — PRD, user flows, field rules, and high-fidelity prototypes.",
  problem:
    "Enterprise AI operations needed one platform to manage digital-human resources, application authorization, avatar binding, voice configuration, and creation workflows.",
  built:
    "Designed high-fidelity prototypes with Claude Design and produced the PRD, user flows, field rules, and acceptance criteria across six core modules — resource management, authorization and concurrency allocation, avatar binding, TTS voice configuration, action/expression asset management, and new digital-human creation.",
  impact:
    "Specified a complete 0→1 product scope for enterprise review; used Seedance 2.0 to generate vertical digital-human video materials that supported new digital-human setup and product demonstrations.",
  technologies: ["PRD", "Claude Design", "Prototyping", "Seedance 2.0", "AI Operations"],
  tags: ["0→1 Product", "PRD & User Flows", "Acceptance Criteria", "Digital Human"],
  github: null,
  liveDemo: null,
  highlight: "0→1 · 6 platform modules specified",
  caseStudy: "/case-studies/china-telecom-ai-platform",
};

const forwardDeployed = {
  id: "forward-deployed-ai",
  title: "Forward-Deployed AI Simulation",
  category: "AI Deployment / Workflow Automation",
  summary:
    "Simulated forward-deployed AI for support data — structured extraction, evidence quotes, ROI modeling.",
  description:
    "Built a Streamlit simulation of a forward-deployed AI engagement for enterprise support data, with structured extraction, evidence quotes, JSON validation, human review gates, and ROI modeling.",
  technologies: ["Python", "Claude API", "Streamlit", "SQLite", "JSON Schema"],
  github: null,
  liveDemo: null,
  highlight: "Synthetic FDE simulation",
};

const digitalAsset = {
  id: "digital-asset-market-behavior",
  title: "Digital Asset Market Behavior Intelligence Platform",
  category: "Market Data / Research Terminal",
  summary:
    "Crypto research terminal fusing price, sentiment, DeFi, on-chain, and macro into regimes + event studies.",
  problem:
    "Crypto research workflows need more than price prediction: analysts need regimes, event reactions, breadth, liquidity stress, and clear caveats.",
  built:
    "Built a Streamlit research terminal combining crypto price, sentiment, DeFi liquidity, on-chain proxies, macro data, and curated events into regime labels and event studies.",
  impact:
    "Produced analyst-ready strategy readouts across nine assets with sample-mode disclosure and reproducible dashboard outputs.",
  technologies: ["Python", "Streamlit", "Plotly", "Event Study", "Market Data"],
  tags: ["Python", "Streamlit", "Event Study", "Market Regimes"],
  github:
    "https://github.com/bobaoxu2001/Digital-Asset-Market-Behavior-Intelligence-Platform",
  liveDemo: "https://crypto-market-behavior.streamlit.app/",
  highlight: "Live demo · 9 assets",
};

const altInvestment = {
  id: "alternative-investment-sales",
  title: "Alternative Investment Sales Strategy Analytics",
  category: "Business Analytics / Executive Dashboard",
  summary:
    "Analytics platform for funnel conversion, campaign ROI, and advisor prioritization.",
  description:
    "Built a reproducible analytics platform using synthetic CRM-style data to diagnose funnel conversion, product demand, campaign ROI, and advisor prioritization for investment-sales strategy.",
  technologies: ["Python", "SQL", "SQLite", "Vercel", "Dashboard"],
  github:
    "https://github.com/bobaoxu2001/alternative-investment-sales-strategy-analytics",
  liveDemo:
    "https://alternative-investment-sales-strategy-analytics-matlvkct2.vercel.app/",
  highlight: "Live dashboard demo",
};

const supportTicket = {
  id: "support-ticket-routing",
  title: "LLM-powered Support Ticket Routing System",
  category: "Support Ops / Decision System",
  summary:
    "Routing decision system: rules, calibrated ML, selective LLM fallback, and human triage.",
  problem:
    "Support teams need to route cases accurately while balancing automation coverage, human review load, and LLM cost.",
  built:
    "Built a support-routing decision system combining rules, calibrated ML, selective LLM fallback, and human triage.",
  impact:
    "Benchmarked 8,325 deduplicated tickets: +21.1 pts Macro-F1 over the keyword baseline, with measured automation coverage, review load, and LLM cost.",
  technologies: ["Python", "NLP", "scikit-learn", "Streamlit", "LLM Fallback"],
  tags: ["NLP", "scikit-learn", "LLM Fallback", "Cost Modeling"],
  github:
    "https://github.com/bobaoxu2001/LLM-powered-Support-Ticket-Routing-System",
  liveDemo: "https://portfolio-site-wheat-nu.vercel.app/",
  highlight: "+21.1 pts Macro-F1 · 8,325 tickets",
  caseStudy: "/case-studies/support-ticket-routing",
};

const tiktokSeller = {
  id: "tiktok-seller-analytics",
  title: "TikTok Seller Support Analytics",
  category: "Product / Operations Analytics",
  summary:
    "Seller onboarding and support-KPI diagnosis in SQL, Python, and Tableau.",
  problem:
    "U.S. seller onboarding satisfaction was falling 10% MoM and duplicate tickets were distorting support KPIs, hiding where activation actually broke.",
  built:
    "Analyzed onboarding funnels and support workflows with SQL, Python, and Tableau; ran cohort analysis across activation paths and rebuilt the support-KPI readout.",
  impact:
    "Identified a 48% conversion-lift opportunity across activation paths and reframed seller support metrics for cleaner stakeholder readouts.",
  description:
    "Diagnosed U.S. seller onboarding friction and support-ticket KPI distortion with SQL, Python, and Tableau — surfacing a 10% MoM satisfaction decline and a 48% conversion-lift opportunity across activation paths.",
  technologies: ["SQL", "Python", "Tableau", "Funnel Analysis"],
  tags: ["SQL", "Cohort Analysis", "Tableau", "KPI Design"],
  github: null,
  liveDemo: null,
  highlight: "48% conversion-lift opportunity",
  caseStudy: "/case-studies/tiktok-seller-analytics",
};

const spForecasting = {
  id: "sp-nyu-forecasting",
  title: "S&P Global × NYU Financial Forecasting",
  category: "Research · Time-Series Forecasting",
  summary:
    "Benchmarked six forecasting architectures on 62,800+ hourly observations with macro-market and sentiment features.",
  problem:
    "Hourly crypto-market forecasting needed an honest benchmark: which architectures actually beat baselines once features, validation, and regime shifts are handled properly.",
  built:
    "Engineered features across 62,800+ hourly observations; benchmarked LSTM, GRU, Transformer, LightGBM, XGBoost, and SOFTS with chronological validation.",
  impact:
    "SOFTS delivered a 71% MAE reduction vs. baseline — reported alongside model limits, regime sensitivity, and non-trading interpretation.",
  technologies: ["Python", "SOFTS", "LightGBM", "Transformers", "Feature Engineering"],
  tags: ["Forecasting", "Deep Learning", "Sentiment Features", "Benchmarking"],
  github: null,
  liveDemo: null,
  highlight: "71% MAE reduction vs. baseline",
};

const youtubePipeline = {
  id: "youtube-pipeline",
  title: "YouTube Creator Data Pipeline",
  category: "Product Analytics / Data Platform",
  summary:
    "Creator-metrics pipeline and dashboard for cohort benchmarking and shortlisting.",
  description:
    "Collected real YouTube creator and video metrics via the YouTube Data API and built a Streamlit dashboard for cohort benchmarking, awareness-vs-engagement analysis, and creator shortlisting.",
  technologies: ["Python", "YouTube API", "Pandas", "Streamlit", "Feature Engineering"],
  github: "https://github.com/bobaoxu2001/youtube_creator_data_pipeline",
  liveDemo: null,
  highlight: "200 creators, ~1,400 videos",
};

export const projectTracks: ProjectTrack[] = [
  {
    id: "ai-products",
    label: "AI + Consumer Products",
    tagline:
      "Shipped, live consumer AI products with privacy, safety, and graceful-failure design built in.",
    headline:
      "Unhappy Buster — a private 30-second stress arcade with a privacy-aware AI pipeline, shipped to production with a full test suite.",
    accent: "rose",
    projects: [unhappyBuster],
  },
  {
    id: "ai-knowledge",
    label: "AI + Knowledge & LLM Workflows",
    tagline:
      "RAG assistants, agentic triage, and enterprise LLM workflows with evaluation built in.",
    headline:
      "A cited RAG copilot (95% retrieval hit on synthetic eval), a 20K-log enterprise LLM workflow, and a 0→1 digital-human management platform.",
    accent: "indigo",
    projects: [socCopilot, chinaTelecom, digitalHumanPlatform, forwardDeployed],
  },
  {
    id: "ai-sports",
    label: "AI + Sports & Prediction Products",
    tagline:
      "Agentic and simulation-driven football products that turn data science into fan-facing predictions.",
    headline:
      "A news-aware prediction agent and a freemium tournament-simulation product, both running 10K Monte Carlo sims per matchup.",
    accent: "sky",
    projects: [worldcupOracle, worldCupLab],
  },
  {
    id: "ai-markets",
    label: "AI + Markets & Finance",
    tagline:
      "Market-intelligence platforms and research analytics — signals with caveats, not hype.",
    headline:
      "An AI quant research workbench, crypto regime + event-study research across 9 assets, and an investment-sales analytics dashboard.",
    accent: "emerald",
    projects: [aiStockPlatform, digitalAsset, altInvestment],
  },
  {
    id: "ai-data-ops",
    label: "AI + Data & Product Operations",
    tagline:
      "Routing systems, seller and creator analytics, and data pipelines that turn operations data into decisions.",
    headline:
      "8,325 support tickets benchmarked and a 48% conversion-lift opportunity surfaced at TikTok.",
    accent: "violet",
    projects: [supportTicket, tiktokSeller, youtubePipeline],
  },
];

// Latest shipped AI products, surfaced as the homepage "Featured AI Products"
// showcase with impact bullets and live demos.
export const featuredProducts: Project[] = [unhappyBuster, worldcupOracle, aiStockPlatform, worldCupLab];

// Top featured projects, ranked by job-market value. Rendered as
// problem → built → outcome case cards on the homepage.
export const featuredCaseProjects: Project[] = [
  unhappyBuster,
  socCopilot,
  supportTicket,
  digitalHumanPlatform,
  tiktokSeller,
  spForecasting,
];

// ─── Best-fit roles: role → why → proof, linked to evidence ──────────────────

export type RoleFit = {
  id: string;
  role: string;
  why: string;
  proof: string[];
  href: string;
  linkLabel: string;
};

export const roleFits: RoleFit[] = [
  {
    id: "ai-engineer",
    role: "AI Engineer / Applied AI",
    why: "I build LLM systems end to end — retrieval, routing, evaluation, and deployment — not just prompts.",
    proof: [
      "RAG copilot with cited answers and a built-in eval harness (95% retrieval hit on synthetic eval)",
      "Support-ticket routing: rules + calibrated ML + selective LLM fallback, +21.1 pts Macro-F1",
      "Shipped prototypes in Streamlit, FastAPI, and Next.js — all with live demos",
    ],
    href: "/projects/ai-knowledge",
    linkLabel: "See LLM & RAG projects",
  },
  {
    id: "data-scientist",
    role: "Data Scientist / Product Data Analyst",
    why: "I turn product and market data into decisions — funnels, cohorts, forecasts, and honest evaluation.",
    proof: [
      "TikTok seller analytics: cohort analysis surfaced a 48% conversion-lift opportunity",
      "S&P Global × NYU: benchmarked 6 forecasting architectures, 71% MAE reduction",
      "Dashboards and KPI design in SQL, Python, Tableau, and Power BI",
    ],
    href: "/projects/ai-data-ops",
    linkLabel: "See analytics projects",
  },
  {
    id: "ai-pm",
    role: "AI Product Manager / AI Strategist",
    why: "I scope AI products from 0 to 1 — PRDs, user flows, field rules, and workflows that teams can execute.",
    proof: [
      "China Telecom digital-human platform: 0→1 PRD, prototypes, and acceptance criteria across 6 modules",
      "LLM workflow design: 20K+ logs structured into a 170+ label intent taxonomy with QA loops",
      "Cross-functional delivery: platform materials prepared for international stakeholder review",
    ],
    href: "/case-studies/china-telecom-ai-platform",
    linkLabel: "Read the platform case study",
  },
];

// ─── Recruiter snapshot: skimmable facts for a 30-second read ─────────────────

export const recruiterSnapshot = {
  education: [
    "M.S. Data Science — New York University",
    "B.S. Data Science & Applied Mathematics — UC Santa Barbara",
  ],
  coreSkills: [
    "Python",
    "SQL",
    "R",
    "ML",
    "NLP",
    "LLM Workflows",
    "RAG",
    "Prompt Evaluation",
    "Tableau",
    "Power BI",
    "Streamlit",
    "FastAPI",
    "Next.js",
  ],
  domains: [
    "Applied AI",
    "Product Analytics",
    "Support Operations",
    "Forecasting",
    "AI Workflow Design",
  ],
  evidence: ["China Telecom", "TikTok / ByteDance", "S&P Global × NYU", "Deloitte"],
  location: "NYC, California, or remote",
  openRoles: [
    "AI Engineer",
    "Data Scientist",
    "AI Product Manager",
    "Applied AI",
    "AI Strategist",
  ],
};

// ─── Case studies: structured deep dives for the strongest projects ───────────

export type CaseStudy = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  context: string;
  problem: string;
  role: string;
  design: string[];
  evaluation: string[];
  outcome: string;
  next: string;
  technologies: string[];
  github?: string | null;
  liveDemo?: string | null;
  relatedProjectIds: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "soc-engineering-copilot",
    title: "SOC Engineering Knowledge Copilot",
    eyebrow: "RAG · Agent Workflow · Evaluation",
    summary:
      "A RAG + agent workflow assistant that answers engineering questions with citations, routes failures deterministically, and measures itself.",
    context:
      "Engineering support knowledge lives in scattered runbooks and docs. Teams need answers they can trust — with sources — and safe handling when a question is out of scope.",
    problem:
      "Generic chatbots answer confidently without citations, can't be audited, and have no measured failure behavior. That makes them unusable for build, verification, and workflow triage.",
    role: "Solo build: system design, retrieval pipeline, agent routing, evaluation harness, and deployment.",
    design: [
      "Cited RAG answers over a FAISS index, with dense and hybrid retrieval modes that can be inspected side by side.",
      "Deterministic workflow triage for failure categories, with human-review gates for high-risk paths.",
      "FastAPI service boundary under a Streamlit interface, so the workflow logic is testable independently of the UI.",
      "A built-in evaluation dashboard rather than a one-off eval script.",
    ],
    evaluation: [
      "95% retrieval hit rate on synthetic held-out eval sets",
      "90% grounded-answer rate (answers supported by retrieved sources)",
      "100% out-of-scope safety handling",
    ],
    outcome:
      "A live, auditable copilot that demonstrates the full loop: retrieval, citation, triage, human review, and quantitative evaluation.",
    next: "Expand the eval sets beyond synthetic data and add regression tracking across prompt and index versions.",
    technologies: ["Python", "RAG", "FAISS", "FastAPI", "Streamlit", "Evaluation"],
    github:
      "https://github.com/bobaoxu2001/SOC-Engineering-Copilot-RAG-Agent-Workflow-Assistant",
    liveDemo: "https://soc-ai-copilot.streamlit.app/",
    relatedProjectIds: ["soc-engineering-copilot"],
  },
  {
    id: "support-ticket-routing",
    title: "LLM-powered Support Ticket Routing System",
    eyebrow: "NLP · Decision System · Cost Modeling",
    summary:
      "A routing decision system that balances automation coverage, human review load, and LLM cost — benchmarked on 8,325 real tickets.",
    context:
      "Support teams route thousands of tickets across queues. Pure-LLM routing is expensive and unaudited; pure-rules routing is brittle and inaccurate.",
    problem:
      "How do you route accurately while controlling three competing budgets: automation coverage, manual review load, and per-ticket LLM cost?",
    role: "Solo build: data cleaning, model training and calibration, routing policy design, and the evaluation dashboard.",
    design: [
      "Layered routing policy: deterministic rules first, then a calibrated ML classifier, with selective LLM fallback only for low-confidence cases.",
      "Confidence thresholds tuned as an explicit policy decision — each threshold maps to a measured review load and cost.",
      "Human triage queue for cases below the automation bar, so nothing is silently misrouted.",
    ],
    evaluation: [
      "8,325 deduplicated support tickets benchmarked end to end",
      "+21.1 pts Macro-F1 over the keyword-routing baseline",
      "Reported automation coverage, manual review load, and estimated LLM cost per policy setting",
    ],
    outcome:
      "A decision system — not just a classifier — that shows how routing accuracy, ops load, and LLM spend trade off against each other.",
    next: "Add online evaluation with drift detection and per-queue calibration as ticket mix shifts.",
    technologies: ["Python", "NLP", "scikit-learn", "Streamlit", "LLM Fallback"],
    github: "https://github.com/bobaoxu2001/LLM-powered-Support-Ticket-Routing-System",
    liveDemo: "https://portfolio-site-wheat-nu.vercel.app/",
    relatedProjectIds: ["support-ticket-routing"],
  },
  {
    id: "china-telecom-ai-platform",
    title: "China Telecom LLM Workflow Platform & Digital Human Management Platform",
    eyebrow: "Enterprise AI · 0→1 Product · LLM Workflows",
    summary:
      "Enterprise LLM workflows for intent classification and output review, plus a 0→1 digital-human management platform specified from PRD to acceptance criteria.",
    context:
      "China Telecom's AI Center runs LLM-driven products for enterprise operations — dialogue systems, briefing generation, and digital-human applications — that need structured workflows, not ad-hoc prompting.",
    problem:
      "Two gaps: 20K+ raw dialogue logs had no usable intent structure for evaluation, and digital-human operations had no management platform covering resources, authorization, voices, and creation workflows.",
    role: "AI Product & Data Strategy Analyst: LLM workflow design, intent taxonomy, prompt QA, and 0→1 product specification for the digital-human platform.",
    design: [
      "Structured 20K+ dialogue logs into 8 categories and 170+ intent labels, with prompt A/B tests and QA loops for structured-output review.",
      "Designed the digital-human management platform from 0 to 1: high-fidelity prototypes built with Claude Design, plus PRD, user flows, field rules, and acceptance criteria.",
      "Specified six core modules: digital-human resource management, application authorization and concurrency allocation, avatar binding, TTS voice configuration, action/expression asset management, and creation/configuration workflows for new digital humans.",
      "Used Seedance 2.0 to generate vertical digital-human video materials supporting new digital-human setup and product demonstration.",
    ],
    evaluation: [
      "Intent taxonomy and QA loops enabled repeatable NLP workflow evaluation across 170+ labels",
      "Platform specification structured for cross-functional and international stakeholder review",
    ],
    outcome:
      "Delivered a working intent-evaluation workflow and a complete 0→1 platform specification that enabled enterprise review and demonstration of digital-human operations.",
    next: "Tighten the loop between intent-evaluation findings and prompt iteration, and extend acceptance criteria with measurable rollout checks.",
    technologies: ["LLM Workflow", "NLP", "Dify", "PRD", "Claude Design", "Seedance 2.0"],
    github: null,
    liveDemo: null,
    relatedProjectIds: ["china-telecom-ai-workflow", "digital-human-platform"],
  },
  {
    id: "tiktok-seller-analytics",
    title: "TikTok Seller Support Analytics",
    eyebrow: "Product Analytics · Support Operations",
    summary:
      "Diagnosed why seller onboarding satisfaction was falling and where the activation funnel leaked — and found a 48% conversion-lift opportunity.",
    context:
      "TikTok Shop's U.S. seller operations depend on smooth onboarding and trustworthy support metrics. Both were degrading, and the KPIs didn't explain why.",
    problem:
      "Onboarding satisfaction was declining 10% MoM, and duplicate tickets were distorting support KPIs — so the metrics pointed away from the real friction.",
    role: "Data Analyst Intern: SQL/Python analysis, Tableau reporting, cohort analysis, and stakeholder readouts.",
    design: [
      "Mapped the seller activation funnel end to end and traced support friction across activation touchpoints.",
      "Ran cohort analysis across activation paths to isolate where conversion actually dropped.",
      "Identified duplicate-ticket KPI distortion and rebuilt the support-metric readout so stakeholders saw clean numbers.",
    ],
    evaluation: [
      "10% MoM satisfaction decline traced to specific onboarding touchpoints",
      "48% conversion-lift opportunity identified across activation paths",
      "Support KPIs reframed after removing duplicate-ticket distortion",
    ],
    outcome:
      "Stakeholders got a corrected view of support performance and a prioritized, quantified activation opportunity.",
    next: "Instrument the funnel for ongoing cohort tracking instead of one-off diagnosis.",
    technologies: ["SQL", "Python", "Tableau", "Funnel Analysis", "Cohort Analysis"],
    github: null,
    liveDemo: null,
    relatedProjectIds: ["tiktok-seller-analytics"],
  },
];

export const featuredProject = {
  title: "SOC Engineering Knowledge Copilot",
  badge: "Selected Deep Dive",
  subtitle: "RAG + agent workflow assistant for cited engineering knowledge retrieval and failure triage.",
  description:
    "This project is the clearest technical proof that I can turn a messy knowledge workflow into an AI-powered decision system. It combines retrieval, citations, deterministic agent triage, human-review gates, service boundaries, and quantitative evaluation rather than presenting a generic chatbot.",
  problem:
    "Engineering support workflows require source-backed answers, transparent retrieval, and safe escalation for high-risk issues.",
  approach:
    "Built a Streamlit + FastAPI tool with cited RAG answers, dense/hybrid retrieval inspection, deterministic workflow triage, and evaluation dashboards.",
  outcome:
    "Measured 95% retrieval hit rate, 90% grounded-answer rate, and 100% out-of-scope safety handling on synthetic held-out eval sets.",
  technologies: ["RAG", "FAISS", "FastAPI", "Streamlit", "Python", "Evaluation"],
  metrics: [
    { value: "95%", label: "retrieval hit rate on synthetic eval" },
    { value: "90%", label: "grounded-answer rate" },
    { value: "100%", label: "out-of-scope safety handling" },
    { value: "4", label: "surfaces: Q&A, retrieval, triage, eval" },
  ],
  github:
    "https://github.com/bobaoxu2001/SOC-Engineering-Copilot-RAG-Agent-Workflow-Assistant",
  liveDemo: "https://soc-ai-copilot.streamlit.app/",
};

export const archiveProjects = [
  {
    id: "nhanes-biomarkers",
    title: "NHANES Biomarker Analysis",
    archiveCategory: "Statistical Analysis",
    description:
      "Survey-weighted R analysis of environmental metal exposure, nutrition, and cardiometabolic biomarkers using NHANES 2017-2018 public health data.",
    technologies: ["R", "Quarto", "Survey Regression", "NHANES"],
    github: "https://github.com/bobaoxu2001/nhanes-metal-nutrition-biomarkers",
    liveDemo: null,
    highlight: "5,014 adult analytic sample",
  },
  {
    id: "ai-sitcom-studio",
    title: "90s AI Sitcom Studio",
    archiveCategory: "Creative AI Experiment",
    description:
      "Creative multimodal AI pipeline that writes, styles, voices, scores, and assembles a short VHS-style sitcom clip from a prompt and team photos.",
    technologies: ["Gemini", "Veo", "Lyria", "Streamlit", "FFmpeg"],
    github: null,
    liveDemo: null,
    highlight: "Multimodal generation pipeline",
  },
];

export const capstoneGroups = [
  {
    group: "UC Santa Barbara — Undergraduate Data Science Capstone",
    projects: [
      {
        id: "ucsb-health-claims-nlp",
        title: "Health Claims NLP Classification",
        category: "UC Santa Barbara · Undergraduate Capstone",
        description:
          "NLP pipeline for classifying health-claim webpages using HTML extraction, TF-IDF features, and Keras/TensorFlow models.",
        technologies: [
          "R",
          "tidytext",
          "rvest",
          "Keras",
          "TensorFlow",
          "NLP",
          "Classification",
          "Model Evaluation",
        ],
        github: "https://github.com/bobaoxu2001/PSTAT197---Claims",
        liveDemo: null,
        highlight: "ROC-AUC ~0.80",
      },
      {
        id: "ucsb-proteomic-biomarkers-asd",
        title: "Proteomic Biomarkers of ASD",
        category: "UC Santa Barbara · Undergraduate Capstone",
        description:
          "Replication and sensitivity analysis of an ASD proteomic biomarker study using random forest, statistical testing, and feature selection.",
        technologies: [
          "R",
          "randomForest",
          "tidymodels",
          "Statistical Modeling",
          "Biomedical Data",
          "Reproducibility",
        ],
        github: "https://github.com/bobaoxu2001/PSTAT197---Biomakers",
        liveDemo: null,
        highlight: "Replication & sensitivity study",
      },
    ],
  },
  {
    group: "NYU — M.S. Data Science Capstone",
    projects: [
      {
        id: "nyu-bitcoin-deep-learning-capstone",
        title: "Bitcoin Price Prediction with Deep Learning and Market Sentiment",
        category: "NYU · M.S. Data Science Capstone",
        description:
          "Capstone with S&P Global × NYU: benchmarked classical, tree-based, and deep-learning models on hourly Bitcoin data with macro-market and social-sentiment features. SOFTS achieved the strongest performance (71% MAE reduction vs. baseline), with emphasis on model limits and regime sensitivity over headline error.",
        technologies: [
          "Python",
          "Time-Series Forecasting",
          "CNN-LSTM",
          "iTransformer",
          "SOFTS",
          "LightGBM",
          "Sentiment Analysis",
          "Feature Engineering",
        ],
        // TODO: No public repository for the NYU capstone yet; add the public
        // GitHub or project link here when one becomes available.
        github: null,
        liveDemo: null,
        highlight: "71% MAE reduction",
      },
    ],
  },
];

export const experiences = [
  {
    id: "china-telecom",
    title: "AI Product & Data Strategy Analyst",
    company: "China Telecom - AI Center",
    location: "Remote / Shanghai",
    period: "Aug 2025 - Present",
    type: "Project-based / Remote",
    bullets: [
      "Designed LLM workflows for intent classification, briefing generation, structured output review, and digital-human operations.",
      "Mapped 20K+ dialogue logs into 8 categories and 170+ intent labels for NLP workflow evaluation.",
      "Built prompt A/B tests and QA loops for structured extraction, label review, and workflow reliability checks.",
      "Designed a 0→1 digital-human management platform — high-fidelity prototypes, PRD, user flows, field rules, and acceptance criteria across six modules — and generated demo video materials with Seedance 2.0.",
      "Prepared AI platform materials and data quality frameworks for cross-functional and international stakeholder review.",
    ],
  },
  {
    id: "tiktok",
    title: "Data Analyst Intern",
    company: "TikTok / ByteDance",
    location: "Beijing",
    period: "Jun 2024 - Aug 2024",
    type: "Internship",
    bullets: [
      "Analyzed U.S. seller onboarding and support workflows with SQL, Python, and Tableau.",
      "Diagnosed a 10% MoM decline in onboarding satisfaction and traced support friction across activation touchpoints.",
      "Identified duplicate-ticket KPI distortion and helped reframe seller support metrics for cleaner stakeholder readouts.",
      "Mapped seller activation funnels and surfaced a 48% conversion-lift opportunity through cohort analysis.",
    ],
  },
  {
    id: "sp-global",
    title: "AI Research Intern / Capstone Lead",
    company: "S&P Global x NYU Stern",
    location: "New York, NY",
    period: "Sep 2024 - Dec 2024",
    type: "Research / Capstone",
    bullets: [
      "Led a forecasting research workflow combining macro-market, sentiment, and market-index features.",
      "Engineered features across 62,800+ hourly observations from multiple alternative and market data sources.",
      "Benchmarked LSTM, GRU, Transformer, LightGBM, XGBoost, and SOFTS architectures with chronological validation.",
      "Reported a 71% MAE reduction while documenting model limits, regime sensitivity, and non-trading interpretation.",
    ],
  },
  {
    id: "deloitte",
    title: "Business Operations / Risk Advisory Intern",
    company: "Deloitte",
    location: "Beijing",
    period: "Jun 2021 - Aug 2021",
    type: "Internship",
    bullets: [
      "Automated reporting workflows across 3,500+ contract records, improving retrieval efficiency by 70%.",
      "Built SQL-based reporting logic and Power BI dashboards for portfolio-level risk operations monitoring.",
      "Standardized RFP and QA workflows from requirements intake to business-facing delivery review.",
    ],
  },
];

export const education = [
  {
    degree: "M.S. Data Science",
    school: "New York University (NYU)",
    period: "Sep 2023 - May 2025",
    gpa: "3.5 / 4.0",
    notes: "Focus: Machine Learning, NLP, Applied Statistics",
  },
  {
    degree: "B.S. Data Science & Applied Mathematics",
    school: "University of California, Santa Barbara (UCSB)",
    period: "Sep 2019 - Mar 2023",
    gpa: "3.81 / 4.0",
    notes: "Stochastic Processes, Quantitative Methods, Statistical Modeling",
  },
];

export const skillGroups = [
  {
    label: "Data",
    color: "blue",
    skills: ["Python", "SQL", "R", "Pandas", "NumPy"],
  },
  {
    label: "AI / LLM",
    color: "indigo",
    skills: [
      "Prompt Engineering",
      "RAG",
      "OpenAI API",
      "Dify",
      "Claude",
      "Gemini",
      "Structured Output",
    ],
  },
  {
    label: "ML",
    color: "violet",
    skills: ["NLP", "Classification", "XGBoost", "LightGBM", "Forecasting", "Evaluation"],
  },
  {
    label: "BI / Product",
    color: "sky",
    skills: ["Tableau", "Power BI", "Streamlit", "Retool", "Next.js"],
  },
  {
    label: "Deployment",
    color: "emerald",
    skills: ["Vercel", "Streamlit Cloud", "GitHub Actions", "FastAPI"],
  },
];
