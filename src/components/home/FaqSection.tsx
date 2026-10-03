"use client";

import React, { useState } from "react";
import { useContent } from "@/context/ContentContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const { config } = useContent();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white dark:bg-[#090F1E] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Common Questions"
          title="Frequently Asked Questions"
          subtitle="Clear, straightforward answers about our software capabilities, working process, and engagement models."
          alignment="center"
        />

        <div className="mt-8 space-y-3.5">
          {config.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-[#0D1527] hover:border-blue-500/40 transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-3 text-sm font-normal text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 bg-white dark:bg-[#0A101F]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
