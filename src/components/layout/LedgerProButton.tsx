"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function LedgerProButton() {
  const href = siteConfig.ledgerPro?.url || "https://www.ledgerprosolution.com";

  return (
    <aside aria-label="LedgerPro quick launch" className="fixed bottom-24 right-6 z-40">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open LedgerPro Solution - Online Business Registration & Cloud Management"
        title="LedgerPro Solution - Online Business Registration & Cloud Management"
        className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-600 text-white px-4 py-3 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        <span className="text-xs font-extrabold tracking-wide hidden sm:inline">
          LedgerPro
        </span>
        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-white/20 text-white border border-white/25 hidden sm:inline">
          SaaS
        </span>
        <ExternalLink className="w-4 h-4 text-blue-100 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
      </a>
    </aside>
  );
}
