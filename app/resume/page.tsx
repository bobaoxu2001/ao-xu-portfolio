import type { Metadata } from "next";
import {
  FileText,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  MapPin,
  Briefcase,
  Wrench,
} from "lucide-react";
import { recruiterSnapshot, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume & Contact | Ao Xu",
  description:
    "Resume and contact for Ao (Allen) Xu — M.S. Data Science (NYU) with experience in LLM workflows, NLP evaluation, product analytics, forecasting, and AI operations.",
};

export default function ResumePage() {
  return (
    <div className="py-16">
      <div className="container-xl max-w-4xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <p className="eyebrow mb-2">Get the full picture</p>
          <h1 className="mb-3 text-3xl font-extrabold text-white sm:text-4xl">
            Resume &amp; Contact
          </h1>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-slate-300">
            M.S. Data Science graduate with experience in LLM workflows, NLP evaluation,
            product analytics, forecasting, and AI operations.
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Open roles">
            {recruiterSnapshot.openRoles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200"
              >
                {role}
              </li>
            ))}
          </ul>
        </header>

        {/* Resume preview card */}
        <div className="card mb-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="flex h-32 w-24 shrink-0 flex-col justify-between rounded-lg border border-white/15 bg-white/[0.06] p-2.5 shadow-lg shadow-black/30">
              <div className="space-y-1.5">
                <div className="h-1.5 w-3/4 rounded bg-blue-300/60" />
                <div className="h-1 w-full rounded bg-white/20" />
                <div className="h-1 w-5/6 rounded bg-white/20" />
                <div className="h-1 w-full rounded bg-white/15" />
                <div className="h-1 w-2/3 rounded bg-white/15" />
              </div>
              <FileText size={16} className="self-end text-blue-300" />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="mb-1 text-xl font-bold text-white">Resume — Ao (Allen) Xu</h2>
              <p className="mb-5 max-w-md text-sm leading-relaxed text-slate-400">
                One page: China Telecom AI Center, TikTok/ByteDance, S&amp;P Global × NYU,
                and Deloitte — plus education and the full skill set.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={15} />
                  View PDF
                </a>
                <a href={siteConfig.resumeUrl} download className="btn-secondary">
                  <FileText size={15} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recruiter snapshot */}
        <div className="card-flat mb-8">
          <h2 className="mb-5 text-lg font-bold text-white">Recruiter snapshot</h2>
          <dl className="grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-blue-300">
                <MapPin size={13} /> Location
              </dt>
              <dd className="text-sm font-semibold text-slate-200">
                {recruiterSnapshot.location}
              </dd>
            </div>
            <div>
              <dt className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-blue-300">
                <Briefcase size={13} /> Open roles
              </dt>
              <dd className="text-sm font-semibold text-slate-200">
                {recruiterSnapshot.openRoles.join(" · ")}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-blue-300">
                <Wrench size={13} /> Core skills
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {recruiterSnapshot.coreSkills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        {/* Contact links */}
        <div className="card-flat">
          <h2 className="mb-6 text-lg font-bold text-white">Contact &amp; Links</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-3 rounded-lg border border-white/10 p-4 transition-colors hover:border-blue-400/30 hover:bg-white/[0.06]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 ring-1 ring-blue-400/20">
                <Mail className="text-blue-300" size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-slate-500">Email Me</span>
                <span className="block truncate text-sm font-semibold text-slate-200 transition-colors group-hover:text-blue-200">
                  {siteConfig.email}
                </span>
              </span>
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-white/10 p-4 transition-colors hover:border-blue-400/30 hover:bg-white/[0.06]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 ring-1 ring-blue-400/20">
                <Linkedin className="text-blue-300" size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-slate-500">LinkedIn</span>
                <span className="block truncate text-sm font-semibold text-slate-200 transition-colors group-hover:text-blue-200">
                  in/ao-xu
                </span>
              </span>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-white/10 p-4 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10">
                <Github className="text-slate-200" size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-slate-500">GitHub</span>
                <span className="block truncate text-sm font-semibold text-slate-200 transition-colors group-hover:text-white">
                  bobaoxu2001
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
