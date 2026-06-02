import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectTracks } from "@/lib/data";
import { TRACK_STYLE, FALLBACK_TRACK_STYLE } from "@/lib/trackStyle";

export function generateStaticParams() {
  return projectTracks.map((t) => ({ track: t.id }));
}

export function generateMetadata({ params }: { params: { track: string } }): Metadata {
  const track = projectTracks.find((t) => t.id === params.track);
  return {
    title: track ? `${track.label} | Ao Xu` : "Projects | Ao Xu",
    description: track?.tagline,
  };
}

export default function TrackPage({ params }: { params: { track: string } }) {
  const track = projectTracks.find((t) => t.id === params.track);
  if (!track) notFound();

  const style = TRACK_STYLE[track.id] ?? FALLBACK_TRACK_STYLE;
  const Icon = style.Icon;

  return (
    <div className="py-16">
      <div className="container-xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
        >
          <ArrowLeft size={15} /> All projects
        </Link>

        <div className="mb-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <span
            className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-full ring-1 ${style.ring}`}
          >
            <Icon size={46} strokeWidth={1.75} />
          </span>
          <div>
            <p className="eyebrow mb-1">AI Track</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {track.label}
            </h1>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-slate-500">
              {track.tagline}
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {track.projects.map((p) => (
            <ProjectCard
              key={p.id}
              compact
              title={p.title}
              category={p.category}
              problem={p.problem}
              built={p.built}
              impact={p.impact}
              description={p.description}
              technologies={p.technologies}
              tags={p.tags}
              github={p.github}
              liveDemo={p.liveDemo}
              highlight={p.highlight}
            />
          ))}
        </div>

        <div className="mt-14 border-t border-slate-200 pt-8">
          <p className="mb-4 text-sm font-semibold text-slate-500">Explore other tracks</p>
          <div className="flex flex-wrap gap-3">
            {projectTracks
              .filter((t) => t.id !== track.id)
              .map((t) => {
                const s = TRACK_STYLE[t.id] ?? FALLBACK_TRACK_STYLE;
                const TIcon = s.Icon;
                return (
                  <Link
                    key={t.id}
                    href={`/projects/${t.id}`}
                    className={`group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white py-2 pl-2 pr-4 text-sm font-semibold text-slate-700 transition-all hover:shadow-sm ${s.hover}`}
                  >
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full ring-1 ${s.ring}`}>
                      <TIcon size={16} strokeWidth={2} />
                    </span>
                    {t.label}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
