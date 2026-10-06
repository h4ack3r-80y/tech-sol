import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, BarChart3, Layers, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "AMS POS/ERP Case Study | Superstore & Retail Management System",
  description:
    "Production case study on custom superstore POS/ERP solution engineered for high-throughput retail checkout, barcode recognition, loose-weight calculations, and offline resilience.",
};

export default function AmsCaseStudyPage() {
  const project = siteConfig.projects.find((p) => p.id === "ams-pos-erp")!;

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
        <div className="rounded-3xl p-8 sm:p-12 mb-10 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
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
              <span className="text-slate-500 dark:text-slate-400 uppercase font-semibold">Architecture</span>
              <div className="text-slate-900 dark:text-white font-bold text-sm mt-1">Multi-Lane Offline POS</div>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 uppercase font-semibold">Deployment Mode</span>
              <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm mt-1">100% Offline Durability</div>
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
                className="rounded-2xl p-5 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm text-center"
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
            <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">System Architecture &amp; Interface</h2>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                LIVE PRODUCTION SYSTEM
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
              Real interface captures from the deployed superstore system — commercial data anonymized for privacy.
            </p>
            <div className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-[#24365C]/60 bg-slate-900 shadow-sm hover:shadow-xl hover:border-emerald-400/60 transition-all duration-300">
              <div className="overflow-hidden">
                <Image
                  src="/images/projects/ams/ams-live-dashboard.png"
                  alt="AMS Superstore live dashboard with sales, Khata and profit analytics"
                  width={1920}
                  height={1034}
                  className="w-full h-auto group-hover:scale-[1.015] transition-transform duration-500"
                  priority
                />
              </div>
              <p className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 px-4 py-3 bg-white dark:bg-[#0A1226] border-t border-slate-200 dark:border-[#24365C]/60">
                Live dashboard — today&apos;s sales, cash intake, receivables (Udhar) &amp; P&amp;L trends
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-[#24365C]/60 bg-slate-900 shadow-sm hover:shadow-xl hover:border-emerald-400/60 transition-all duration-300">
                <div className="overflow-hidden">
                  <Image
                    src="/images/projects/ams/ams-live-sale-invoice.png"
                    alt="AMS live sale invoice screen with barcode search and payment channels"
                    width={1918}
                    height={1016}
                    className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <p className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 px-4 py-3 bg-white dark:bg-[#0A1226] border-t border-slate-200 dark:border-[#24365C]/60">
                  Sale invoice — barcode search, cash/Khata channels &amp; instant billing
                </p>
              </div>
              <div className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-[#24365C]/60 bg-slate-900 shadow-sm hover:shadow-xl hover:border-emerald-400/60 transition-all duration-300">
                <div className="overflow-hidden">
                  <Image
                    src="/images/projects/ams/ams-live-customer360.png"
                    alt="AMS live Customer 360 with Khata ledger, sales and payment history"
                    width={1919}
                    height={1033}
                    className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <p className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 px-4 py-3 bg-white dark:bg-[#0A1226] border-t border-slate-200 dark:border-[#24365C]/60">
                  Customer 360 — Khata ledger, sales history &amp; WhatsApp receipts
                </p>
              </div>
              <div className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-[#24365C]/60 bg-slate-900 shadow-sm hover:shadow-xl hover:border-emerald-400/60 transition-all duration-300">
                <div className="overflow-hidden">
                  <Image
                    src="/images/projects/ams/ams-live-profit-loss.png"
                    alt="AMS live profit and loss analytics with revenue vs cost breakdown"
                    width={1920}
                    height={1022}
                    className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <p className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 px-4 py-3 bg-white dark:bg-[#0A1226] border-t border-slate-200 dark:border-[#24365C]/60">
                  Profit &amp; loss — revenue vs cost, margins &amp; loss analysis
                </p>
              </div>
              <div className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-[#24365C]/60 bg-slate-900 shadow-sm hover:shadow-xl hover:border-emerald-400/60 transition-all duration-300">
                <div className="overflow-hidden">
                  <Image
                    src="/images/projects/ams/ams-live-settings.png"
                    alt="AMS store configuration with business branding and bank accounts"
                    width={1920}
                    height={1034}
                    className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <p className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 px-4 py-3 bg-white dark:bg-[#0A1226] border-t border-slate-200 dark:border-[#24365C]/60">
                  Store configuration — branding, contacts &amp; bank accounts on bills
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
                Designed for continuous operation with zero latency during high-speed counter barcode scanning and loose weight processing.
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
              Faster checkout lines, automated margin controls on grocery staples, elimination of inventory loss from expired products through FEFO alerts, and zero transaction loss during local power or internet outages.
            </p>
          </section>

          {/* Lessons Learned */}
          <section className="rounded-2xl p-8 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-blue-500" />
              <span>Lessons &amp; Continuous Optimization</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Handling loose weight goods (spices, dry goods, fresh produce) required a dedicated mathematical conversion module allowing counter staff to enter monetary amounts (e.g. &ldquo;PKR 50 worth&rdquo;) and instantly receive precise fractional weight calculations on bills without mental arithmetic.
            </p>
          </section>

          {/* CTA Box */}
          <div className="rounded-3xl bg-gradient-to-br from-[#1E88FF] via-[#2E9BFF] to-[#1668DC] text-white shadow-[0_24px_70px_-18px_rgba(46,155,255,0.65)] p-8 sm:p-12 text-center space-y-4 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Operating a Retail Superstore or Multi-Lane Market?</h3>
            <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-normal">
              Discuss how an offline-first, weighted-average POS solution can transform your checkout speed and inventory controls.
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
