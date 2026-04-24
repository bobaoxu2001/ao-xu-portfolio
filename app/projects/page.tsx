import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { FeaturedProject } from "@/components/FeaturedProject";
import { homepageProjects, archiveProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects | Ao Xu",
  description: "Data science, AI systems, and analytics projects by Ao (Allen) Xu.",
};

// Group archive projects by category
function groupByCategory(projects: typeof archiveProjects) {
  return projects.reduce<Record<string, typeof archiveProjects>>((acc, p) => {
    const cat = p.archiveCategory;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(p);
    return acc;
  }, {});
}

export default function ProjectsPage() {
  // Exclude the featured project ID from the homepage list to avoid duplicate
  const additionalProjects = homepageProjects.filter(
    (p) => p.id !== "support-ticket-routing"
  );

  // Archive: deprioritize creative AI
  const priorityArchive = archiveProjects.filter((p) => p.id !== "creative-ai");
  const creativeArchive = archiveProjects.filter((p) => p.id === "creative-ai");
  const sortedArchive = [...priorityArchive, ...creativeArchive];
  const grouped = groupByCategory(sortedArchive);

  return (
    <div className="py-16">
      <div className="container-xl">
        {/* Intro */}
        <SectionHeader
          title="Projects"
          subtitle="A selection of applied data science and AI projects — from LLM routing systems to financial forecasting and product analytics."
        />
      </div>

      {/* Featured project banner */}
      <FeaturedProject />

      <div className="container-xl py-16">
        {/* Selected Projects */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Additional Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((p) => (
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
