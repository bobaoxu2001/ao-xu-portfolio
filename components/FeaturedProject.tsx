import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { featuredProject } from "@/lib/data";

export function FeaturedProject() {
  const p = featuredProject;
  return (
    <section className="py-20 bg-white">
      <div className="container-xl">
        {/* Section eyebrow */}
        <div className="mb-8">
          <span className="eyebrow">Case Study Spotlight</span>
        </div>

        {/* Main card */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
          {/* Top accent stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600" />

          <div className="grid lg:grid-cols-5 gap-0">
            {/* ── Left panel ── */}
            <div className="lg:col-span-3 bg-white p-8 sm:p-10 border-r border-slate-100">
              {/* Badge */}
              <span className="inline-block mb-4 px-3 py-1 text-xs font-bold tracking-wide text-blue-700 bg-blue-50 border border-blue-100 rounded-full">
                {p.badge}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
                {p.title}
              </h2>

              <p className="text-slate-600 text-[15px] leading-relaxed mb-7">
                {p.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {p.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs font-semibold bg-slate-100 text-slate-600 rounded-full border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Github size={15} /> View on GitHub
                </a>
                {p.liveDemo && (
                  <a
                    href={p.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <ExternalLink size={15} /> Live Case Study
                  </a>
                )}
              </div>
            </div>

            {/* ── Right panel: metrics ── */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-50 to-blue-50/60 p-8 sm:p-10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                Key Metrics
              </p>
              <div className="grid grid-cols-1 gap-4">
                {p.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-2xl font-extrabold text-blue-600 tracking-tight mb-0.5">
                      {m.value}
                    </div>
                    <div className="text-slate-600 text-sm leading-snug">{m.label}</div>
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
