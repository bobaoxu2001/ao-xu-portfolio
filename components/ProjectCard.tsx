import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description?: string;
  problem?: string;
  built?: string;
  impact?: string;
  technologies: string[];
  tags?: string[];
  github?: string | null;
  liveDemo?: string | null;
  highlight?: string | null;
  compact?: boolean;
}

function DetailRow({ label, text }: { label: string; text?: string }) {
  if (!text) return null;
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-1">
        {label}
      </p>
      <p className="text-[13px] leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}

export function ProjectCard({
  title,
  category,
  description,
  problem,
  built,
  impact,
  technologies,
  tags,
  github,
  liveDemo,
  highlight,
  compact = false,
}: ProjectCardProps) {
  const visibleTags = tags ?? technologies;

  return (
    <article
      className={`group flex h-full flex-col bg-white border border-slate-200 ${
        compact ? "rounded-xl p-5" : "rounded-2xl p-6"
      } hover:shadow-[0_10px_32px_rgba(15,23,42,0.08)] hover:border-slate-300 transition-all duration-200`}
    >
      <div className="mb-4">
        <div className="flex flex-wrap items-center gap-2 mb-3">
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

      {problem || built || impact ? (
        <div className={`grid gap-3 ${compact ? "mb-4" : "mb-5"} flex-1`}>
          <DetailRow label="Problem" text={problem} />
          <DetailRow label="Built" text={built} />
          <DetailRow label="Impact" text={impact} />
        </div>
      ) : (
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
          {description}
        </p>
      )}

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
