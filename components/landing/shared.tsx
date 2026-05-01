import { nohemi } from "@/lib/font";

type SectionHeadingProps = {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  centered?: boolean;
};

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-xl"}>
      <div className="mb-3 inline-flex px-0 py-1 text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--ink-faint)] sm:mb-4">
        {badge}
      </div>
      <h2
        className={`font-display text-[2rem] leading-[0.98] text-black md:text-[3.35rem] ${nohemi.variable}`}
      >
        {highlight ? (
          <>
            {parts[0]}<span className="text-[var(--accent)]">{highlight}</span>{parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[var(--ink-soft)] sm:mt-4 sm:text-base">
        {description}
      </p>
    </div>
  );
}
