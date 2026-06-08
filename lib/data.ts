// Central content configuration. Most portfolio copy should live here.

export const siteConfig = {
  name: "Ao (Allen) Xu",
  shortName: "Ao Xu",
  title: "AI Builder · Data Scientist",
  tagline: "AI Builder · Data Scientist · Product-minded Engineer",
  headline: "I build AI products that turn data, workflows, and ideas into usable systems.",
  positioning:
    "AI Builder and Data Scientist with experience across LLM applications, analytics platforms, product prototyping, and data-driven decision systems.",
  currentlyBuilding:
    "Currently building AI-native products across sports prediction, financial intelligence, sales automation, and data quality workflows.",
  email: "ax2183@nyu.edu",
  linkedin: "https://www.linkedin.com/in/ao-xu/",
  github: "https://github.com/bobaoxu2001",
  resumeUrl: "/resume/Allen_Xu_Resume.pdf",
  seoTitle: "Ao Xu | AI Builder & Data Scientist",
  seoDescription:
    "Portfolio of Ao Xu — AI Builder and Data Scientist shipping LLM products, agentic analytics, market-intelligence platforms, and data-driven decision systems.",
  ogImage: "/images/ao-xu-headshot.png",
};

export const heroMetrics = [
  { value: "10+", label: "AI products & systems shipped" },
  { value: "10K", label: "Monte Carlo sims per prediction" },
  { value: "20K+", label: "dialogue logs structured" },
  { value: "71%", label: "forecasting MAE reduction" },
  { value: "Next.js / Python / LLM / RAG", label: "core build stack" },
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

const worldcupOracle = {
  id: "worldcup-oracle-agent",
  title: "WorldCup Oracle Agent",
  category: "AI Agent · Sports Analytics",
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
  category: "FinTech AI · Market Intelligence",
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
  category: "Sports Analytics · AI Product",
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
  highlight: "Live demo · cited RAG + eval",
};

const chinaTelecom = {
  id: "china-telecom-ai-workflow",
  title: "China Telecom AI Workflow Platform",
  category: "Enterprise · LLM Workflow",
  summary:
    "Enterprise LLM workflows for intent classification, output review, and digital-human operations.",
  problem:
    "Enterprise AI teams needed structured workflows for messy dialogue logs, intent labels, prompt output review, and digital-human operations.",
  built:
    "Designed LLM/NLP workflows for intent classification, structured output review, prompt evaluation, and digital-human product operations.",
  impact:
    "Mapped 20K+ dialogue logs into 170+ intent labels and built QA loops for improving workflow reliability.",
  technologies: ["LLM Workflow", "NLP", "Dify", "Prompt Evaluation", "AI Operations"],
  tags: ["LLM Workflow", "Intent Classification", "Prompt Eval", "Digital Human"],
  github: null,
  liveDemo: null,
  highlight: "20K+ logs / 170+ intent labels",
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
    "Benchmarked 8,325 deduplicated support-ticket records and evaluated routing confidence, automation coverage, manual review load, and estimated LLM cost.",
  technologies: ["Python", "NLP", "scikit-learn", "Streamlit", "LLM Fallback"],
  tags: ["NLP", "scikit-learn", "LLM Fallback", "Cost Modeling"],
  github:
    "https://github.com/bobaoxu2001/LLM-powered-Support-Ticket-Routing-System",
  liveDemo: "https://portfolio-site-wheat-nu.vercel.app/",
  highlight: "Live demo · 8,325 tickets",
};

const tiktokSeller = {
  id: "tiktok-seller-analytics",
  title: "TikTok Seller Support Analytics",
  category: "Product / Operations Analytics",
  summary:
    "Seller onboarding and support-KPI diagnosis in SQL, Python, and Tableau.",
  description:
    "Diagnosed U.S. seller onboarding friction and support-ticket KPI distortion with SQL, Python, and Tableau — surfacing a 10% MoM satisfaction decline and a 48% conversion-lift opportunity across activation paths.",
  technologies: ["SQL", "Python", "Tableau", "Funnel Analysis"],
  github: null,
  liveDemo: null,
  highlight: "48% conversion-lift opportunity",
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
    id: "ai-knowledge",
    label: "AI + Knowledge & LLM Workflows",
    tagline:
      "RAG assistants, agentic triage, and enterprise LLM workflows with evaluation built in.",
    headline:
      "A cited RAG copilot (95% retrieval hit on synthetic eval) and a 20K-log enterprise LLM workflow.",
    accent: "indigo",
    projects: [socCopilot, chinaTelecom, forwardDeployed],
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
export const featuredProducts: Project[] = [worldcupOracle, aiStockPlatform, worldCupLab];

// Homepage teaser grid: flagship deep-dive first, then live demos across tracks.
export const homepageProjects: Project[] = [socCopilot, digitalAsset, supportTicket, chinaTelecom];

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
      "Prototyped digital-human platform modules across resources, voice, capability, workflow, and application management.",
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
