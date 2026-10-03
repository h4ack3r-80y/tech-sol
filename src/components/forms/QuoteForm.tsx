"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceNeeded: "POS / ERP Development",
    whatBuilding: "",
    problemSolving: "",
    timeline: "1 to 2 months",
    budget: "",
    contactMethod: "WhatsApp",
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

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.whatBuilding.trim() ||
      !formData.problemSolving.trim()
    ) {
      setErrorMsg("Please answer the project questions and provide your contact information.");
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
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Quotation Inquiry Submitted</h3>
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
          Thank you for providing the scope details for your project. Shayan Ahmad will review your objectives and prepare a tailored technical discussion via {formData.contactMethod}.
        </p>
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
                serviceNeeded: "POS / ERP Development",
                whatBuilding: "",
                problemSolving: "",
                timeline: "1 to 2 months",
                budget: "",
                contactMethod: "WhatsApp",
                honeypot: "",
              });
            }}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
          >
            Submit another inquiry &rarr;
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Bot trap */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
        />
      </div>

      {errorMsg && (
        <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-sm flex items-start gap-2.5 shadow-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Question 1 */}
      <div className="space-y-2">
        <label className="block text-sm font-bold text-slate-900 dark:text-white">
          1. What are you trying to build? <span className="text-blue-600 dark:text-blue-400">*</span>
        </label>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          e.g., A custom offline POS system for our electronics shop, an enterprise inventory portal, a corporate website, or a specialized automation workflow.
        </p>
        <input
          type="text"
          required
          placeholder="Describe the system or application you need..."
          value={formData.whatBuilding}
          onChange={(e) => setFormData({ ...formData, whatBuilding: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0A101F] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
        />
      </div>

      {/* Question 2 */}
      <div className="space-y-2">
        <label className="block text-sm font-bold text-slate-900 dark:text-white">
          2. What operational problem or bottleneck are you trying to solve? <span className="text-blue-600 dark:text-blue-400">*</span>
        </label>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          e.g., Counter queues are slow, stock valuation is inaccurate, repetitive manual invoice entry, or vulnerabilities in current systems.
        </p>
        <textarea
          required
          rows={3}
          placeholder="Explain your current challenges or operational bottlenecks..."
          value={formData.problemSolving}
          onChange={(e) => setFormData({ ...formData, problemSolving: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0A101F] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
        />
      </div>

      {/* Question 3 & 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
            3. Primary Service Needed <span className="text-blue-600 dark:text-blue-400">*</span>
          </label>
          <select
            value={formData.serviceNeeded}
            onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
            className="w-full px-3 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1527] text-slate-900 dark:text-white text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
          >
            {siteConfig.services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other Technology Solution">Other Technology Solution</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
            4. Expected Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-3 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1527] text-slate-900 dark:text-white text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
          >
            <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
            <option value="1 to 2 months">1 to 2 months</option>
            <option value="3 to 6 months">3 to 6 months</option>
            <option value="Flexible / Discovery Phase">Flexible / Discovery Phase</option>
          </select>
        </div>
      </div>

      {/* Question 5 */}
      <div className="space-y-2">
        <label className="block text-sm font-bold text-slate-900 dark:text-white">
          5. Estimated Budget Range <span className="text-slate-500 dark:text-slate-400 font-normal text-xs">(Optional)</span>
        </label>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Budget is entirely optional. Sharing your expectation helps us propose realistic scopes and technical architectures.
        </p>
        <input
          type="text"
          placeholder="e.g. PKR 150,000 / USD $1,000 / To be estimated"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0A101F] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
        />
      </div>

      {/* Question 6: Contact details */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-6 space-y-4">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
          6. How Should We Contact You?
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-2">
              Your Name <span className="text-blue-600 dark:text-blue-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0A101F] text-slate-900 dark:text-white text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-2">
              Business / Organization
            </label>
            <input
              type="text"
              placeholder="Your company or shop name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0A101F] text-slate-900 dark:text-white text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-2">
              Email <span className="text-blue-600 dark:text-blue-400">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0A101F] text-slate-900 dark:text-white text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-2">
              Phone / WhatsApp <span className="text-blue-600 dark:text-blue-400">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="+92 310 4270426"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0A101F] text-slate-900 dark:text-white text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-2">
              Preferred Method
            </label>
            <select
              value={formData.contactMethod}
              onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1527] text-slate-900 dark:text-white text-sm focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 transition-all outline-none shadow-sm"
            >
              <option value="WhatsApp">WhatsApp</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Email">Email</option>
            </select>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20 hover:scale-[1.01] disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? "Submitting..." : "Submit Quotation Request"}</span>
        </button>
      </div>
    </form>
  );
}
