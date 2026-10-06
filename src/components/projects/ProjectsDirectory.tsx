"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectItem } from "@/config/siteConfig";
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu, Layers, BarChart3, Terminal } from "lucide-react";

interface ProjectsDirectoryProps {
 projects: ProjectItem[];
}

export function ProjectsDirectory({ projects }: ProjectsDirectoryProps) {
 const [selectedCategory, setSelectedCategory] = useState<string>("All Systems");

 const categories = [
  "All Systems",
  "Solar & Electronics",
  "Supermarket & Retail",
 ];

 const filteredProjects =
  selectedCategory === "All Systems"
   ? projects
   : selectedCategory === "Solar & Electronics"
   ? projects.filter((p) => p.id === "ihs-pos-erp")
   : projects.filter((p) => p.id === "ams-pos-erp");

 return (
  <div className="space-y-12">
   {/* Interactive Category Filter Pills */}
   <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-[#1C2C4E]">
    <div className="flex flex-wrap items-center gap-2">
     {categories.map((cat) => {
      const count =
       cat === "All Systems"
        ? projects.length
        : cat === "Solar & Electronics"
        ? projects.filter((p) => p.id === "ihs-pos-erp").length
        : projects.filter((p) => p.id === "ams-pos-erp").length;
      const active = selectedCategory === cat;

      return (
       <button
        key={cat}
        type="button"
        onClick={() => setSelectedCategory(cat)}
        className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2 ${
         active
          ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
          : "bg-white dark:bg-[#0A1226] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#12203A] border border-slate-200 dark:border-[#1C2C4E]"
        }`}
       >
        <span>{cat}</span>
        <span
         className={`px-1.5 py-0.5 rounded-md text-[10px] ${
          active
           ? "bg-blue-700 text-white font-bold"
           : "bg-slate-100 dark:bg-[#0D1830] text-slate-500 dark:text-slate-400"
         }`}
        >
         {count}
        </span>
       </button>
      );
     })}
    </div>

    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
     <Terminal className="w-3.5 h-3.5 text-blue-500" />
     <span>Showing {filteredProjects.length} of {projects.length} verified production systems</span>
    </div>
   </div>

   {/* Case Studies Grid */}
   <div className="space-y-14">
    {filteredProjects.map((project, idx) => (
     <article
      key={project.id}
      id={project.id}
      className="rounded-3xl border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] overflow-hidden shadow-sm hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
     >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
       {/* Left Column: Visual Showcase & System Specs */}
       <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50/70 dark:bg-[#070D1C] border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-[#1C2C4E] flex flex-col justify-between">
        <div>
         <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-[#1C2C4E] bg-slate-900 aspect-[16/10] shadow-inner">
          <Image
           src={project.imagePlaceholder}
           alt={`${project.title} Interface & Architecture`}
           width={800}
           height={500}
           className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
           <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-black/75 text-emerald-400 backdrop-blur-md border border-emerald-500/30 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {project.statusBadge}
           </span>
          </div>
         </div>

         {/* Operational Metrics 4-Pack */}
         {project.metrics && project.metrics.length > 0 && (
          <div className="mt-6">
           <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-blue-500" />
            <span>Key Production Metrics</span>
           </div>
           <div className="grid grid-cols-2 gap-2.5">
            {project.metrics.map((metric, mIdx) => (
             <div
              key={mIdx}
              className="p-2.5 rounded-xl bg-white dark:bg-[#0A1120]/90 border border-slate-200 dark:border-[#1C2C4E]/80"
             >
              <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate">
               {metric.label}
              </div>
              <div className="text-sm font-bold font-mono text-slate-900 dark:text-white mt-0.5">
               {metric.value}
              </div>
             </div>
            ))}
           </div>
          </div>
         )}
        </div>

        {/* Tech Stack Pills */}
        {project.techStack && project.techStack.length > 0 && (
         <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#1C2C4E]/80">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
           <Cpu className="w-3.5 h-3.5 text-blue-500" />
           <span>Engineered With</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
           {project.techStack.map((tech, tIdx) => (
            <span
             key={tIdx}
             className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white dark:bg-[#0A1120] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1C2C4E] font-medium"
            >
             {tech}
            </span>
           ))}
          </div>
         </div>
        )}
       </div>

       {/* Right Column: Case Details & Operational Capabilities */}
       <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
        <div className="space-y-5">
         <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
           <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 uppercase tracking-wide">
            {project.category}
           </span>
           <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {project.businessType}
           </span>
          </div>
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-semibold">
           REF #{String(idx + 1).padStart(2, "0")}
          </span>
         </div>

         <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
           {project.title}
          </h2>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
           {project.positioning}
          </p>
         </div>

         <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {project.overview}
         </p>

         <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0A1120]/60 border border-slate-200 dark:border-[#1C2C4E]">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
           Operational Challenge &amp; Solution
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
           {project.solution}
          </p>
         </div>

         <div>
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
           <Layers className="w-3.5 h-3.5 text-blue-500" />
           <span>Verified Capabilities &amp; Production Modules</span>
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
           {project.verifiedCapabilities.map((cap, cIdx) => (
            <li key={cIdx} className="flex items-start gap-2">
             <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
             <span>{cap}</span>
            </li>
           ))}
          </ul>
         </div>
        </div>

        {/* Footer Action Links */}
        <div className="pt-6 border-t border-slate-200 dark:border-[#1C2C4E] flex flex-wrap items-center gap-4">
         <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl ts-btn-primary text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md"
         >
          <span>View Case Study Architecture</span>
          <ArrowRight className="w-4 h-4" />
         </Link>

         <Link
          href="/request-a-quote"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white text-sm font-medium bg-slate-100 dark:bg-[#0D1830]/80 hover:bg-slate-200 dark:hover:bg-[#12203A] border border-slate-200 dark:border-[#24365C] transition-colors"
         >
          <span>Discuss Similar Architecture ↗</span>
         </Link>
        </div>
       </div>
      </div>
     </article>
    ))}
   </div>

   {/* Enterprise Consultation CTA Banner */}
   <div className="rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-[#1C2C4E] bg-gradient-to-br from-blue-900 to-[#070B14] text-white shadow-xl relative overflow-hidden">
    <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
    <div className="relative z-10 max-w-3xl space-y-4">
     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider border border-blue-400/30">
      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
      <span>Enterprise Engineering Standards</span>
     </div>
     <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
      Need a Custom Enterprise Solution Built for Your Workflow?
     </h3>
     <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
      Whether you require an offline-first POS engine, an automated cloud SaaS platform, high-throughput AI document ingestion, or an authorized cybersecurity hardening audit, we engineer production systems around your operational constraints.
     </p>
     <div className="pt-4 flex flex-wrap items-center gap-4">
      <Link
       href="/request-a-quote"
       className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/30"
      >
       <span>Schedule Architecture Review</span>
       <ArrowRight className="w-4 h-4" />
      </Link>
      <Link
       href="/contact"
       className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
      >
       <span>Speak Directly With Engineers</span>
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
}
