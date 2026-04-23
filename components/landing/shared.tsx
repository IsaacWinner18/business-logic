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
      <div className="mb-3 inline-flex rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-900/90 sm:mb-4 sm:px-4">
        {badge}
      </div>
      <h2
        className={` font-display text-[1.6rem] leading-tight text-black  md:text-[3.35rem] ${nohemi.variable} `}
      >
        {highlight ? (
          <>
            {parts[0]}
            <span className="text-sky-400">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      <p className="text-gray-700 mx-auto mt-3 max-w-2xl text-sm leading-6 sm:mt-4 sm:text-base sm:leading-7">
        {description}
      </p>
    </div>
  );
}
