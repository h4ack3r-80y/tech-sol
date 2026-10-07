"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContent } from "@/context/ContentContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  Menu,
  X,
  ChevronDown,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Shield,
} from "lucide-react";

export function Header() {
  const { config, isAdminAuthenticated } = useContent();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const ledgerProUrl = config.ledgerPro?.url || "https://www.ledgerprosolution.com";

  return (
    <header className="sticky top-3 sm:top-4 z-50 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto rounded-full bg-white/90 dark:bg-[#0A1226]/90 backdrop-blur-xl border border-slate-200 dark:border-[#1C2C4E] shadow-[0_10px_36px_-10px_rgba(46,155,255,0.22)] px-4 sm:px-5 transition-colors">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0 rounded-xl overflow-hidden bg-slate-900 border border-blue-500/40 shadow-[0_0_18px_rgba(46,155,255,0.45)] transition-transform group-hover:scale-105">
              <Image
                src="/images/techsol-symbol.png"
                alt="TechSol Official Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 dark:text-white text-xl tracking-tight leading-none font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Tech<span className="text-blue-600 dark:text-[#2E9BFF] drop-shadow-[0_0_12px_rgba(46,155,255,0.65)]">Sol</span>
              </span>
              <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase font-mono mt-0.5">
                Technology &bull; Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors rounded-lg"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors flex items-center gap-1 rounded-lg"
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white dark:bg-[#0A1226] border border-slate-200 dark:border-[#1C2C4E] rounded-2xl shadow-xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 px-3 py-1.5 uppercase tracking-wider font-mono">
                    Core Capabilities
                  </div>
                  <div className="space-y-0.5">
                    {config.services.slice(0, 7).map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#12203A]/60 transition-colors"
                      >
                        <span>{service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-60" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 dark:border-[#1C2C4E] px-3">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-between"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors rounded-lg"
            >
              Projects
            </Link>

            <Link
              href="/#reviews"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors rounded-lg"
            >
              Reviews
            </Link>

            <Link
              href="/about"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors rounded-lg"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors rounded-lg"
            >
              Contact
            </Link>
          </nav>

          {/* Actions: Theme Toggle & Corporate CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            {/* Corporate Blue Button */}
            <Link
              href="/request-a-quote"
              className="ts-btn-primary inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs font-semibold text-white rounded-full transition-all hover:scale-[1.01]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Admin Access Link */}
            <Link
              href="/admin"
              className="p-2 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-[#12203A] transition-colors"
              title={isAdminAuthenticated ? "Admin Dashboard (Logged In)" : "Admin Access"}
            >
              <Shield className={`w-4 h-4 ${isAdminAuthenticated ? "text-emerald-500" : ""}`} />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />

            <a
              href={`https://wa.me/${config.business.contact.whatsappRaw}?text=${encodeURIComponent(
                config.business.contact.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-[#12203A] border border-emerald-200 dark:border-emerald-500/20 rounded-full transition-colors min-h-[40px] flex items-center justify-center"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-[#12203A] border border-slate-200 dark:border-[#1C2C4E] rounded-full transition-colors min-h-[40px] flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto rounded-3xl border border-slate-200 dark:border-[#1C2C4E] bg-white/95 dark:bg-[#0A1226]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-3">
          {/* LedgerPro Solution Mobile Link (Clean & Professional) */}
          <a
            href={ledgerProUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 hover:bg-blue-100/60 dark:hover:bg-blue-900/40 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <span>LedgerPro Solution</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase text-blue-700 dark:text-blue-300 bg-white dark:bg-[#0A1120] border border-blue-200 dark:border-blue-800">
                    Cloud SaaS
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Online Business Registration &amp; Khata Platform
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          </a>

          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#12203A]/60"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#12203A]/60"
            >
              Services
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#12203A]/60"
            >
              Projects
            </Link>
            <Link
              href="/#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#12203A]/60"
            >
              Reviews
            </Link>
            <Link
              href="/process"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#12203A]/60"
            >
              Process
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#12203A]/60"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#12203A]/60"
            >
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-[#1C2C4E] flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#0D1830]/60 border border-slate-200 dark:border-[#24365C]">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Display Theme
              </span>
              <ThemeToggle showLabel={true} />
            </div>

            <Link
              href="/request-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="ts-btn-primary w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-full text-sm font-semibold text-white transition-all shadow-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/book-a-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#0D1830]/60 hover:bg-slate-200 dark:hover:bg-[#12203A] border border-slate-200 dark:border-[#24365C] transition-colors"
            >
              Book a Consultation
            </Link>

            {/* Mobile Admin Link */}
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Shield className="w-3.5 h-3.5 text-blue-500" />
              <span>Admin Portal {isAdminAuthenticated ? "(Logged In)" : ""}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
