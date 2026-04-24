"use client";

import { useState } from "react";
import { Target, TrendingUp, Cpu, Users, BarChart2, Zap, ChevronDown } from "lucide-react";

interface Capability {
  icon: React.ElementType;
  title: string;
  description: string;
  evidence: string[];
  backItems: string[];
  backChip: string;
}

const capabilities: Capability[] = [
  {
    icon: Target,
    title: "Business Problem Framing",
    description:
      "Turn ambiguous operational problems into measurable data science questions, metrics, and decision frameworks.",
    evidence: ["TikTok Seller Analytics", "Support Routing"],
    backItems: [
      "Mapped TikTok seller onboarding funnel → pinpointed 48% conversion lift opportunity",
      "Framed support routing as a 4-stage coverage + confidence problem",
      "Translated LLM output quality into A/B hypothesis tests",
    ],
    backChip: "Product & Ops",
  },
  {
    icon: TrendingUp,
    title: "ML / Statistical Modeling",
    description:
      "Build and evaluate classification, forecasting, and experimentation workflows with Python, SQL, and model benchmarks.",
    evidence: ["S&P Forecasting", "A/B Testing"],
    backItems: [
      "71% MAE reduction — SOFTS model over naive baseline on 62,800 hourly obs.",
      "Benchmarked 6 architectures: LSTM, GRU, Transformer, LightGBM, XGBoost, SOFTS",
      "+21.1 pts Macro-F1 lift on support ticket routing",
    ],
    backChip: "Python · scikit-learn · PyTorch",
  },
  {
    icon: Cpu,
    title: "LLM / NLP Systems",
    description:
      "Design LLM workflows for intent classification, structured extraction, prompt evaluation, and selective automation.",
    evidence: ["China Telecom LLM", "NLP Routing"],
    backItems: [
      "Classified 20,000+ dialog logs into 170+ intent labels on Dify",
      "Built deterministic → ML → LLM → human routing cascade",
      "Prompt A/B experiments with statistical hypothesis testing",
    ],
    backChip: "OpenAI API · Claude API · Dify",
  },
  {
    icon: Users,
    title: "Support & Product Analytics",
    description:
      "Analyze support tickets, onboarding funnels, satisfaction signals, and operational bottlenecks to improve customer-facing workflows.",
    evidence: ["TikTok Seller Ops", "Support Ops Automation"],
    backItems: [
      "Identified 10% MoM decline in onboarding satisfaction — surfaced root cause",
      "Built chain-logic funnel map across all seller support touchpoints",
      "Surfaced KPI distortion from duplicate ticket inflation",
    ],
    backChip: "SQL · Tableau · A/B Testing",
  },
  {
    icon: BarChart2,
    title: "Data Storytelling",
    description:
      "Turn model tradeoffs and messy analyses into executive-ready recommendations, dashboards, and decision memos.",
    evidence: ["Executive Memo", "Tableau Readouts"],
    backItems: [
      "Executive demo decks for international AI platform stakeholders",
      "Tableau dashboards summarizing seller satisfaction KPIs",
      "Written decision memos translating ML tradeoffs into business terms",
    ],
    backChip: "Tableau · Power BI · Streamlit",
  },
  {
    icon: Zap,
    title: "Execution & Prototyping",
    description:
      "Move from analysis to working prototypes, dashboards, and case studies with Streamlit, Next.js, Retool, and AI tooling.",
    evidence: ["Streamlit", "Next.js", "Retool"],
    backItems: [
      "10-page Streamlit dashboard for forward-deployed AI simulation",
      "This portfolio site — Next.js 14 App Router, Tailwind, TypeScript",
      "YouTube creator pipeline covering 200 creators and ~1,400 videos",
    ],
    backChip: "Streamlit · Next.js · Python",
  },
];

function CapabilityCard({ cap }: { cap: Capability }) {
  const [open, setOpen] = useState(false);
  const Icon = cap.icon;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-[0_4px_20px_rgba(59,130,246,0.08)] transition-all duration-200">
      {/* Icon + title */}
      <div className="flex items-start gap-3 mb-2.5">
        <div className="mt-0.5 w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
          <Icon size={16} className="text-blue-600" />
        </div>
        <h3 className="text-[14px] font-bold text-slate-900 leading-snug pt-1">
          {cap.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[13px] text-slate-500 leading-relaxed mb-3 pl-11">
        {cap.description}
      </p>

      {/* Evidence chips */}
      <div className="flex flex-wrap gap-1.5 pl-11 mb-3">
        {cap.evidence.map((e) => (
          <span
            key={e}
            className="px-2 py-0.5 text-[11px] font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full"
          >
            {e}
          </span>
        ))}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="pl-11 flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
      >
        {open ? "Hide" : "Evidence"}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Evidence panel */}
      {open && (
        <div className="mt-3 pl-11 border-t border-slate-100 pt-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Evidence
            </span>
            <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full font-semibold border border-slate-200">
              {cap.backChip}
            </span>
          </div>
          <ul className="space-y-1.5">
            {cap.backItems.map((item, i) => (
              <li key={i} className="flex gap-2 text-[12px] text-slate-600 leading-snug">
                <span className="mt-[5px] w-[4px] h-[4px] rounded-full bg-blue-300 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function CapabilityMap() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="container-xl">
        {/* Header */}
        <div className="mb-10">
          <span className="eyebrow mb-2 block">Operating Range</span>
          <h2 className="section-heading">Capability Map</h2>
          <p className="section-subheading max-w-xl">
            Six ways I connect data science, AI systems, and business operations.
          </p>
        </div>

        {/* 2×3 grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.title} cap={cap} />
          ))}
        </div>
      </div>
    </section>
  );
}
