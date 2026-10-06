"use client";

import React from "react";
import Link from "next/link";
import { useContent } from "@/context/ContentContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Store,
  Terminal,
  Globe,
  Smartphone,
  Cpu,
  ShieldCheck,
  Cloud,
  Layers,
  ArrowRight,
} from "lucide-react";

export function ServicesGrid() {
  const { config } = useContent();

  const serviceIcons: Record<string, React.ElementType> = {
    "pos-erp-development": Store,
    "custom-software": Terminal,
    "web-development": Globe,
    "mobile-app-development": Smartphone,
    "ai-automation": Cpu,
    "cybersecurity": ShieldCheck,
    "cloud-solutions": Cloud,
    "saas-development": Layers,
  };

  return (
    <section className="py-20 lg:py-24 bg-white dark:bg-[#04070E] text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#1C2C4E] relative transition-colors">
      {/* Ambient premium glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-[#2E9BFF]/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            kicker="Our Services"
            title="Engineered For Real Business Demands"
            subtitle="Explore our comprehensive range of development, automation, and cybersecurity solutions. Features and modules are tailored to your business workflow."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 pb-8 sm:pb-12"
          >
            <span>View All Detailed Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.services.map((service) => {
            const Icon = serviceIcons[service.id] || Terminal;

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl p-[1.5px] bg-gradient-to-br from-blue-500/50 via-indigo-500/25 to-cyan-400/40 hover:from-blue-400 hover:via-indigo-400/60 hover:to-cyan-300 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(46,155,255,0.5)]"
              >
                <div className="rounded-3xl bg-white dark:bg-[#0A1226] p-7 sm:p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white flex items-center justify-center shadow-[0_8px_20px_-6px_rgba(46,155,255,0.6)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#0D1830] border border-slate-200 dark:border-[#24365C] text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                      {service.category}
                    </span>
                  </div>

                  {/* Premium framed service title */}
                  <div className="rounded-2xl bg-gradient-to-r from-[#2E9BFF]/50 via-indigo-500/30 to-[#38E1FF]/50 p-[1.5px] mb-4 group-hover:from-[#2E9BFF] group-hover:via-indigo-400 group-hover:to-[#38E1FF] transition-all duration-300">
                    <div className="rounded-2xl bg-slate-50 dark:bg-[#070D1C] px-4 py-3.5">
                      <h3 className="text-[1.35rem] leading-snug font-bold font-display tracking-tight text-slate-900 dark:text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {service.shortDescription}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-auto inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors pt-5 border-t border-slate-100 dark:border-[#1C2C4E]"
                  >
                    <span>Explore Capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
