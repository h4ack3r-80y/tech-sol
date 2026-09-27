import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight, ArrowUpRight, Calendar, MessageSquare, Shield } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-slate-800 transition-colors">
      {/* Ambient corporate glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-mono font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-6 shadow-sm">
          <Shield className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Ready to Build</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
          Let&apos;s Build Practical Technology Around Your Real Operations
        </h2>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Whether you need a custom offline-capable POS/ERP system, a high-conversion corporate web platform, or strategic workflow automation, we are ready to discuss your requirements.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/request-a-quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm tracking-tight transition-all shadow-md shadow-blue-600/20 hover:scale-[1.01]"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/book-a-consultation"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 font-semibold text-sm transition-all shadow-sm"
          >
            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Book a Consultation</span>
          </Link>

          <a
            href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
              siteConfig.business.contact.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 font-semibold text-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="mt-8 text-xs font-mono text-slate-500 dark:text-slate-400">
          Islamabad, Pakistan &bull; Phone &amp; WhatsApp: {siteConfig.business.contact.phoneDisplay}
        </div>
      </div>
    </section>
  );
}
