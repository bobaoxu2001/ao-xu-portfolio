"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  // Avoid hydration mismatch by rendering a stable placeholder pre-mount.
  if (!mounted) {
    return (
      <span
        aria-hidden
        className="inline-flex w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800"
      />
    );
  }

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors dark:border-slate-800 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
