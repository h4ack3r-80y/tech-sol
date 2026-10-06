import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Search,
  FileCode2,
  Palette,
  Terminal,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Process & Methodology | Shayan Ahmad Digital Solutions",
  description:
    "Explore our structured 6-step engineering process: Discover, Plan, Design, Build, Secure & Test, Deploy & Support. Transparent software development engineered for reliability.",
};

export default function ProcessPage() {
  const stepIcons = [
    Search,
    FileCode2,
    Palette,
    Terminal,
    ShieldCheck,
    Rocket,
  ];

  const stepDeliverables = [
    [
      "Operational workflow map",
      "Pain point & constraint audit",
      "Technology suitability evaluation",
      "Initial feasibility & budget alignment",
    ],
    [
      "Functional requirement specification (FRS)",
      "Database schema & data flow diagram",
      "Milestone breakdown & delivery timeline",
      "Architecture & security framework plan",
    ],
    [
      "Responsive user interface wireframes",
      "Optimized counter / dashboard layouts",
      "Role-based permission architecture",
      "Data validation & schema specifications",
    ],
    [
      "Modular source code implementation",
      "Offline-first local storage & sync engine",
      "High-speed transaction processing",
      "Structured documentation & commit log",
    ],
    [
      "Vulnerability assessment & defensive audit",
      "Edge-case & boundary value testing",
      "High-volume ledger concurrency checks",
      "Role-based access control verification",
    ],
    [
      "Production deployment & setup runbook",
      "Staff onboarding & user training",
      "Automated backup configuration",
      "Post-launch technical support & refinements",
    ],
  ];

  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#04070E] min-h-screen text-slate-900 dark:text-white relative transition-colors">
      <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-semibold">Engineering Process</span>
        </nav>

        {/* Heading */}
        <SectionHeading
          kicker="Engineering Methodology"
          title="A Structured, Transparent Engineering Lifecycle"
          subtitle="We eliminate technical guesswork and speculative timelines through a disciplined 6-phase engineering lifecycle engineered to deliver dependable software on time."
        />

        {/* 6 Step Deep Dive Grid */}
        <div className="mt-12 space-y-8">
          {siteConfig.processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            const deliverables = stepDeliverables[idx] || [];

            return (
              <div
                key={step.step}
                className="rounded-3xl border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] p-8 sm:p-10 shadow-sm hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Step Description */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 uppercase">
                            PHASE {step.step}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                          {step.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                      {step.summary}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {step.details}
                    </p>
                  </div>

                  {/* Step Deliverables */}
                  <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 dark:bg-[#070D1C] border border-slate-200 dark:border-[#1C2C4E]">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span>Phase Deliverables</span>
                    </h3>

                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                      {deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Defensive by Default
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Security is integrated into database schema design, input validation, and API authentication—never bolted on as an afterthought.
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
            <Layers className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-3" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Modular &amp; Maintainable
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Clean separation of concerns, comprehensive schema definitions, and structured documentation ensure longevity and effortless future updates.
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
            <Rocket className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-3" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Business ROI Focus
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Every milestone is evaluated based on counter throughput, error reduction, reporting clarity, and actual operational reliability.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#1E88FF] via-[#2E9BFF] to-[#1668DC] text-white shadow-[0_24px_70px_-18px_rgba(46,155,255,0.65)] p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Plan Your Next System?
          </h3>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-normal leading-relaxed">
            Let us evaluate your business requirements and map out a structured engineering roadmap tailored to your operations.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-blue-900 font-bold text-sm transition-all shadow-md"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-a-consultation"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-700/80 hover:bg-blue-800 text-white font-semibold text-sm transition-all border border-blue-400/30"
            >
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
