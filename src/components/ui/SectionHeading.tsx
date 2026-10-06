import React from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  theme?: "light" | "dark";
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  alignment = "left",
  theme,
}: SectionHeadingProps) {
  const isCenter = alignment === "center";

  return (
    <div
      className={`mb-12 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}
    >
      {kicker && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-[#7DBCFF] bg-blue-50 dark:bg-[#0E2A5C]/50 border border-blue-200 dark:border-[#2E9BFF]/40 mb-4 shadow-sm dark:shadow-[0_0_18px_rgba(46,155,255,0.3)]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
          <span>{kicker}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] font-display ts-text-glow">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
