import {
  ExternalLink,
  Github,
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
  type LucideIcon,
} from "lucide-react";

// Each card gets a category icon + accent so the grid reads visually, not as a
// wall of text. Accent class strings are written out in full so Tailwind's JIT
// picks them up (no dynamic class construction).
const ACCENTS = {
  indigo: "bg-indigo-50 text-indigo-600 ring-indigo-100",
  emerald: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  sky: "bg-sky-50 text-sky-600 ring-sky-100",
  rose: "bg-rose-50 text-rose-600 ring-rose-100",
  violet: "bg-violet-50 text-violet-600 ring-violet-100",
  amber: "bg-amber-50 text-amber-600 ring-amber-100",
  blue: "bg-blue-50 text-blue-600 ring-blue-100",
} as const;

const VISUAL_RULES: { pattern: RegExp; icon: LucideIcon; accent: keyof typeof ACCENTS }[] = [
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
  compact = false,
}: ProjectCardProps) {
  const visibleTags = tags ?? technologies;
  const { Icon, accent } = getVisual(`${category} ${title} ${visibleTags.join(" ")}`);

  return (
    <article
      className={`group flex h-full flex-col bg-white border border-slate-200 ${
        compact ? "rounded-xl p-5" : "rounded-2xl p-6"
      } hover:shadow-[0_10px_32px_rgba(15,23,42,0.08)] hover:border-slate-300 transition-all duration-200`}
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
              <span className="px-2.5 py-0.5 text-[11px] font-bold bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                {highlight}
              </span>
            )}
          </div>

          <h3 className={`${compact ? "text-base" : "text-lg"} font-extrabold text-slate-900 leading-snug tracking-tight group-hover:text-blue-700 transition-colors`}>
            {title}
          </h3>
        </div>
      </div>

      <p className="mb-4 flex-1 text-[13px] leading-relaxed text-slate-600 line-clamp-2">
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

      {(github || liveDemo) && (
        <div className="flex flex-wrap gap-4 pt-3 border-t border-slate-100 mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Github size={13} /> GitHub
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
