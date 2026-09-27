import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card3D } from "@/components/3d/Card3D";
import { ShieldCheck, MapPin, CheckCircle2, ArrowRight, Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Shayan Ahmad Digital Solutions",
  description:
    "Learn about Shayan Ahmad Digital Solutions: our business-focused technology philosophy, founder profile, and engineering approach.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070B14] min-h-screen text-slate-900 dark:text-white relative transition-colors">
      <div className="absolute inset-0 bg-corporate-grid opacity-30 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Company Profile"
          title="Practical Digital Engineering Built on Authenticity"
          subtitle="Shayan Ahmad Digital Solutions was established to bridge the gap between complex software engineering and the daily operational needs of growing enterprises."
        />

        {/* Identity & Positioning Card */}
        <div className="rounded-3xl p-8 sm:p-12 mb-12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>Islamabad, Pakistan &bull; Global Capability</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Who We Are
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {siteConfig.business.coreMission}
          </p>

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
            {siteConfig.business.location.scopeNote} We work closely with Pakistani businesses, international companies, startups, and established enterprises who require reliable, customized software rather than rigid generic templates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="p-6 rounded-2xl bg-slate-50/60 dark:bg-[#0A101F] border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base mb-2">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Our Approach</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We first understand your business goals, daily operational bottlenecks, and administrative workflows before writing a single line of code.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/60 dark:bg-[#0A101F] border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base mb-2">
                <Eye className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Our Commitment</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Clear communication, defensive data security, transparent milestones, and systems engineered to scale reliably without unnecessary overhead.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Founder with 3D Card */}
        <div className="rounded-3xl p-8 sm:p-12 mb-12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Meet the Founder
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <Card3D depth={12}>
                <div className="relative w-44 h-56 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-black/60 shadow-lg flex flex-col items-center justify-center p-1.5">
                  <Image
                    src="/images/founder.jpg"
                    alt={`Founder Photo - ${siteConfig.business.founder}`}
                    width={352}
                    height={448}
                    priority
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                </div>
              </Card3D>
            </div>

            <div className="md:col-span-8 space-y-3">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {siteConfig.business.founder}
              </h3>
              <div className="text-sm font-mono font-bold text-blue-600 dark:text-blue-400">
                {siteConfig.business.founderTitle}
              </div>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {siteConfig.business.location.city}, {siteConfig.business.location.country}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2 font-normal">
                {siteConfig.business.founderBio}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] p-8 sm:p-12 text-center space-y-4 shadow-sm relative overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white relative z-10">Ready to Start a Technical Conversation?</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto relative z-10">
            Book a focused technology consultation to discuss your operations and explore appropriate digital architectures.
          </p>
          <div className="pt-2 relative z-10">
            <Link
              href="/book-a-consultation"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20 hover:scale-[1.01]"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
