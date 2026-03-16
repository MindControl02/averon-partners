"use client";

export function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizes = {
    small: { icon: "h-7 w-7", text: "text-base" },
    default: { icon: "h-9 w-9", text: "text-lg" },
    large: { icon: "h-12 w-12", text: "text-2xl" },
  };

  const s = sizes[size];

  return (
    <div className="flex items-center gap-2.5">
      <div className={`${s.icon} relative flex items-center justify-center`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="40" height="40" rx="8" fill="url(#logo-gradient)" />
          <path
            d="M12 28L18.5 12H21.5L28 28H25L23.5 24H16.5L15 28H12ZM17.5 21.5H22.5L20 14.5L17.5 21.5Z"
            fill="white"
          />
          <path
            d="M20 14.5L24.5 26H27L22 12H20V14.5Z"
            fill="rgba(255,255,255,0.6)"
          />
          <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
              <stop stopColor="#4f7df5" />
              <stop offset="1" stopColor="#7c5bf5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`${s.text} font-bold tracking-tight dark:text-white text-gray-900`}>
          AVERON
        </span>
        <span className="text-[10px] font-medium tracking-[0.25em] uppercase dark:text-dark-300 text-gray-500">
          Partners
        </span>
      </div>
    </div>
  );
}
