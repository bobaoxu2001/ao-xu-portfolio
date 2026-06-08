export default function SectionHeader({
  eyebrow,
  title,
  desc,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
        {title}
      </h2>
      {desc && <p className="mt-3 text-base leading-7 text-ink-500">{desc}</p>}
    </div>
  );
}
