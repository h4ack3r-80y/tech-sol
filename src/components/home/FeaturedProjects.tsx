"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu, Layers } from "lucide-react";

export function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Systems");

  const categories = [
    "All Systems",
    "Solar & Electronics",
    "Supermarket & Retail",
  ];

  const filteredProjects =
    selectedCategory === "All Systems"
      ? siteConfig.projects
      : selectedCategory === "Solar & Electronics"
      ? siteConfig.projects.filter((p) => p.id === "ihs-pos-erp")
      : siteConfig.projects.filter((p) => p.id === "ams-pos-erp");

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeading
            kicker="Production Case Studies"
            title="Engineered Around Real Operations"
            subtitle="Explore verified software solutions deployed to manage critical commercial business operations, high-speed retail checkout, inventory valuation, and customer Khata ledgers."
          />

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 pb-8 sm:pb-12 group flex-shrink-0"
          >
            <span>Explore Both Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
          {categories.map((cat) => {
            const count =
              cat === "All Systems"
                ? siteConfig.projects.length
                : cat === "Solar & Electronics"
                ? siteConfig.projects.filter((p) => p.id === "ihs-pos-erp").length
                : siteConfig.projects.filter((p) => p.id === "ams-pos-erp").length;

            const active = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  active
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] ${
                    active
                      ? "bg-blue-700 text-blue-100 font-bold"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Showcase List */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Visual / Screenshot side */}
                <div className="lg:col-span-6 p-6 sm:p-8 bg-slate-50/80 dark:bg-[#0A101F] border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-black aspect-[16/10] shadow-inner">
                      <Image
                        src={project.imagePlaceholder}
                        alt={`${project.title} Architectural Showcase`}
                        width={800}
                        height={500}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mt-4 flex flex-wrap items-center gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                      <ShieldCheck className="w-4 h-4" />
                      {project.statusBadge}
                    </span>
                    <span className="font-mono text-slate-400 dark:text-slate-500">
                      CASE_STUDY // 0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Details side */}
                <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-block text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        &bull; {project.businessType}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {project.positioning}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {project.overview}
                    </p>

                    {/* Operational Metrics Callouts */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#0A101F] border border-slate-200 dark:border-slate-800 text-center"
                        >
                          <div className="font-extrabold text-slate-900 dark:text-white text-sm">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Verified Capabilities */}
                    <div className="pt-2">
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                        Verified System Capabilities
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 font-normal">
                        {project.verifiedCapabilities.slice(0, 4).map((cap, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-[1.01]"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/request-a-quote"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-colors"
                    >
                      <span>Discuss Similar Architecture</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
