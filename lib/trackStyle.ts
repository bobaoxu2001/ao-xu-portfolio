import { Bot, LineChart, BarChart3, type LucideIcon } from "lucide-react";

// Shared per-track emblem icon + accent classes, used by the Projects overview
// and the individual track pages. Class strings are written in full so
// Tailwind's JIT picks them up (no dynamic construction).
export const TRACK_STYLE: Record<
  string,
  { Icon: LucideIcon; ring: string; hover: string }
> = {
  "ai-knowledge": {
    Icon: Bot,
    ring: "bg-indigo-50 text-indigo-600 ring-indigo-100",
    hover: "hover:border-indigo-200",
  },
  "ai-markets": {
    Icon: LineChart,
    ring: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    hover: "hover:border-emerald-200",
  },
  "ai-data-ops": {
    Icon: BarChart3,
    ring: "bg-violet-50 text-violet-600 ring-violet-100",
    hover: "hover:border-violet-200",
  },
};

export const FALLBACK_TRACK_STYLE = TRACK_STYLE["ai-knowledge"];
