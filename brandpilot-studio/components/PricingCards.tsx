import Link from "next/link";
import { Check } from "lucide-react";
import { tiers } from "@/lib/services";

export default function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={`card relative flex flex-col p-6 sm:p-7 ${
            tier.highlight
              ? "border-brand-200 ring-2 ring-brand-200"
              : "card-hover"
          }`}
        >
          {tier.badge && (
            <span
              className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold ${
                tier.highlight
                  ? "bg-grad-brand text-white shadow-glow"
                  : "border border-brand-100 bg-brand-50 text-brand-700"
              }`}
            >
              {tier.badge}
            </span>
          )}

          <h3 className="mt-2 text-lg font-bold text-ink-900">{tier.nameCn}</h3>
          <p className="text-xs font-medium uppercase tracking-wider text-ink-400">
            {tier.name}
          </p>

          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-3xl font-bold text-ink-900">{tier.priceLabel}</span>
            <span className="text-sm text-ink-400"> RMB 起</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-ink-500">{tier.summary}</p>

          <p className="mt-4 text-xs font-medium text-brand-700">
            适合：{tier.forWho}
          </p>

          <ul className="mt-4 flex-1 space-y-2.5">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
                <Check size={17} className="mt-0.5 shrink-0 text-brand-500" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs text-ink-400">{tier.delivery}</p>
          <Link
            href="/inquiry"
            className={`mt-3 ${tier.highlight ? "btn-primary" : "btn-ghost"} w-full`}
          >
            {tier.cta}
          </Link>
        </div>
      ))}
    </div>
  );
}
