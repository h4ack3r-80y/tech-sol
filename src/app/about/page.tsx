import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card3D } from "@/components/3d/Card3D";
import { ShieldCheck, MapPin, CheckCircle2, ArrowRight, Target, Eye, Cpu, Lock, Sparkles, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
 title: "About Us | TechSol - Leadership & Engineering Vision",
 description:
  "Meet the leadership behind TechSol: Shayan Ahmad (Founder & CEO, Head of Cybersecurity) and Muhammad Saqib (Co-Founder, AI Solutions Architect). Practical digital engineering built on defensive security and intelligent automation.",
};

export default function AboutPage() {
 const founders = siteConfig.business.founders;

 return (
  <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#04070E] min-h-screen text-slate-900 dark:text-white relative transition-colors">
   <div className="absolute inset-0 bg-corporate-grid opacity-30 pointer-events-none" />
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <SectionHeading
     kicker="Company Profile & Leadership"
     title="Practical Digital Engineering Built on Authenticity"
     subtitle="TechSol was established to bridge the gap between complex software engineering, intelligent AI automation, and rigorous cybersecurity for modern enterprises."
    />

    {/* Identity & Positioning Card */}
    <div className="rounded-3xl p-8 sm:p-12 mb-12 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm space-y-6">
     <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 px-3 py-1 rounded-full">
      <MapPin className="w-3.5 h-3.5" />
      <span>Islamabad, Pakistan &bull; Global Client Capability</span>
     </div>

     <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
      Who We Are
     </h2>

     <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
      {siteConfig.business.coreMission}
     </p>

     <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
      {siteConfig.business.location.scopeNote} We work closely with Pakistani businesses, retail enterprises, international startups, and organizations that demand custom, resilient software architectures rather than fragile off-the-shelf templates.
     </p>

     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100 dark:border-[#1C2C4E]">
      <div className="p-6 rounded-2xl bg-slate-50/60 dark:bg-[#070D1C] border border-slate-200 dark:border-[#1C2C4E]">
       <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base mb-2">
        <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <span>Our Approach</span>
       </div>
       <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        We first dissect your core business models, counter speeds, and operational pain points before writing code. Every system is purpose-built to deliver measurable ROI.
       </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-50/60 dark:bg-[#070D1C] border border-slate-200 dark:border-[#1C2C4E]">
       <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base mb-2">
        <Eye className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        <span>Our Dual Leadership Pledge</span>
       </div>
       <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        Direct oversight on every engagement. Your systems are designed by leaders with hands-on depth in defensive cybersecurity and AI systems architecture.
       </p>
      </div>
     </div>
    </div>

    {/* Meet the Founders Section */}
    <div className="mb-12">
     <div className="text-center mb-10">
      <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-blue-600 dark:text-blue-400 tracking-wider mb-2">
       <Sparkles className="w-3.5 h-3.5" />
       <span>Executive Stewardship</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
       Meet the Founders
      </h2>
      <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-2">
       The founding minds steering TechSol's technological excellence, client delivery, and defensive security.
      </p>
     </div>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {founders.map((founder, idx) => {
       const isCyberLead = idx === 0;

       return (
        <div
         key={founder.id}
         className="rounded-3xl p-7 sm:p-9 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm flex flex-col justify-between relative overflow-hidden"
        >
         <div
          className={`absolute top-0 left-0 right-0 h-1.5 ${
           isCyberLead
            ? "bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-700"
            : "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
          }`}
         />

         <div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100 dark:border-[#1C2C4E]/80">
           <Card3D depth={12}>
            <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden border border-slate-200 dark:border-[#24365C]/80 bg-slate-100 dark:bg-black/60 shadow-lg flex flex-col items-center justify-center p-1">
             <Image
              src={founder.image}
              alt={`${founder.name} - ${founder.displayTitle}`}
              width={320}
              height={384}
              priority
              className="w-full h-full object-cover object-top rounded-xl"
             />
            </div>
           </Card3D>

           <div className="text-center sm:text-left flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2.5">
             {isCyberLead ? (
              <>
               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/60 whitespace-nowrap shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>Founder &amp; CEO</span>
               </span>
               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border border-cyan-200/80 dark:border-cyan-800/60 whitespace-nowrap shadow-xs">
                <Lock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                <span>Head of Cybersecurity</span>
               </span>
              </>
             ) : (
              <>
               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60 whitespace-nowrap shadow-xs">
                <Cpu className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <span>Co-Founder</span>
               </span>
               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/60 whitespace-nowrap shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span>AI Solutions Architect</span>
               </span>
              </>
             )}
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
             {founder.name}
            </h3>

            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
             {siteConfig.business.location.city}, {siteConfig.business.location.country}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2.5 font-normal">
             {founder.bio}
            </p>
           </div>
          </div>

          {/* Personal Philosophy & Message */}
          <div className="my-5 p-4 rounded-2xl bg-slate-50 dark:bg-[#070D1C] border border-slate-200/80 dark:border-[#1C2C4E]/60">
           <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-1.5">
            <Sparkles className="w-3 h-3" />
            <span>Executive Perspective</span>
           </div>
           <blockquote className="text-xs sm:text-sm italic text-slate-700 dark:text-slate-200 leading-relaxed">
            &ldquo;{founder.quoteMessage}&rdquo;
           </blockquote>
          </div>

          {/* Expertise Highlights */}
          <div className="space-y-2">
           <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
            Core Competencies
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {founder.expertise.map((item, i) => (
             <div
              key={i}
              className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-100/70 dark:bg-[#0D1830]/40 px-2.5 py-1.5 rounded-lg border border-slate-200/50 dark:border-[#24365C]/50"
             >
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span className="truncate">{item}</span>
             </div>
            ))}
           </div>
          </div>
         </div>

         <div className="pt-6 mt-6 border-t border-slate-100 dark:border-[#1C2C4E]/80 flex flex-wrap items-center gap-3">
          <Link
           href="/book-a-consultation"
           className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full ts-btn-primary text-white text-xs font-semibold transition-all shadow-sm hover:scale-[1.01]"
          >
           <span>Book Consultation</span>
           <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
           href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
            `Hello TechSol, I would like to consult with ${founder.name} (${founder.displayTitle}).`
           )}`}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-500/30 text-xs font-semibold transition-colors"
          >
           <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
           <span>WhatsApp</span>
          </a>
         </div>
        </div>
       );
      })}
     </div>
    </div>

    {/* Client Assurance Card */}
    <div className="rounded-3xl p-8 sm:p-10 mb-12 border border-blue-200/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50/60 via-white to-cyan-50/60 dark:from-[#091124] dark:via-[#0D1527] dark:to-[#0A1733] shadow-sm">
     <div className="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-lg mb-3">
      <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      <span>Why Our Dual Leadership Matters For Clients</span>
     </div>
     <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
      Most technology agencies excel in either software features or cybersecurity, but rarely both. At TechSol, our co-founding leadership uniquely synchronizes both domains:
     </p>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
      <div className="p-4 rounded-xl bg-white dark:bg-[#0A1120]/80 border border-slate-200/80 dark:border-[#1C2C4E]">
       <strong className="text-blue-600 dark:text-blue-400 block mb-1">Fortified by Design (Cybersecurity)</strong>
       Shayan Ahmad audits authentication layers, database encryptions, API handshakes, and access controls so you avoid costly security breaches, ransomware, and vulnerabilities.
      </div>
      <div className="p-4 rounded-xl bg-white dark:bg-[#0A1120]/80 border border-slate-200/80 dark:border-[#1C2C4E]">
       <strong className="text-indigo-600 dark:text-indigo-400 block mb-1">Intelligent by Architecture (AI & Software)</strong>
       Muhammad Saqib engineers high-throughput pipelines, automated decision flows, and LLM integrations that replace slow, manual office tasks with lightning-fast automation.
      </div>
     </div>
    </div>

    {/* CTA */}
    <div className="rounded-3xl border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] p-8 sm:p-12 text-center space-y-4 shadow-sm relative overflow-hidden">
     <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white relative z-10">
      Ready to Build or Secure Your Next System?
     </h3>
     <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto relative z-10">
      Connect directly with the founders to discuss your business requirements, operational challenges, and digital strategy.
     </p>
     <div className="pt-2 relative z-10 flex flex-wrap justify-center gap-3">
      <Link
       href="/book-a-consultation"
       className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full ts-btn-primary text-white font-semibold text-sm transition-all shadow-md hover:scale-[1.01]"
      >
       <span>Book a Consultation</span>
       <ArrowRight className="w-4 h-4" />
      </Link>
      <Link
       href="/request-a-quote"
       className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#0D1830] dark:hover:bg-[#16294A] text-slate-900 dark:text-white font-semibold text-sm transition-all border border-slate-200 dark:border-[#24365C]"
      >
       <span>Request a Quote</span>
       <ArrowRight className="w-4 h-4" />
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
}
