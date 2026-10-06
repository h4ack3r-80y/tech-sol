"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
 const [formData, setFormData] = useState({
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "Pakistan",
  serviceNeeded: "POS/ERP Development",
  projectType: "New System Development",
  budgetRange: "",
  timeline: "",
  description: "",
  preferredContact: "WhatsApp",
  honeypot: "",
 });

 const [submitted, setSubmitted] = useState(false);
 const [errorMsg, setErrorMsg] = useState("");
 const [isSubmitting, setIsSubmitting] = useState(false);

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setErrorMsg("");

  if (formData.honeypot) {
   setSubmitted(true);
   return;
  }

  if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.description.trim()) {
   setErrorMsg("Please complete all required fields (Name, Email, Phone/WhatsApp, and Project Description).");
   return;
  }

  setIsSubmitting(true);
  setTimeout(() => {
   setIsSubmitting(false);
   setSubmitted(true);
  }, 600);
 };

 if (submitted) {
  return (
   <div className="rounded-3xl border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/20 backdrop-blur-xl p-8 text-center space-y-4 shadow-sm">
    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-300 dark:border-emerald-500/30">
     <CheckCircle className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Project Request Received</h3>
    <p className="text-sm font-medium text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
     Thank you for reaching out to {siteConfig.business.name}. Shayan Ahmad will review your requirements and respond via your preferred contact method ({formData.preferredContact}).
    </p>
    <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
     Need an urgent response? Message directly on WhatsApp at{" "}
     <a
      href={`https://wa.me/${siteConfig.business.contact.whatsappRaw}?text=${encodeURIComponent(
       siteConfig.business.contact.whatsappMessage
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-emerald-600 dark:text-emerald-400 font-bold underline hover:text-emerald-500 dark:hover:text-emerald-300"
     >
      {siteConfig.business.contact.whatsappDisplay}
     </a>.
    </div>
    <div className="pt-2">
     <button
      type="button"
      onClick={() => {
       setSubmitted(false);
       setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "Pakistan",
        serviceNeeded: "POS/ERP Development",
        projectType: "New System Development",
        budgetRange: "",
        timeline: "",
        description: "",
        preferredContact: "WhatsApp",
        honeypot: "",
       });
      }}
      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
     >
      Send another message &rarr;
     </button>
    </div>
   </div>
  );
 }

 return (
  <form onSubmit={handleSubmit} className="space-y-6">
   {/* Invisible Honeypot */}
   <div className="hidden" aria-hidden="true">
    <label htmlFor="website_hp">Leave this field blank</label>
    <input
     id="website_hp"
     type="text"
     value={formData.honeypot}
     onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
     tabIndex={-1}
     autoComplete="off"
    />
   </div>

   {errorMsg && (
    <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-sm flex items-start gap-2.5 shadow-sm">
     <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
     <span>{errorMsg}</span>
    </div>
   )}

   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div>
     <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
      Your Full Name <span className="text-blue-600 dark:text-blue-400">*</span>
     </label>
     <input
      type="text"
      required
      placeholder="e.g. Tariq Mehmood"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-[#24365C] bg-white dark:bg-[#070D1C] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
     />
    </div>

    <div>
     <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
      Business / Company Name
     </label>
     <input
      type="text"
      placeholder="e.g. Athar Superstore / IHS Solar"
      value={formData.company}
      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-[#24365C] bg-white dark:bg-[#070D1C] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
     />
    </div>
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div>
     <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
      Email Address <span className="text-blue-600 dark:text-blue-400">*</span>
     </label>
     <input
      type="email"
      required
      placeholder="name@company.com"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-[#24365C] bg-white dark:bg-[#070D1C] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
     />
    </div>

    <div>
     <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
      Phone / WhatsApp <span className="text-blue-600 dark:text-blue-400">*</span>
     </label>
     <input
      type="tel"
      required
      placeholder="+92 300 1234567"
      value={formData.phone}
      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-[#24365C] bg-white dark:bg-[#070D1C] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
     />
    </div>
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
    <div>
     <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
      Country <span className="text-blue-600 dark:text-blue-400">*</span>
     </label>
     <input
      type="text"
      required
      value={formData.country}
      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-[#24365C] bg-white dark:bg-[#070D1C] text-slate-900 dark:text-white text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
     />
    </div>

    <div>
     <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
      Service Needed <span className="text-blue-600 dark:text-blue-400">*</span>
     </label>
     <select
      value={formData.serviceNeeded}
      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
      className="w-full px-3 py-3 rounded-xl border border-slate-300 dark:border-[#24365C] bg-white dark:bg-[#0A1226] text-slate-900 dark:text-white text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
     >
      <option value="POS/ERP Development">POS / ERP Development</option>
      <option value="Custom Software">Custom Software Development</option>
      <option value="Web Development">Web Development</option>
      <option value="Mobile App Development">Mobile App Development</option>
      <option value="AI & Automation">AI &amp; Automation</option>
      <option value="Cybersecurity">Cybersecurity Assessment</option>
      <option value="Cloud Solutions">Cloud Solutions</option>
      <option value="SaaS Development">SaaS Development</option>
      <option value="Other">Other Digital Solution</option>
     </select>
    </div>

    <div>
     <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
      Preferred Contact
     </label>
     <select
      value={formData.preferredContact}
      onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
      className="w-full px-3 py-3 rounded-xl border border-slate-300 dark:border-[#24365C] bg-white dark:bg-[#0A1226] text-slate-900 dark:text-white text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
     >
      <option value="WhatsApp">WhatsApp Message</option>
      <option value="Phone Call">Phone Call</option>
      <option value="Email">Email Communication</option>
     </select>
    </div>
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div>
     <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
      Expected Timeline (Optional)
     </label>
     <input
      type="text"
      placeholder="e.g. Within 1 month / Flexible"
      value={formData.timeline}
      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-[#24365C] bg-white dark:bg-[#070D1C] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
     />
    </div>

    <div>
     <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
      Budget Range (Optional)
     </label>
     <input
      type="text"
      placeholder="e.g. PKR 100k-300k / To be discussed"
      value={formData.budgetRange}
      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-[#24365C] bg-white dark:bg-[#070D1C] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
     />
    </div>
   </div>

   <div>
    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
     Project Description &amp; Operational Needs <span className="text-blue-600 dark:text-blue-400">*</span>
    </label>
    <textarea
     required
     rows={4}
     placeholder="Briefly describe what you are trying to build, your current business challenges, or specific operational requirements..."
     value={formData.description}
     onChange={(e) => setFormData({ ...formData, description: e.target.value })}
     className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-[#24365C] bg-white dark:bg-[#070D1C] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
    />
   </div>

   <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-mono">
    <strong>Privacy Notice:</strong> We respect your business confidentiality. Submitted details are used solely to evaluate your technical requirements and will never be shared with third parties.
   </div>

   <button
    type="submit"
    disabled={isSubmitting}
    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full ts-btn-primary text-white font-semibold text-sm transition-all shadow-md hover:scale-[1.01] disabled:opacity-50"
   >
    <Send className="w-4 h-4" />
    <span>{isSubmitting ? "Submitting..." : "Send Project Request"}</span>
   </button>
  </form>
 );
}
