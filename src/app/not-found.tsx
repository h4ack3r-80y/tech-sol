import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, MessageSquare, Compass } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 dark:bg-[#070B14] px-4 py-20 text-slate-900 dark:text-white transition-colors relative">
      <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" />
      <div className="max-w-lg w-full text-center space-y-6 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] shadow-xl relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto shadow-sm">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Error 404 &bull; Page Not Found
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Resource Not Located
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            The page or document you are trying to access does not exist or has been relocated within our architecture.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-sm transition-colors"
          >
            <span>Explore Services</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400">
          Need immediate assistance? Message us on{" "}
          <a
            href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
              "Hello TechSol, I encountered a 404 page on your website."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
