import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Project Quote | Shayan Ahmad Digital Solutions",
  description:
    "Tell us about your software, POS/ERP, web, or automation project. Submit requirements for a tailored scope evaluation.",
};

export default function RequestQuotePage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070B14] min-h-screen text-slate-900 dark:text-white relative transition-colors">
      <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Project Scoping"
          title="Tell Us About Your Project"
          subtitle="Share your operational objectives, current challenges, and required capabilities. We will review your submission and prepare a focused technical discussion."
          alignment="center"
        />

        <div className="mt-10 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] shadow-sm">
          <QuoteForm />
        </div>

        {/* WhatsApp fast alternative */}
        <div className="mt-8 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              Prefer a Direct Conversation?
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              You can message Shayan Ahmad directly on WhatsApp at any time.
            </div>
          </div>

          <a
            href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
              "Hello Shayan Ahmad Digital Solutions, I would like to request a quotation for a project."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-300 dark:border-emerald-500/30 text-xs font-semibold transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Chat on WhatsApp ↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
