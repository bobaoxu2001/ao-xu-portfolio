import Link from "next/link";
import { ArrowRight, Cpu, BarChart3, Compass, type LucideIcon } from "lucide-react";
import { roleFits } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

// Full class strings so Tailwind's JIT picks them up.
const ROLE_STYLE: Record<string, { Icon: LucideIcon; ring: string }> = {
  "ai-engineer": { Icon: Cpu, ring: "bg-indigo-500/10 text-indigo-300 ring-indigo-400/20" },
  "data-scientist": { Icon: BarChart3, ring: "bg-emerald-500/10 text-emerald-300 ring-emerald-400/20" },
  "ai-pm": { Icon: Compass, ring: "bg-sky-500/10 text-sky-300 ring-sky-400/20" },
};

export function RoleFitSection() {
  return (
    <section className="py-20">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Best Fit Roles"
          title="Where I fit — and the proof"
          subtitle="Three role profiles, each backed by shipped work rather than coursework."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {roleFits.map((fit) => {
            const style = ROLE_STYLE[fit.id] ?? ROLE_STYLE["ai-engineer"];
            const Icon = style.Icon;
            return (
              <article key={fit.id} className="card flex h-full flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ${style.ring}`}>
                    <Icon size={19} strokeWidth={2} />
                  </span>
                  <h3 className="text-base font-extrabold leading-snug text-white">
                    {fit.role}
                  </h3>
                </div>

                <p className="mb-4 text-[13.5px] leading-relaxed text-slate-300">{fit.why}</p>

                <ul className="mb-5 flex-1 space-y-2.5">
                  {fit.proof.map((item) => (
                    <li key={item} className="flex gap-2 text-[13px] leading-snug text-slate-400">
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={fit.href}
                  className="group mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200"
                >
                  {fit.linkLabel}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
