import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:bg-slate-950 dark:border-slate-800">
      <div className="container-xl py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {siteConfig.name} — Built with Next.js &amp; Tailwind CSS
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-slate-400 hover:text-blue-600 transition-colors dark:hover:text-blue-400"
          >
            <Mail size={18} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-blue-600 transition-colors dark:hover:text-blue-400"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-slate-900 transition-colors dark:hover:text-slate-100"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
