interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, subtitle, align = "left" }: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "";
  return (
    <div className={`flex flex-col ${alignClass}`}>
      {eyebrow && <span className="eyebrow mb-2">{eyebrow}</span>}
      <h2 className="section-heading">{title}</h2>
      {subtitle && (
        <p className={`section-subheading ${align === "left" ? "max-w-xl" : "max-w-2xl mx-auto"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
