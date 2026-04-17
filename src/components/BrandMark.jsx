// SVG logo built from the Bharat Silicon design:
// diamond chip body · PCB traces with solder-pad nodes · blue→purple gradient · "B" centre
function BharatSiliconIcon({ instanceId = "a", className = "" }) {
  const g = `bsG-${instanceId}`;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={g} x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#7dd3fc" />
          <stop offset="38%"  stopColor="#38bdf8" />
          <stop offset="68%"  stopColor="#818cf8" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
      </defs>

      {/* ── TOP-LEFT traces: go left → then up ── */}
      <path d="M 44 23 L 20 23 L 20 7"  stroke={`url(#${g})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="7"  r="2.2" fill={`url(#${g})`} />

      <path d="M 38 29 L 13 29 L 13 13" stroke={`url(#${g})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="13" cy="13" r="2.2" fill={`url(#${g})`} />

      <path d="M 33 34 L 17 34 L 17 20" stroke={`url(#${g})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="20" r="2.2" fill={`url(#${g})`} />

      {/* ── TOP-RIGHT traces: go right → then up ── */}
      <path d="M 56 23 L 80 23 L 80 7"  stroke={`url(#${g})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="80" cy="7"  r="2.2" fill={`url(#${g})`} />

      <path d="M 62 29 L 87 29 L 87 13" stroke={`url(#${g})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="87" cy="13" r="2.2" fill={`url(#${g})`} />

      <path d="M 67 34 L 83 34 L 83 20" stroke={`url(#${g})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="83" cy="20" r="2.2" fill={`url(#${g})`} />

      {/* ── BOTTOM-LEFT traces: go left → then down ── */}
      <path d="M 29 51 L 13 51 L 13 68" stroke={`url(#${g})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="13" cy="68" r="2.2" fill={`url(#${g})`} />

      <path d="M 34 57 L 17 57 L 17 74" stroke={`url(#${g})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="74" r="2.2" fill={`url(#${g})`} />

      <path d="M 39 62 L 20 62 L 20 80" stroke={`url(#${g})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="80" r="2.2" fill={`url(#${g})`} />

      {/* ── BOTTOM-RIGHT traces: go right → then down ── */}
      <path d="M 71 51 L 87 51 L 87 68" stroke={`url(#${g})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="87" cy="68" r="2.2" fill={`url(#${g})`} />

      <path d="M 66 57 L 83 57 L 83 74" stroke={`url(#${g})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="83" cy="74" r="2.2" fill={`url(#${g})`} />

      <path d="M 61 62 L 80 62 L 80 80" stroke={`url(#${g})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="80" cy="80" r="2.2" fill={`url(#${g})`} />

      {/* ── DIAMOND (chip body) — centre (50,45) half-size 28 ── */}
      <path
        d="M 50 17 L 78 45 L 50 73 L 22 45 Z"
        stroke={`url(#${g})`}
        strokeWidth="2"
        fill="rgba(122,162,255,0.08)"
      />

      {/* ── Inner diamond ring ── */}
      <path
        d="M 50 27 L 68 45 L 50 63 L 32 45 Z"
        stroke={`url(#${g})`}
        strokeWidth="0.9"
        strokeOpacity="0.55"
      />

      {/* ── "B" — centred in diamond ── */}
      <text
        x="50"
        y="46"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="23"
        fill="white"
      >
        B
      </text>
    </svg>
  );
}

export function BrandMark({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      {/* Logo icon container — gradient border + glow + shimmer */}
      <div
        className={[
          "logo-shimmer relative overflow-hidden",
          compact
            ? "h-11 w-11 rounded-[0.85rem]"
            : "h-[4.5rem] w-[4.5rem] rounded-[1.2rem] sm:h-[5rem] sm:w-[5rem]",
        ].join(" ")}
        style={{
          background:
            "linear-gradient(#040f1e, #040f1e) padding-box, linear-gradient(135deg, #38bdf8, #818cf8) border-box",
          border: "1.5px solid transparent",
          boxShadow: compact
            ? "0 0 20px rgba(122,162,255,0.28)"
            : "0 0 48px rgba(122,162,255,0.32), 0 0 20px rgba(154,124,255,0.20)",
        }}
      >
        <BharatSiliconIcon
          instanceId={compact ? "nav" : "footer"}
          className="h-full w-full"
        />
      </div>

      {/* Brand text */}
      <div className="leading-tight">
        <div
          className={[
            "font-semibold uppercase tracking-[0.18em] text-slate-900",
            compact ? "text-sm" : "text-sm sm:text-base",
          ].join(" ")}
        >
          Bharat Silicon
        </div>
        <div
          className={[
            "font-mono uppercase text-slate-500",
            compact
              ? "text-[0.57rem] tracking-[0.15em]"
              : "text-[0.6rem] tracking-[0.2em] sm:text-[0.65rem]",
          ].join(" ")}
        >
          Where Every Gate Gets Verified
        </div>
      </div>
    </div>
  );
}
