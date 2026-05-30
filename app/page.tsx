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
import { homepageProjects, experiences, skillGroups } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* 1 ── Hero + KPI proof strip ─────────────────────────────── */}
      <Hero />

      {/* 2 ── Featured Projects (5 cards) ───────────────────────── */}
      <section className="py-20 bg-slate-50/60 dark:bg-slate-900/40">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <SectionHeader
              eyebrow="Featured Projects"
              title="AI + Data Projects"
              subtitle="Applied work across LLM systems, NLP pipelines, product analytics, and market intelligence."
            />
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1 text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors whitespace-nowrap dark:text-blue-400 dark:hover:text-blue-300"
            >
              Full archive <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

          <div className="mt-8 text-center sm:hidden">
            <Link href="/projects" className="btn-secondary">
              Full archive <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3 ── Case Study Deep Dive ───────────────────────────────── */}
      <FeaturedProject />

      {/* 4 ── Capability Map ─────────────────────────────────────── */}
      <CapabilityMap />

      {/* 5 ── Experience ────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <SectionHeader
              eyebrow="Background"
              title="Experience"
              subtitle="Industry experience across AI operations, product analytics, and research."
            />
            <Link
              href="/experience"
              className="hidden sm:flex items-center gap-1 text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors whitespace-nowrap dark:text-blue-400 dark:hover:text-blue-300"
            >
              Full timeline <ArrowRight size={14} />
            </Link>
          </div>
          <ExperienceTimeline experiences={experiences.slice(0, 4)} maxBullets={4} />
          <div className="mt-6 sm:hidden text-center">
            <Link href="/experience" className="btn-secondary">
              Full timeline <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6 ── Toolkit / Skills ──────────────────────────────────── */}
      <section className="py-20 bg-slate-50/60 dark:bg-slate-900/40">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Toolkit"
            title="Data & AI Toolkit"
            subtitle="Technical stack across data science, ML, LLM systems, and business intelligence."
          />
          <div className="mt-8">
            <SkillsGrid groups={skillGroups} />
          </div>
        </div>
      </section>

      {/* 7 ── Contact CTA ───────────────────────────────────────── */}
      <ContactSection />
    </>
  );
}
