import { nohemi } from "@/lib/font";

type SectionHeadingProps = {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  centered = true,
  dark = false,
  className = "",
  badgeClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-xl"} ${className}`}>
      <div
        className={`mb-3 inline-flex px-0 py-1 text-[10px] font-medium uppercase tracking-[0.26em] sm:mb-4 ${
          badgeClassName || (dark ? "text-white/80" : "text-[var(--ink-faint)]")
        }`}
      >
        {badge}
      </div>
      <h2
        className={`font-display text-[2rem] leading-[0.98] md:text-[3.35rem] ${
          titleClassName || (dark ? "text-white" : "text-black")
        } ${nohemi.variable}`}
      >
        {highlight ? (
          <>
            {parts[0]}
            <span className={dark ? "text-cyan-300" : "text-[var(--accent)]"}>{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      <p
        className={`mx-auto mt-3 max-w-2xl text-sm leading-7 sm:mt-4 sm:text-base ${
          descriptionClassName || (dark ? "text-white/90" : "text-[var(--ink-soft)]")
        }`}
      >
        {description}
      </p>
    </div>
  );
}
