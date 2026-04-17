export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.24em] text-slate-300">
        <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_14px_rgba(16,185,129,0.75)]" />
        {eyebrow}
      </div>
      <h2 className="text-balance font-display text-4xl leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-8 text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}
