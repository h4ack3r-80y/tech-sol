"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
    siteConfig.business.contact.whatsappMessage
  )}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shayan Ahmad Digital Solutions on WhatsApp"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      >
        <MessageSquare className="w-5 h-5 text-white flex-shrink-0" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
