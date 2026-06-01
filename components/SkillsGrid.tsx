interface SkillGroup {
  label: string;
  color: string;
  skills: string[];
}

interface SkillsGridProps {
  groups: SkillGroup[];
}

const colorMap: Record<string, { accent: string; dot: string }> = {
  blue:   { accent: "text-blue-600",   dot: "bg-blue-400" },
  violet: { accent: "text-violet-600", dot: "bg-violet-400" },
  indigo: { accent: "text-indigo-600", dot: "bg-indigo-400" },
  sky:    { accent: "text-sky-600",    dot: "bg-sky-400" },
  emerald:{ accent: "text-emerald-600", dot: "bg-emerald-400" },
};

export function SkillsGrid({ groups }: SkillsGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {groups.map((group) => {
        const c = colorMap[group.color] ?? colorMap.blue;
        return (
          <div
            key={group.label}
            className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-slate-300 transition-all duration-200"
          >
            {/* Header with colored dot */}
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2 h-2 rounded-full ${c.dot}`} />
              <h3 className={`text-xs font-bold uppercase tracking-wider ${c.accent}`}>
                {group.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-[12px] font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full leading-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
