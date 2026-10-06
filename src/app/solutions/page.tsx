import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Hammer, Cpu, ShieldCheck, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
 title: "Strategic Solutions | Build, Automate, Secure & Scale",
 description:
  "Explore our structured solutions framework organized across four pillars: Build, Automate, Secure, and Scale for modern businesses.",
};

export default function SolutionsPage() {
 const pillarIcons: Record<string, React.ElementType> = {
  BUILD: Hammer,
  AUTOMATE: Cpu,
  SECURE: ShieldCheck,
  SCALE: TrendingUp,
 };

 return (
  <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#04070E] min-h-screen text-slate-900 dark:text-white relative transition-colors">
   <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" />
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <SectionHeading
     kicker="Strategic Framework"
     title="Solutions Built Around Real Business Needs"
     subtitle="We group our engineering and consulting capabilities into four strategic focus areas to help your organization solve operational challenges and scale smoothly."
    />

    <div className="mt-12 space-y-8">
     {siteConfig.solutionsCategories.map((cat, idx) => {
      const Icon = pillarIcons[cat.name] || Hammer;

      return (
       <div
        key={cat.name}
        className="rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm hover:border-blue-500/40 transition-all duration-300"
       >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-3">
           <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Icon className="w-6 h-6" />
           </div>
           <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
             PILLAR 0{idx + 1}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
             {cat.name}
            </h2>
           </div>
          </div>

          <p className="text-base text-slate-800 dark:text-slate-100 font-semibold">
           {cat.tagline}
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
           {cat.description}
          </p>
         </div>

         <div className="lg:col-span-6 bg-slate-50 dark:bg-[#070D1C] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-[#1C2C4E]">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
           Integrated Offerings in {cat.name}
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 mb-6">
           {cat.services.map((item, sIdx) => (
            <li key={sIdx} className="flex items-center gap-2">
             <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
             <span>{item}</span>
            </li>
           ))}
          </ul>

          <div className="pt-4 border-t border-slate-200 dark:border-[#1C2C4E] flex flex-wrap items-center gap-4">
           <Link
            href="/request-a-quote"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full ts-btn-primary text-white text-xs font-semibold transition-all shadow-sm"
           >
            <span>Start a {cat.name} Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
           </Link>
           <Link
            href="/services"
            className="text-xs font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
           >
            Explore Matching Services ↗
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
