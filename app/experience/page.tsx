import type { Metadata } from "next";
import { GraduationCap, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { experiences, education } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience | Ao Xu",
  description: "Work experience and education of Ao (Allen) Xu — AI, data science, product analytics.",
};

export default function ExperiencePage() {
  return (
    <div className="py-16">
      <div className="container-xl">
        {/* Header */}
        <SectionHeader
          title="Experience & Education"
          subtitle="Industry experience across AI strategy, data analytics, and research — combined with an academic background in data science and applied mathematics."
        />

        {/* Work experience */}
        <div className="mb-16">
          <h2 className="text-lg font-bold text-slate-700 uppercase tracking-wider mb-8 dark:text-slate-300">
            Work Experience
          </h2>
          <ExperienceTimeline experiences={experiences} />
        </div>

        {/* Education */}
        <div>
          <h2 className="text-lg font-bold text-slate-700 uppercase tracking-wider mb-8 flex items-center gap-2">
            <GraduationCap size={20} />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.school} className="card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{edu.degree}</h3>
                    <p className="text-blue-600 font-semibold text-sm dark:text-blue-400">{edu.school}</p>
                    {edu.notes && (
                      <p className="text-slate-500 text-sm mt-1 dark:text-slate-400">{edu.notes}</p>
                    )}
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 shrink-0">
                    <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <Calendar size={12} />
                      {edu.period}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full font-medium dark:bg-slate-800 dark:text-slate-300">
                      GPA {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
