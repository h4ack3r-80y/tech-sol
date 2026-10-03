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
  CheckCircle2,
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
    <section className="py-20 lg:py-24 bg-white dark:bg-[#070B14] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] hover:border-blue-500/50 dark:hover:border-blue-500/50 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/80 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {service.shortDescription}
                  </p>

                  <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mb-6">
                    <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                      Key Capabilities
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-normal">
                      {service.capabilities.slice(0, 4).map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors pt-4 border-t border-slate-100 dark:border-slate-800"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
