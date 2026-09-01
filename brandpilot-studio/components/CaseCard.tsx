import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { DemoCase } from "@/lib/cases";

export default function CaseCard({ c }: { c: DemoCase }) {
  return (
    <Link
      href={`/cases/${c.slug}`}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      <div className={`bg-gradient-to-br ${c.accent} px-6 py-8`}>
        <span className="text-4xl">{c.emoji}</span>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/80">
          {c.category}
        </p>
        <p className="mt-1 text-lg font-bold leading-snug text-white">{c.name}</p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-ink-900">{c.headline}</p>
        <p className="mt-2 flex-1 text-sm leading-6 text-ink-500">{c.oneLiner}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
          查看完整案例
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
