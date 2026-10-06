import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Store, CheckCircle2, ArrowRight, ShieldCheck, Database, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
 title: "Custom POS & ERP Development | Shayan Ahmad Digital Solutions",
 description:
  "Custom POS and business management systems designed around the way your business actually operates. Offline-first, stock valuation, ledger Khata, and counter speed.",
};

export default function PosErpPage() {
 const service = siteConfig.services.find((s) => s.id === "pos-erp-development")!;

 return (
  <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#04070E] min-h-screen text-slate-900 dark:text-white relative transition-colors">
   <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" />
   <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Breadcrumb */}
    <nav className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
     <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
     <span>/</span>
     <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</Link>
     <span>/</span>
     <span className="text-slate-900 dark:text-white font-semibold">{service.title}</span>
    </nav>

    {/* Hero Header */}
    <div className="rounded-3xl p-8 sm:p-12 mb-12 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
      <Store className="w-3.5 h-3.5" />
      <span>Core Agency Specialization</span>
     </div>

     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
      {service.title}
     </h1>

     <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-semibold leading-relaxed mb-6">
      &ldquo;{service.shortDescription}&rdquo;
     </p>

     <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl font-normal">
      {service.fullDescription}
     </p>

     <div className="mt-8 pt-6 border-t border-slate-200 dark:border-[#1C2C4E] flex flex-wrap items-center gap-4">
      <Link
       href="/request-a-quote"
       className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full ts-btn-primary text-white text-sm font-semibold transition-all shadow-sm"
      >
       <span>{service.ctaText}</span>
       <ArrowRight className="w-4 h-4" />
      </Link>

      <a
       href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
        "Hello Shayan Ahmad Digital Solutions, I would like to discuss a custom POS/ERP solution for my business."
       )}`}
       target="_blank"
       rel="noopener noreferrer"
       className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-sm font-semibold border border-emerald-300 dark:border-emerald-500/30 transition-colors"
      >
       <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
       <span>Discuss on WhatsApp ↗</span>
      </a>
     </div>
    </div>

    {/* Operational Modules & Capabilities */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
     <div className="rounded-2xl p-7 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
       <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
       Potential Capabilities &amp; Workflows
      </h2>
      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
       {service.capabilities.map((cap, idx) => (
        <li key={idx} className="flex items-start gap-2.5">
         <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
         <span>{cap}</span>
        </li>
       ))}
      </ul>
      <p className="mt-4 text-xs font-mono text-slate-500 dark:text-slate-400 italic">
       Features are customized according to business requirements.
      </p>
     </div>

     <div className="rounded-2xl p-7 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
       <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
       Why Offline-First &amp; Custom Matters
      </h2>
      <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
       <p>
        Generic cloud SaaS point-of-sale systems can halt checkout registers the second internet connectivity or local ISP routing glitches occur.
       </p>
       <p>
        Our systems prioritize <strong className="text-slate-900 dark:text-white">offline-first local database architectures</strong> ensuring immediate barcode recognition, instant bill generation, and automatic data protection with zero network lag.
       </p>
       <p>
        When connectivity is restored, scheduled background synchronization can safely back up records to secure cloud storage.
       </p>
      </div>
     </div>
    </div>

    {/* Real Confirmed Deployments */}
    <div className="rounded-3xl p-8 mb-12 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
     <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
      Verified Production Implementations
     </h2>
     <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 font-normal">
      Review how our customized POS/ERP solutions were specifically engineered for active local retail and wholesale businesses:
     </p>

     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {siteConfig.projects.map((proj) => (
       <div
        key={proj.id}
        className="p-5 rounded-2xl border border-slate-200 dark:border-[#1C2C4E] bg-slate-50 dark:bg-[#070D1C] hover:border-blue-500/40 transition-colors"
       >
        <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
         {proj.businessType}
        </span>
        <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">
         {proj.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
         {proj.positioning}
        </p>
        <Link
         href={`/projects/${proj.slug}`}
         className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
        >
         View Case Study ↗
        </Link>
       </div>
      ))}
     </div>
    </div>

    {/* Bottom CTA */}
    <div className="rounded-3xl bg-gradient-to-br from-[#1E88FF] via-[#2E9BFF] to-[#1668DC] text-white shadow-[0_24px_70px_-18px_rgba(46,155,255,0.65)] p-8 text-center space-y-4 shadow-lg">
     <h3 className="text-2xl font-bold text-white">Have a Specific Operational Workflow?</h3>
     <p className="text-sm text-blue-100 max-w-xl mx-auto font-normal">
      Let us evaluate your inventory, billing, and accounting requirements. We will engineer a system that matches the way your business actually runs.
     </p>
     <div className="pt-2">
      <Link
       href="/request-a-quote"
       className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-blue-900 font-bold text-sm transition-all shadow-md"
      >
       <span>Request POS / ERP Scope</span>
       <ArrowRight className="w-4 h-4" />
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
}
