import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, BarChart3, Layers, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "IHS E&S POS/ERP Case Study | Solar & Electronics Business System",
  description:
    "Production case study on custom POS/ERP solution engineered for solar and electronics retail with offline durability, ledger accounting, and inventory tracking.",
};

export default function IhsCaseStudyPage() {
  const project = siteConfig.projects.find((p) => p.id === "ihs-pos-erp")!;

  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#04070E] min-h-screen text-slate-900 dark:text-white relative transition-colors">
      <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-semibold">{project.title}</span>
        </nav>

        {/* Case Study Header Hero */}
        <div className="rounded-3xl p-8 sm:p-12 mb-10 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400" />
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 text-xs font-mono font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{project.statusBadge}</span>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-[#0D1830] text-slate-600 dark:text-slate-300 font-semibold">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-8">
            {project.positioning}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-[#1C2C4E] text-xs font-mono">
            <div>
              <span className="text-slate-500 dark:text-slate-400 uppercase font-semibold">Client / Domain</span>
              <div className="text-slate-900 dark:text-white font-bold text-sm mt-1">{project.businessType}</div>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 uppercase font-semibold">System Model</span>
              <div className="text-slate-900 dark:text-white font-bold text-sm mt-1">Desktop POS &amp; Ledger ERP</div>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 uppercase font-semibold">Deployment Mode</span>
              <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm mt-1">100% Offline-Resilient</div>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 uppercase font-semibold">Verification</span>
              <div className="text-blue-600 dark:text-blue-400 font-bold text-sm mt-1">Active Production</div>
            </div>
          </div>
        </div>

        {/* Operational Metrics 4-Pack */}
        {project.metrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm text-center hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-600 dark:text-blue-400">
                  {metric.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Narrative Sections */}
        <div className="space-y-8">
          <section className="rounded-2xl p-8 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-500" />
              <span>Project Overview &amp; Commercial Scope</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {project.overview}
            </p>
          </section>

          <section className="rounded-2xl p-8 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The Operational Challenge</h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {project.challenge}
            </p>
          </section>

          <section className="rounded-2xl p-8 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Engineering Approach</h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {project.approach}
            </p>
          </section>

          <section className="rounded-2xl p-8 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Production Solution Implemented</h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {project.solution}
            </p>
          </section>

          {/* Key Verified Features */}
          <section className="rounded-2xl p-8 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>Key Verified Production Capabilities</span>
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
              {project.verifiedCapabilities.map((cap, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* System Showcase Gallery */}
          <section className="rounded-2xl p-8 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm overflow-hidden">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">System Architecture &amp; Interface</h2>
            <div className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-[#24365C]/60 bg-slate-900 shadow-sm hover:shadow-xl hover:border-blue-400/60 transition-all duration-300">
              <div className="overflow-hidden">
                <Image
                  src="/images/projects/ihs/ihs-es-overview.jpg"
                  alt="IHS E&S Electronics & Solar POS ERP Suite overview"
                  width={1376}
                  height={768}
                  className="w-full h-auto group-hover:scale-[1.015] transition-transform duration-500"
                  priority
                />
              </div>
            </div>
            <p className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 mt-3 mb-6">
              IHS E&amp;S — Electronics &amp; Solar POS ERP Suite. 100% offline-first with Khata ledger sync.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-[#24365C]/60 bg-slate-900 shadow-sm hover:shadow-xl hover:border-blue-400/60 transition-all duration-300">
                <div className="overflow-hidden">
                  <Image
                    src="/images/projects/ihs/ihs-es-pos-counter.jpg"
                    alt="IHS E&S counter sales terminal with dual discount and receipt printing"
                    width={1376}
                    height={768}
                    className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <p className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 px-4 py-3 bg-white dark:bg-[#0A1226] border-t border-slate-200 dark:border-[#24365C]/60">
                  Counter terminal — dual discount, loss-guarding &amp; instant Khata sync
                </p>
              </div>
              <div className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-[#24365C]/60 bg-slate-900 shadow-sm hover:shadow-xl hover:border-blue-400/60 transition-all duration-300">
                <div className="overflow-hidden">
                  <Image
                    src="/images/projects/ihs/ihs-es-inventory-suite.jpg"
                    alt="IHS E&S solar inventory, multi-godown stock and financial P&L suite"
                    width={1376}
                    height={768}
                    className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <p className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 px-4 py-3 bg-white dark:bg-[#0A1226] border-t border-slate-200 dark:border-[#24365C]/60">
                  Inventory, multi-godown stock valuation &amp; financial P&amp;L suite
                </p>
              </div>
            </div>
          </section>

          {/* Technology Stack Tags */}
          {project.techStack && (
            <section className="rounded-2xl p-8 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-500" />
                <span>Engineered Technology Stack</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4">
                Engineered with high-speed transactional reliability and durable local persistence to ensure continuous 100% offline store sales.
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-100 dark:bg-[#0D1830] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#24365C] font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Business Outcomes */}
          <section className="rounded-2xl p-8 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-500" />
              <span>Commercial Outcome &amp; Value Delivered</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              The business achieved streamlined daily counter sales, accurate stock ledger tracking for solar equipment and electronics parts, and eliminated customer balance discrepancies through automated Khata accounting.
            </p>
          </section>

          {/* Lessons Learned */}
          <section className="rounded-2xl p-8 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-blue-500" />
              <span>Lessons &amp; Continuous Optimization</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Counter efficiency in electronics retail heavily depends on instant search response across thousands of varied part SKUs. Continuous optimizations to local indexing delivered immediate lookup speeds during peak business hours.
            </p>
          </section>

          {/* CTA Box */}
          <div className="rounded-3xl bg-gradient-to-br from-[#1E88FF] via-[#2E9BFF] to-[#1668DC] text-white shadow-[0_24px_70px_-18px_rgba(46,155,255,0.65)] p-8 sm:p-12 text-center space-y-4 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Need a Similar Business Management Solution?</h3>
            <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-normal">
              We engineer custom POS and ERP software specifically configured to your business inventory, counter speed, and reporting needs.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-blue-900 font-bold text-sm transition-all shadow-md"
              >
                <span>Discuss a Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm transition-colors"
              >
                <span>← Back to All Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
