import React from "react";
import { siteConfig } from "@/config/siteConfig";

export function TestimonialsPlaceholder() {
  // If testimonials are disabled in config, the section remains hidden or shows a clean professional verification note
  if (!siteConfig.business.toggles.showTestimonials) {
    return null;
  }

  return (
    <section className="py-16 bg-white dark:bg-[#070D1C] border-b border-slate-200 dark:border-[#1C2C4E] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
          Client Feedback
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Client Feedback &amp; Reviews
        </h2>
        <div className="p-8 rounded-xl border border-dashed border-slate-300 dark:border-[#24365C] bg-slate-50 dark:bg-[#0A1120] text-slate-600 dark:text-slate-400 text-sm">
          Testimonials will be added as verified client feedback becomes available.
        </div>
      </div>
    </section>
  );
}
