import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 pt-20 pb-10 sm:pt-24 sm:pb-12">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.16]" />
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="container-xl relative">
        <div className="grid lg:grid-cols-[1fr_300px] items-center gap-10 lg:gap-16">
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex rounded-full border border-blue-300/25 bg-blue-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                {siteConfig.tagline}
              </span>
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                NYU M.S. Data Science
              </span>
            </div>

            <h1 className="mb-5 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {siteConfig.headline}
            </h1>

            <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-slate-300 sm:text-lg">
              {siteConfig.positioning}
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">
                View AI Projects <ArrowRight size={14} />
              </Link>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <FileText size={14} />
                Download Resume
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-150 hover:bg-white/10 hover:text-white"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-150 hover:bg-white/10 hover:text-white"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
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
