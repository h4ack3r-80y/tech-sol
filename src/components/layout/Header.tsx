"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X, ChevronDown, MessageSquare, ArrowRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#070B14]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0 rounded-xl overflow-hidden bg-slate-900 border border-blue-500/40 shadow-sm transition-transform group-hover:scale-105">
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
              <span className="font-extrabold text-slate-900 dark:text-white text-xl tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Tech<span className="text-blue-600 dark:text-blue-400">Sol</span>
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
                <div className="absolute top-full left-0 w-80 bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 px-3 py-1.5 uppercase tracking-wider font-mono">
                    Core Capabilities
                  </div>
                  <div className="space-y-0.5">
                    {siteConfig.services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                      >
                        <span>{service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-60" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 px-3">
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
              href="/solutions"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors rounded-lg"
            >
              Solutions
            </Link>

            <Link
              href="/projects"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors rounded-lg"
            >
              Projects
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

          {/* Actions: Theme Toggle, WhatsApp & Corporate CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
                siteConfig.business.contact.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-500/30 rounded-xl transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Corporate Blue Button */}
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-all hover:scale-[1.01]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />

            <a
              href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
                siteConfig.business.contact.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800 border border-emerald-200 dark:border-emerald-500/20 rounded-xl transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-colors"
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
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#070B14]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              Solutions
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              Projects
            </Link>
            <Link
              href="/process"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              Process
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Display Theme
              </span>
              <ThemeToggle showLabel={true} />
            </div>

            <Link
              href="/request-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-a-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
