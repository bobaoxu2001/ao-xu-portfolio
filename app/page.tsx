import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CapabilityMap } from "@/components/CapabilityMap";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ContactSection } from "@/components/ContactSection";
import { SectionHeader } from "@/components/SectionHeader";
import { experiences, heroMetrics, homepageProjects, skillGroups } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-y border-slate-200 bg-white">
        <div className="container-xl py-5">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-lg font-extrabold tracking-tight text-slate-900">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold leading-snug text-slate-500">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/70">
        <div className="container-xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Featured AI/Data Projects"
              title="Practical AI + Data Systems"
              subtitle="A focused set of projects that show problem framing, build quality, evaluation discipline, and business-facing outcomes."
            />
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 sm:flex"
            >
              View full project archive <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
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

          <div className="mt-8 text-center sm:hidden">
            <Link href="/projects" className="btn-secondary">
              Full archive <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProject />

      <CapabilityMap />

      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Experience"
              title="AI, Analytics, and Business Workflow Background"
              subtitle="Industry work across LLM workflows, seller operations analytics, forecasting research, and risk reporting automation."
            />
            <Link
              href="/experience"
              className="hidden items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 sm:flex"
            >
              Full timeline <ArrowRight size={14} />
            </Link>
          </div>
          <ExperienceTimeline experiences={experiences.slice(0, 4)} maxBullets={4} />
          <div className="mt-6 text-center sm:hidden">
            <Link href="/experience" className="btn-secondary">
              Full timeline <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/70">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Toolkit"
            title="Working Stack for AI + Data Delivery"
            subtitle="Grouped by the capabilities I use to move from messy input to decision-ready output."
          />
          <div className="mt-8">
            <SkillsGrid groups={skillGroups} />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
