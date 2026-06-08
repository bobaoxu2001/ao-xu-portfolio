import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CapabilityMap } from "@/components/CapabilityMap";
import { FeaturedProject } from "@/components/FeaturedProject";
import { FeaturedProductCard } from "@/components/FeaturedProductCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ContactSection } from "@/components/ContactSection";
import { SectionHeader } from "@/components/SectionHeader";
import {
  experiences,
  featuredProducts,
  heroMetrics,
  homepageProjects,
  projectTracks,
  skillGroups,
} from "@/lib/data";
import { TRACK_STYLE, FALLBACK_TRACK_STYLE } from "@/lib/trackStyle";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container-xl py-5">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <div className="text-lg font-extrabold tracking-tight text-white">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold leading-snug text-slate-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured AI Products — the latest shipped, product-first work */}
      <section className="py-20">
        <div className="container-xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Featured AI Products"
              title="AI-native products I've shipped"
              subtitle="Live, end-to-end builds — agentic prediction, market intelligence, and a freemium product — not notebooks or slides."
            />
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200 sm:flex"
            >
              All projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p) => (
              <FeaturedProductCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/[0.015]">
        <div className="container-xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Selected AI/Data Systems"
              title="Practical AI + Data Systems"
              subtitle="A focused set of projects that show problem framing, build quality, evaluation discipline, and business-facing outcomes."
            />
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200 sm:flex"
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
                summary={p.summary}
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

      <section className="py-20">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Browse by Track"
            title="Explore my work by AI domain"
            subtitle="Four focus areas — pick one to see the products and systems I've built in it."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projectTracks.map((track) => {
              const style = TRACK_STYLE[track.id] ?? FALLBACK_TRACK_STYLE;
              const Icon = style.Icon;
              return (
                <Link
                  key={track.id}
                  href={`/projects/${track.id}`}
                  className={`group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:shadow-[0_18px_50px_-12px_rgba(8,18,48,0.7)] ${style.hover}`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-1 ${style.ring}`}
                  >
                    <Icon size={24} strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-extrabold leading-snug text-white transition-colors group-hover:text-blue-200">
                      {track.label}
                    </h3>
                    <p className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-blue-300">
                      {track.projects.length} projects
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FeaturedProject />

      <CapabilityMap />

      <section className="py-20">
        <div className="container-xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Experience"
              title="AI, Analytics, and Product Background"
              subtitle="Industry work across LLM workflows, seller operations analytics, forecasting research, and risk reporting automation."
            />
            <Link
              href="/experience"
              className="hidden items-center gap-1 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200 sm:flex"
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

      <section className="py-20 bg-white/[0.015]">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Toolkit"
            title="Technical Stack for AI + Data Delivery"
            subtitle="Grouped by the capabilities I use to move from messy input to shipped, decision-ready product."
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
