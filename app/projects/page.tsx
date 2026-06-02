import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { FeaturedProject } from "@/components/FeaturedProject";
import { archiveProjects, capstoneGroups, projectTracks } from "@/lib/data";
import { TRACK_STYLE, FALLBACK_TRACK_STYLE } from "@/lib/trackStyle";

export const metadata: Metadata = {
  title: "Projects | Ao Xu",
  description:
    "AI + Data projects by Ao (Allen) Xu, organized into AI + Knowledge, AI + Markets, and AI + Data & Operations tracks, plus academic capstones.",
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
          title="Explore my work by AI track"
          subtitle="Pick a domain to dive in — each track opens to the projects I've built in that area. Academic capstones and an archive follow below."
        />
      </div>

      <section className="py-14">
        <div className="container-xl">
          <div className="grid gap-6 md:grid-cols-3">
            {projectTracks.map((track) => {
              const style = TRACK_STYLE[track.id] ?? FALLBACK_TRACK_STYLE;
              const Icon = style.Icon;
              return (
                <Link
                  key={track.id}
                  href={`/projects/${track.id}`}
                  className={`group flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(15,23,42,0.10)] ${style.hover}`}
                >
                  <span
                    className={`mb-6 flex h-28 w-28 items-center justify-center rounded-full ring-1 ${style.ring}`}
                  >
                    <Icon size={52} strokeWidth={1.75} />
                  </span>
                  <h2 className="text-lg font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700">
                    {track.label}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {track.tagline}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                    View {track.projects.length} project{track.projects.length > 1 ? "s" : ""}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
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
