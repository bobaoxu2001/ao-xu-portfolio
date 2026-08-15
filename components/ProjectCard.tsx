import Link from "next/link";
import {
  ExternalLink,
  Github,
  BookOpen,
  Bot,
  LineChart,
  Headset,
  FlaskConical,
  FileSearch,
  BarChart3,
  Clapperboard,
  Database,
  Workflow,
  Sparkles,
  Swords,
  type LucideIcon,
} from "lucide-react";

// Each card gets a category icon + accent so the grid reads visually, not as a
// wall of text. Accent class strings are written out in full so Tailwind's JIT
// picks them up (no dynamic class construction).
const ACCENTS = {
  indigo: "bg-indigo-500/10 text-indigo-300 ring-indigo-400/20",
  emerald: "bg-emerald-500/10 text-emerald-300 ring-emerald-400/20",
  sky: "bg-sky-500/10 text-sky-300 ring-sky-400/20",
  rose: "bg-rose-500/10 text-rose-300 ring-rose-400/20",
  violet: "bg-violet-500/10 text-violet-300 ring-violet-400/20",
  amber: "bg-amber-500/10 text-amber-300 ring-amber-400/20",
  blue: "bg-blue-500/10 text-blue-300 ring-blue-400/20",
} as const;

const VISUAL_RULES: { pattern: RegExp; icon: LucideIcon; accent: keyof typeof ACCENTS }[] = [
  { pattern: /unhappy|boss|stress|arcade|vent/, icon: Swords, accent: "rose" },
  { pattern: /rag|copilot|retrieval/, icon: Bot, accent: "indigo" },
  { pattern: /forecast|bitcoin|time-series|crypto|digital asset|market behavior/, icon: LineChart, accent: "emerald" },
  { pattern: /ticket|routing/, icon: Headset, accent: "sky" },
  { pattern: /biomarker|proteomic|\basd\b|nhanes/, icon: FlaskConical, accent: "rose" },
  { pattern: /nlp|claims|classification/, icon: FileSearch, accent: "violet" },
  { pattern: /analytics|dashboard|funnel|seller|tiktok|investment/, icon: BarChart3, accent: "amber" },
  { pattern: /sitcom|multimodal|creative/, icon: Clapperboard, accent: "rose" },
  { pattern: /pipeline|youtube/, icon: Database, accent: "sky" },
  { pattern: /llm|workflow|telecom|agent|deploy|operations/, icon: Workflow, accent: "violet" },
];

function getVisual(haystack: string) {
  const match = VISUAL_RULES.find((r) => r.pattern.test(haystack.toLowerCase()));
  return {
    Icon: match?.icon ?? Sparkles,
    accent: ACCENTS[match?.accent ?? "blue"],
  };
}

interface ProjectCardProps {
  title: string;
  category: string;
  summary?: string;
  description?: string;
  technologies: string[];
  tags?: string[];
  github?: string | null;
  liveDemo?: string | null;
  highlight?: string | null;
  caseStudy?: string | null;
  compact?: boolean;
}

export function ProjectCard({
  title,
  category,
  summary,
  description,
  technologies,
  tags,
  github,
  liveDemo,
  highlight,
  caseStudy,
  compact = false,
}: ProjectCardProps) {
  const visibleTags = tags ?? technologies;
  const { Icon, accent } = getVisual(`${category} ${title} ${visibleTags.join(" ")}`);

  return (
    <article
      className={`group flex h-full flex-col border border-white/10 bg-white/[0.035] backdrop-blur-sm ${
        compact ? "rounded-xl p-5" : "rounded-2xl p-6"
      } hover:shadow-[0_18px_50px_-12px_rgba(8,18,48,0.7)] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200`}
    >
      <div className="mb-4 flex items-start gap-3.5">
        <span
          className={`flex ${compact ? "h-9 w-9" : "h-11 w-11"} shrink-0 items-center justify-center rounded-xl ring-1 ${accent}`}
        >
          <Icon size={compact ? 17 : 20} strokeWidth={2} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <p className="eyebrow">{category}</p>
            {highlight && (
              <span className="px-2.5 py-0.5 text-[11px] font-bold bg-blue-500/15 text-blue-200 rounded-full border border-blue-400/20">
                {highlight}
              </span>
            )}
          </div>

          <h3 className={`${compact ? "text-base" : "text-lg"} font-extrabold text-white leading-snug tracking-tight group-hover:text-blue-200 transition-colors`}>
            {title}
          </h3>
        </div>
      </div>

      <p className="mb-4 flex-1 text-[13px] leading-relaxed text-slate-400 line-clamp-2">
        {summary ?? description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {visibleTags.slice(0, compact ? 4 : 6).map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
        {visibleTags.length > (compact ? 4 : 6) && (
          <span className="tag">+{visibleTags.length - (compact ? 4 : 6)}</span>
        )}
      </div>

      {(github || liveDemo || caseStudy) && (
        <div className="flex flex-wrap gap-4 pt-3 border-t border-white/10 mt-auto">
          {caseStudy && (
            <Link
              href={caseStudy}
              className="flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-blue-200 transition-colors"
            >
              <BookOpen size={13} /> Case Study
            </Link>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <Github size={13} /> GitHub
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
