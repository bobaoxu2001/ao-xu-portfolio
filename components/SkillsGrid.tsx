interface SkillGroup {
  label: string;
  color: string;
  skills: string[];
}

interface SkillsGridProps {
  groups: SkillGroup[];
}

const colorMap: Record<string, { accent: string; dot: string }> = {
  blue:   { accent: "text-blue-300",   dot: "bg-blue-400" },
  violet: { accent: "text-violet-300", dot: "bg-violet-400" },
  indigo: { accent: "text-indigo-300", dot: "bg-indigo-400" },
  sky:    { accent: "text-sky-300",    dot: "bg-sky-400" },
  emerald:{ accent: "text-emerald-300", dot: "bg-emerald-400" },
};

export function SkillsGrid({ groups }: SkillsGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {groups.map((group) => {
        const c = colorMap[group.color] ?? colorMap.blue;
        return (
          <div
            key={group.label}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06]"
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
                  className="px-2.5 py-1 text-[12px] font-medium text-slate-300 bg-white/[0.06] border border-white/10 rounded-full leading-none"
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
