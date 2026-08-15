import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, BookOpen, Check, Sparkles } from "lucide-react";
import type { Project } from "@/lib/data";

// Full-width flagship card for the newest shipped product: real cover art on
// the left, recruiter-facing summary, proof bullets, and actions on the right.
// Used once, at the top of the homepage "Shipped AI Products" section.
export function FlagshipProductCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-sm transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06] shadow-[0_24px_60px_-16px_rgba(8,18,48,0.8)]">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        {/* Cover art */}
        <div className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-0">
          {project.bannerImage && (
            <Image
              src={project.bannerImage}
              alt=""
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center"
              aria-hidden="true"
            />
          )}
          {/* Scrim so the badge stays legible over the artwork */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070e]/70 via-transparent to-[#05070e]/20" aria-hidden="true" />
          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
              <Sparkles size={12} className="text-rose-300" />
              Flagship · {project.highlight}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col p-7 sm:p-9">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <p className="eyebrow">{project.category}</p>
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-slate-400">
            {project.summary ?? project.description}
          </p>

          {project.bullets && (
            <ul className="mt-5 space-y-2.5">
              {project.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-[13.5px] leading-relaxed text-slate-300">
                  <Check size={15} className="mt-0.5 shrink-0 text-rose-300" strokeWidth={2.5} />
                  {b}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 pt-2">
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
            {project.caseStudy && (
              <Link
                href={project.caseStudy}
                className="btn-secondary py-2 text-xs"
              >
                <BookOpen size={14} /> Case Study
              </Link>
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
      </div>
    </article>
  );
}
