"use client";

export function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizes = {
    small: { wrap: "h-7", text: "text-sm", sub: "text-[8px]", gap: "gap-[6px]" },
    default: { wrap: "h-9", text: "text-lg", sub: "text-[10px]", gap: "gap-2" },
    large: { wrap: "h-12", text: "text-2xl", sub: "text-xs", gap: "gap-2.5" },
  };

  const s = sizes[size];

  return (
    <div className="flex items-center gap-3">
      <div className={`${s.wrap} aspect-[56/40] relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 56 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="av-letter-a" x1="0" y1="38" x2="26" y2="0">
              <stop offset="0%" stopColor="#2952c4" />
              <stop offset="100%" stopColor="#4f7df5" />
            </linearGradient>
            <linearGradient id="av-letter-v" x1="30" y1="0" x2="56" y2="38">
              <stop offset="0%" stopColor="#5a8af7" />
              <stop offset="100%" stopColor="#7c5bf5" />
            </linearGradient>
          </defs>
          {/* A — separate letter */}
          <path
            d="M0,38 L13,2 L18,2 L31,38 L25,38 L22,28 L9,28 L6,38 Z M10.5,23 L20.5,23 L15.5,8 Z"
            fill="url(#av-letter-a)"
            fillRule="evenodd"
          />
          {/* V — separate letter, with clear gap from A */}
          <path
            d="M33,2 L43,32 L53,2 L56,2 L44.5,38 L41.5,38 L30,2 Z"
            fill="url(#av-letter-v)"
          />
        </svg>
      </div>

      <div className={`flex flex-col leading-none ${s.gap}`}>
        <span className={`${s.text} font-bold tracking-tight text-white`}>
          AVERON
        </span>
        <span className={`${s.sub} font-medium tracking-[0.25em] uppercase text-dark-300`}>
          Partners
        </span>
      </div>
    </div>
  );
}
