import { MapPin, Calendar } from "lucide-react";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
  maxBullets?: number;
}

export function ExperienceTimeline({ experiences, maxBullets }: ExperienceTimelineProps) {
  return (
    <div className="space-y-4">
      {experiences.map((exp, idx) => (
        <div key={exp.id} className="relative pl-7">
          {/* Connector line */}
          {idx < experiences.length - 1 && (
            <span className="absolute left-[9px] top-5 bottom-[-8px] w-px bg-slate-200" />
          )}
          {/* Dot */}
          <span className="absolute left-0 top-[5px] w-[18px] h-[18px] rounded-full bg-white border-2 border-blue-500 shadow-sm" />

          {/* Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-sm transition-all duration-150">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{exp.title}</h3>
                <p className="text-blue-600 font-semibold text-[13px] mt-0.5">{exp.company}</p>
              </div>
              <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 shrink-0 mt-0.5">
                <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium whitespace-nowrap">
                  <Calendar size={10} /> {exp.period}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                  <MapPin size={10} /> {exp.location}
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full font-semibold border border-slate-200">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-1">
              {(maxBullets ? exp.bullets.slice(0, maxBullets) : exp.bullets).map((b, i) => (
                <li key={i} className="flex gap-2 text-[13px] text-slate-600 leading-relaxed">
                  <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-slate-300 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
