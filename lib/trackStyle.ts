import { Bot, Trophy, LineChart, BarChart3, Gamepad2, type LucideIcon } from "lucide-react";

// Shared per-track emblem icon + accent classes, used by the Projects overview
// and the individual track pages. Class strings are written in full so
// Tailwind's JIT picks them up (no dynamic construction). Tuned for the dark
// glassmorphism theme.
export const TRACK_STYLE: Record<
  string,
  { Icon: LucideIcon; ring: string; hover: string }
> = {
  "ai-products": {
    Icon: Gamepad2,
    ring: "bg-rose-500/10 text-rose-300 ring-rose-400/20",
    hover: "hover:border-rose-400/30",
  },
  "ai-knowledge": {
    Icon: Bot,
    ring: "bg-indigo-500/10 text-indigo-300 ring-indigo-400/20",
    hover: "hover:border-indigo-400/30",
  },
  "ai-sports": {
    Icon: Trophy,
    ring: "bg-sky-500/10 text-sky-300 ring-sky-400/20",
    hover: "hover:border-sky-400/30",
  },
  "ai-markets": {
    Icon: LineChart,
    ring: "bg-emerald-500/10 text-emerald-300 ring-emerald-400/20",
    hover: "hover:border-emerald-400/30",
  },
  "ai-data-ops": {
    Icon: BarChart3,
    ring: "bg-violet-500/10 text-violet-300 ring-violet-400/20",
    hover: "hover:border-violet-400/30",
  },
};

export const FALLBACK_TRACK_STYLE = TRACK_STYLE["ai-knowledge"];
