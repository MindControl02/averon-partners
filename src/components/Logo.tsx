"use client";

export function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizes = {
    small: { wrap: "h-7", text: "text-sm", sub: "text-[8px]" },
    default: { wrap: "h-9", text: "text-lg", sub: "text-[10px]" },
    large: { wrap: "h-12", text: "text-2xl", sub: "text-xs" },
  };

  const s = sizes[size];

  return (
    <div className="flex items-center gap-3">
      <div className={`${s.wrap} aspect-[50/40] relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 50 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="av-a" x1="2" y1="40" x2="38" y2="0">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#3b6ef5" />
            </linearGradient>
            <linearGradient id="av-v" x1="14" y1="0" x2="50" y2="40">
              <stop offset="0%" stopColor="#4f7df5" />
              <stop offset="100%" stopColor="#7c5bf5" />
            </linearGradient>
          </defs>
          {/* A — thick chevron pointing up */}
          <path
            d="M2,40 L20,0 L38,40 L30,40 L20,10 L10,40 Z"
            fill="url(#av-a)"
          />
          {/* V — thick chevron pointing down, overlapping A's right leg */}
          <path
            d="M14,0 L32,40 L50,0 L42,0 L32,30 L22,0 Z"
            fill="url(#av-v)"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span className={`${s.text} font-bold tracking-tight dark:text-white text-gray-900`}>
          AVERON
        </span>
        <span className={`${s.sub} font-medium tracking-[0.25em] uppercase dark:text-dark-300 text-gray-500`}>
          Partners
        </span>
      </div>
    </div>
  );
}
