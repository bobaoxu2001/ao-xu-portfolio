// Central content configuration. Most portfolio copy should live here.

export const siteConfig = {
  name: "Ao (Allen) Xu",
  shortName: "Ao Xu",
  title: "AI + Data Analyst",
  tagline: "Applied AI Builder · Data Analyst",
  headline: "AI + Data Analyst Building Decision Systems from Messy Business Data",
  positioning:
    "I turn support tickets, dialogue logs, market signals, and operational workflows into AI-powered systems, dashboards, and decision-ready insights using Python, SQL, LLM workflows, RAG, NLP evaluation, and BI tools.",
  email: "ax2183@nyu.edu",
  linkedin: "https://www.linkedin.com/in/ao-xu/",
  github: "https://github.com/bobaoxu2001",
  resumeUrl: "/resume/Allen_Xu_Resume.pdf",
  seoTitle: "Ao Xu | AI + Data Analyst",
  seoDescription:
    "Portfolio of Ao Xu, an AI + Data Analyst and Applied AI Builder focused on LLM workflows, RAG, NLP analytics, dashboards, forecasting, and operational decision systems.",
  ogImage: "/images/ao-xu-headshot.png",
};

export const heroMetrics = [
  { value: "20K+", label: "dialogue logs structured" },
  { value: "170+", label: "intent labels mapped" },
  { value: "8K+", label: "support tickets benchmarked" },
  { value: "71%", label: "forecasting MAE reduction" },
  { value: "SQL / Python / LLM / RAG / Streamlit", label: "working toolkit" },
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
};

export type ProjectTrack = {
  id: string;
  label: string;
  tagline: string;
  headline: string;
  accent: string;
  projects: Project[];
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
    id: "ai-markets",
    label: "AI + Markets & Finance",
    tagline:
      "Crypto market-behavior research and investment-strategy analytics — signals with caveats, not hype.",
    headline:
      "Crypto regime + event-study research across 9 assets, plus an investment-sales analytics dashboard.",
    accent: "emerald",
    projects: [digitalAsset, altInvestment],
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

// Homepage teaser: flagship first, then the two other live demos, then the
// enterprise work.
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
