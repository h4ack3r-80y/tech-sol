import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Shayan Ahmad Digital Solutions",
  description: "Privacy policy and client data handling disclosures for Shayan Ahmad Digital Solutions.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-2">
              Last updated: September 2026 • {siteConfig.business.name}
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Overview &amp; Commitment</h2>
            <p>
              {siteConfig.business.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), operating from Islamabad, Pakistan, is committed to safeguarding the privacy and confidentiality of our clients, prospective customers, and website visitors. This Privacy Policy sets out how we collect, handle, and protect business information submitted through our official website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Information We Collect</h2>
            <p>
              We only collect information directly provided by you when submitting a project request, booking a consultation, or contacting us via phone or WhatsApp. This may include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Name and job title / role</li>
              <li>Company or business entity name</li>
              <li>Contact details (email address, telephone number, WhatsApp number)</li>
              <li>Project descriptions, operational requirements, and technical specifications</li>
              <li>Country and jurisdiction</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. How Your Information Is Used</h2>
            <p>
              All submitted data is utilized exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Evaluating and responding to your technical and business inquiries</li>
              <li>Conducting technology consultations and preparing project quotations</li>
              <li>Administering agreed-upon software engineering and consulting agreements</li>
              <li>Communicating project milestones and technical runbooks</li>
            </ul>
            <p className="font-semibold text-slate-900 dark:text-white">
              We never sell, lease, or share your contact or business information with third-party marketing companies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Data Security &amp; Confidentiality</h2>
            <p>
              We treat client operational details and custom software logic as proprietary and confidential. In our consulting and engineering engagements, client systems, source code, and database records are handled under strict non-disclosure principles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to modify any previously submitted details, please reach out directly:
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
