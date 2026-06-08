"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { siteConfig } from "@/lib/data";

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
    <header className="sticky top-0 z-50 bg-[#05070e]/80 backdrop-blur-xl border-b border-white/10">
      <div className="container-xl flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-white hover:text-blue-300 transition-colors text-[15px] tracking-tight"
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
                    ? "text-white bg-white/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
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
            className="ml-4 btn-primary py-2 px-4 text-xs"
          >
            <FileText size={13} />
            Download CV
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#05070e]/95 backdrop-blur-xl px-4 py-3 flex flex-col gap-0.5">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-4 py-2.5 text-sm rounded-lg font-medium transition-colors ${
                  active
                    ? "text-white bg-white/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
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
