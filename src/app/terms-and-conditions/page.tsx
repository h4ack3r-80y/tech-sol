import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Terms & Conditions | Shayan Ahmad Digital Solutions",
  description: "Terms and conditions of service for technology consulting and software engineering.",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070B14] min-h-screen text-slate-900 dark:text-white relative transition-colors">
      <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] shadow-sm space-y-8 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 font-semibold">
              Legal Disclosure
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-2">
              Last updated: September 2026 • {siteConfig.business.name}
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing the website of {siteConfig.business.name}, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not utilize our digital materials or inquiry forms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Professional Services &amp; Engagements</h2>
            <p>
              All software development, POS/ERP engineering, automation, cybersecurity reviews, and technology consulting are governed by project-specific Statements of Work (SOW) or formal written service agreements. Website descriptions are provided for general informative positioning and do not constitute a binding unilateral warranty.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Intellectual Property Rights</h2>
            <p>
              The SA brand mark, website content, layout, design assets, and architectural representations are the property of {siteConfig.business.name}. Bespoke software deliverables created for clients are transferred or licensed according to the explicit terms established in respective project agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Ethical Cybersecurity &amp; Systems Use</h2>
            <p>
              All security assessments and penetration tests performed by {siteConfig.business.name} require explicit written authorization and ownership verification from the client organization. We do not participate in or condone unauthorized access, illegal hacking, or disruptive actions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Governing Law</h2>
            <p>
              These terms and any non-contractual disputes arising from the website shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan, with primary jurisdiction in Islamabad.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">6. Inquiries</h2>
            <p>
              For any legal or contractual inquiries, contact:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0A101F] border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-1.5 text-slate-600 dark:text-slate-300">
              <div><strong className="text-slate-900 dark:text-white">Business Name:</strong> {siteConfig.business.name}</div>
              <div><strong className="text-slate-900 dark:text-white">Location:</strong> {siteConfig.business.location.city}, {siteConfig.business.location.country}</div>
              <div><strong className="text-slate-900 dark:text-white">Phone / WhatsApp:</strong> {siteConfig.business.contact.phoneDisplay}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
