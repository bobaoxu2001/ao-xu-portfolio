import Link from "next/link";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import type { Project } from "@/lib/data";

// Skimmable problem → built → outcome card for the top featured projects.
function Row({ label, text }: { label: string; text?: string }) {
  if (!text) return null;
  return (
    <div className="grid grid-cols-[64px_1fr] gap-3">
      <span className="pt-px text-[11px] font-bold uppercase tracking-wide text-slate-500">
        {label}
      </span>
      <p className="text-[13px] leading-relaxed text-slate-300">{text}</p>
    </div>
  );
}

export function CaseProjectCard({ project, rank }: { project: Project; rank: number }) {
  return (
    <article className="card flex h-full flex-col">
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-sm font-extrabold text-blue-200">
          {rank}
        </span>
        <div className="min-w-0">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <p className="eyebrow">{project.category}</p>
            {project.highlight && (
              <span className="rounded-full border border-blue-400/20 bg-blue-500/15 px-2.5 py-0.5 text-[11px] font-bold text-blue-200">
                {project.highlight}
              </span>
            )}
          </div>
          <h3 className="text-lg font-extrabold leading-snug tracking-tight text-white">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="mb-4 flex-1 space-y-3">
        <Row label="Problem" text={project.problem} />
        <Row label="Built" text={project.built} />
        <Row label="Outcome" text={project.impact} />
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {(project.tags ?? project.technologies).slice(0, 5).map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-4 border-t border-white/10 pt-3">
        {project.caseStudy && (
          <Link
            href={project.caseStudy}
            className="flex items-center gap-1.5 text-xs font-semibold text-blue-300 transition-colors hover:text-blue-200"
          >
            <BookOpen size={13} /> Case Study
          </Link>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition-colors hover:text-white"
          >
            <Github size={13} /> GitHub
          </a>
        )}
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition-colors hover:text-blue-300"
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
