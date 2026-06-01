import {
  Github,
  ExternalLink,
  FileText,
  Database,
  Quote,
  ShieldCheck,
  Gauge,
  ChevronRight,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { featuredProject } from "@/lib/data";

// Faithful to the system described above: engineering logs are retrieved over
// a FAISS index, answered with citations and deterministic agent triage, then
// gated to human review for high-risk topics — with an evaluation harness
// scoring every stage.
const PIPELINE: { icon: LucideIcon; label: string; sub: string }[] = [
  { icon: FileText, label: "Engineering logs & query", sub: "build / verification / lint" },
  { icon: Database, label: "Hybrid retrieval", sub: "FAISS · dense + sparse" },
  { icon: Quote, label: "Cited answer + triage", sub: "deterministic routing" },
  { icon: ShieldCheck, label: "Human-review gate", sub: "high-risk escalation" },
];

export function FeaturedProject() {
  const p = featuredProject;

  return (
    <section className="py-20 bg-white">
      <div className="container-xl">
        <div className="mb-8">
          <span className="eyebrow">Selected Deep Dive</span>
          <h2 className="section-heading mt-2">How I Build AI Decision Systems</h2>
          <p className="section-subheading max-w-2xl">
            One project, expanded: problem framing, system design, evaluation, and product judgment in a practical RAG workflow.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_44px_rgba(15,23,42,0.08)]">
          <div className="h-1.5 bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500" />

          <div className="grid lg:grid-cols-[1.35fr_0.9fr]">
            <div className="p-7 sm:p-9">
              <span className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                {p.badge}
              </span>

              <h3 className="mb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {p.title}
              </h3>
              <p className="mb-6 text-sm font-semibold text-slate-500">
                {p.subtitle}
              </p>

              <p className="mb-7 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                {p.description}
              </p>

              <div className="grid gap-4 sm:grid-cols-3 mb-7">
                {[
                  ["Problem", p.problem],
                  ["Approach", p.approach],
                  ["Outcome", p.outcome],
                ].map(([label, text]) => (
                  <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      {label}
                    </p>
                    <p className="text-[13px] leading-relaxed text-slate-700">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-7 flex flex-wrap gap-2">
                {p.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={p.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={15} /> Open Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github size={15} /> View GitHub
                </a>
              </div>
            </div>

            <div className="border-t border-slate-200 bg-gradient-to-br from-slate-950 to-slate-800 p-7 sm:p-9 lg:border-l lg:border-t-0">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Proof points
              </p>
              <div className="grid gap-4">
                {p.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <div className="mb-1 text-2xl font-extrabold tracking-tight text-white">
                      {m.value}
                    </div>
                    <div className="text-sm leading-snug text-slate-300">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-slate-400">
                Metrics are from synthetic held-out evaluation sets and should be read as portfolio validation, not production performance.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50/60 px-7 py-7 sm:px-9">
            <p className="eyebrow mb-4">System architecture</p>
            <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:gap-0">
              {PIPELINE.map((step, i) => (
                <div key={step.label} className="flex flex-col sm:flex-1 sm:flex-row sm:items-center">
                  <div className="flex-1 rounded-xl border border-slate-200 bg-white p-4 text-center sm:text-left">
                    <span className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <step.icon size={18} strokeWidth={2} />
                    </span>
                    <p className="text-[13px] font-bold leading-snug text-slate-900">{step.label}</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">{step.sub}</p>
                  </div>
                  {i < PIPELINE.length - 1 && (
                    <div className="flex items-center justify-center text-slate-300 sm:px-1.5">
                      <ChevronDown className="my-1 sm:hidden" size={18} />
                      <ChevronRight className="hidden sm:block" size={18} />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-dashed border-slate-300 bg-white/70 px-4 py-2.5">
              <Gauge size={15} className="shrink-0 text-slate-400" />
              <p className="text-[11px] font-medium leading-relaxed text-slate-500">
                Evaluation harness scores retrieval hit, answer grounding, and out-of-scope safety across every stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
