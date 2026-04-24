import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { siteConfig, skillGroups } from "@/lib/data";
import { SkillsGrid } from "@/components/SkillsGrid";

export const metadata: Metadata = {
  title: "About | Ao Xu",
  description:
    "About Ao (Allen) Xu — business data scientist at the intersection of AI, LLM systems, and business operations.",
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
                I&apos;m most interested in work where data science is close to real business
                workflows — support operations, product analytics, AI workflow evaluation, and
                decision systems. I like taking ambiguous operational problems, structuring them
                into measurable questions, and building prototypes or analyses that stakeholders
                can actually use.
              </p>
              <p>
                What I bring that goes beyond typical data science: I work at the intersection of
                ML modeling, LLM workflow design, and business communication. I can evaluate a
                classification threshold in terms of automation cost, or translate a prompt
                engineering decision into expected ops load — and then write the memo that explains
                the tradeoff to a non-technical stakeholder.
              </p>
              <p>
                My background includes AI strategy and LLM workflows at China Telecom&apos;s AI
                Center, seller operations analytics at TikTok/ByteDance, and a research capstone
                with S&P Global benchmarking time-series forecasting architectures. Academically,
                I hold an M.S. in Data Science from NYU (GPA 3.5) and a B.S. in Data Science
                &amp; Applied Mathematics from UC Santa Barbara (GPA 3.81).
              </p>
              <p>
                Roles I&apos;m targeting: Business Data Scientist, AI Strategy Analyst, Product
                Analyst, Data Analyst, and adjacent roles at companies where operational AI and
                analytics work closely together. I&apos;m especially drawn to teams working on
                support operations, seller/partner analytics, or LLM-powered business intelligence.
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
