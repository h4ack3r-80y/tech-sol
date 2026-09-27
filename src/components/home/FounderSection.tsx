import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card3D } from "@/components/3d/Card3D";
import { MessageSquare, ArrowRight, Shield } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <SectionHeading
            kicker="Leadership &amp; Advisory"
            title="Meet the Founder"
            alignment="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-6">
            {/* Founder Photo Placeholder with 3D Card Depth */}
            <div className="md:col-span-4 flex justify-center">
              <Card3D depth={12}>
                <div className="relative w-48 h-60 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-black shadow-lg flex flex-col items-center justify-center text-center p-1.5">
                  <Image
                    src="/images/founder.jpg"
                    alt="Founder Photo - Shayan Ahmad"
                    width={384}
                    height={480}
                    priority
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                </div>
              </Card3D>
            </div>

            {/* Founder Bio */}
            <div className="md:col-span-8 space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {siteConfig.business.founder}
                </h3>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide mt-1">
                  {siteConfig.business.founderTitle}
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                  {siteConfig.business.location.city}, {siteConfig.business.location.country}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {siteConfig.business.founderBio}
              </p>

              <div className="pt-2 text-xs font-normal text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>Dedicated consulting, hands-on architectural design, and direct technical oversight.</span>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/book-a-consultation"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm hover:scale-[1.01]"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
                    siteConfig.business.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-500/30 text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Direct WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
