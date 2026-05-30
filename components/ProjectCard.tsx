import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github?: string | null;
  liveDemo?: string | null;
  highlight?: string | null;
}

export function ProjectCard({
  title,
  category,
  description,
  technologies,
  github,
  liveDemo,
  highlight,
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-200 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]">
      {/* Category */}
      <p className="eyebrow mb-2.5">{category}</p>

      {/* Title */}
      <h3 className="text-base font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-blue-700 transition-colors dark:text-slate-100 dark:group-hover:text-blue-400">
        {title}
      </h3>

      {/* Highlight badge */}
      {highlight && (
        <span className="self-start mb-3 px-2.5 py-0.5 text-xs font-bold bg-blue-50 text-blue-700 rounded-full border border-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20">
          {highlight}
        </span>
      )}

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4 line-clamp-4 dark:text-slate-400">
        {description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {technologies.slice(0, 5).map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
        {technologies.length > 5 && (
          <span className="tag">+{technologies.length - 5}</span>
        )}
      </div>

      {/* Links */}
      {(github || liveDemo) && (
        <div className="flex gap-4 pt-3 border-t border-slate-100 mt-auto dark:border-slate-800">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-slate-100"
            >
              <Github size={13} /> GitHub
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400"
            >
              <ExternalLink size={13} /> Live Case Study
            </a>
          )}
        </div>
      )}
    </div>
  );
}
