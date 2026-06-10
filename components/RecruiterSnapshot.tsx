import { GraduationCap, Wrench, Target, Building2 } from "lucide-react";
import { recruiterSnapshot } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

const rows = [
  {
    Icon: GraduationCap,
    label: "Education",
    content: recruiterSnapshot.education,
    asChips: false,
  },
  {
    Icon: Wrench,
    label: "Core skills",
    content: recruiterSnapshot.coreSkills,
    asChips: true,
  },
  {
    Icon: Target,
    label: "Strongest domains",
    content: recruiterSnapshot.domains,
    asChips: true,
  },
  {
    Icon: Building2,
    label: "Best evidence",
    content: recruiterSnapshot.evidence,
    asChips: true,
  },
];

export function RecruiterSnapshot() {
  return (
    <section className="border-y border-white/10 bg-white/[0.015] py-16">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Recruiter Snapshot"
          title="The 30-second read"
          subtitle="Education, skills, domains, and where the evidence comes from."
        />
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {rows.map(({ Icon, label, content, asChips }) => (
            <div key={label} className="card-flat">
              <dt className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
                <Icon size={15} />
                {label}
              </dt>
              <dd>
                {asChips ? (
                  <div className="flex flex-wrap gap-1.5">
                    {content.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-1.5">
                    {content.map((item) => (
                      <li key={item} className="text-sm font-semibold leading-snug text-slate-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
