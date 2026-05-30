"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_0_rgba(0,0,0,0.05)] dark:bg-slate-950/85 dark:border-slate-800/80 dark:shadow-none">
      <div className="container-xl flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-slate-900 hover:text-blue-600 transition-colors text-[15px] tracking-tight dark:text-slate-100 dark:hover:text-blue-400"
        >
          {siteConfig.shortName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-3.5 py-2 text-sm rounded-lg font-medium transition-all duration-150 ${
                  active
                    ? "text-blue-600 bg-blue-50/80 dark:text-blue-400 dark:bg-blue-500/10"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/60"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="ml-3">
            <ThemeToggle />
          </div>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 btn-primary py-2 px-4 text-xs"
          >
            <FileText size={13} />
            Download CV
          </a>
        </nav>

        {/* Mobile cluster */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-50 transition-colors dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 py-3 flex flex-col gap-0.5 dark:border-slate-800 dark:bg-slate-950/95">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-4 py-2.5 text-sm rounded-lg font-medium transition-colors ${
                  active
                    ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/60"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 btn-primary justify-center text-sm"
          >
            <FileText size={14} /> Download CV
          </a>
        </div>
      )}
    </header>
  );
}
