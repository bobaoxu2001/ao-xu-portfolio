import type { Metadata } from "next";
import { Bot, LineChart, BarChart3, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { FeaturedProject } from "@/components/FeaturedProject";
import { archiveProjects, capstoneGroups, projectTracks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects | Ao Xu",
  description:
    "AI + Data projects by Ao (Allen) Xu, organized into AI + Knowledge, AI + Markets, and AI + Data & Operations tracks, plus academic capstones.",
};

// Circular emblem icon + accent ring per thematic track. Class strings are
// written in full so Tailwind's JIT picks them up.
const TRACK_STYLE: Record<string, { Icon: LucideIcon; ring: string }> = {
  "ai-knowledge": { Icon: Bot, ring: "bg-indigo-50 text-indigo-600 ring-indigo-100" },
  "ai-markets": { Icon: LineChart, ring: "bg-emerald-50 text-emerald-600 ring-emerald-100" },
  "ai-data-ops": { Icon: BarChart3, ring: "bg-violet-50 text-violet-600 ring-violet-100" },
};

function groupByCategory(projects: typeof archiveProjects) {
  return projects.reduce<Record<string, typeof archiveProjects>>((acc, p) => {
    const cat = p.archiveCategory;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(p);
    return acc;
  }, {});
}

export default function ProjectsPage() {
  const groupedArchive = groupByCategory(archiveProjects);

  return (
    <div className="py-16">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Project Portfolio"
          title="AI + Data Systems, Dashboards, and Research"
          subtitle="Projects grouped into the domains I build in — AI + Knowledge, AI + Markets, and AI + Data & Operations — followed by academic capstones and an archive."
        />
      </div>

      <section className="py-14">
        <div className="container-xl space-y-16">
          {projectTracks.map((track) => {
            const style = TRACK_STYLE[track.id] ?? TRACK_STYLE["ai-knowledge"];
            const Icon = style.Icon;
            return (
              <div key={track.id}>
                <div className="mb-6 flex items-center gap-4">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-1 ${style.ring}`}
                  >
                    <Icon size={26} strokeWidth={2} />
                  </span>
                  <div>
                    <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                      {track.label}
                    </h2>
                    <p className="mt-0.5 max-w-2xl text-sm leading-relaxed text-slate-500">
                      {track.tagline}
                    </p>
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {track.projects.map((p) => (
                    <ProjectCard
                      key={p.id}
                      compact
                      title={p.title}
                      category={p.category}
                      problem={p.problem}
                      built={p.built}
                      impact={p.impact}
                      description={p.description}
                      technologies={p.technologies}
                      tags={p.tags}
                      github={p.github}
                      liveDemo={p.liveDemo}
                      highlight={p.highlight}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FeaturedProject />

      <section className="py-16 bg-slate-50/70">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Capstone Projects"
            title="Capstone Projects"
            subtitle="Academic research and applied data science projects from my undergraduate and graduate programs."
          />
          <div className="mt-10 space-y-12">
            {capstoneGroups.map((group) => (
              <div key={group.group}>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
                  {group.group}
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.projects.map((p) => (
                    <ProjectCard
                      key={p.id}
                      compact
                      title={p.title}
                      category={p.category}
                      description={p.description}
                      technologies={p.technologies}
                      github={p.github}
                      liveDemo={p.liveDemo}
                      highlight={p.highlight}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-xl">
          <h2 className="mb-8 border-b border-slate-200 pb-2 text-xl font-bold text-slate-900">
            Archive
          </h2>
          <div className="space-y-12">
            {Object.entries(groupedArchive).map(([category, projects]) => (
              <div key={category}>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
                  {category}
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects.map((p) => (
                    <ProjectCard
                      key={p.id}
                      compact
                      title={p.title}
                      category={p.archiveCategory}
                      description={p.description}
                      technologies={p.technologies}
                      github={p.github}
                      liveDemo={p.liveDemo}
                      highlight={p.highlight}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
