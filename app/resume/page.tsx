import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume | Ao Xu",
  description: "Resume and contact information for Ao (Allen) Xu, AI + Data Analyst.",
};

export default function ResumePage() {
  return (
    <div className="py-16">
      <div className="container-xl max-w-3xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-2">
            Resume &amp; Contact
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            {siteConfig.name}
          </h1>
          <p className="text-slate-400 text-base">
            {siteConfig.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Open to AI Engineer, AI Product Manager, Data Scientist, Applied AI, and AI Strategist roles.
          </p>
        </div>

        {/* Resume download card */}
        <div className="card mb-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-blue-500/10 ring-1 ring-blue-400/20 flex items-center justify-center">
              <FileText className="text-blue-300" size={28} />
            </div>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Resume / CV</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Download or view my full resume, including work experience, education, and skills.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink size={15} />
              View PDF
            </a>
            <a
              href={siteConfig.resumeUrl}
              download
              className="btn-secondary"
            >
              <FileText size={15} />
              Download PDF
            </a>
          </div>
        </div>

        {/* Contact links */}
        <div className="card">
          <h2 className="text-lg font-bold text-white mb-6">Contact &amp; Links</h2>
          <div className="space-y-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:bg-white/[0.06] hover:border-blue-400/30 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-blue-500/10 ring-1 ring-blue-400/20 flex items-center justify-center shrink-0">
                <Mail className="text-blue-300" size={18} />
              </span>
              <div>
                <p className="text-xs text-slate-500 font-medium">Email</p>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-blue-200 transition-colors">
                  {siteConfig.email}
                </p>
              </div>
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:bg-white/[0.06] hover:border-blue-400/30 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-blue-500/10 ring-1 ring-blue-400/20 flex items-center justify-center shrink-0">
                <Linkedin className="text-blue-300" size={18} />
              </span>
              <div>
                <p className="text-xs text-slate-500 font-medium">LinkedIn</p>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-blue-200 transition-colors">
                  linkedin.com/in/ao-xu
                </p>
              </div>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center shrink-0">
                <Github className="text-slate-200" size={18} />
              </span>
              <div>
                <p className="text-xs text-slate-500 font-medium">GitHub</p>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  github.com/bobaoxu2001
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
