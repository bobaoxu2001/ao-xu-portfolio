import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ id: cs.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const cs = caseStudies.find((c) => c.id === params.id);
  return {
    title: cs ? `${cs.title} — Case Study | Ao Xu` : "Case Study | Ao Xu",
    description: cs?.summary,
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-blue-300">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const cs = caseStudies.find((c) => c.id === params.id);
  if (!cs) notFound();

  return (
    <div className="py-16">
      <div className="container-xl max-w-3xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
        >
          <ArrowLeft size={15} /> All projects
        </Link>

        <header className="mb-10">
          <p className="eyebrow mb-2">{cs.eyebrow}</p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {cs.title}
          </h1>
          <p className="text-[15px] leading-relaxed text-slate-300">{cs.summary}</p>

          {(cs.github || cs.liveDemo) && (
            <div className="mt-5 flex flex-wrap gap-3">
              {cs.liveDemo && (
                <a
                  href={cs.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-4 py-2 text-xs"
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
              )}
              {cs.github && (
                <a
                  href={cs.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-4 py-2 text-xs"
                >
                  <Github size={13} /> GitHub
                </a>
              )}
            </div>
          )}
        </header>

        <Section title="Context">
          <p className="text-[15px] leading-relaxed text-slate-300">{cs.context}</p>
        </Section>

        <Section title="Problem">
          <p className="text-[15px] leading-relaxed text-slate-300">{cs.problem}</p>
        </Section>

        <Section title="My role">
          <p className="text-[15px] leading-relaxed text-slate-300">{cs.role}</p>
        </Section>

        <Section title="System & analysis design">
          <ul className="space-y-3">
            {cs.design.map((item) => (
              <li key={item} className="flex gap-2.5 text-[14px] leading-relaxed text-slate-300">
                <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Evaluation & metrics">
          <ul className="space-y-2.5">
            {cs.evaluation.map((item) => (
              <li key={item} className="flex gap-2.5 text-[14px] leading-relaxed text-slate-200">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-300" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Outcome">
          <p className="text-[15px] leading-relaxed text-slate-300">{cs.outcome}</p>
        </Section>

        <Section title="What I'd improve next">
          <p className="text-[15px] leading-relaxed text-slate-300">{cs.next}</p>
        </Section>

        <div className="border-t border-white/10 pt-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">Tools</p>
          <div className="flex flex-wrap gap-1.5">
            {cs.technologies.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {caseStudies
            .filter((c) => c.id !== cs.id)
            .map((c) => (
              <Link
                key={c.id}
                href={`/case-studies/${c.id}`}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/[0.08] hover:text-white"
              >
                {c.title.length > 48 ? `${c.title.slice(0, 48)}…` : c.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
