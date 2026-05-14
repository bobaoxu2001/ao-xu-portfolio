import Image from "next/image";
import Link from "next/link";
import { Mail, Github, Linkedin, FileText, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data";

const chips = [
  { value: "20K+",      label: "Dialog Logs Structured" },
  { value: "170+",      label: "Intent Labels" },
  { value: "+21.1 pts", label: "Macro-F1 Lift" },
  { value: "71%",       label: "Forecasting MAE Reduction" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-20 pb-20 sm:pt-28 sm:pb-24">
      {/* Dot grid — fades out at bottom */}
      <div
        className="hero-grid pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 65%)" }}
      />
      {/* Soft radial glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-blue-100/30 blur-3xl" />

      <div className="container-xl relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Text column ─────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            <span className="eyebrow mb-3 block">AI + Data Analyst</span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-4">
              Ao{" "}
              <span className="text-blue-600">(Allen)</span>{" "}
              Xu
            </h1>

            <p className="text-slate-500 text-[15px] sm:text-base font-medium mb-3 tracking-wide">
              AI Strategy &amp; Operations · LLM/NLP Analytics
            </p>

            <p className="text-slate-600 text-[15px] leading-relaxed mb-7">
              {siteConfig.positioning}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start mb-7">
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
              <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
                <Mail size={14} />
                Contact
              </a>
            </div>

            {/* Credibility chips — glassy, subtle */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              {chips.map((c) => (
                <div
                  key={c.label}
                  className="flex items-baseline gap-1.5 px-3 py-1.5 bg-white/80 border border-slate-200 rounded-lg shadow-sm backdrop-blur-sm"
                >
                  <span className="text-[13px] font-extrabold text-blue-600 leading-none">{c.value}</span>
                  <span className="text-[11px] text-slate-500 font-medium leading-none">{c.label}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-5 justify-center lg:justify-start">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[13px] text-slate-400 hover:text-blue-600 transition-colors font-medium"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[13px] text-slate-400 hover:text-slate-800 transition-colors font-medium"
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>

          {/* ── Photo column ────────────────────────────── */}
          <div className="shrink-0 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/60 to-indigo-200/60 blur-2xl scale-125" />
              <div className="relative w-full h-full rounded-full overflow-hidden ring-[3px] ring-white shadow-2xl border border-slate-100/80">
                <Image
                  src="/images/ao-xu-headshot.png"
                  alt="Ao (Allen) Xu"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover object-top"
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
