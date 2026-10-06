import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Card3D } from "@/components/3d/Card3D";
import { ShieldCheck, MapPin, CheckCircle2, ArrowRight, Target, Eye, Cpu, Lock, Sparkles, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
 title: "About Us | TechSol - Leadership & Engineering Vision",
 description:
  "Meet the leadership behind TechSol: Shayan Ahmad (Founder & CEO, Head of Cybersecurity) and Muhammad Saqib (Co-Founder, AI Solutions Architect). Practical digital engineering built on defensive security and intelligent automation.",
};

const FRAME =
 "rounded-3xl p-[1.5px] bg-gradient-to-br from-blue-500/50 via-indigo-500/25 to-cyan-400/40";

export default function AboutPage() {
 const founders = siteConfig.business.founders;

 return (
  <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#04070E] min-h-screen text-slate-900 dark:text-white relative transition-colors overflow-hidden">
   {/* Premium ambient background */}
   <div className="absolute inset-0 bg-corporate-grid opacity-30 dark:opacity-10 pointer-events-none" aria-hidden="true" />
   <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-[#2E9BFF]/15 blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />
   <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] bg-[#1668DC]/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Premium page header */}
    <div className="max-w-3xl mb-12">
     <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-[#7DBCFF] bg-blue-50 dark:bg-[#0E2A5C]/50 border border-blue-200 dark:border-[#2E9BFF]/40 mb-5 shadow-sm dark:shadow-[0_0_18px_rgba(46,155,255,0.3)]">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
      <span>Company Profile &amp; Leadership</span>
     </div>
     <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display ts-text-glow leading-[1.12]">
      Practical Digital Engineering{" "}
      <span className="ts-text-gradient">Built on Authenticity</span>
     </h1>
     <p className="mt-4 text-[17px] leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
      TechSol was established to bridge the gap between complex software engineering, intelligent AI automation, and rigorous cybersecurity for modern enterprises.
     </p>
    </div>

    {/* Identity & Positioning Card */}
    <div className={`${FRAME} mb-12`}>
     <div className="rounded-3xl bg-white dark:bg-[#0A1226] p-8 sm:p-12 space-y-6 h-full">
      <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 px-3 py-1.5 rounded-full">
       <MapPin className="w-3.5 h-3.5" />
       <span>Islamabad, Pakistan &bull; Global Client Capability</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
       Who We Are
      </h2>

      <p className="text-[17px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
       {siteConfig.business.coreMission}
      </p>

      <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
       {siteConfig.business.location.scopeNote} We work closely with Pakistani businesses, retail enterprises, international startups, and organizations that demand custom, resilient software architectures rather than fragile off-the-shelf templates.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100 dark:border-[#1C2C4E]">
       <div className="p-6 rounded-2xl bg-slate-50/60 dark:bg-[#070D1C] border border-slate-200 dark:border-[#1C2C4E] hover:border-blue-400/60 dark:hover:border-blue-500/50 hover:shadow-[0_12px_32px_-12px_rgba(46,155,255,0.45)] transition-all duration-300 group">
        <div className="flex items-center gap-3 font-bold font-display text-slate-900 dark:text-white text-lg mb-2">
         <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white flex items-center justify-center shadow-[0_8px_20px_-6px_rgba(46,155,255,0.6)] group-hover:scale-110 transition-transform">
          <Target className="w-5 h-5" />
         </span>
         <span>Our Approach</span>
        </div>
        <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
         We first dissect your core business models, counter speeds, and operational pain points before writing code. Every system is purpose-built to deliver measurable ROI.
        </p>
       </div>

       <div className="p-6 rounded-2xl bg-slate-50/60 dark:bg-[#070D1C] border border-slate-200 dark:border-[#1C2C4E] hover:border-indigo-400/60 dark:hover:border-indigo-500/50 hover:shadow-[0_12px_32px_-12px_rgba(99,102,241,0.45)] transition-all duration-300 group">
        <div className="flex items-center gap-3 font-bold font-display text-slate-900 dark:text-white text-lg mb-2">
         <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white flex items-center justify-center shadow-[0_8px_20px_-6px_rgba(99,102,241,0.6)] group-hover:scale-110 transition-transform">
          <Eye className="w-5 h-5" />
         </span>
         <span>Our Dual Leadership Pledge</span>
        </div>
        <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
         Direct oversight on every engagement. Your systems are designed by leaders with hands-on depth in defensive cybersecurity and AI systems architecture.
        </p>
       </div>
      </div>
     </div>
    </div>

    {/* Meet the Founders Section */}
    <div className="mb-12">
     <div className="text-center mb-10">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-[#7DBCFF] bg-blue-50 dark:bg-[#0E2A5C]/50 border border-blue-200 dark:border-[#2E9BFF]/40 mb-4 shadow-sm dark:shadow-[0_0_18px_rgba(46,155,255,0.3)]">
       <Sparkles className="w-3.5 h-3.5" />
       <span>Executive Stewardship</span>
      </div>
      <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white ts-text-glow">
       Meet the <span className="ts-text-gradient">Founders</span>
      </h2>
      <p className="text-[15px] text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-3">
       The founding minds steering TechSol&apos;s technological excellence, client delivery, and defensive security.
      </p>
     </div>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {founders.map((founder, idx) => {
       const isCyberLead = idx === 0;
       const cardFrame = isCyberLead
        ? "rounded-3xl p-[1.5px] bg-gradient-to-br from-blue-500/60 via-cyan-400/30 to-blue-700/60 hover:shadow-[0_24px_60px_-20px_rgba(46,155,255,0.5)] transition-all duration-300"
        : "rounded-3xl p-[1.5px] bg-gradient-to-br from-indigo-500/60 via-purple-500/30 to-cyan-400/60 hover:shadow-[0_24px_60px_-20px_rgba(139,92,246,0.5)] transition-all duration-300";

       return (
        <div key={founder.id} className={cardFrame}>
         <div className="rounded-3xl bg-white dark:bg-[#0A1226] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden h-full">
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
             <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden border border-slate-200 dark:border-[#24365C]/80 bg-slate-100 dark:bg-black/60 shadow-[0_0_44px_-10px_rgba(46,155,255,0.55)] flex flex-col items-center justify-center p-1">
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

             <h3 className="text-[1.65rem] font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
              {founder.name}
             </h3>

             <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
              {siteConfig.business.location.city}, {siteConfig.business.location.country}
             </div>

             <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed pt-2.5 font-normal">
              {founder.bio}
             </p>
            </div>
           </div>

           {/* Personal Philosophy & Message */}
           <div className="my-5 p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-cyan-50/40 dark:from-[#0A1733]/80 dark:to-[#070D1C] border border-blue-100 dark:border-[#1C2C4E]/60">
            <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-1.5">
             <Sparkles className="w-3 h-3" />
             <span>Executive Perspective</span>
            </div>
            <blockquote className="text-sm sm:text-[15px] italic text-slate-700 dark:text-slate-200 leading-relaxed">
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
               className="flex items-center gap-1.5 text-[13px] text-slate-700 dark:text-slate-300 bg-slate-100/70 dark:bg-[#0D1830]/40 px-2.5 py-2 rounded-lg border border-slate-200/50 dark:border-[#24365C]/50 hover:border-blue-400/50 dark:hover:border-blue-500/40 transition-colors"
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
        </div>
       );
      })}
     </div>
    </div>

    {/* Client Assurance Card */}
    <div className={`${FRAME} mb-12`}>
     <div className="rounded-3xl bg-gradient-to-r from-blue-50/60 via-white to-cyan-50/60 dark:from-[#091124] dark:via-[#0D1527] dark:to-[#0A1733] p-8 sm:p-10 h-full">
      <div className="flex items-center gap-3 font-bold font-display text-slate-900 dark:text-white text-2xl mb-3">
       <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white flex items-center justify-center shadow-[0_8px_20px_-6px_rgba(46,155,255,0.6)]">
        <Lock className="w-5 h-5" />
       </span>
       <span>Why Our Dual Leadership Matters For Clients</span>
      </div>
      <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
       Most technology agencies excel in either software features or cybersecurity, but rarely both. At TechSol, our co-founding leadership uniquely synchronizes both domains:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-[15px] text-slate-700 dark:text-slate-300">
       <div className="p-5 rounded-2xl bg-white dark:bg-[#0A1120]/80 border border-slate-200/80 dark:border-[#1C2C4E] hover:border-blue-400/60 dark:hover:border-blue-500/50 hover:shadow-[0_12px_32px_-12px_rgba(46,155,255,0.4)] transition-all">
        <strong className="text-blue-600 dark:text-blue-400 block mb-1.5 font-display">Fortified by Design (Cybersecurity)</strong>
        Shayan Ahmad audits authentication layers, database encryptions, API handshakes, and access controls so you avoid costly security breaches, ransomware, and vulnerabilities.
       </div>
       <div className="p-5 rounded-2xl bg-white dark:bg-[#0A1120]/80 border border-slate-200/80 dark:border-[#1C2C4E] hover:border-indigo-400/60 dark:hover:border-indigo-500/50 hover:shadow-[0_12px_32px_-12px_rgba(99,102,241,0.4)] transition-all">
        <strong className="text-indigo-600 dark:text-indigo-400 block mb-1.5 font-display">Intelligent by Architecture (AI &amp; Software)</strong>
        Muhammad Saqib engineers high-throughput pipelines, automated decision flows, and LLM integrations that replace slow, manual office tasks with lightning-fast automation.
       </div>
      </div>
     </div>
    </div>

    {/* CTA */}
    <div className={FRAME}>
     <div className="rounded-3xl bg-white dark:bg-[#0A1226] p-8 sm:p-12 text-center space-y-4 h-full relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-[#2E9BFF]/15 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
      <h3 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white relative z-10">
       Ready to Build or <span className="ts-text-gradient">Secure</span> Your Next System?
      </h3>
      <p className="text-[15px] text-slate-600 dark:text-slate-300 max-w-xl mx-auto relative z-10">
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
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-[#0D1830] dark:hover:bg-[#16294A] text-slate-900 dark:text-white font-semibold text-sm transition-all border border-slate-200 dark:border-[#24365C]"
       >
        <span>Request a Quote</span>
        <ArrowRight className="w-4 h-4" />
       </Link>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
