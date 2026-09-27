import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Phone, MessageSquare, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070B14] text-slate-400 border-t border-slate-800">
      {/* Top pre-footer banner */}
      <div className="border-b border-slate-800/80 bg-[#0B1222] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 relative flex-shrink-0 bg-white p-0.5 rounded-full border border-blue-500/30 flex items-center justify-center overflow-hidden shadow-sm">
              <Image
                src="/images/official-logo.png"
                alt="Shayan Ahmad Digital Solutions"
                width={44}
                height={44}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <div className="text-white font-bold text-lg tracking-tight">
                {siteConfig.business.name}
              </div>
              <div className="text-blue-400 text-xs font-mono font-medium tracking-wider uppercase">
                {siteConfig.business.tagline}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
                siteConfig.business.contact.whatsappMessage
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
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm hover:scale-[1.01]"
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
              {siteConfig.business.coreMission}
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              {siteConfig.business.location.scopeNote}
            </div>

            {(siteConfig.business.toggles.showFiverr ||
              siteConfig.business.toggles.showUpwork) && (
              <div className="pt-3 flex items-center gap-3">
                {siteConfig.business.toggles.showFiverr && (
                  <a
                    href={siteConfig.business.toggles.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10"
                  >
                    Find Us on Fiverr
                  </a>
                )}
                {siteConfig.business.toggles.showUpwork && (
                  <a
                    href={siteConfig.business.toggles.upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10"
                  >
                    Find Us on Upwork
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {siteConfig.services.slice(0, 5).map((service) => (
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
                  All 8 Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Solutions */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
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
                  href="/book-a-consultation"
                  className="hover:text-white transition-colors"
                >
                  Book a Consultation
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
                  {siteConfig.business.location.city},{" "}
                  {siteConfig.business.location.country}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.business.contact.phoneRaw}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {siteConfig.business.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
                    siteConfig.business.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium"
                >
                  WhatsApp: {siteConfig.business.contact.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} {siteConfig.business.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
