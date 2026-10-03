import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Practical Value"
          title="Why Businesses Choose a Practical Technology Partner"
          subtitle="We focus on engineering solutions that directly impact your operational clarity, counter throughput, and digital resilience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyChooseUs.map((point, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] hover:border-blue-500/40 shadow-sm transition-all flex flex-col justify-start"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {point.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-11 font-normal">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
