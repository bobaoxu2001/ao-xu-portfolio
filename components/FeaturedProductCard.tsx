import {
  ExternalLink,
  Github,
  Trophy,
  LineChart,
  Sparkles,
  Check,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "@/lib/data";

// Visual treatment per product: a gradient "screenshot placeholder" banner, an
// emblem icon, and an accent used across the card. Class strings are written in
// full so Tailwind's JIT keeps them.
type Accent = {
  Icon: LucideIcon;
  banner: string;
  ring: string;
  glow: string;
  bullet: string;
};

const ACCENTS: Record<string, Accent> = {
  "worldcup-oracle-agent": {
    Icon: Trophy,
    banner: "from-sky-500/25 via-blue-500/10 to-transparent",
    ring: "bg-sky-500/10 text-sky-300 ring-sky-400/25",
    glow: "bg-sky-500/20",
    bullet: "text-sky-300",
  },
  "ai-stock-platform": {
    Icon: LineChart,
    banner: "from-emerald-500/25 via-teal-500/10 to-transparent",
    ring: "bg-emerald-500/10 text-emerald-300 ring-emerald-400/25",
    glow: "bg-emerald-500/20",
    bullet: "text-emerald-300",
  },
  "world-cup-ai-lab": {
    Icon: Sparkles,
    banner: "from-violet-500/25 via-indigo-500/10 to-transparent",
    ring: "bg-violet-500/10 text-violet-300 ring-violet-400/25",
    glow: "bg-violet-500/20",
    bullet: "text-violet-300",
  },
};

const FALLBACK: Accent = {
  Icon: Sparkles,
  banner: "from-blue-500/25 via-blue-500/10 to-transparent",
  ring: "bg-blue-500/10 text-blue-300 ring-blue-400/25",
  glow: "bg-blue-500/20",
  bullet: "text-blue-300",
};

export function FeaturedProductCard({ project }: { project: Project }) {
  const a = ACCENTS[project.id] ?? FALLBACK;
  const { Icon } = a;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-sm transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_60px_-16px_rgba(8,18,48,0.8)]">
      {/* Visual placeholder banner (stands in for a product screenshot) */}
      <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${a.banner}`}>
        <div className="hero-grid absolute inset-0 opacity-[0.18]" />
        <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl ${a.glow}`} />
        {/* Faint dashboard motif so the banner reads as a product surface */}
        <svg
          aria-hidden="true"
          viewBox="0 0 320 80"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-16 w-full text-white/25"
        >
          <polyline
            points="0,64 40,52 80,58 120,38 160,44 200,24 240,30 280,14 320,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {[20, 68, 116, 164, 212, 260, 300].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={70 - (i % 3) * 8 - 6}
              width="6"
              height={(i % 3) * 8 + 10}
              rx="1.5"
              className="fill-white/15"
            />
          ))}
        </svg>
        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${a.ring}`}>
            <Icon size={22} strokeWidth={2} />
          </span>
          {project.highlight && (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {project.highlight}
            </span>
          )}
        </div>
        {project.liveDemo && (
          <ArrowUpRight
            size={18}
            className="absolute right-5 top-5 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{project.category}</p>
        <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">
          {project.summary ?? project.description}
        </p>

        {project.bullets && (
          <ul className="mt-4 space-y-2">
            {project.bullets.map((b) => (
              <li key={b} className="flex gap-2 text-[12.5px] leading-snug text-slate-300">
                <Check size={14} className={`mt-0.5 shrink-0 ${a.bullet}`} strokeWidth={2.5} />
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 text-xs"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-2 text-xs"
            >
              <Github size={14} /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
