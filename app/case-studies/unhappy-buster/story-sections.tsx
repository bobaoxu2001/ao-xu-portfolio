import Image from "next/image";
import {
  BookOpen,
  CalendarDays,
  Check,
  Flame,
  Quote,
  Share2,
  Sparkles,
  Trophy,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { DemoVideo } from "./DemoVideo";

/* ── Shared presentation atoms ───────────────────────────────────────────── */

function PhoneShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[250px] sm:max-w-[280px]">
      <div className="overflow-hidden rounded-[1.9rem] border border-white/15 bg-black shadow-[0_30px_80px_-24px_rgba(8,18,48,0.95)] ring-1 ring-white/5">
        <div className="relative aspect-[430/932]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 250px, 280px"
            className="object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

/* ── Section 2 · Product demo ────────────────────────────────────────────── */

export function DemoSection() {
  return (
    <section id="demo" aria-label="Product demo" className="scroll-mt-24 py-20">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Product Demo"
          title="From bad vibe to boss fight in 40 seconds"
          subtitle="The full loop in one take, captured from the production build: vent → boss reveal → 30-second arena → finisher → closure → local field guide."
        />

        <div className="mt-12 flex flex-col items-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-10 -z-10 rounded-full bg-rose-500/10 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/15 bg-black shadow-[0_40px_100px_-24px_rgba(8,18,48,0.95)] ring-1 ring-white/5">
              <div className="aspect-[430/932] w-[min(78vw,330px)] sm:w-[350px]">
                <DemoVideo
                  src="/projects/unhappy-buster/demo-v1.mp4"
                  poster="/projects/unhappy-buster/01-landing.png"
                  label="Unhappy Buster product demo: from vent to fictional boss to 30-second arena to closure, in 40 seconds"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-center">
            <span className="tag">39.9 s · full loop</span>
            <span className="tag">production capture · 860 × 1864</span>
            <span className="tag">muted by design</span>
            <span className="tag">no edits beyond cuts</span>
          </div>
          <p className="mt-4 max-w-md text-center text-sm leading-relaxed text-slate-400">
            The video plays muted and loops once it enters the viewport — press
            play for sound controls, or open the live product below.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Section 3 · The problem ─────────────────────────────────────────────── */

export function ProblemSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.015] py-20">
      <div className="container-xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeader
              eyebrow="The Problem"
              title="Resets are too serious — and venting is sensitive"
            />
            <div className="mt-5 max-w-xl space-y-4 text-[15px] leading-relaxed text-slate-300">
              <p>
                After an annoying interaction, most people want a quick emotional
                reset — not a commitment. Conventional wellness tools feel too
                serious, too slow, or too demanding in the exact moment
                frustration peaks.
              </p>
              <p>
                And typing that frustration into an AI product raises two
                legitimate questions: who sees the raw text, and what happens
                to it?
              </p>
            </div>
          </div>

          <figure className="card-flat relative">
            <Quote
              size={22}
              aria-hidden="true"
              className="mb-4 text-blue-300"
            />
            <blockquote className="text-lg font-semibold leading-relaxed text-white">
              Can frustration be transformed into a short, playful, obviously
              fictional interaction that delivers a sense of closure — without
              pretending to be therapy?
            </blockquote>
            <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              The design challenge
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ── Section 4 · Product insight ─────────────────────────────────────────── */

const FLOW = [
  {
    step: "Vent",
    emoji: "😤",
    text: "one short complaint — or a zero-typing public boss",
  },
  {
    step: "Fictional boss",
    emoji: "👺",
    text: "a named, roastable monster archetype — never a person",
  },
  {
    step: "30-second arena",
    emoji: "🥊",
    text: "counter-based play: cues, combos, escalation",
  },
  {
    step: "Honest closure",
    emoji: "✅",
    text: "a real ending — never an infinite loop",
  },
  {
    step: "Local progression",
    emoji: "🔒",
    text: "collection and streaks, stored on-device",
  },
];

export function InsightSection() {
  return (
    <section className="py-20">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Product Insight"
          title="Don't make another AI chatbot"
          subtitle="The conceptual leap: the AI builds the target — the user does the release."
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-[15px] leading-relaxed text-slate-300">
            <p>
              Most &ldquo;emotional AI&rdquo; products route feelings into a
              conversation. The model listens, reflects, suggests — which makes
              the AI the center of the experience and keeps the user inside the
              loop of rumination.
            </p>
            <p>
              Unhappy Buster inverts the loop. The AI has one job: turn the
              complaint into a fictional character — a named, roastable
              archetype with a vibe, a weakness, and a battle intro. The user
              then interacts with that boss physically: bonk, smush, roast. The
              catharsis comes from play, not from being listened to.
            </p>
            <p>
              Fictionalizing matters. The user is never attacking a real person
              — the product converts a contextual frustration into an
              exaggerated, obviously fake pattern. The AI is used once, to make
              the target; everything after that is a game with a clear end.
            </p>
          </div>

          <div className="card-flat">
            <p className="eyebrow mb-5">Frustration → Fictionalization → Release</p>
            <ol className="space-y-0">
              {FLOW.map((item, i) => (
                <li key={item.step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-lg ring-1 ring-rose-400/20">
                      <span aria-hidden="true">{item.emoji}</span>
                    </span>
                    {i < FLOW.length - 1 && (
                      <span className="my-1 w-px flex-1 bg-gradient-to-b from-rose-400/40 to-transparent" aria-hidden="true" />
                    )}
                  </div>
                  <div className={i < FLOW.length - 1 ? "pb-6" : ""}>
                    <p className="text-[13px] font-bold uppercase tracking-wide text-rose-300">
                      {item.step}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 5 · Product loop ────────────────────────────────────────────── */

const LOOP_STEPS = [
  {
    no: "01",
    label: "Start",
    title: "Instant entry",
    body: "Type a frustration — or skip typing entirely and fight today's public boss scenario. Entry friction is zero by design.",
    chip: "zero-typing path",
    img: "/projects/unhappy-buster/01-landing.png",
    alt: "Unhappy Buster landing screen: brand headline, today's public boss card, and one-tap scenarios",
  },
  {
    no: "02",
    label: "Transform",
    title: "The transformation",
    body: "The complaint becomes a fictional archetype with a name, vibe, weakness, and battle intro. The frustration is now a character — not a grudge.",
    chip: "named · fictional · roastable",
    img: "/projects/unhappy-buster/02-boss-reveal.png",
    alt: "Boss reveal screen: the fictional monster with name, archetype, vibe chip, weakness, and battle intro",
  },
  {
    no: "03",
    label: "Fight",
    title: "The arena",
    body: "A short counter-based arena: cues, attack types, HP, combos, and phase-two escalation. The countdown starts on the first attack, so reading the boss never burns play time.",
    chip: "30 s · strategy over tapping",
    img: "/projects/unhappy-buster/03-arena.png",
    alt: "Arena mid-fight: HP bar, combo counters, cue pill, and attack controls during phase-two escalation",
  },
  {
    no: "04",
    label: "Close",
    title: "The closing",
    body: "An explicit ending: finisher, K.O., and an honest closure screen. The interaction ends instead of looping forever — that's the point.",
    chip: "closure, not engagement",
    img: "/projects/unhappy-buster/04-finisher.png",
    alt: "Boss cleared: finisher overlay with victory message and confetti at zero HP",
  },
  {
    no: "05",
    label: "Return",
    title: "The return",
    body: "Collection, streaks, unlocks, and a private field guide create lightweight return motivation — with no account and no remote profile.",
    chip: "local-first · no accounts",
    img: "/projects/unhappy-buster/05-progression.png",
    alt: "Private field guide: rounds cleared, streak, monster entry, unlocked gear, and local-only privacy note",
  },
];

export function LoopSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.015] py-20">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Product Loop"
          title="Five beats, one closed loop"
          subtitle="The real production screens — the walkthrough a recruiter would otherwise have to click through."
        />

        <div className="mt-14 space-y-16">
          {LOOP_STEPS.map((s, i) => {
            const flip = i % 2 === 1;
            const stepRow = "flex items-center gap-3" + (flip ? " lg:justify-end" : "");
            const bodyClass =
              "mt-3 max-w-lg text-[14.5px] leading-relaxed text-slate-300" +
              (flip ? " lg:ml-auto" : "");
            return (
              <div
                key={s.no}
                className="grid items-center gap-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-14"
              >
                <div className={flip ? "lg:order-2" : ""}>
                  <PhoneShot src={s.img} alt={s.alt} />
                </div>
                <div className={flip ? "lg:order-1 lg:text-right" : ""}>
                  <div className={stepRow}>
                    <span className="text-2xl font-extrabold tracking-tight text-white/20">
                      {s.no}
                    </span>
                    <span className="eyebrow">{s.label}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className={bodyClass}>{s.body}</p>
                  <span className="mt-4 inline-block tag">{s.chip}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Section 8 · Emotional arc ───────────────────────────────────────────── */

const ARC = [
  { no: "01", emoji: "😤", beat: "Frustration", note: "the trigger arrives raw" },
  { no: "02", emoji: "🪄", beat: "Transformation", note: "it becomes a character" },
  { no: "03", emoji: "🥊", beat: "Playful release", note: "bonk, smush, roast" },
  { no: "04", emoji: "💥", beat: "Peak · finisher", note: "phase two → K.O." },
  { no: "05", emoji: "🌬️", beat: "Cooldown", note: "the fight ends" },
  { no: "06", emoji: "✅", beat: "Closure", note: "honest ending + next step" },
];

export function ArcSection() {
  return (
    <section className="py-20">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Experience Design"
          title="Designing the emotional arc"
          subtitle="The boss is ridiculous on purpose — that's what makes the release feel safe."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {ARC.map((a) => (
            <div key={a.no} className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                {a.no}
              </p>
              <p className="mt-2 text-xl" aria-hidden="true">
                {a.emoji}
              </p>
              <p className="mt-2 text-[13px] font-bold leading-snug text-white">{a.beat}</p>
              <p className="mt-1 text-[11px] leading-snug text-slate-400">{a.note}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-[15px] leading-relaxed text-slate-300">
          <p>
            A cartoon &ldquo;meeting goblin&rdquo; is funny precisely because it
            is not the real person — which is what makes the release feel safe
            rather than aggressive. The session is capped at 30 seconds: enough
            time for a peak, too short to spiral.
          </p>
          <p>
            Every fight has an explicit ending — finisher, K.O., honest closure
            — and the closure screen never labels a single hit a victory.
            Progression exists quietly in the background: a streak or an unlock
            should invite you back, never become the reason you vented.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Section 10 · Retention without an account ───────────────────────────── */

const MECHANICS = [
  {
    Icon: CalendarDays,
    title: "Rotating daily boss",
    text: "a public boss on a UTC clock — a reason to come back",
  },
  {
    Icon: Share2,
    title: "Challenge links",
    text: "allowlisted, raw-text-free share cards",
  },
  {
    Icon: Trophy,
    title: "Collection",
    text: "props, scenes, and finishers to unlock",
  },
  {
    Icon: Flame,
    title: "Streak",
    text: "private, local, low-pressure",
  },
  {
    Icon: Sparkles,
    title: "Unlocks",
    text: "gear earned through play, not grind",
  },
  {
    Icon: BookOpen,
    title: "Field guide",
    text: "monster entries and battle stats, stored on-device",
  },
];

export function RetentionSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.015] py-20">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Retention Design"
          title="Retention without an account"
          subtitle="Enough continuity to make returning fun — without an account or a remote user profile."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MECHANICS.map(({ Icon, title, text }) => (
            <div key={title} className="card-flat flex items-start gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-300 ring-1 ring-rose-400/20">
                <Icon size={18} strokeWidth={2} />
              </span>
              <div>
                <p className="text-[13.5px] font-bold text-white">{title}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-slate-400">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="card-flat border-emerald-400/20 bg-emerald-500/[0.04]">
            <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
              Mechanics implemented
            </p>
            <p className="text-[13.5px] leading-relaxed text-slate-300">
              All six mechanics above are deterministic, unit-tested, and
              shipped in v1.0 — from UTC boss rotation to defensive local-storage
              recovery.
            </p>
          </div>
          <div className="card-flat border-amber-400/20 bg-amber-500/[0.04]">
            <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
              Impact measured — not yet
            </p>
            <p className="text-[13.5px] leading-relaxed text-slate-300">
              No production cohort evidence exists, so this page makes no
              retention claims. Mechanics implemented ≠ retention uplift proven.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 12 · What I built ───────────────────────────────────────────── */

const OWNERSHIP = [
  "Product concept and interaction loop",
  "UX and game-state design — arena engine, phase two, finisher",
  "AI generation pipeline — text and portrait routes",
  "Privacy and safety architecture — redaction, gates, output scans",
  "Frontend implementation — React 19 + Framer Motion",
  "Local progression system — collection, streak, unlocks, field guide",
  "Fallback and error taxonomy — every failure path designed",
  "Release, testing, and deployment — 47 tests, lint, typecheck, Vercel",
];

export function OwnershipSection() {
  return (
    <section className="py-20">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Ownership"
          title="What I built — end to end"
          subtitle="Individual project, concept to production: a single-author repository covering product, design, engineering, and release."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {OWNERSHIP.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5"
            >
              <Check size={16} className="mt-0.5 shrink-0 text-rose-300" strokeWidth={2.5} />
              <p className="text-[13.5px] leading-relaxed text-slate-200">{item}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-slate-400">
          No co-founders, no agencies, no invented team. The repository history
          tells the same story: one contributor, twenty commits, main branch.
        </p>
      </div>
    </section>
  );
}

/* ── Section 14 · Reflection ─────────────────────────────────────────────── */

export function ReflectionSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.015] py-20">
      <div className="container-xl max-w-3xl">
        <SectionHeader eyebrow="Reflection" title="Where generative AI should stop" />
        <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-slate-200">
          <p>
            The interesting problem wasn&rsquo;t calling an LLM — it was deciding
            where generative AI should stop. The model gets exactly two jobs:
            invent a fictional boss and paint its portrait. Everything else —
            arena, closure, progression — is deterministic code.
          </p>
          <p>
            That boundary is what makes the product trustworthy: the model can
            be slow, weird, or down, and the promise still holds. It also made
            safety tractable. Narrow the AI surface, validate everything in and
            out, and the failure modes become enumerable.
          </p>
          <p className="font-semibold text-white">
            Short, finite, obviously fictional — that&rsquo;s the whole product
            thesis, and it held.
          </p>
        </div>
      </div>
    </section>
  );
}
