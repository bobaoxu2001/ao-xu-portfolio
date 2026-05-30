// Central content configuration — update this file to update site content.

// Public site URL. Set NEXT_PUBLIC_SITE_URL in Vercel when a custom domain
// is attached; falls back to the Vercel preview URL for local + preview builds.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://personal-portfolio-eight-xi-98.vercel.app";

export const siteConfig = {
  name: "Ao (Allen) Xu",
  shortName: "Ao Xu",
  title: "AI + Data Analyst",
  tagline: "AI + Data Analyst | Applied AI Builder | Business Data Scientist",
  positioning:
    "I build data science and AI systems that turn messy business workflows into measurable decisions — from support-ticket routing and seller operations analytics to LLM workflow evaluation and forecasting.",
  email: "ax2183@nyu.edu",
  linkedin: "https://www.linkedin.com/in/ao-xu/",
  github: "https://github.com/bobaoxu2001",
  resumeUrl: "/resume/Allen_Xu_Resume.pdf",
  seoTitle: "Ao Xu | AI + Data Analyst & Applied AI Builder",
  seoDescription:
    "Portfolio of Ao Xu, a business data scientist focused on ML, NLP, LLM workflows, support operations analytics, and AI strategy.",
};

// ─── Featured Project ───────────────────────────────────────────────────────

export const featuredProject = {
  title: "LLM-powered Support Ticket Routing System",
  badge: "Featured Project",
  description:
    "Built an AI-powered support operations routing system using deterministic rules, calibrated ML, selective LLM fallback, and human triage logic to evaluate automation coverage, routing confidence, human review load, and estimated LLM cost.",
  technologies: [
    "Python",
    "scikit-learn",
    "NLP",
    "TF-IDF",
    "Logistic Regression",
    "Streamlit",
    "Next.js",
    "Kaggle",
  ],
  metrics: [
    { value: "8,325", label: "Deduplicated support-ticket records" },
    { value: "1,665", label: "Held-out benchmark tickets" },
    { value: "+21.1 pts", label: "Macro-F1 lift over keyword baseline" },
    { value: "4-Stage", label: "Routing cascade: Rules → ML → LLM → Human" },
  ],
  github:
    "https://github.com/bobaoxu2001/LLM-powered-Support-Ticket-Routing-System",
  liveDemo: "https://portfolio-site-wheat-nu.vercel.app/",
};

// ─── Homepage Project Cards ──────────────────────────────────────────────────
// Order matches recruiter-facing priority:
// China Telecom → SOC Copilot → Digital Asset → Support Ticket → TikTok

export const homepageProjects = [
  {
    id: "china-telecom-llm",
    title: "China Telecom AI Workflow Platform",
    category: "Applied AI / LLM Systems",
    description:
      "Designed enterprise LLM workflows for intent classification, prompt evaluation, structured output review, and city-operations knowledge retrieval across 20,000+ dialogue logs.",
    technologies: ["Python", "Dify", "Prompt Engineering", "NLP", "OpenAI API"],
    github: null,
    liveDemo: null,
    highlight: "20,000+ logs · 170+ intent labels",
  },
  {
    id: "soc-knowledge-copilot",
    title: "SOC Engineering Knowledge Copilot",
    category: "Applied AI / LLM Systems",
    description:
      "Built a cited RAG assistant and deterministic workflow triage agent for system-on-chip (SOC) hardware engineering teams. Combines FAISS-backed retrieval inspection, a 6-step triage pipeline for build/verification/lint logs, a FastAPI service layer, and an evaluation dashboard. High-risk topics gate to human review; runs offline with deterministic mock-LLM fallback.",
    technologies: ["Python", "RAG", "FAISS", "FastAPI", "Streamlit", "sentence-transformers"],
    github:
      "https://github.com/bobaoxu2001/SOC-Engineering-Copilot-RAG-Agent-Workflow-Assistant",
    liveDemo: "https://soc-ai-copilot.streamlit.app/",
    highlight: "95% QA hit rate · 100% triage routing accuracy",
  },
  {
    id: "digital-asset-market",
    title: "Digital Asset Market Behavior Intelligence",
    category: "Data Science & Market Research",
    description:
      "Multi-source crypto market behavior research terminal covering BTC, ETH, SOL, AVAX, and five DeFi beta assets. Fuses price, volatility, sentiment, DeFi liquidity, on-chain activity, and macro context into interpretable behavior regimes, event-reaction studies, and a 6-page Streamlit dashboard. Framed as market behavior monitoring, not trading signals.",
    technologies: ["Python", "Streamlit", "CoinGecko", "DeFiLlama", "FRED", "Event Study"],
    github:
      "https://github.com/bobaoxu2001/Digital-Asset-Market-Behavior-Intelligence-Platform",
    liveDemo: "https://crypto-market-behavior.streamlit.app/",
    highlight: "9 assets · regime + sentiment + on-chain fusion",
  },
  {
    id: "support-ticket-routing",
    title: "LLM-powered Support Ticket Routing",
    category: "Applied AI / LLM Systems",
    description:
      "Built a 4-stage routing workflow combining rules, calibrated ML, selective LLM fallback, and human triage to evaluate automation coverage, confidence, human review load, and cost.",
    technologies: ["Python", "NLP", "TF-IDF", "scikit-learn", "Streamlit"],
    github:
      "https://github.com/bobaoxu2001/LLM-powered-Support-Ticket-Routing-System",
    liveDemo: "https://portfolio-site-wheat-nu.vercel.app/",
    highlight: "+21.1 pts Macro-F1 lift",
  },
  {
    id: "tiktok-seller-analytics",
    title: "TikTok Seller Support Analytics",
    category: "Product Analytics",
    description:
      "Analyzed seller onboarding and support friction, surfaced KPI distortion from duplicate tickets, and identified conversion and satisfaction improvement opportunities.",
    technologies: ["SQL", "Python", "Tableau", "A/B Testing"],
    github: null,
    liveDemo: null,
    highlight: "48% conversion lift opportunity identified",
  },
];

// ─── Archive Projects ────────────────────────────────────────────────────────

export const archiveProjects = [
  {
    id: "sp-global-forecasting",
    archiveCategory: "Data Science & Forecasting",
    title: "S&P Global × NYU Financial Forecasting",
    description:
      "Built a multi-source forecasting pipeline combining social sentiment and market indices across 62,800+ hourly observations, reducing MAE by 71% over baseline. Benchmarked 6 architectures including SOFTS, LSTM, GRU, LightGBM, and XGBoost.",
    technologies: ["Python", "PyTorch", "SOFTS", "LightGBM", "XGBoost", "Time-Series"],
    github: null,
    liveDemo: null,
    highlight: "71% MAE reduction vs. baseline",
  },
  {
    id: "alternative-investment-analytics",
    archiveCategory: "Product Analytics & Data Platforms",
    title: "Alternative Investment Sales Strategy Analytics",
    description:
      "Analytics workflow for alternative investment sales strategy built on synthetic CRM-style data. Includes funnel conversion, RM productivity benchmarking, product demand analysis, campaign ROI, and advisor priority scoring — packaged as a static dashboard with executive charts, validation scripts, and methodology documentation.",
    technologies: ["Python", "SQL", "SQLite", "pandas", "matplotlib", "Vercel"],
    github:
      "https://github.com/bobaoxu2001/alternative-investment-sales-strategy-analytics",
    liveDemo:
      "https://alternative-investment-sales-strategy-analytics-matlvkct2.vercel.app/",
    highlight: "Funnel · RM productivity · campaign ROI · priority scoring",
  },
  {
    id: "nlp-hybrid-prompting",
    title: "NLP / LLM Hybrid Prompting Research",
    archiveCategory: "Applied AI / LLM Systems",
    description:
      "Developed a hybrid prompting framework for implicit sentiment analysis using chain-of-thought and structured output techniques. Achieved a 29% accuracy gain over the zero-shot baseline.",
    technologies: ["Python", "LLM Prompting", "NLP", "Sentiment Analysis", "OpenAI API"],
    github: null,
    liveDemo: null,
    highlight: "29% accuracy gain",
  },
  {
    id: "youtube-pipeline",
    title: "YouTube Creator Data Pipeline",
    archiveCategory: "Product Analytics & Data Platforms",
    description:
      "Built an end-to-end YouTube Data API pipeline covering 200 creators and ~1,400 videos across five verticals. Produced structured outputs for creator shortlisting, cohort comparison, and content analysis.",
    technologies: ["Python", "YouTube API", "Pandas", "Streamlit", "Feature Engineering"],
    github: "https://github.com/bobaoxu2001/youtube_creator_data_pipeline",
    liveDemo: null,
    highlight: "200 creators, ~1,400 videos analyzed",
  },
  {
    id: "forward-deployed-ai",
    title: "Forward-Deployed AI Simulation",
    archiveCategory: "Applied AI / LLM Systems",
    description:
      "A Distyl-style forward-deployed AI engagement simulation that turns noisy enterprise support data into structured operational insight using LLM structured extraction, validation gates, and a 10-page Streamlit dashboard.",
    technologies: ["Python", "Claude API", "Streamlit", "SQLite", "JSON Schema"],
    github: null,
    liveDemo: null,
    highlight: "97.3% evidence grounding, 90% human-AI agreement",
  },
  {
    id: "influencer-analytics",
    title: "Influencer Campaign Analytics",
    archiveCategory: "Product Analytics & Data Platforms",
    description:
      "Creator marketing analytics prototype built on a 500-creator sample of a 33,000+ influencer dataset. Includes engagement scoring, sponsored vs. organic analysis, creator cohort segmentation, and a client-facing dashboard.",
    technologies: ["Python", "SQL", "Pandas", "Jupyter", "Streamlit"],
    github:
      "https://github.com/bobaoxu2001/influencer-campaign-analytics",
    liveDemo: null,
    highlight: "500 creators, 25K posts analyzed",
  },
  {
    id: "nyc-cre",
    title: "NYC CRE Investment Analytics",
    archiveCategory: "Data Science & Forecasting",
    description:
      "Commercial real estate investment intelligence platform for NYC using hedonic regression, K-Means / DBSCAN market segmentation, SARIMAX / Prophet price forecasting, XGBoost distress prediction, and Monte Carlo simulation.",
    technologies: [
      "Python",
      "XGBoost",
      "Prophet",
      "SARIMAX",
      "NetworkX",
      "Neo4j",
    ],
    github: "https://github.com/bobaoxu2001/nyc-cre-investment-analytics",
    liveDemo: null,
    highlight: "Hedonic regression + Monte Carlo + graph analytics",
  },
  {
    id: "liveonny",
    title: "LiveOnNY Data Platform Demo",
    archiveCategory: "Product Analytics & Data Platforms",
    description:
      "Healthcare analytics demo for an Organ Procurement Organization tracking transplant volume, organ distribution, and waiting-list supply-demand using T-SQL, dbt, and Power BI patterns.",
    technologies: ["T-SQL", "dbt", "Power BI", "Python", "SSIS patterns"],
    github: null,
    liveDemo: null,
    highlight: "Transplant ops analytics with full data lineage",
  },
  {
    id: "creative-ai",
    title: "Creative AI Interaction App",
    archiveCategory: "Creative AI Experiments",
    description:
      "A playful GenAI experiment exploring emotional expression, character generation, and interactive UI mechanics.",
    technologies: ["React Native", "OpenAI API", "Node.js"],
    github: null,
    liveDemo: null,
    highlight: null,
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────

export const experiences = [
  {
    id: "china-telecom",
    title: "AI Product & Data Strategy Analyst",
    company: "China Telecom – AI Center",
    location: "Remote / Shanghai",
    period: "Aug 2025 – Present",
    type: "Project-based / Remote",
    bullets: [
      "Designed 3 LLM-powered workflows on Dify for intent classification, briefing generation, and narration.",
      "Built NLP pipeline classifying 20,000+ dialogue logs into 8 categories and 170+ intent labels.",
      "Designed prompt A/B tests and QA loops, achieving 90%+ label accuracy and generating 100K+ validation records.",
      "Prototyped a digital-human management platform by expanding a standalone API configuration page into resource, voice, capability, and workflow management modules.",
      "Developed a data quality framework for structured extraction tasks and prepared materials for international AI platform stakeholders.",
    ],
  },
  {
    id: "tiktok",
    title: "Data Analyst Intern",
    company: "TikTok / ByteDance",
    location: "Beijing",
    period: "Jun 2024 – Aug 2024",
    type: "Internship",
    bullets: [
      "Analyzed U.S. seller customer satisfaction data and identified a 10% MoM decline in onboarding satisfaction scores.",
      "Built an end-to-end seller onboarding funnel map and conducted chain-logic analysis across support touchpoints.",
      "Identified a 48% conversion lift opportunity through cohort analysis of new seller activation pathways.",
      "Created analytics dashboards and delivered findings to cross-functional stakeholders in seller operations.",
    ],
  },
  {
    id: "sp-global",
    title: "AI Research Intern / Capstone Lead",
    company: "S&P Global × NYU Stern",
    location: "New York, NY",
    period: "Sep 2024 – Dec 2024",
    type: "Research / Capstone",
    bullets: [
      "Led cross-functional team designing a research framework integrating alternative data with market indices.",
      "Processed and engineered features across 62,800+ hourly observations from multiple data sources.",
      "Benchmarked 6 forecasting architectures (LSTM, GRU, Transformer, LightGBM, XGBoost, SOFTS).",
      "Achieved 71% MAE reduction with the SOFTS time-series model vs. the baseline.",
    ],
  },
  {
    id: "deloitte",
    title: "Business Operations / Risk Advisory Intern",
    company: "Deloitte",
    location: "Beijing",
    period: "Jun 2021 – Aug 2021",
    type: "Internship",
    bullets: [
      "Built automated data workflow consolidating 3,500+ contract records, improving retrieval efficiency by 70%.",
      "Developed SQL-based reporting logic and Power BI dashboards for portfolio-level risk operations monitoring.",
      "Standardized RFP execution workflows from requirements intake to QA, improving consistency of client-facing deliverables.",
    ],
  },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const education = [
  {
    degree: "M.S. Data Science",
    school: "New York University (NYU)",
    period: "Sep 2023 – May 2025",
    gpa: "3.5 / 4.0",
    notes: "Focus: Machine Learning, NLP, Applied Statistics",
  },
  {
    degree: "B.S. Data Science & Applied Mathematics",
    school: "University of California, Santa Barbara (UCSB)",
    period: "Sep 2019 – Mar 2023",
    gpa: "3.81 / 4.0",
    notes: "Stochastic Processes, Quantitative Methods, Statistical Modeling",
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skillGroups = [
  {
    label: "Programming & Data",
    color: "blue",
    skills: ["Python", "SQL", "R", "Pandas", "NumPy", "PySpark", "C++"],
  },
  {
    label: "ML / Statistics",
    color: "violet",
    skills: [
      "Logistic Regression",
      "XGBoost",
      "LightGBM",
      "NLP",
      "A/B Testing",
      "Hypothesis Testing",
      "Time-Series Forecasting",
      "Model Evaluation",
      "Feature Engineering",
      "Monte Carlo Simulation",
    ],
  },
  {
    label: "AI / LLM",
    color: "indigo",
    skills: [
      "Prompt Engineering",
      "LLM Evaluation",
      "RAG Workflows",
      "OpenAI API",
      "Google AI Studio",
      "Claude Code",
      "Cursor",
      "Dify",
      "Structured Output",
    ],
  },
  {
    label: "BI / Visualization",
    color: "sky",
    skills: ["Tableau", "Power BI", "Looker", "Streamlit", "Retool", "Matplotlib"],
  },
];
