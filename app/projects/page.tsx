import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { FeaturedProject } from "@/components/FeaturedProject";
import { archiveProjects, capstoneGroups, homepageProjects, secondaryProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects | Ao Xu",
  description:
    "AI + Data projects by Ao (Allen) Xu, including LLM workflows, RAG systems, analytics dashboards, forecasting, and operations analytics.",
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
          subtitle="A curated view of the strongest work first, followed by secondary and archived projects that add context without diluting the main AI/Data positioning."
        />
      </div>

      <section className="py-14">
        <div className="container-xl">
          <h2 className="mb-6 border-b border-slate-200 pb-2 text-xl font-bold text-slate-900">
            Featured AI/Data Projects
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {homepageProjects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                category={p.category}
                problem={p.problem}
                built={p.built}
                impact={p.impact}
                technologies={p.technologies}
                tags={p.tags}
                github={p.github}
                liveDemo={p.liveDemo}
                highlight={p.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      <FeaturedProject />

      <section className="py-16 bg-slate-50/70">
        <div className="container-xl">
          <h2 className="mb-6 border-b border-slate-200 pb-2 text-xl font-bold text-slate-900">
            Secondary Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryProjects.map((p) => (
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
      </section>

      <section className="py-16">
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
            Project Archive
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
