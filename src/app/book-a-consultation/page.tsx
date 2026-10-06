"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calendar, Clock, Video, CheckCircle, Shield } from "lucide-react";

export default function BookConsultationPage() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  consultationTopic: "POS/ERP & Business Systems",
  preferredDate: "",
  preferredTime: "Morning (10:00 AM - 1:00 PM PKT)",
  notes: "",
 });

 const [booked, setBooked] = useState(false);

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setBooked(true);
 };

 return (
  <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#04070E] min-h-screen text-slate-900 dark:text-white relative transition-colors">
   <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" />
   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <SectionHeading
     kicker="Executive Advisory"
     title="Book a Consultation"
     subtitle="Schedule a focused conversation to evaluate your project scope, technical constraints, and digital system requirements."
     alignment="center"
    />

    <div className="mt-10 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1226] shadow-sm">
     <div className="border-b border-slate-200 dark:border-[#1C2C4E] pb-6 mb-8">
      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 px-3 py-1 rounded-full mb-3">
       <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
       <span>Appointment Scope</span>
      </div>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
       Technology Consultation
      </h2>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-normal">
       A focused conversation to understand your project, business requirements, challenges, and potential technology solutions with founder and technology consultant Shayan Ahmad.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-xs text-slate-700 dark:text-slate-200 font-mono">
       <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#070D1C] border border-slate-200 dark:border-[#1C2C4E]">
        <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <span>30 - 45 Minutes</span>
       </div>
       <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#070D1C] border border-slate-200 dark:border-[#1C2C4E]">
        <Video className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
        <span>Google Meet / Phone</span>
       </div>
       <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#070D1C] border border-slate-200 dark:border-[#1C2C4E]">
        <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        <span>Confidential Review</span>
       </div>
      </div>
     </div>

     {booked ? (
      <div className="rounded-3xl border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/20 p-8 text-center space-y-4 shadow-sm">
       <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-300 dark:border-emerald-500/30">
        <CheckCircle className="w-6 h-6" />
       </div>
       <h3 className="text-xl font-bold text-slate-900 dark:text-white">Consultation Scheduled</h3>
       <p className="text-sm font-medium text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
        Thank you, {formData.name}. Your consultation request for <strong className="text-slate-900 dark:text-white">{formData.consultationTopic}</strong> has been noted. Shayan Ahmad will confirm the meeting link and precise time via WhatsApp or email.
       </p>
       <div className="pt-2">
        <Link
         href="/"
         className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline"
        >
         Return to Homepage ↗
        </Link>
       </div>
      </div>
     ) : (
      <form onSubmit={handleSubmit} className="space-y-6">
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
         <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
          Your Name <span className="text-blue-600 dark:text-blue-400">*</span>
         </label>
         <input
          type="text"
          required
          placeholder="e.g. Asim Riaz"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#1C2C4E] bg-slate-50 dark:bg-[#070D1C] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
         />
        </div>

        <div>
         <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
          Company / Organization
         </label>
         <input
          type="text"
          placeholder="Your business name"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#1C2C4E] bg-slate-50 dark:bg-[#070D1C] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
         />
        </div>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
         <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
          Email Address <span className="text-blue-600 dark:text-blue-400">*</span>
         </label>
         <input
          type="email"
          required
          placeholder="name@company.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#1C2C4E] bg-slate-50 dark:bg-[#070D1C] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
         />
        </div>

        <div>
         <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
          Phone / WhatsApp <span className="text-blue-600 dark:text-blue-400">*</span>
         </label>
         <input
          type="tel"
          required
          placeholder="+92 310 4270426"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#1C2C4E] bg-slate-50 dark:bg-[#070D1C] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
         />
        </div>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
         <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
          Primary Topic
         </label>
         <select
          value={formData.consultationTopic}
          onChange={(e) => setFormData({ ...formData, consultationTopic: e.target.value })}
          className="w-full px-3 py-3 rounded-xl border border-slate-200 dark:border-[#1C2C4E] bg-slate-50 dark:bg-[#070D1C] text-slate-900 dark:text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
         >
          <option value="POS/ERP & Business Systems" className="bg-white dark:bg-[#0A1226] text-slate-900 dark:text-white">POS / ERP &amp; Operations</option>
          <option value="Custom Software" className="bg-white dark:bg-[#0A1226] text-slate-900 dark:text-white">Custom Software Architecture</option>
          <option value="Web Platform Development" className="bg-white dark:bg-[#0A1226] text-slate-900 dark:text-white">Web Development</option>
          <option value="Cybersecurity Review" className="bg-white dark:bg-[#0A1226] text-slate-900 dark:text-white">Cybersecurity Assessment</option>
          <option value="AI & Automation" className="bg-white dark:bg-[#0A1226] text-slate-900 dark:text-white">Workflow Automation</option>
          <option value="Cloud Infrastructure" className="bg-white dark:bg-[#0A1226] text-slate-900 dark:text-white">Cloud Infrastructure</option>
         </select>
        </div>

        <div>
         <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
          Preferred Date <span className="text-blue-600 dark:text-blue-400">*</span>
         </label>
         <input
          type="date"
          required
          value={formData.preferredDate}
          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
          className="w-full px-3 py-3 rounded-xl border border-slate-200 dark:border-[#1C2C4E] bg-slate-50 dark:bg-[#070D1C] text-slate-900 dark:text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
         />
        </div>

        <div>
         <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
          Time Window
         </label>
         <select
          value={formData.preferredTime}
          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
          className="w-full px-3 py-3 rounded-xl border border-slate-200 dark:border-[#1C2C4E] bg-slate-50 dark:bg-[#070D1C] text-slate-900 dark:text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
         >
          <option value="Morning (10:00 AM - 1:00 PM PKT)" className="bg-white dark:bg-[#0A1226] text-slate-900 dark:text-white">Morning (10:00 AM - 1:00 PM PKT)</option>
          <option value="Afternoon (2:00 PM - 5:00 PM PKT)" className="bg-white dark:bg-[#0A1226] text-slate-900 dark:text-white">Afternoon (2:00 PM - 5:00 PM PKT)</option>
          <option value="Evening (6:00 PM - 8:00 PM PKT)" className="bg-white dark:bg-[#0A1226] text-slate-900 dark:text-white">Evening (6:00 PM - 8:00 PM PKT)</option>
         </select>
        </div>
       </div>

       <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
         Brief Agenda / Questions to Cover
        </label>
        <textarea
         rows={3}
         placeholder="Outline the specific questions or business systems you would like to discuss..."
         value={formData.notes}
         onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
         className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#1C2C4E] bg-slate-50 dark:bg-[#070D1C] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
        />
       </div>

       <div className="pt-2">
        <button
         type="submit"
         className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl ts-btn-primary text-white font-semibold text-sm transition-all shadow-sm"
        >
         <Calendar className="w-4 h-4" />
         <span>Confirm Consultation Request ↗</span>
        </button>
       </div>
      </form>
     )}
    </div>

    <div className="mt-8 text-center text-xs font-mono text-slate-500 dark:text-slate-400">
     Ready for integration with GoDaddy Appointments, Calendly, or Google Calendar scheduling.
    </div>
   </div>
  </div>
 );
}
