import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { siteConfig, skillGroups } from "@/lib/data";
import { SkillsGrid } from "@/components/SkillsGrid";
import { CapabilityMap } from "@/components/CapabilityMap";

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
            <div className="relative w-44 h-44 rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-black/40">
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
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
              {siteConfig.name}
            </h1>

            <div className="space-y-4 text-slate-300 text-[15px] leading-relaxed">
              <p>
                I&apos;m an AI builder and data scientist who turns data, workflows, and ideas
                into products people can actually use. Across LLM applications, agentic analytics,
                and market-intelligence platforms, I take projects end to end — from problem
                framing to a shipped, live interface.
              </p>
              <p>
                My recent work is product-first: a news-aware World Cup prediction agent, an
                AI quant research platform, and a freemium tournament-simulation product. Underneath
                the polish, I care about the engineering — probability modeling, evaluation harnesses,
                retrieval inspection, and honest treatment of uncertainty — so the systems are
                measurable and trustworthy, not just demos.
              </p>
              <p>
                My background spans AI workflow and digital-human product work at China Telecom&apos;s
                AI Center, seller support analytics at TikTok/ByteDance, forecasting research with
                S&amp;P Global x NYU, and reporting automation at Deloitte. I hold an M.S. in Data
                Science from NYU and a B.S. in Data Science &amp; Applied Mathematics from UC Santa Barbara.
              </p>
              <p>
                I&apos;m targeting AI Engineer, AI Product Manager, Data Scientist, and AI Strategist
                roles where building real products and shipping data-driven systems sit at the center
                of the work.
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
          <h2 className="text-xl font-bold text-white mb-6 pb-3 border-b border-white/10">
            Technical Skills
          </h2>
          <SkillsGrid groups={skillGroups} />
        </div>
      </div>

      <CapabilityMap />
    </div>
  );
}
