import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { homepageProjects, archiveProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects | Ao Xu",
  description: "Data science, AI systems, and analytics projects by Ao (Allen) Xu.",
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
  // Archive: deprioritize creative AI
  const priorityArchive = archiveProjects.filter((p) => p.id !== "creative-ai");
  const creativeArchive = archiveProjects.filter((p) => p.id === "creative-ai");
  const grouped = groupByCategory([...priorityArchive, ...creativeArchive]);

  return (
    <div className="py-16">
      <div className="container-xl">
        <SectionHeader
          title="Projects"
          subtitle="A selection of applied data science and AI projects — from LLM routing systems to financial forecasting and product analytics."
        />

        {/* Featured projects (case studies live on the homepage). */}
        <div className="mt-12 mb-14">
          <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepageProjects.map((p) => (
              <ProjectCard
                key={p.id}
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

        {/* Archive grouped by category */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-8 pb-2 border-b border-slate-200">
            Project Archive
          </h2>
          <div className="space-y-12">
            {Object.entries(grouped).map(([category, projects]) => (
              <div key={category}>
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
                  {category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((p) => (
                    <ProjectCard
                      key={p.id}
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
      </div>
    </div>
  );
}
