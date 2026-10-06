"use client";

import React from "react";
import { useContent } from "@/context/ContentContext";
import {
 ExternalLink,
 Building2,
 Receipt,
 BookOpen,
 Boxes,
 Users,
 Smartphone,
 CheckCircle2,
 Shield,
 ArrowRight,
} from "lucide-react";

export function LedgerProShowcase() {
 const { config } = useContent();
 const ledgerPro = config.ledgerPro;

 if (!ledgerPro || !ledgerPro.enabled) {
  return null;
 }

 const features = [
  {
   icon: Building2,
   title: "Online Business Registration",
   desc: "Fast self-service business onboarding with profile setup, NTN, and multi-branch configuration.",
  },
  {
   icon: BookOpen,
   title: "Automated Khata & Ledgers",
   desc: "Instant customer & supplier account reconciliations, credit limits, and balance tracking.",
  },
  {
   icon: Receipt,
   title: "Cloud Billing & Invoicing",
   desc: "High-speed counter checkout with thermal (80mm) receipts and standard A4 invoice generation.",
  },
  {
   icon: Boxes,
   title: "Real-Time Stock Valuation",
   desc: "Weighted-average cost calculations, low-stock warnings, and batch expiry monitoring.",
  },
  {
   icon: Users,
   title: "Role-Based Staff Access",
   desc: "Secure permissions tailored for cashiers, managers, accountants, and company owners.",
  },
  {
   icon: Smartphone,
   title: "Multi-Device Cloud Access",
   desc: "Fully responsive platform accessible seamlessly from any smartphone, tablet, or PC.",
  },
 ];

 return (
  <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/60 dark:bg-[#070D1C] text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#1C2C4E] transition-colors">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Main Enterprise Container Card */}
    <div className="rounded-3xl border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-xl overflow-hidden">
     {/* Top Subtle Corporate Accent Bar */}
     <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500" />

     <div className="p-6 sm:p-10 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
       {/* Left Column: Information & Actions */}
       <div className="lg:col-span-7 space-y-6">
        {/* Header Tag and Status */}
        <div className="flex flex-wrap items-center gap-2.5">
         <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60">
          Flagship Cloud Product
         </span>
         <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60">
          Paid Service
         </span>
        </div>

        {/* Title & Headline */}
        <div className="space-y-2">
         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {ledgerPro.name}
         </h2>
         <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400">
          Online Business Registration &amp; Cloud Management Platform
         </p>
        </div>

        {/* Narrative Summary */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
         {ledgerPro.fullDescription}
        </p>

        {/* Clean 2-Column Capability Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
         {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
           <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0A1120]/60 border border-slate-200/80 dark:border-[#1C2C4E] flex items-start gap-3"
           >
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
             <Icon className="w-4 h-4" />
            </div>
            <div>
             <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              {feat.title}
             </div>
             <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
              {feat.desc}
             </div>
            </div>
           </div>
          );
         })}
        </div>

        {/* Call to Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
         <a
          href={ledgerPro.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white ts-btn-primary shadow-md transition-all hover:scale-[1.01]"
         >
          <span>Launch LedgerPro (www.ledgerprosolution.com)</span>
          <ExternalLink className="w-4 h-4" />
         </a>

         <a
          href={ledgerPro.registerUrl || ledgerPro.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-[#0D1830] hover:bg-slate-200 dark:hover:bg-[#16294A]/80 border border-slate-200 dark:border-[#24365C] transition-colors"
         >
          <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Register Your Business</span>
         </a>
        </div>

        {/* Security and Cloud Guarantee Note */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
         <Shield className="w-3.5 h-3.5 text-emerald-500" />
         <span>Paid Cloud Service &bull; SSL 256-Bit Encrypted &bull; Automated Backups</span>
        </div>
       </div>

       {/* Right Column: Clean Enterprise Mock Console */}
       <div className="lg:col-span-5">
        <div className="rounded-2xl border border-slate-200 dark:border-[#1C2C4E] bg-slate-900 text-white p-5 sm:p-6 shadow-xl space-y-5">
         {/* Console Header */}
         <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
          <div className="flex items-center gap-2">
           <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
           <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
           <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
           <span className="ml-2 text-xs font-mono text-slate-300 font-medium">
            www.ledgerprosolution.com
           </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
           LIVE SAAS
          </span>
         </div>

         {/* Summary Metric Cards */}
         <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-800">
           <div className="text-[11px] font-mono text-slate-400">BUSINESS ACCESS</div>
           <div className="text-sm sm:text-base font-bold text-white mt-1">Multi-Branch</div>
           <div className="text-[10px] text-slate-500 mt-0.5">Online Cloud Sync</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-800">
           <div className="text-[11px] font-mono text-slate-400">KHATA LEDGERS</div>
           <div className="text-sm sm:text-base font-bold text-emerald-400 mt-1">100% Balanced</div>
           <div className="text-[10px] text-slate-500 mt-0.5">Automated Reconcile</div>
          </div>
         </div>

         {/* Operational Verification List */}
         <div className="space-y-2.5 pt-1">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 text-xs text-slate-300">
           <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Online Business Registration</span>
           </span>
           <span className="text-[10px] font-mono text-emerald-400 font-semibold">Active</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 text-xs text-slate-300">
           <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Thermal &amp; A4 Receipt Billing</span>
           </span>
           <span className="text-[10px] font-mono text-emerald-400 font-semibold">Verified</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 text-xs text-slate-300">
           <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Multi-User Role Permissions</span>
           </span>
           <span className="text-[10px] font-mono text-emerald-400 font-semibold">Enforced</span>
          </div>
         </div>

         {/* Direct Website Launch Button */}
         <div className="pt-2 border-t border-slate-800">
          <a
           href={ledgerPro.url}
           target="_blank"
           rel="noopener noreferrer"
           className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-colors shadow-sm"
          >
           <span>Open www.ledgerprosolution.com</span>
           <ArrowRight className="w-3.5 h-3.5" />
          </a>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
