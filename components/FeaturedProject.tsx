import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { featuredProject } from "@/lib/data";

export function FeaturedProject() {
  const p = featuredProject;
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container-xl">
        {/* Section eyebrow */}
        <div className="mb-8">
          <span className="eyebrow">Case Study Spotlight</span>
        </div>

        {/* Main card */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:border-slate-800 dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
          {/* Top accent stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600" />

          <div className="grid lg:grid-cols-5 gap-0">
            {/* ── Left panel ── */}
            <div className="lg:col-span-3 bg-white p-8 sm:p-10 border-r border-slate-100 dark:bg-slate-900 dark:border-slate-800">
              {/* Badge */}
              <span className="inline-block mb-4 px-3 py-1 text-xs font-bold tracking-wide text-blue-700 bg-blue-50 border border-blue-100 rounded-full dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20">
                {p.badge}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight dark:text-slate-100">
                {p.title}
              </h2>

              <p className="text-slate-600 text-[15px] leading-relaxed mb-7 dark:text-slate-300">
                {p.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {p.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs font-semibold bg-slate-100 text-slate-600 rounded-full border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link href="/projects/support-ticket-routing" className="btn-primary">
                  Read case study <ArrowRight size={14} />
                </Link>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github size={15} /> GitHub
                </a>
                {p.liveDemo && (
                  <a
                    href={p.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <ExternalLink size={15} /> Live demo
                  </a>
                )}
              </div>
            </div>

            {/* ── Right panel: metrics ── */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-50 to-blue-50/60 p-8 sm:p-10 dark:from-slate-900 dark:to-blue-950/30">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5 dark:text-slate-400">
                Key Metrics
              </p>
              <div className="grid grid-cols-1 gap-4">
                {p.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-900 dark:border-slate-800"
                  >
                    <div className="text-2xl font-extrabold text-blue-600 tracking-tight mb-0.5 dark:text-blue-400">
                      {m.value}
                    </div>
                    <div className="text-slate-600 text-sm leading-snug dark:text-slate-300">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
