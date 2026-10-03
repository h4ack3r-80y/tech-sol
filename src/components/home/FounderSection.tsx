import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card3D } from "@/components/3d/Card3D";
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Lock,
  Sparkles,
  CheckCircle2,
  Globe,
  Cloud,
  Terminal,
  Smartphone,
  Code2,
} from "lucide-react";

export function FounderSection() {
  const founders = siteConfig.business.founders;

  const servicesTicker = [
    { label: "Defensive Cybersecurity & Hardening", icon: ShieldCheck, tag: "SECURE" },
    { label: "AI Application Development & LLMs", icon: Cpu, tag: "AUTOMATE" },
    { label: "Custom POS & Enterprise ERP", icon: Code2, tag: "BUILD" },
    { label: "Vulnerability Assessments & Pen-Testing", icon: Lock, tag: "SECURE" },
    { label: "Full-Stack Web Applications", icon: Globe, tag: "BUILD" },
    { label: "Intelligent Workflow Automation", icon: Sparkles, tag: "AUTOMATE" },
    { label: "Cloud Infrastructure & Zero-Trust", icon: Cloud, tag: "SCALE" },
    { label: "High-Throughput Software Architecture", icon: Terminal, tag: "BUILD" },
    { label: "Mobile Applications (iOS & Android)", icon: Smartphone, tag: "BUILD" },
  ];

  // Duplicate for seamless 0% -> -50% infinite loop
  const duplicatedTicker = [...servicesTicker, ...servicesTicker];

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 relative transition-colors overflow-hidden">
      {/* Dynamic Animated Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-r from-blue-600/15 to-cyan-500/10 blur-3xl pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-r from-indigo-600/15 to-purple-600/10 blur-3xl pointer-events-none rounded-full animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Executive Leadership & Technical Vision"
          title="Meet the Founders"
          subtitle="Direct executive oversight from technical leaders who combine deep cybersecurity defense with intelligent AI software engineering."
          alignment="center"
        />

        {/* Dynamic Horizontal Animated Services Line (Right to Left) */}
        <div className="my-10 relative overflow-hidden py-3 border-y border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-[#0D1527]/50 backdrop-blur-md rounded-2xl shadow-sm">
          {/* Gradient Masks for smooth entrance / exit */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-50 dark:from-[#070B14] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-50 dark:from-[#070B14] to-transparent" />

          {/* Marquee Track moving from Right to Left */}
          <div className="animate-marquee-rtl flex items-center gap-3">
            {duplicatedTicker.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-xs whitespace-nowrap hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
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

        {/* Dual Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {founders.map((founder, idx) => {
            const isCyberLead = idx === 0;

            return (
              <div
                key={founder.id}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] p-7 sm:p-9 shadow-xl relative overflow-hidden flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-[0_12px_40px_-8px_rgba(37,99,235,0.22)] transition-all duration-300 group"
              >
                {/* Subtle top accent gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    isCyberLead
                      ? "bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-700"
                      : "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
                  }`}
                />

                <div>
                  {/* Top row: Photo + Identity */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100 dark:border-slate-800/80">
                    <Card3D depth={14}>
                      <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-black shadow-lg flex-shrink-0 p-1">
                        <Image
                          src={founder.image}
                          alt={`${founder.name} - ${founder.displayTitle}`}
                          width={320}
                          height={384}
                          priority
                          className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none" />
                      </div>
                    </Card3D>

                    <div className="text-center sm:text-left flex-1 min-w-0">
                      {/* Clean Single-Line Pill Badges */}
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

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {founder.name}
                      </h3>

                      <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                        {siteConfig.business.location.city}, {siteConfig.business.location.country}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed font-normal">
                        {founder.bio}
                      </p>
                    </div>
                  </div>

                  {/* Founder's Personal Message */}
                  <div className="my-5 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#090F1C] border border-slate-200/70 dark:border-slate-800/60 relative group-hover:border-blue-500/20 transition-colors">
                    <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Message from {isCyberLead ? "the Founder & Security Lead" : "the Co-Founder & AI Architect"}</span>
                    </div>
                    <blockquote className="text-xs sm:text-sm italic text-slate-700 dark:text-slate-200 leading-relaxed">
                      &ldquo;{founder.quoteMessage}&rdquo;
                    </blockquote>
                  </div>

                  {/* Core Expertise Tags */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                      Key Focus Areas
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {founder.expertise.map((exp, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-100/70 dark:bg-slate-800/40 px-2.5 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          <span className="truncate">{exp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-3">
                  <Link
                    href="/book-a-consultation"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm hover:scale-[1.01]"
                  >
                    <span>{isCyberLead ? "Consult on Security & Architecture" : "Discuss AI & Intelligent Systems"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
                      `Hello TechSol, I would like to discuss a project with ${founder.name} (${founder.displayTitle}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-500/30 text-xs font-semibold transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Co-Leadership Value Banner */}
        <div className="mt-10 rounded-2xl border border-blue-200/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 dark:from-[#0B132B]/80 dark:via-[#0D1527] dark:to-[#111936]/80 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-700 dark:text-blue-400">
                <Lock className="w-3.5 h-3.5" />
                <span>Dual Leadership Assurance for Clients</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Intelligent Automation Backed by Ironclad Cybersecurity
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                When you partner with TechSol, your projects are not handed off to detached contractors. Every line of code, cloud deployment, and AI workflow is co-architected under the direct scrutiny of Shayan Ahmad for defensive security and compliance, and Muhammad Saqib for intelligent software execution and speed.
              </p>
            </div>

            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold transition-all shadow-md flex-shrink-0"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


