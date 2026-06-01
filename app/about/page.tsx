import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { siteConfig, skillGroups } from "@/lib/data";
import { SkillsGrid } from "@/components/SkillsGrid";

export const metadata: Metadata = {
  title: "About | Ao Xu",
  description:
    "About Ao (Allen) Xu - AI + Data Analyst focused on LLM workflows, RAG, product analytics, forecasting, and operational decision systems.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container-xl">
        {/* Top: photo + bio */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
          {/* Photo */}
          <div className="shrink-0 mx-auto lg:mx-0">
            <div className="relative w-44 h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <Image
                src="/images/ao-xu-headshot.png"
                alt={`${siteConfig.name}`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="max-w-2xl">
            <span className="eyebrow mb-3 block">About</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">
              {siteConfig.name}
            </h1>

            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
              <p>
                I work at the intersection of AI workflows, data analytics, and business
                operations. The through-line in my work is turning messy inputs - support
                tickets, dialogue logs, seller funnels, market signals, and internal knowledge -
                into systems that help people make clearer decisions.
              </p>
              <p>
                My strongest projects combine practical build work with evaluation discipline:
                LLM workflow QA, RAG retrieval inspection, NLP classification benchmarks,
                Streamlit dashboards, forecasting comparisons, and stakeholder-ready narratives.
                I care less about flashy demos and more about whether a system is measurable,
                reviewable, and useful in an operating workflow.
              </p>
              <p>
                My background includes AI workflow and digital-human product work at China
                Telecom&apos;s AI Center, seller support analytics at TikTok/ByteDance, forecasting
                research with S&amp;P Global x NYU, and reporting automation at Deloitte.
                Academically, I hold an M.S. in Data Science from NYU and a B.S. in Data Science
                &amp; Applied Mathematics from UC Santa Barbara.
              </p>
              <p>
                I&apos;m targeting AI/Data Analyst, Applied AI Analyst, Business Data Scientist,
                LLM/NLP Analytics, AI Operations, and AI Product / Strategy roles where analytics
                and AI systems are close to real business workflows.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`mailto:${siteConfig.email}`} className="btn-primary">
                <Mail size={14} /> Get in touch
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <Link href="/projects" className="btn-secondary">
                View projects <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100">
            Technical Skills
          </h2>
          <SkillsGrid groups={skillGroups} />
        </div>
      </div>
    </div>
  );
}
