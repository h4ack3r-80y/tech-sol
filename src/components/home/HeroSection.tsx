import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Card3D } from "@/components/3d/Card3D";
import {
  ArrowRight,
  Database,
  Layers,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Activity,
  Server,
  Terminal,
  Zap,
  Lock,
  Globe,
  Sparkles,
  Cloud,
  Smartphone,
  Code2,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-[#04070E] bg-ts-ambient text-slate-900 dark:text-white pt-14 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200 dark:border-[#1C2C4E] transition-colors">
      {/* Ambient Corporate Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[#2E9BFF]/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-corporate-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Executive Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            {/* Title Section Brand Lockup & Kicker */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-slate-900 p-0.5 border-2 border-blue-500/40 shadow-[0_0_24px_rgba(46,155,255,0.5)] flex-shrink-0 transition-transform hover:scale-105">
                <Image
                  src="/images/techsol-symbol.png"
                  alt="TechSol Official Emblem"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover rounded-xl"
                  priority
                />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                  <span>Technology &bull; Intelligence &bull; Innovation</span>
                </div>
              </div>
            </div>

            {/* Executive Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] font-display ts-text-glow">
              Practical Digital Solutions Engineered for{" "}
              <span className="ts-text-gradient">
                Real Business Scale
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
              TechSol designs, builds, and deploys high-performance enterprise software, intelligent AI automations, robust cloud architectures, and specialized business management systems built for long-term operational resilience.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/request-a-quote"
                className="ts-btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm tracking-tight"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0D1830]/70 hover:bg-slate-100 dark:hover:bg-[#12203A] border border-slate-200 dark:border-[#24365C] transition-all text-sm font-semibold shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Explore Verified Projects</span>
              </Link>
            </div>

            {/* Dynamic Upper Horizontal Moving Services Line (Right to Left) */}
            <div className="pt-2">
              <div className="relative overflow-hidden py-2.5 border-y border-slate-200/80 dark:border-[#1C2C4E]/80 bg-white/40 dark:bg-[#0A1226]/50 backdrop-blur-md rounded-xl shadow-xs">
                {/* Left & Right Smooth Gradient Masks */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-slate-50 dark:from-[#04070E] to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-slate-50 dark:from-[#04070E] to-transparent" />

                {/* Marquee Track moving dynamically from Right to Left */}
                <div className="animate-marquee-rtl flex items-center gap-2.5">
                  {[
                    { label: "Cybersecurity & Hardening", icon: ShieldCheck },
                    { label: "AI Automation & LLMs", icon: Cpu },
                    { label: "Custom POS & ERP", icon: Code2 },
                    { label: "Full-Stack Web Engineering", icon: Globe },
                    { label: "Vulnerability Assessments", icon: Lock },
                    { label: "Cloud Infrastructure", icon: Cloud },
                    { label: "Intelligent Workflows", icon: Sparkles },
                    { label: "Mobile Applications", icon: Smartphone },
                    { label: "SaaS Product Engineering", icon: Terminal },
                    { label: "Cybersecurity & Hardening", icon: ShieldCheck },
                    { label: "AI Automation & LLMs", icon: Cpu },
                    { label: "Custom POS & ERP", icon: Code2 },
                    { label: "Full-Stack Web Engineering", icon: Globe },
                    { label: "Vulnerability Assessments", icon: Lock },
                    { label: "Cloud Infrastructure", icon: Cloud },
                    { label: "Intelligent Workflows", icon: Sparkles },
                    { label: "Mobile Applications", icon: Smartphone },
                    { label: "SaaS Product Engineering", icon: Terminal },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#0D1830]/80 border border-slate-200 dark:border-[#24365C]/60 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-xs whitespace-nowrap hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Executive Proof Metric Strip */}
            <div className="pt-6 border-t border-slate-200 dark:border-[#1C2C4E]/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white dark:bg-[#0A1120]/60 border border-slate-200 dark:border-[#1C2C4E] shadow-sm hover:border-[#2E9BFF]/40 hover:shadow-[0_8px_24px_-8px_rgba(46,155,255,0.4)] transition-all duration-300">
                <div className="font-extrabold text-slate-900 dark:text-white text-base">99.9%</div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] font-mono mt-0.5">Uptime Standard</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-[#0A1120]/60 border border-slate-200 dark:border-[#1C2C4E] shadow-sm hover:border-[#2E9BFF]/40 hover:shadow-[0_8px_24px_-8px_rgba(46,155,255,0.4)] transition-all duration-300">
                <div className="font-extrabold text-slate-900 dark:text-white text-base">PKR 15M+</div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] font-mono mt-0.5">Ledgers Tracked</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-[#0A1120]/60 border border-slate-200 dark:border-[#1C2C4E] shadow-sm hover:border-[#2E9BFF]/40 hover:shadow-[0_8px_24px_-8px_rgba(46,155,255,0.4)] transition-all duration-300">
                <div className="font-extrabold text-slate-900 dark:text-white text-base">Offline-First</div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] font-mono mt-0.5">Durable Engines</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-[#0A1120]/60 border border-slate-200 dark:border-[#1C2C4E] shadow-sm hover:border-[#2E9BFF]/40 hover:shadow-[0_8px_24px_-8px_rgba(46,155,255,0.4)] transition-all duration-300">
                <div className="font-extrabold text-emerald-600 dark:text-emerald-400 text-base">Zero-Trust</div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] font-mono mt-0.5">Security Standard</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Enterprise Capabilities Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <Card3D depth={10} className="w-full max-w-lg">
              <div className="w-full rounded-2xl border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-2xl dark:shadow-[0_0_70px_-14px_rgba(46,155,255,0.4)] overflow-hidden transition-colors">
                {/* Console Window Top Bar */}
                <div className="px-5 py-3.5 bg-slate-100/90 dark:bg-[#070D1C] border-b border-slate-200 dark:border-[#1C2C4E] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                    <span className="ml-2 text-xs font-mono font-semibold text-slate-700 dark:text-slate-200">
                      TechSol Architecture Console
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>ONLINE // 24ms</span>
                  </div>
                </div>

                {/* Dashboard Inner Body */}
                <div className="p-6 space-y-5 text-sm">
                  {/* Status Banner */}
                  <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          Enterprise Digital Operations Engine
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Cloud Platforms, Custom Software &amp; Automated Systems
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-blue-600 text-white uppercase">
                      ACTIVE
                    </span>
                  </div>

                  {/* Core Platform Pillars */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A1120]/80 border border-slate-200 dark:border-[#1C2C4E]">
                      <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-1.5" />
                      <div className="font-bold text-slate-900 dark:text-white text-xs">Custom Software</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Desktop &amp; Web</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A1120]/80 border border-slate-200 dark:border-[#1C2C4E]">
                      <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mx-auto mb-1.5" />
                      <div className="font-bold text-slate-900 dark:text-white text-xs">AI &amp; Automation</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">OCR &amp; Pipelines</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A1120]/80 border border-slate-200 dark:border-[#1C2C4E]">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto mb-1.5" />
                      <div className="font-bold text-slate-900 dark:text-white text-xs">Zero-Trust Cyber</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Role Defense</div>
                    </div>
                  </div>

                  {/* Operational Capabilities Checklist */}
                  <div className="space-y-2.5 border-t border-slate-200 dark:border-[#1C2C4E] pt-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>High-Throughput Enterprise Data Ledgers</span>
                      </span>
                      <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                        Ready
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>Offline-First Resilience &amp; Cloud Synchronization</span>
                      </span>
                      <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                        Synced
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>Zero-Trust Role-Based Access Control (RBAC)</span>
                      </span>
                      <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                        Enforced
                      </span>
                    </div>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#070D1C] text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between border border-slate-200/60 dark:border-[#1C2C4E]">
                    <span className="font-medium text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Enterprise SLA &amp; Confidentiality Guarantee</span>
                    </span>
                    <span className="font-semibold font-mono text-blue-600 dark:text-blue-400">
                      TechSol Core
                    </span>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>
        </div>

        {/* Full-Width Dynamic Animated Services Strip (Right to Left) */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-[#1C2C4E]/80 relative">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping" />
              <span>Core Services &amp; Engineering Matrix</span>
            </div>
            <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-medium hidden sm:inline-block">
              Continuous Delivery &bull; Zero-Downtime Architecture
            </span>
          </div>

          <div className="relative overflow-hidden py-3 border-y border-slate-200/80 dark:border-[#1C2C4E]/80 bg-white/50 dark:bg-[#0A1226]/60 backdrop-blur-md rounded-2xl shadow-xs">
            {/* Left & Right Smooth Fade Masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-50 dark:from-[#04070E] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-50 dark:from-[#04070E] to-transparent" />

            {/* Marquee Track moving dynamically from Right to Left */}
            <div className="animate-marquee-rtl flex items-center gap-3">
              {[
                { label: "Defensive Cybersecurity & Hardening", icon: ShieldCheck, tag: "SECURE" },
                { label: "AI Application Development & LLMs", icon: Cpu, tag: "AUTOMATE" },
                { label: "Custom POS & Offline-First ERP", icon: Code2, tag: "BUILD" },
                { label: "Vulnerability Assessments & Pen-Testing", icon: Lock, tag: "SECURE" },
                { label: "Full-Stack Web Engineering", icon: Globe, tag: "BUILD" },
                { label: "Intelligent Workflow Automation", icon: Sparkles, tag: "AUTOMATE" },
                { label: "Cloud Infrastructure & Zero-Trust", icon: Cloud, tag: "SCALE" },
                { label: "High-Throughput Software Architecture", icon: Terminal, tag: "BUILD" },
                { label: "Mobile Apps (iOS & Android)", icon: Smartphone, tag: "BUILD" },
                { label: "Database Scaling & Ledger Engines", icon: Database, tag: "SCALE" },
                { label: "Defensive Cybersecurity & Hardening", icon: ShieldCheck, tag: "SECURE" },
                { label: "AI Application Development & LLMs", icon: Cpu, tag: "AUTOMATE" },
                { label: "Custom POS & Offline-First ERP", icon: Code2, tag: "BUILD" },
                { label: "Vulnerability Assessments & Pen-Testing", icon: Lock, tag: "SECURE" },
                { label: "Full-Stack Web Engineering", icon: Globe, tag: "BUILD" },
                { label: "Intelligent Workflow Automation", icon: Sparkles, tag: "AUTOMATE" },
                { label: "Cloud Infrastructure & Zero-Trust", icon: Cloud, tag: "SCALE" },
                { label: "High-Throughput Software Architecture", icon: Terminal, tag: "BUILD" },
                { label: "Mobile Apps (iOS & Android)", icon: Smartphone, tag: "BUILD" },
                { label: "Database Scaling & Ledger Engines", icon: Database, tag: "SCALE" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#0D1830]/80 border border-slate-200 dark:border-[#24365C]/70 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-xs whitespace-nowrap hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                  >
                    <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>{item.label}</span>
                    <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50">
                      {item.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
