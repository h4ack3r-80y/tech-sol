import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { Phone, MessageSquare, MapPin, Calendar, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Shayan Ahmad Digital Solutions",
  description:
    "Get in touch with Shayan Ahmad Digital Solutions in Islamabad, Pakistan. Direct WhatsApp, phone, and project consultation inquiries.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#04070E] min-h-screen text-slate-900 dark:text-white relative transition-colors">
      <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Direct Communication"
          title="Contact Shayan Ahmad Digital Solutions"
          subtitle="Whether you are scoping a custom POS/ERP solution, planning an enterprise web application, or need cybersecurity consulting, we are ready to assist."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct channels & Verified Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl p-8 space-y-6 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#1C2C4E] pb-4">
                Official Business Channels
              </h2>

              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 block">
                      Location
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white text-base">
                      {siteConfig.business.location.city}, {siteConfig.business.location.country}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                      {siteConfig.business.location.scopeNote}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 block">
                      WhatsApp Messaging
                    </span>
                    <a
                      href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
                        siteConfig.business.contact.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 hover:underline text-base"
                    >
                      {siteConfig.business.contact.whatsappDisplay}
                    </a>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                      Direct messaging for fast responses.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 block">
                      Telephone
                    </span>
                    <a
                      href={`tel:${siteConfig.business.contact.phoneRaw}`}
                      className="font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      {siteConfig.business.contact.phoneDisplay}
                    </a>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                      Direct consultation calls.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Action Cards */}
            <div className="rounded-2xl p-6 space-y-4 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Alternative Inquiries
              </h3>
              <div className="space-y-3">
                <Link
                  href="/book-a-consultation"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-[#070D1C] hover:bg-slate-100 dark:hover:bg-[#111c34] border border-slate-200 dark:border-[#1C2C4E] text-sm font-semibold text-slate-900 dark:text-white transition-all group"
                >
                  <span className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Book a Technology Consultation
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">↗</span>
                </Link>

                <Link
                  href="/request-a-quote"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-[#070D1C] hover:bg-slate-100 dark:hover:bg-[#111c34] border border-slate-200 dark:border-[#1C2C4E] text-sm font-semibold text-slate-900 dark:text-white transition-all group"
                >
                  <span className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    Request a Formal Quotation
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">↗</span>
                </Link>
              </div>
            </div>

            {/* Privacy & Security guarantee */}
            <div className="p-5 rounded-2xl bg-slate-100 dark:bg-[#070D1C] border border-slate-200 dark:border-[#1C2C4E] text-xs text-slate-600 dark:text-slate-300 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 dark:text-white">Confidentiality Guarantee:</strong> All project discussions, operational specifics, and communications are held strictly confidential.
              </span>
            </div>
          </div>

          {/* Right Column: Full Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Send a Project Request
                </h2>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                  Complete the form below to outline your requirements. We review inquiries directly and respond promptly.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
