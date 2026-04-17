export function BrandMark({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={[
          "logo-shimmer relative overflow-hidden rounded-[1.25rem]",
          compact
            ? "h-12 w-12"
            : "h-[3.75rem] w-[3.75rem] sm:h-16 sm:w-16",
        ].join(" ")}
        style={{
          background:
            "linear-gradient(#050918, #050918) padding-box, linear-gradient(135deg, #7aa2ff, #9a7cff) border-box",
          border: "1.5px solid transparent",
          boxShadow: compact
            ? "0 0 28px rgba(122,162,255,0.22)"
            : "0 0 50px rgba(122,162,255,0.28), 0 0 22px rgba(154,124,255,0.18)",
        }}
      >
        <img
          src="/bharat-silicon-logo.png"
          alt="Bharat Silicon"
          className={[
            "absolute inset-0 z-10 h-full w-full object-cover",
            compact ? "scale-[1.7]" : "scale-[1.55]",
          ].join(" ")}
        />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white sm:text-base">
          Bharat Silicon
        </div>
        <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-sky-200/70 sm:text-[0.68rem]">
          Where Every Gate Gets Verified
        </div>
      </div>
    </div>
  );
}
