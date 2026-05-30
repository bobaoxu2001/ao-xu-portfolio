import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function ContactSection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-800/20 blur-3xl" />

      <div className="container-xl relative text-center">
        <span className="eyebrow text-blue-400 mb-4 block">Get in Touch</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Let&apos;s Connect
        </h2>
        <p className="text-slate-400 text-[15px] max-w-lg mx-auto mb-10 leading-relaxed">
          Open to full-time roles in business data science, AI strategy &amp; operations,
          and LLM/NLP analytics. Reach out anytime.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-blue-900/30"
          >
            <Mail size={15} /> {siteConfig.email}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/15 hover:bg-white/15 text-slate-200 hover:text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/15 hover:bg-white/15 text-slate-200 hover:text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/15 hover:bg-white/15 text-slate-200 hover:text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <FileText size={15} /> Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
}
