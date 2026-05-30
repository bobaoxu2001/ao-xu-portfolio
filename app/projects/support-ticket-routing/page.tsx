import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Target,
  Layers,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { SITE_URL, featuredProject } from "@/lib/data";

const PAGE_PATH = "/projects/support-ticket-routing";

export const metadata: Metadata = {
  title: "LLM-powered Support Ticket Routing — Case Study | Ao Xu",
  description:
    "How a 4-stage cascade (rules → calibrated ML → selective LLM → human review) lifted Macro-F1 by 21.1 points over a keyword baseline while controlling LLM cost and reviewer load.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Support Ticket Routing — Case Study",
    description:
      "4-stage cascade: rules → ML → LLM → human. +21.1 pts Macro-F1, cost-aware coverage.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
  },
};

const stages = [
  {
    n: 1,
    name: "Deterministic Rules",
    sub: "High-precision regex / keyword shortcuts",
    body:
      "Cheap, auditable, and well-tested for obvious cases (password resets, refund keywords). High precision, low recall.",
    tone: "emerald",
  },
  {
    n: 2,
    name: "Calibrated ML",
    sub: "TF-IDF → Logistic Regression",
    body:
      "Handles the long tail rules miss. Probabilities calibrated so the confidence threshold means what it says.",
    tone: "blue",
  },
  {
    n: 3,
    name: "Selective LLM",
    sub: "Fallback only when ML is uncertain",
    body:
      "Invoked only when the ML model's top-1 confidence is below threshold. Caps token cost while recovering ambiguous tickets.",
    tone: "indigo",
  },
  {
    n: 4,
    name: "Human Review",
    sub: "When the system can't be sure",
    body:
      "Anything that fails all three gates lands in a human queue with the model's top-K guesses + rationale to speed up triage.",
    tone: "amber",
  },
] as const;

const toneClass: Record<typeof stages[number]["tone"], string> = {
  emerald:
    "from-emerald-50 to-white border-emerald-200 dark:from-emerald-500/10 dark:to-slate-900 dark:border-emerald-500/20",
  blue:
    "from-blue-50 to-white border-blue-200 dark:from-blue-500/10 dark:to-slate-900 dark:border-blue-500/20",
  indigo:
    "from-indigo-50 to-white border-indigo-200 dark:from-indigo-500/10 dark:to-slate-900 dark:border-indigo-500/20",
  amber:
    "from-amber-50 to-white border-amber-200 dark:from-amber-500/10 dark:to-slate-900 dark:border-amber-500/20",
};

const toneBadge: Record<typeof stages[number]["tone"], string> = {
  emerald:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  indigo:
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
  amber: "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
};

const tradeoffs = [
  {
    icon: Target,
    title: "Why a cascade, not a single LLM call?",
    body:
      "Sending every ticket to an LLM is expensive and slow. The cascade routes 80%+ of volume to deterministic rules and a calibrated classifier; the LLM only sees the genuinely hard tickets. Cost and latency both fall by an order of magnitude versus an LLM-only baseline.",
  },
  {
    icon: AlertCircle,
    title: "Why calibrated probabilities?",
    body:
      "An uncalibrated model says 'I'm 90% sure' when it's actually right 60% of the time. With Platt-scaled probabilities the confidence threshold matches reality, so the 'route to LLM' gate is a real risk decision — not a guess.",
  },
  {
    icon: Layers,
    title: "Why a separate human queue?",
    body:
      "Quality and trust matter more than full automation. The human queue is intentional: it catches the low-confidence tail and shows the model's top-K guesses + rationale so the human starts triage with context, not a blank ticket.",
  },
  {
    icon: TrendingUp,
    title: "What did the +21.1 pts come from?",
    body:
      "Most of the lift came from replacing brittle keyword matching with a TF-IDF + LR baseline that actually generalizes. The LLM fallback adds ~3-4 more points on the hardest slice — the diminishing returns illustrate the cascade's economics.",
  },
];

export default function SupportTicketRoutingCaseStudy() {
  const p = featuredProject;
  return (
    <article className="py-16 sm:py-20">
      <div className="container-xl max-w-4xl">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-8 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ArrowLeft size={14} /> All projects
        </Link>

        {/* Header */}
        <header className="mb-10">
          <span className="eyebrow mb-3 block">Case Study · Applied AI</span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-4 dark:text-slate-50">
            LLM-powered Support Ticket Routing
          </h1>
          <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed max-w-3xl dark:text-slate-300">
            A 4-stage routing cascade — deterministic rules, calibrated ML,
            selective LLM fallback, and a human review queue — that turns
            support-ops automation from a single LLM bet into a cost-, risk-,
            and confidence-aware workflow.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github size={15} /> View on GitHub
            </a>
            {p.liveDemo && (
              <a
                href={p.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <ExternalLink size={15} /> Live Streamlit demo
              </a>
            )}
          </div>
        </header>

        {/* Metrics strip */}
        <section
          aria-labelledby="metrics-h"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-14"
        >
          <h2 id="metrics-h" className="sr-only">
            Headline metrics
          </h2>
          {p.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="text-2xl font-extrabold text-blue-600 tracking-tight dark:text-blue-400">
                {m.value}
              </div>
              <div className="text-[13px] text-slate-600 leading-snug mt-0.5 dark:text-slate-400">
                {m.label}
              </div>
            </div>
          ))}
        </section>

        {/* Problem */}
        <section className="mb-14">
          <h2 className="text-xl font-bold tracking-tight mb-3 text-slate-900 dark:text-slate-100">
            The problem
          </h2>
          <div className="space-y-3 text-[15px] text-slate-600 leading-relaxed dark:text-slate-300">
            <p>
              Support orgs running on keyword routing hit a wall: rules catch
              the obvious cases but miss the long tail of ambiguous tickets.
              The obvious fix — send everything to an LLM — works on a demo
              and breaks on a budget. Per-ticket LLM cost and latency add up
              fast, and an LLM-only system has no graceful fallback when it&apos;s
              wrong.
            </p>
            <p>
              The real question isn&apos;t <em>can an LLM classify this ticket</em>,
              it&apos;s <em>which tickets should reach the LLM at all, and what
              happens when the system isn&apos;t sure?</em> That reframe is what the
              cascade is built around.
            </p>
          </div>
        </section>

        {/* Architecture diagram (CSS-only flow) */}
        <section className="mb-14" aria-labelledby="arch-h">
          <h2
            id="arch-h"
            className="text-xl font-bold tracking-tight mb-2 text-slate-900 dark:text-slate-100"
          >
            Architecture: a 4-stage cascade
          </h2>
          <p className="text-[15px] text-slate-600 leading-relaxed mb-6 max-w-3xl dark:text-slate-300">
            Each stage hands off only what it isn&apos;t confident about. Cheaper
            stages handle the bulk of volume; expensive stages handle only the
            tickets they earn.
          </p>

          <ol className="grid lg:grid-cols-4 gap-3">
            {stages.map((s) => (
              <li
                key={s.n}
                className={`relative rounded-2xl border bg-gradient-to-b p-5 ${toneClass[s.tone]}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-[12px] font-bold ${toneBadge[s.tone]}`}
                  >
                    {s.n}
                  </span>
                  <div className="min-w-0">
                    <div className="text-[14px] font-bold leading-tight text-slate-900 dark:text-slate-100">
                      {s.name}
                    </div>
                  </div>
                </div>
                <p className="text-[12px] font-semibold text-slate-500 uppercase tracking-wide mb-2 dark:text-slate-400">
                  {s.sub}
                </p>
                <p className="text-[13px] text-slate-600 leading-relaxed dark:text-slate-300">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-4 text-[12px] text-slate-500 dark:text-slate-400">
            Flow: a ticket enters Stage 1; anything not handled with sufficient
            confidence passes to the next stage. Stage 4 is intentional, not a
            failure case.
          </p>
        </section>

        {/* Decisions / tradeoffs */}
        <section className="mb-14">
          <h2 className="text-xl font-bold tracking-tight mb-6 text-slate-900 dark:text-slate-100">
            Decisions &amp; tradeoffs
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {tradeoffs.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="mt-0.5 w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 dark:bg-blue-500/10 dark:border-blue-500/20">
                      <Icon size={16} className="text-blue-600 dark:text-blue-400" />
                    </span>
                    <h3 className="text-[14px] font-bold leading-snug pt-1 text-slate-900 dark:text-slate-100">
                      {t.title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-slate-600 leading-relaxed pl-11 dark:text-slate-300">
                    {t.body}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* What I learned */}
        <section className="mb-14">
          <h2 className="text-xl font-bold tracking-tight mb-3 text-slate-900 dark:text-slate-100">
            What this taught me
          </h2>
          <ul className="space-y-2.5 text-[15px] text-slate-600 leading-relaxed dark:text-slate-300">
            {[
              "An LLM is a great Stage 3 — and a bad Stage 1. Routing is a portfolio decision, not a model selection.",
              "Calibration is the bridge between 'machine learning' and 'workflow design.' Without it, a confidence threshold is just a feeling.",
              "Designing the human queue first — what does the reviewer see when the system fails? — forces a healthier definition of 'done.'",
              "Macro-F1 beats accuracy when class frequencies are skewed; report both, optimize the one the business cares about.",
            ].map((line) => (
              <li key={line} className="flex gap-2">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 text-blue-600 dark:text-blue-400 shrink-0"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Stack */}
        <section className="mb-14">
          <h2 className="text-xl font-bold tracking-tight mb-3 text-slate-900 dark:text-slate-100">
            Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {p.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs font-semibold bg-slate-100 text-slate-600 rounded-full border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <nav className="flex flex-wrap items-center justify-between gap-3 pt-8 border-t border-slate-200 dark:border-slate-800">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-slate-100"
          >
            <ArrowLeft size={14} /> Back to all projects
          </Link>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors dark:text-blue-400 dark:hover:text-blue-300"
          >
            View the code on GitHub <ExternalLink size={14} />
          </a>
        </nav>
      </div>
    </article>
  );
}
