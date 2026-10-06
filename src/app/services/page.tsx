import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, ArrowRight, Store, Terminal, Globe, Smartphone, Cpu, ShieldCheck, Cloud, Layers } from "lucide-react";

export const metadata: Metadata = {
 title: "Professional Digital Services | POS/ERP, Software & Security",
 description:
  "Explore our complete range of technology services: POS/ERP systems, custom software development, web applications, mobile apps, automation, cybersecurity, cloud solutions, and SaaS.",
};

export default function ServicesPage() {
 const serviceIcons: Record<string, React.ElementType> = {
  "pos-erp-development": Store,
  "custom-software": Terminal,
  "web-development": Globe,
  "mobile-app-development": Smartphone,
  "ai-automation": Cpu,
  "cybersecurity": ShieldCheck,
  "cloud-solutions": Cloud,
  "saas-development": Layers,
 };

 return (
  <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#04070E] min-h-screen text-slate-900 dark:text-white relative transition-colors">
   <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" />
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <SectionHeading
     kicker="Capabilities &amp; Solutions"
     title="Technology Services Built Around Business Goals"
     subtitle="We engineer software, point of sale solutions, automated pipelines, and defensive cybersecurity frameworks tailored specifically to your daily operations."
    />

    <div className="mt-12 space-y-8">
     {siteConfig.services.map((service, idx) => {
      const Icon = serviceIcons[service.id] || Terminal;
      const isFeatured = service.id === "pos-erp-development";

      return (
       <div
        key={service.id}
        id={service.slug}
        className={`rounded-3xl p-8 sm:p-10 transition-all duration-300 border bg-white dark:bg-[#0A1226] shadow-sm ${
         isFeatured
          ? "border-blue-500/50 shadow-md ring-1 ring-blue-500/20"
          : "border-slate-200 dark:border-[#1C2C4E] hover:border-blue-500/40"
        }`}
       >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-3.5">
           <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Icon className="w-6 h-6" />
           </div>
           <div>
            <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 uppercase">
             {service.category} &bull; 0{idx + 1}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
             {service.title}
            </h2>
           </div>
          </div>

          <p className="text-base text-slate-800 dark:text-slate-100 leading-relaxed font-semibold">
           {service.shortDescription}
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
           {service.fullDescription}
          </p>

          <div className="pt-2 text-xs font-mono text-slate-500 dark:text-slate-400 italic">
           Note: Features and specific modules are customized according to your exact business workflow and operational requirements.
          </div>
         </div>

         <div className="lg:col-span-5 bg-slate-50 dark:bg-[#070D1C] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-[#1C2C4E] space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
           Primary Capabilities
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
           {service.capabilities.map((cap, cIdx) => (
            <li key={cIdx} className="flex items-start gap-2">
             <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
             <span>{cap}</span>
            </li>
           ))}
          </ul>

          <div className="pt-4 border-t border-slate-200 dark:border-[#1C2C4E] flex flex-col gap-2.5">
           <Link
            href={`/services/${service.slug}`}
            className="w-full text-center py-3 px-4 rounded-xl ts-btn-primary text-white font-semibold text-xs transition-all shadow-sm"
           >
            Detailed Specification ↗
           </Link>
           <Link
            href="/request-a-quote"
            className="w-full text-center py-2.5 px-4 rounded-xl text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0D1830] hover:bg-slate-100 dark:hover:bg-[#16294A] border border-slate-200 dark:border-[#24365C] text-xs font-medium transition-colors"
           >
            Request a Quotation
           </Link>
          </div>
         </div>
        </div>
       </div>
      );
     })}
    </div>
   </div>
  </div>
 );
}
