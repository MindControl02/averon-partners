"use client";

export function Logo({ size = "default", variant = "auto" }: { size?: "small" | "default" | "large"; variant?: "auto" | "light" | "dark" }) {
  const sizes = {
    small: { wrap: "h-8", text: "text-sm", sub: "text-[8px]", gap: "gap-[5px]" },
    default: { wrap: "h-10", text: "text-lg", sub: "text-[10px]", gap: "gap-1.5" },
    large: { wrap: "h-14", text: "text-2xl", sub: "text-xs", gap: "gap-2" },
  };

  const s = sizes[size];
  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-light-900";
  const subColor = isDark ? "text-white/60" : "text-light-600";
  const aFill = isDark ? "#ffffff" : "#1a1b2e";

  return (
    <div className="flex items-center gap-3">
      <div className={`${s.wrap} aspect-[54/40] relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 54 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="av-v-grad" x1="16" y1="0" x2="54" y2="40">
              <stop offset="0%" stopColor="#3b6ef5" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <path
            d="M16,0 L34,40 L54,0 L46,0 L34,28 L24,0 Z"
            fill="url(#av-v-grad)"
          />
          <path
            d="M0,40 L18,0 L36,40 L28,40 L18,10 L8,40 Z"
            fill={aFill}
          />
        </svg>
      </div>

      <div className={`flex flex-col leading-none ${s.gap}`}>
        <span className={`${s.text} font-bold tracking-tight ${textColor}`}>
          AVERON
        </span>
        <span className={`${s.sub} font-medium tracking-[0.25em] uppercase ${subColor}`}>
          Partners
        </span>
      </div>
    </div>
  );
}
