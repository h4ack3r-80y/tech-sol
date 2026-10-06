import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ContactForm } from "@/components/forms/ContactForm";
import { Phone, MessageSquare, MapPin, Calendar, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Shayan Ahmad Digital Solutions",
  description:
    "Get in touch with Shayan Ahmad Digital Solutions in Islamabad, Pakistan. Direct WhatsApp, phone, and project consultation inquiries.",
};

const FRAME =
  "rounded-3xl p-[1.5px] bg-gradient-to-br from-blue-500/50 via-indigo-500/25 to-cyan-400/40";
const FRAME_INNER = "rounded-3xl bg-white dark:bg-[#0A1226] h-full";

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#04070E] min-h-screen text-slate-900 dark:text-white relative transition-colors overflow-hidden">
      {/* Premium ambient background */}
      <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-[#2E9BFF]/15 blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 -left-40 w-[480px] h-[480px] bg-[#1668DC]/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium page header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-[#7DBCFF] bg-blue-50 dark:bg-[#0E2A5C]/50 border border-blue-200 dark:border-[#2E9BFF]/40 mb-5 shadow-sm dark:shadow-[0_0_18px_rgba(46,155,255,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display ts-text-glow leading-[1.12]">
            Contact{" "}
            <span className="ts-text-gradient">Shayan Ahmad</span>{" "}
            Digital Solutions
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
            Whether you are scoping a custom POS/ERP solution, planning an enterprise web application, or need cybersecurity consulting, we are ready to assist.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct channels & Verified Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className={FRAME}>
              <div className={`${FRAME_INNER} p-8`}>
                <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#1C2C4E] pb-4">
                  Official Business Channels
                </h2>

                <ul className="mt-6 space-y-6 text-[15px]">
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_-6px_rgba(46,155,255,0.6)]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Location
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white text-[17px]">
                        {siteConfig.business.location.city}, {siteConfig.business.location.country}
                      </span>
                      <span className="text-[13px] text-slate-500 dark:text-slate-400 block mt-0.5">
                        {siteConfig.business.location.scopeNote}
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_-6px_rgba(16,185,129,0.6)]">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        WhatsApp Messaging
                      </span>
                      <a
                        href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
                          siteConfig.business.contact.whatsappMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 hover:underline text-[17px]"
                      >
                        {siteConfig.business.contact.whatsappDisplay}
                      </a>
                      <span className="text-[13px] text-slate-500 dark:text-slate-400 block mt-0.5">
                        Direct messaging for fast responses.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_-6px_rgba(46,155,255,0.6)]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Telephone
                      </span>
                      <a
                        href={`tel:${siteConfig.business.contact.phoneRaw}`}
                        className="font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-[17px]"
                      >
                        {siteConfig.business.contact.phoneDisplay}
                      </a>
                      <span className="text-[13px] text-slate-500 dark:text-slate-400 block mt-0.5">
                        Direct consultation calls.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Action Cards */}
            <div className={FRAME}>
              <div className={`${FRAME_INNER} p-6`}>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                  Alternative Inquiries
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/book-a-consultation"
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-[#070D1C] hover:bg-blue-50 dark:hover:bg-[#0E2A5C]/40 border border-slate-200 dark:border-[#1C2C4E] hover:border-blue-400/60 dark:hover:border-blue-500/50 text-[15px] font-semibold text-slate-900 dark:text-white transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Book a Technology Consultation
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/request-a-quote"
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-[#070D1C] hover:bg-blue-50 dark:hover:bg-[#0E2A5C]/40 border border-slate-200 dark:border-[#1C2C4E] hover:border-blue-400/60 dark:hover:border-blue-500/50 text-[15px] font-semibold text-slate-900 dark:text-white transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      Request a Formal Quotation
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Privacy & Security guarantee */}
            <div className="rounded-2xl p-[1.5px] bg-gradient-to-r from-emerald-500/40 via-teal-500/20 to-emerald-500/40">
              <div className="rounded-2xl bg-slate-100 dark:bg-[#070D1C] p-5 text-[13px] text-slate-600 dark:text-slate-300 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 dark:text-white">Confidentiality Guarantee:</strong> All project discussions, operational specifics, and communications are held strictly confidential.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Full Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className={FRAME}>
              <div className={`${FRAME_INNER} p-8 sm:p-10`}>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-[#7DBCFF] bg-blue-50 dark:bg-[#0E2A5C]/50 border border-blue-200 dark:border-[#2E9BFF]/40 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                    <span>Project Inquiry</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
                    Send a Project Request
                  </h2>
                  <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-1.5">
                    Complete the form below to outline your requirements. We review inquiries directly and respond promptly.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
