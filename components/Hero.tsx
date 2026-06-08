import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, FileText, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.14]" />
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container-xl relative">
        <div className="grid lg:grid-cols-[1fr_300px] items-center gap-10 lg:gap-16">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400" />
                {siteConfig.tagline}
              </span>
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                NYU M.S. Data Science
              </span>
            </div>

            <h1 className="mb-5 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              <span className="gradient-text">{siteConfig.headline}</span>
            </h1>

            <p className="mb-7 max-w-2xl text-[15px] leading-relaxed text-slate-300 sm:text-lg">
              {siteConfig.positioning}
            </p>

            <div className="mb-7 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">
                View Projects <ArrowRight size={14} />
              </Link>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText size={14} />
                View Resume
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>

            <p className="flex items-start gap-2 text-sm leading-relaxed text-slate-400">
              <Sparkles size={15} className="mt-0.5 shrink-0 text-cyan-300" />
              <span>{siteConfig.currentlyBuilding}</span>
            </p>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="relative h-64 w-64">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/30 to-cyan-300/20 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl">
                <Image
                  src="/images/ao-xu-headshot.png"
                  alt="Ao (Allen) Xu"
                  width={288}
                  height={288}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
