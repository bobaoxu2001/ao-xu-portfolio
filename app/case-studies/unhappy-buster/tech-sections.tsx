import {
  AlertTriangle,
  ArrowDown,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  EyeOff,
  FileText,
  Gamepad2,
  Github,
  HardDrive,
  Image as ImageIcon,
  Layers,
  Lock,
  MessageSquare,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Swords,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

/* ── Section 6 · AI architecture ─────────────────────────────────────────── */

function PipeNode({
  icon: Icon,
  title,
  sub,
  tone,
}: {
  icon: LucideIcon;
  title: string;
  sub: string;
  tone?: "rose";
}) {
  const chipClass =
    tone === "rose"
      ? "bg-rose-500/10 text-rose-300 ring-rose-400/20"
      : "bg-blue-500/10 text-blue-300 ring-blue-400/20";
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
      <span
        className={
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 " + chipClass
        }
      >
        <Icon size={17} strokeWidth={2} />
      </span>
      <div className="min-w-0">
        <p className="text-[13px] font-bold leading-snug text-white">{title}</p>
        <p className="mt-0.5 text-[11.5px] leading-snug text-slate-400">{sub}</p>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-1 text-slate-600" aria-hidden="true">
      <ArrowDown size={16} strokeWidth={2} />
    </div>
  );
}

const PIPELINE: { icon: LucideIcon; title: string; sub: string; tone?: "rose" }[] = [
  {
    icon: MessageSquare,
    title: "User vent",
    sub: "one short complaint — or a public daily boss",
  },
  {
    icon: FileText,
    title: "Input validation",
    sub: "3–280 chars · tags and whitespace noise stripped",
  },
  {
    icon: ShieldAlert,
    title: "Safety gate",
    sub: "self-harm · violence · hate · sexual → 422 + supportive redirect",
    tone: "rose",
  },
  {
    icon: EyeOff,
    title: "PII redaction",
    sub: "emails · phones · names (incl. CJK) → [email] [phone] [person]",
    tone: "rose",
  },
  {
    icon: Lock,
    title: "Fictionalized + redacted prompt",
    sub: "anonymized context + untrusted-data instruction",
  },
  {
    icon: Sparkles,
    title: "Structured AI generation",
    sub: "gpt-4o-mini · JSON mode · strict schema",
  },
  {
    icon: Layers,
    title: "Schema normalization",
    sub: "per-field length caps · enum whitelists · required fields",
  },
  {
    icon: ShieldCheck,
    title: "Output safety scan",
    sub: "generated copy re-checked against the same blocked categories",
  },
  {
    icon: Swords,
    title: "Boss reveal",
    sub: "instant, mascot-backed — portrait loads in the background",
    tone: "rose",
  },
];

const PORTRAIT_ROUTE = [
  {
    icon: Swords,
    title: "Fictional boss traits",
    sub: "structured, sanitized description",
  },
  {
    icon: ImageIcon,
    title: "Portrait generation",
    sub: "gpt-image-2 · 1024 × 1024",
  },
  {
    icon: ShieldCheck,
    title: "Host / data validation",
    sub: "allowlisted image sources only",
  },
  {
    icon: Gamepad2,
    title: "Fallback mascot",
    sub: "portraits fail closed to the brand mascot",
  },
];

export function ArchitectureSection() {
  return (
    <section className="py-20">
      <div className="container-xl">
        <SectionHeader
          eyebrow="AI Architecture"
          title="Layered, validated, fail-safe"
          subtitle="Two server routes, one assumption: the model is unreliable and the input is untrusted. Everything the AI touches is validated, and every failure path ends somewhere playable."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_300px]">
          {/* Main pipeline */}
          <div>
            {PIPELINE.map((node, i) => (
              <div key={node.title}>
                <PipeNode {...node} />
                {i < PIPELINE.length - 1 && <Connector />}
              </div>
            ))}
          </div>

          {/* Failure branch */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-dashed border-rose-400/30 bg-rose-500/[0.05] p-5">
              <p className="eyebrow mb-3 !text-rose-300">Any AI failure</p>
              <ul className="space-y-1.5 text-[12.5px] leading-relaxed text-slate-300">
                <li>transport error</li>
                <li>malformed JSON</li>
                <li>unsafe model output</li>
                <li>missing API key</li>
              </ul>
              <div className="my-4 flex justify-center text-rose-300" aria-hidden="true">
                <ArrowDown size={16} />
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3.5">
                <p className="text-[12.5px] font-bold text-white">Curated fictional fallback</p>
                <p className="mt-1 text-[11.5px] leading-relaxed text-slate-400">
                  a deterministic local generator, seeded from the vent. The boss
                  still shows up.
                </p>
              </div>
            </div>
            <p className="text-[12px] leading-relaxed text-slate-400">
              No API key? The fallback is the whole experience — the app stays
              fully playable.
            </p>
          </div>
        </div>

        {/* Portrait route */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
          <p className="eyebrow mb-5">The portrait route, separately</p>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-stretch">
            {PORTRAIT_ROUTE.map((node, i) => (
              <div key={node.title} className="flex flex-col lg:flex-1 lg:flex-row lg:items-center">
                <div className="flex flex-1 items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">
                    <node.icon size={17} strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-bold leading-snug text-white">
                      {node.title}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-400">
                      {node.sub}
                    </p>
                  </div>
                </div>
                {i < PORTRAIT_ROUTE.length - 1 && (
                  <div className="flex items-center justify-center py-1 text-slate-600 lg:px-1.5 lg:py-0" aria-hidden="true">
                    <ArrowDown className="lg:hidden" size={15} />
                    <ChevronRight className="hidden lg:block" size={15} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12px] leading-relaxed text-slate-400">
            Portraits are enhancement, not requirement — the reveal never blocks
            on a pixel.
          </p>
        </div>

        {/* Honesty note */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-3.5">
          <AlertTriangle size={15} className="mt-0.5 shrink-0 text-amber-300" />
          <p className="text-[12px] leading-relaxed text-slate-400">
            <span className="font-bold text-slate-300">Defense in depth, not perfect security.</span>{" "}
            The input gate is pattern-based and can be paraphrased around; the
            system prompt marks input as untrusted; generated copy is scanned
            again on the way out. Layered protection — not a guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Section 7 · Safety & privacy ────────────────────────────────────────── */

const PILLARS = [
  {
    icon: EyeOff,
    title: "PII redaction",
    text: "Emails, phone numbers, and names — including CJK name patterns — are redacted before any AI request is built.",
  },
  {
    icon: ShieldCheck,
    title: "Sensitive-input gates",
    text: "High-risk inputs never reach generation. They receive a supportive redirect instead of a cartoon boss.",
  },
  {
    icon: Swords,
    title: "Fictionalization boundary",
    text: "The generated target is an exaggerated fictional monster — never a reconstruction of a real person.",
  },
  {
    icon: HardDrive,
    title: "Local-first progression",
    text: "Streaks, collection, field guide, and preferences live in localStorage behind defensive parsing. Raw vent text is never persisted.",
  },
];

export function SafetySection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.015] py-20">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Safety & Privacy"
          title="Safety & privacy by design"
          subtitle="Stated precisely — because precision here is what makes the product trustworthy."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-flat flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-300 ring-1 ring-rose-400/20">
                <Icon size={20} strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-[15px] font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-rose-400/20 bg-rose-500/[0.04]">
          <div className="h-1 bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300" />
          <div className="p-6 sm:p-8">
            <p className="eyebrow mb-5 !text-rose-300">Where data goes, precisely</p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-300" />
                <p className="text-[13.5px] leading-relaxed text-slate-200">
                  <span className="font-bold text-white">Progression stays local.</span>{" "}
                  Collection, streaks, and preferences live on-device only.
                </p>
              </div>
              <div className="flex gap-3">
                <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-300" />
                <p className="text-[13.5px] leading-relaxed text-slate-200">
                  <span className="font-bold text-white">
                    Redacted text may be sent to an AI inference provider for generation.
                  </span>{" "}
                  Never the raw vent — identifiers are replaced before the request is built.
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-300" />
                <p className="text-[13.5px] leading-relaxed text-slate-200">
                  <span className="font-bold text-white">Raw vent text is not persisted.</span>{" "}
                  API responses are no-store; API keys stay server-side.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-[12.5px] leading-relaxed text-slate-400">
          Not therapy, not crisis support — a short comedy reset. The product&rsquo;s own
          privacy page says exactly this, in the first paragraph.
        </p>
      </div>
    </section>
  );
}

/* ── Section 9 · Engineering for failure ─────────────────────────────────── */

const FAILURE_ROWS = [
  {
    fail: "AI text generation fails",
    failSub: "timeout · malformed JSON · unsafe output",
    fix: "Curated fictional fallback boss, seeded from the vent — generated locally in milliseconds.",
  },
  {
    fail: "Image generation fails or is paused",
    failSub: "network · policy · feature flag",
    fix: "Fallback mascot portrait. The reveal never blocks on a pixel.",
  },
  {
    fail: "Credits or keys unavailable",
    failSub: "no API key configured",
    fix: "Both routes serve fallbacks — the product stays fully playable.",
  },
  {
    fail: "Rate limit exhausted",
    failSub: "per-bucket gate, optional shared store",
    fix: "429 with Retry-After and product-voice copy. Local play is unaffected.",
  },
  {
    fail: "Network fails",
    failSub: "client ↔ server",
    fix: "The client falls back without blocking the reveal.",
  },
];

export function FailureSection() {
  return (
    <section className="py-20">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Resilience"
          title="The AI can fail. The product can't."
          subtitle="Both routes assume failure is the default. Every path was designed, not stumbled into — so the core loop plays identically with or without live AI."
        />

        <div className="mt-10 space-y-3">
          {FAILURE_ROWS.map((row) => (
            <div
              key={row.fail}
              className="grid items-stretch gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
            >
              <div className="flex items-start gap-3 bg-[#0a0d17] px-4 py-3.5">
                <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-300" />
                <div>
                  <p className="text-[13px] font-bold text-white">{row.fail}</p>
                  <p className="mt-0.5 text-[11.5px] text-slate-400">{row.failSub}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#0a0d17] px-4 py-3.5">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-300" />
                <p className="text-[13px] leading-relaxed text-slate-300">{row.fix}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {[
            "422 safety boundary",
            "429 rate limit + Retry-After",
            "503 portrait paused",
            "no-store responses",
            "server-side keys",
          ].map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <p className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center text-[15px] font-semibold leading-relaxed text-white">
          Fallbacks aren&rsquo;t a compromise — they&rsquo;re the guarantee that
          the loop always closes.
        </p>
      </div>
    </section>
  );
}

/* ── Section 11 · Technical snapshot ─────────────────────────────────────── */

const STACK = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS 4",
  "Framer Motion",
  "OpenAI API",
  "Vercel",
];

const QUALITY = [
  "47 deterministic tests (Vitest)",
  "lint clean",
  "typecheck clean",
  "production build verified",
  "responsive smoke tests — 390 · 430 · 768 · 1280",
  "curated AI fallback for text and portrait",
];

export function SnapshotSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.015] py-20">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Technical Snapshot"
          title="Stack & release quality"
          subtitle="A compact summary — the depth is in the repository and the 47 tests."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="card-flat">
            <p className="eyebrow mb-4">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {STACK.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[12.5px] leading-relaxed text-slate-400">
              App Router · two server routes · Vitest · deterministic
              pure-logic layer (time and randomness injected for tests).
            </p>
          </div>

          <div className="card-flat">
            <p className="eyebrow mb-4">Release quality</p>
            <ul className="space-y-2.5">
              {QUALITY.map((q) => (
                <li key={q} className="flex gap-2.5 text-[13.5px] leading-relaxed text-slate-300">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-300" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-5 text-[12.5px] leading-relaxed text-slate-400">
          Every claim on this page was verified against the repository and the
          production deployment — not vendor marketing.
        </p>
      </div>
    </section>
  );
}

/* ── Section 13 · Release result ─────────────────────────────────────────── */

export function ReleaseSection() {
  return (
    <section className="py-20">
      <div className="container-xl">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] text-center shadow-[0_24px_60px_-16px_rgba(8,18,48,0.8)]">
          <div className="h-1.5 bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300" />
          <div className="px-6 py-12 sm:px-12 sm:py-16">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold tracking-wide text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              SHIPPED
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Unhappy Buster v1.0
            </h2>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://fuck-your-unhappy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200"
              >
                <ExternalLink size={14} />
                fuck-your-unhappy.vercel.app
              </a>
              <span className="text-slate-600" aria-hidden="true">
                ·
              </span>
              <a
                href="https://github.com/bobaoxu2001/fuck-your-unhappy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
              >
                <Github size={14} />
                View on GitHub
              </a>
            </div>

            <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["47/47", "tests passing"],
                ["2", "fallback-protected AI routes"],
                ["0", "accounts required"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4"
                >
                  <p className="text-xl font-extrabold tracking-tight text-white">{value}</p>
                  <p className="mt-1 text-[11px] font-semibold leading-snug text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-lg font-semibold leading-relaxed text-white">
              Vent → Boss → Arena → Closure → Progression works end-to-end —
              even when live AI generation is unavailable.
            </p>

            <p className="mt-4 text-[12.5px] text-slate-400">
              No fake metrics. No fake conversions. Shipping itself is the result.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
