"use client";

import { useState } from "react";
import {
  BarChart2,
  Bot,
  BrainCircuit,
  ChevronDown,
  LineChart,
  Rocket,
  Workflow,
} from "lucide-react";

interface Capability {
  icon: React.ElementType;
  title: string;
  description: string;
  evidence: string[];
  examples: string[];
}

const capabilities: Capability[] = [
  {
    icon: Workflow,
    title: "AI Workflow Design",
    description:
      "Design LLM workflows, structured output pipelines, human review gates, and QA loops for operational decision systems.",
    evidence: ["China Telecom", "Support Routing", "Forward-Deployed AI"],
    examples: [
      "Mapped dialogue logs into structured intent taxonomies and review loops.",
      "Designed rule + ML + LLM + human routing policies for support workflows.",
      "Built evidence-backed extraction flows with validation and review gates.",
    ],
  },
  {
    icon: BrainCircuit,
    title: "LLM / NLP Evaluation",
    description:
      "Evaluate LLM and NLP systems through retrieval checks, prompt tests, groundedness metrics, classification benchmarks, and failure-mode review.",
    evidence: ["SOC Copilot", "LLM Routing", "Prompt QA"],
    examples: [
      "Compared dense and hybrid retrieval with hit rate, MRR, and citation coverage.",
      "Used prompt A/B tests and structured-output QA for workflow reliability.",
      "Benchmarked ML/NLP routing against keyword and supervised baselines.",
    ],
  },
  {
    icon: BarChart2,
    title: "Data Analytics & BI",
    description:
      "Turn SQL/Python analysis into dashboards, KPI diagnosis, funnel readouts, and stakeholder-ready recommendations.",
    evidence: ["TikTok", "Deloitte", "Investment Analytics"],
    examples: [
      "Diagnosed seller onboarding satisfaction and support-ticket KPI distortion.",
      "Built Power BI and Tableau-style reporting for risk and operations monitoring.",
      "Translated synthetic CRM-style data into executive sales strategy dashboards.",
    ],
  },
  {
    icon: LineChart,
    title: "Forecasting & Modeling",
    description:
      "Benchmark forecasting and classification models with honest evaluation, feature engineering, and clear limits around what the model can support.",
    evidence: ["S&P x NYU", "Digital Assets", "Support Routing"],
    examples: [
      "Benchmarked six forecasting architectures across 62K+ hourly observations.",
      "Built market regime and event-study features instead of overclaiming price prediction.",
      "Evaluated model tradeoffs using accuracy, F1, MAE, and policy constraints.",
    ],
  },
  {
    icon: Bot,
    title: "Product / Operations Analytics",
    description:
      "Frame messy workflow problems as measurable operating questions across support, seller activation, customer experience, and AI adoption.",
    evidence: ["TikTok Seller Ops", "China Telecom", "Support Ops"],
    examples: [
      "Mapped onboarding funnels and support touchpoints into decision-ready analysis.",
      "Connected AI workflow quality to expected ops load and review effort.",
      "Built recommendation narratives for PM, operations, and executive audiences.",
    ],
  },
  {
    icon: Rocket,
    title: "Deployment & Prototyping",
    description:
      "Move from analysis to working artifacts with Streamlit, Next.js, FastAPI, Vercel, GitHub Actions, and deployment-aware documentation.",
    evidence: ["Streamlit", "Next.js", "FastAPI"],
    examples: [
      "Deployed Streamlit demos for RAG, digital asset research, and analytics dashboards.",
      "Built this portfolio with Next.js App Router, TypeScript, and Tailwind.",
      "Exposed AI workflow logic through FastAPI endpoints and CI-tested modules.",
    ],
  },
];

function CapabilityCard({ cap }: { cap: Capability }) {
  const [open, setOpen] = useState(false);
  const Icon = cap.icon;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-[0_8px_28px_rgba(37,99,235,0.08)] transition-all duration-200">
      <div className="flex items-start gap-3 mb-3">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50">
          <Icon size={17} className="text-blue-600" />
        </div>
        <div>
          <h3 className="text-[15px] font-extrabold text-slate-900 leading-snug">
            {cap.title}
          </h3>
          <p className="mt-1 text-[13px] text-slate-500 leading-relaxed">
            {cap.description}
          </p>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap gap-1.5 pl-12">
        {cap.evidence.map((e) => (
          <span
            key={e}
            className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-600"
          >
            {e}
          </span>
        ))}
      </div>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="ml-12 flex items-center gap-1 rounded text-[11px] font-semibold text-blue-600 transition-colors hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        {open ? "Hide evidence" : "Show evidence"}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="mt-3 space-y-2 border-t border-slate-100 pt-3 pl-12">
          {cap.examples.map((item) => (
            <li key={item} className="flex gap-2 text-[12px] leading-snug text-slate-600">
              <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function CapabilityMap() {
  return (
    <section className="py-20 bg-slate-50/70">
      <div className="container-xl">
        <div className="mb-10">
          <span className="eyebrow mb-2 block">Capability Map</span>
          <h2 className="section-heading">How I Turn Messy Workflows Into Decisions</h2>
          <p className="section-subheading max-w-2xl">
            Six business capabilities that connect the technical stack to real AI/data work.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.title} cap={cap} />
          ))}
        </div>
      </div>
    </section>
  );
}
