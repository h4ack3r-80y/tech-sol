import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Hammer, Cpu, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SolutionsMatrix() {
  const categoryIcons = {
    BUILD: Hammer,
    AUTOMATE: Cpu,
    SECURE: ShieldCheck,
    SCALE: TrendingUp,
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Strategic Framework"
          title="Solutions Built Around Real Business Needs"
          subtitle="Rather than offering isolated technical tasks, we structure our work across four fundamental pillars of modern digital operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.solutionsCategories.map((cat, idx) => {
            const Icon =
              categoryIcons[cat.name as keyof typeof categoryIcons] || Hammer;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] hover:border-blue-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold tracking-wider text-blue-600 dark:text-blue-400">
                      PILLAR 0{idx + 1}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/80 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {cat.tagline}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {cat.description}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 border-t border-slate-100 dark:border-slate-800 pt-4">
                    Capabilities Included
                  </div>
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                    {cat.services.map((item, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    <span>Explore {cat.name} Framework</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
