"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useContent } from "@/context/ContentContext";
import { Phone, MessageSquare, MapPin, ArrowRight, ExternalLink, Sparkles, Shield } from "lucide-react";

export function Footer() {
  const { config, isAdminAuthenticated } = useContent();
  const currentYear = new Date().getFullYear();

  const ledgerProUrl = config.ledgerPro?.url || "https://www.ledgerprosolution.com";

  return (
    <footer className="bg-[#04070E] bg-ts-ambient-soft text-slate-400 border-t border-[#1C2C4E]">
      {/* Top pre-footer banner */}
      <div className="border-b border-[#1C2C4E]/80 bg-[#070D1C] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 relative flex-shrink-0 bg-white p-0.5 rounded-full border border-blue-500/30 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(46,155,255,0.5)]">
              <Image
                src="/images/official-logo.png"
                alt="TechSol Official Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <div className="text-white font-bold text-lg tracking-tight">
                {config.business.name}
              </div>
              <div className="text-blue-400 text-xs font-mono font-medium tracking-wider uppercase">
                {config.business.tagline}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${config.business.contact.whatsappRaw}?text=${encodeURIComponent(
                config.business.contact.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/50 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900/60 text-xs font-semibold transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Chat on WhatsApp
            </a>
            <Link
              href="/request-a-quote"
              className="ts-btn-primary inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-white text-xs font-semibold transition-all hover:scale-[1.01]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider font-mono">
              Technology Solutions
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md font-normal">
              {config.business.coreMission}
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              {config.business.location.scopeNote}
            </div>

            {/* Flagship SaaS Spotlight Box */}
            <div className="p-3.5 rounded-2xl bg-[#0A1120] border border-[#1C2C4E] hover:border-[#2E9BFF]/50 hover:shadow-[0_8px_28px_-10px_rgba(46,155,255,0.5)] transition-all max-w-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Flagship Cloud Platform</span>
                </span>
                <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                  Cloud SaaS
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Register your business online and manage multi-branch Khata ledgers with LedgerPro Solution.
              </p>
              <a
                href={ledgerProUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>www.ledgerprosolution.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {config.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-blue-400 hover:text-blue-300 font-semibold text-xs flex items-center gap-1 mt-1"
                >
                  All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Solutions */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">
              Company &amp; SaaS
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a
                  href={ledgerProUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>LedgerPro Cloud SaaS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Engineering Process
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Strategic Solutions
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Verified Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/request-a-quote"
                  className="hover:text-white transition-colors"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">
              Contact &amp; Location
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>
                  {config.business.location.city},{" "}
                  {config.business.location.country}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${config.business.contact.phoneRaw}`}
                  className="hover:text-white transition-colors font-medium font-mono text-xs"
                >
                  {config.business.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${config.business.contact.whatsappRaw}?text=${encodeURIComponent(
                    config.business.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium font-mono text-xs"
                >
                  WhatsApp: {config.business.contact.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright, legal & Admin link */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} {config.business.legalName}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-blue-400 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-700">|</span>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1 hover:text-blue-400 transition-colors text-slate-400"
            >
              <Shield className={`w-3.5 h-3.5 ${isAdminAuthenticated ? "text-emerald-500" : ""}`} />
              <span>Admin Portal {isAdminAuthenticated ? "(Logged In)" : ""}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
