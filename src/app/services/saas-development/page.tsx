import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Layers, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
 title: "SaaS Product Development | Shayan Ahmad Digital Solutions",
 description:
  "Scalable software-as-a-service products designed from concept to deployment. Modular web applications, subscription architectures, and APIs.",
};

export default function SaasDevPage() {
 const service = siteConfig.services.find((s) => s.id === "saas-development")!;

 return (
  <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#04070E] min-h-screen text-slate-900 dark:text-white relative transition-colors">
   <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" />
   <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <nav className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
     <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
     <span>/</span>
     <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</Link>
     <span>/</span>
     <span className="text-slate-900 dark:text-white font-semibold">{service.title}</span>
    </nav>

    <div className="rounded-3xl p-8 sm:p-12 mb-12 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
      <Layers className="w-3.5 h-3.5" />
      <span>Product Engineering</span>
     </div>

     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
      {service.title}
     </h1>

     <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-6">
      &ldquo;{service.shortDescription}&rdquo;
     </p>

     <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mb-8 font-normal">
      {service.fullDescription}
     </p>

     <div className="flex flex-wrap items-center gap-4">
      <Link
       href="/request-a-quote"
       className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl ts-btn-primary text-white text-sm font-semibold transition-all shadow-sm"
      >
       <span>{service.ctaText}</span>
       <ArrowRight className="w-4 h-4" />
      </Link>
      <Link
       href="/book-a-consultation"
       className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-[#0D1830] hover:bg-slate-200 dark:hover:bg-[#16294A] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-[#24365C] text-sm font-medium transition-colors"
      >
       <span>Book a Consultation ↗</span>
      </Link>
     </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
     <div className="rounded-2xl p-7 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
       SaaS Architectural Capabilities
      </h2>
      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
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
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
       From Idea to Scalable Product
      </h2>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
       Developing a commercial SaaS requires balancing time-to-market with rigorous foundation architecture: user onboarding, permissions management, subscription state management, and clear API boundaries. We build the foundation cleanly so your product can scale reliably.
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}
