import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

export function ProcessTimeline() {
  return (
    <section className="py-20 bg-white dark:bg-[#090F1E] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            kicker="Methodology"
            title="Our 6-Step Engineering Process"
            subtitle="A transparent, structured development lifecycle designed to minimize risks, eliminate guesswork, and deliver dependable software."
          />
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 pb-8 sm:pb-12"
          >
            <span>Learn More About Our Process</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.processSteps.map((step) => (
            <div
              key={step.step}
              className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0D1527] hover:border-blue-500/40 transition-all duration-200 group flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-mono text-slate-300 dark:text-slate-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 px-2.5 py-0.5 rounded-full font-semibold">
                    PHASE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {step.name}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {step.summary}
                </p>
                <p className="text-xs font-normal text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
