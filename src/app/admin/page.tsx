"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useContent, AdminProfile } from "@/context/ContentContext";
import { ServiceItem, ProjectItem, FaqItem } from "@/config/siteConfig";
import {
  Shield,
  Lock,
  User,
  KeyRound,
  FileText,
  Settings,
  Database,
  LogOut,
  ExternalLink,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Download,
  Upload,
  RefreshCw,
  Globe,
  Sparkles,
  Layers,
  HelpCircle,
  Briefcase,
  Store,
  Phone,
  Mail,
  Save,
  X,
  ArrowRight,
} from "lucide-react";

export default function AdminPage() {
  const {
    config,
    isAdminAuthenticated,
    adminProfile,
    login,
    logout,
    updateAdminProfile,
    updateAdminPassword,
    updateBusiness,
    updateLedgerPro,
    addService,
    updateService,
    deleteService,
    addProject,
    updateProject,
    deleteProject,
    addFaq,
    updateFaq,
    deleteFaq,
    updateToggles,
    exportConfigJson,
    importConfigJson,
    resetToDefaults,
  } = useContent();

  // Login form state
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Navigation tab state
  const [activeTab, setActiveTab] = useState<"profile" | "content" | "settings" | "system">("content");
  const [contentSubTab, setContentSubTab] = useState<"ledgerpro" | "services" | "projects" | "faqs">("ledgerpro");

  // Notifications
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showNotify = (msg: string, type: "success" | "error" = "success") => {
    setNotification({ message: msg, type });
    setTimeout(() => setNotification(null), 3500);
  };

  // Profile edit state
  const [profileForm, setProfileForm] = useState<AdminProfile>(adminProfile);
  const [currentPassInput, setCurrentPassInput] = useState("");
  const [newPassInput, setNewPassInput] = useState("");
  const [confirmPassInput, setConfirmPassInput] = useState("");

  // Modals / forms
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [isAddingService, setIsAddingService] = useState(false);
  const [newServiceForm, setNewServiceForm] = useState<Partial<ServiceItem>>({
    id: "",
    slug: "",
    title: "",
    category: "BUILD",
    shortDescription: "",
    fullDescription: "",
    capabilities: [],
    businessValue: "",
    deliverables: [],
    ctaText: "Discuss Project",
  });

  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProjectForm, setNewProjectForm] = useState<Partial<ProjectItem>>({
    id: "",
    slug: "",
    title: "",
    category: "POS & ERP",
    businessType: "",
    positioning: "",
    overview: "",
    purpose: "",
    challenge: "",
    approach: "",
    solution: "",
    verifiedCapabilities: [],
    metrics: [],
    techStack: [],
    imagePlaceholder: "/images/projects/ihs-pos-placeholder.svg",
    statusBadge: "Verified Production System",
    featured: true,
  });

  const [editingFaqIdx, setEditingFaqIdx] = useState<number | null>(null);
  const [editingFaq, setEditingFaq] = useState<FaqItem>({ question: "", answer: "" });
  const [isAddingFaq, setIsAddingFaq] = useState(false);
  const [newFaq, setNewFaq] = useState<FaqItem>({ question: "", answer: "" });

  const [jsonImportText, setJsonImportText] = useState("");
  const [showImportModal, setShowImportModal] = useState(false);

  // Handle Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    const res = login(usernameInput, passwordInput);
    if (!res.success) {
      setLoginError(res.error || "Authentication failed");
    } else {
      showNotify("Successfully signed in to Admin Portal");
      setUsernameInput("");
      setPasswordInput("");
    }
  };

  // If not authenticated, render Login Screen
  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-[#070B14] px-4 py-12 transition-colors">
        <div className="w-full max-w-md">
          {/* Brand Emblem */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/30 mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              TechSol Admin Access
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 font-medium">
              Enterprise Control &amp; Content Management System
            </p>
          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] p-8 shadow-2xl">
            {loginError && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 font-mono">
                  Admin Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder="Enter Admin username"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 font-mono">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter password"
                    className="w-full pl-10 pr-11 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Default Credentials Notice */}
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-[11px] text-blue-700 dark:text-blue-300 font-mono flex items-center justify-between">
                <span>Default: Admin / password</span>
                <button
                  type="button"
                  onClick={() => {
                    setUsernameInput("Admin");
                    setPasswordInput("password");
                  }}
                  className="underline hover:text-blue-900 dark:hover:text-white font-bold"
                >
                  Auto-Fill
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <KeyRound className="w-4 h-4" />
                <span>Sign In to Admin Portal</span>
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 text-center">
              <Link
                href="/"
                className="text-xs font-semibold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                &larr; Return to Live Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white transition-colors">
      {/* Toast Notification */}
      {notification && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl shadow-2xl border text-sm font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-5 ${
            notification.type === "success"
              ? "bg-emerald-600 text-white border-emerald-500 shadow-emerald-600/20"
              : "bg-rose-600 text-white border-rose-500 shadow-rose-600/20"
          }`}
        >
          {notification.type === "success" ? (
            <CheckCircle2 className="w-4 h-4" />
          ) : (
            <AlertCircle className="w-4 h-4" />
          )}
          <span>{notification.message}</span>
        </div>
      )}

      {/* Top Admin Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0D1527]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left: Brand Identity */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-tight flex items-center gap-2">
                  <span>TechSol CMS Admin</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                    v2.0
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  Signed in as: <span className="font-bold text-blue-600 dark:text-blue-400">{adminProfile.username}</span>
                </div>
              </div>
            </div>

            {/* Right: Quick Actions */}
            <div className="flex items-center gap-2.5">
              <Link
                href="/"
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span className="hidden sm:inline">View Website</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </Link>

              <button
                onClick={() => {
                  logout();
                  showNotify("Logged out successfully");
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-900/40 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Primary Tabs Navigation Bar */}
        <div className="bg-slate-100/70 dark:bg-[#0A101F] border-t border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto py-2">
            {[
              { id: "content", label: "CRUD Content", icon: FileText },
              { id: "profile", label: "Admin Profile", icon: User },
              { id: "settings", label: "Site Settings", icon: Settings },
              { id: "system", label: "System & Backups", icon: Database },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Workspace Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ============================================================ */}
        {/* TAB 1: CONTENT MANAGEMENT (CRUD CONTENT)                     */}
        {/* ============================================================ */}
        {activeTab === "content" && (
          <div className="space-y-6">
            {/* Sub-tabs for content */}
            <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setContentSubTab("ledgerpro")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                  contentSubTab === "ledgerpro"
                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>LedgerPro SaaS (Flagship)</span>
              </button>

              <button
                onClick={() => setContentSubTab("services")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                  contentSubTab === "services"
                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Services ({config.services.length})</span>
              </button>

              <button
                onClick={() => setContentSubTab("projects")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                  contentSubTab === "projects"
                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Projects ({config.projects.length})</span>
              </button>

              <button
                onClick={() => setContentSubTab("faqs")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                  contentSubTab === "faqs"
                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FAQs ({config.faqs.length})</span>
              </button>
            </div>

            {/* SUBTAB: LEDGERPRO SAAS */}
            {contentSubTab === "ledgerpro" && (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-blue-500" />
                      <span>LedgerPro Solution Integration</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Manage details, link, features, and visibility of your paid cloud business management platform.
                    </p>
                  </div>
                  <a
                    href={config.ledgerPro?.url || "https://www.ledgerprosolution.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm self-start sm:self-auto"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                      Product Name
                    </label>
                    <input
                      type="text"
                      value={config.ledgerPro?.name || ""}
                      onChange={(e) => updateLedgerPro({ name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                      Target Website URL (www.ledgerprosolution.com)
                    </label>
                    <input
                      type="text"
                      value={config.ledgerPro?.url || ""}
                      onChange={(e) => updateLedgerPro({ url: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-mono text-blue-600 dark:text-blue-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                      Registration Link
                    </label>
                    <input
                      type="text"
                      value={config.ledgerPro?.registerUrl || ""}
                      onChange={(e) => updateLedgerPro({ registerUrl: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                      Badge Text
                    </label>
                    <input
                      type="text"
                      value={config.ledgerPro?.badge || ""}
                      onChange={(e) => updateLedgerPro({ badge: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                      Tagline / Positioning
                    </label>
                    <input
                      type="text"
                      value={config.ledgerPro?.tagline || ""}
                      onChange={(e) => updateLedgerPro({ tagline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                      Full SaaS Description
                    </label>
                    <textarea
                      rows={3}
                      value={config.ledgerPro?.fullDescription || ""}
                      onChange={(e) => updateLedgerPro({ fullDescription: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm leading-relaxed"
                    />
                  </div>

                  <div className="md:col-span-2 flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        Showcase Visibility on Homepage
                      </div>
                      <div className="text-xs text-slate-500">
                        Enable or disable the dedicated LedgerPro SaaS showcase banner.
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        updateLedgerPro({ enabled: !config.ledgerPro.enabled });
                        showNotify(`LedgerPro showcase ${!config.ledgerPro.enabled ? "enabled" : "disabled"}`);
                      }}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                        config.ledgerPro.enabled
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {config.ledgerPro.enabled ? "Active / Visible" : "Hidden"}
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => showNotify("LedgerPro settings saved successfully!")}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            )}

            {/* SUBTAB: SERVICES (CRUD) */}
            {contentSubTab === "services" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      Manage Services ({config.services.length})
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Create, edit, and reorganize TechSol's professional service offerings.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setNewServiceForm({
                        id: `service-${Date.now()}`,
                        slug: `new-service-${Date.now()}`,
                        title: "",
                        category: "BUILD",
                        shortDescription: "",
                        fullDescription: "",
                        capabilities: ["Feature 1", "Feature 2"],
                        businessValue: "",
                        deliverables: ["Deliverable 1"],
                        ctaText: "Discuss Project",
                      });
                      setIsAddingService(true);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Service</span>
                  </button>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {config.services.map((svc) => (
                    <div
                      key={svc.id}
                      className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] shadow-sm flex flex-col justify-between hover:border-blue-500/40 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                            {svc.category}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">/{svc.slug}</span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">{svc.title}</h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                          {svc.shortDescription}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 font-mono">
                          {svc.capabilities.length} Capabilities
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setEditingService(svc)}
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
                            title="Edit Service"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Are you sure you want to delete service "${svc.title}"?`)) {
                                deleteService(svc.id);
                                showNotify(`Service "${svc.title}" deleted`);
                              }
                            }}
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/50 text-slate-700 dark:text-slate-300 hover:text-rose-600 transition-colors"
                            title="Delete Service"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Service Modal */}
                {isAddingService && (
                  <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                    <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4 shadow-2xl my-8">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Add New Service</h3>
                        <button
                          onClick={() => setIsAddingService(false)}
                          className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <X className="w-5 h-5 text-slate-400" />
                        </button>
                      </div>

                      <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold uppercase font-mono mb-1">Title</label>
                            <input
                              type="text"
                              required
                              value={newServiceForm.title || ""}
                              onChange={(e) => {
                                const title = e.target.value;
                                const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                                setNewServiceForm({ ...newServiceForm, title, slug: slug || newServiceForm.slug, id: slug || newServiceForm.id });
                              }}
                              placeholder="e.g. Mobile Application Engineering"
                              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase font-mono mb-1">Category</label>
                            <select
                              value={newServiceForm.category || "BUILD"}
                              onChange={(e) => setNewServiceForm({ ...newServiceForm, category: e.target.value as any })}
                              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                            >
                              <option value="BUILD">BUILD</option>
                              <option value="AUTOMATE">AUTOMATE</option>
                              <option value="SECURE">SECURE</option>
                              <option value="SCALE">SCALE</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">Short Description</label>
                          <textarea
                            rows={2}
                            value={newServiceForm.shortDescription || ""}
                            onChange={(e) => setNewServiceForm({ ...newServiceForm, shortDescription: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">Full Description</label>
                          <textarea
                            rows={3}
                            value={newServiceForm.fullDescription || ""}
                            onChange={(e) => setNewServiceForm({ ...newServiceForm, fullDescription: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">Business Value</label>
                          <input
                            type="text"
                            value={newServiceForm.businessValue || ""}
                            onChange={(e) => setNewServiceForm({ ...newServiceForm, businessValue: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">
                            Capabilities (comma-separated)
                          </label>
                          <input
                            type="text"
                            value={newServiceForm.capabilities?.join(", ") || ""}
                            onChange={(e) =>
                              setNewServiceForm({
                                ...newServiceForm,
                                capabilities: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                              })
                            }
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => setIsAddingService(false)}
                          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (!newServiceForm.title) {
                              alert("Please enter a service title");
                              return;
                            }
                            addService(newServiceForm as ServiceItem);
                            setIsAddingService(false);
                            showNotify(`Service "${newServiceForm.title}" created successfully`);
                          }}
                          className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white"
                        >
                          Create Service
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Edit Service Modal */}
                {editingService && (
                  <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                    <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4 shadow-2xl my-8">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          Edit Service: {editingService.title}
                        </h3>
                        <button
                          onClick={() => setEditingService(null)}
                          className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <X className="w-5 h-5 text-slate-400" />
                        </button>
                      </div>

                      <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold uppercase font-mono mb-1">Title</label>
                            <input
                              type="text"
                              value={editingService.title}
                              onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase font-mono mb-1">Category</label>
                            <select
                              value={editingService.category}
                              onChange={(e) => setEditingService({ ...editingService, category: e.target.value as any })}
                              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                            >
                              <option value="BUILD">BUILD</option>
                              <option value="AUTOMATE">AUTOMATE</option>
                              <option value="SECURE">SECURE</option>
                              <option value="SCALE">SCALE</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">Short Description</label>
                          <textarea
                            rows={2}
                            value={editingService.shortDescription}
                            onChange={(e) => setEditingService({ ...editingService, shortDescription: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">Full Description</label>
                          <textarea
                            rows={3}
                            value={editingService.fullDescription}
                            onChange={(e) => setEditingService({ ...editingService, fullDescription: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">Business Value</label>
                          <input
                            type="text"
                            value={editingService.businessValue}
                            onChange={(e) => setEditingService({ ...editingService, businessValue: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">
                            Capabilities (comma-separated)
                          </label>
                          <input
                            type="text"
                            value={editingService.capabilities.join(", ")}
                            onChange={(e) =>
                              setEditingService({
                                ...editingService,
                                capabilities: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                              })
                            }
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => setEditingService(null)}
                          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            updateService(editingService.id, editingService);
                            setEditingService(null);
                            showNotify(`Service "${editingService.title}" updated`);
                          }}
                          className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* SUBTAB: PROJECTS (CRUD) */}
            {contentSubTab === "projects" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      Manage Projects ({config.projects.length})
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Manage verified case studies, POS/ERP implementations, and metrics.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setNewProjectForm({
                        id: `project-${Date.now()}`,
                        slug: `new-project-${Date.now()}`,
                        title: "",
                        category: "POS & ERP",
                        businessType: "",
                        positioning: "",
                        overview: "",
                        purpose: "",
                        challenge: "",
                        approach: "",
                        solution: "",
                        verifiedCapabilities: ["Fast billing", "Ledger management"],
                        metrics: [{ label: "Uptime", value: "99.9%" }],
                        techStack: ["C#", "SQL"],
                        imagePlaceholder: "/images/projects/ihs-pos-placeholder.svg",
                        statusBadge: "Verified Production System",
                        featured: true,
                      });
                      setIsAddingProject(true);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Project</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {config.projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] shadow-sm flex flex-col justify-between hover:border-blue-500/40 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                            {proj.statusBadge}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">{proj.category}</span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">{proj.title}</h3>
                        <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                          {proj.businessType}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                          {proj.overview}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 font-mono">
                          {proj.metrics.length} Metrics • {proj.techStack.length} Techs
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setEditingProject(proj)}
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Delete project "${proj.title}"?`)) {
                                deleteProject(proj.id);
                                showNotify(`Project "${proj.title}" deleted`);
                              }
                            }}
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/50 text-slate-700 dark:text-slate-300 hover:text-rose-600 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Project Edit Modal */}
                {editingProject && (
                  <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                    <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4 shadow-2xl my-8">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          Edit Project: {editingProject.title}
                        </h3>
                        <button
                          onClick={() => setEditingProject(null)}
                          className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <X className="w-5 h-5 text-slate-400" />
                        </button>
                      </div>

                      <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold uppercase font-mono mb-1">Title</label>
                            <input
                              type="text"
                              value={editingProject.title}
                              onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase font-mono mb-1">Business Type</label>
                            <input
                              type="text"
                              value={editingProject.businessType}
                              onChange={(e) => setEditingProject({ ...editingProject, businessType: e.target.value })}
                              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">Overview</label>
                          <textarea
                            rows={3}
                            value={editingProject.overview}
                            onChange={(e) => setEditingProject({ ...editingProject, overview: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">Positioning</label>
                          <input
                            type="text"
                            value={editingProject.positioning}
                            onChange={(e) => setEditingProject({ ...editingProject, positioning: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">
                            Tech Stack (comma-separated)
                          </label>
                          <input
                            type="text"
                            value={editingProject.techStack.join(", ")}
                            onChange={(e) =>
                              setEditingProject({
                                ...editingProject,
                                techStack: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                              })
                            }
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => setEditingProject(null)}
                          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            updateProject(editingProject.id, editingProject);
                            setEditingProject(null);
                            showNotify(`Project "${editingProject.title}" updated`);
                          }}
                          className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* SUBTAB: FAQS (CRUD) */}
            {contentSubTab === "faqs" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      Manage FAQs ({config.faqs.length})
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Add, update, or remove frequently asked questions displayed on the website.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setNewFaq({ question: "", answer: "" });
                      setIsAddingFaq(true);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New FAQ</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {config.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] shadow-sm flex items-start justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          <span className="text-blue-600 dark:text-blue-400 mr-2 font-mono">Q{idx + 1}.</span>
                          {faq.question}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => {
                            setEditingFaqIdx(idx);
                            setEditingFaq(faq);
                          }}
                          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 text-slate-700 dark:text-slate-300 hover:text-blue-600"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm("Delete this FAQ?")) {
                              deleteFaq(idx);
                              showNotify("FAQ removed");
                            }
                          }}
                          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 text-slate-700 dark:text-slate-300 hover:text-rose-600"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add FAQ Modal */}
                {isAddingFaq && (
                  <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-2xl">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">Add New FAQ</h3>
                        <button onClick={() => setIsAddingFaq(false)}>
                          <X className="w-5 h-5 text-slate-400" />
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">Question</label>
                          <input
                            type="text"
                            value={newFaq.question}
                            onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                            placeholder="e.g. Can TechSol integrate with our existing accounting system?"
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">Answer</label>
                          <textarea
                            rows={4}
                            value={newFaq.answer}
                            onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                            placeholder="Detailed explanation..."
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-2">
                        <button
                          onClick={() => setIsAddingFaq(false)}
                          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            if (!newFaq.question || !newFaq.answer) {
                              alert("Please fill in both question and answer");
                              return;
                            }
                            addFaq(newFaq);
                            setIsAddingFaq(false);
                            showNotify("FAQ added successfully");
                          }}
                          className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white"
                        >
                          Add FAQ
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Edit FAQ Modal */}
                {editingFaqIdx !== null && (
                  <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-2xl">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">Edit FAQ</h3>
                        <button onClick={() => setEditingFaqIdx(null)}>
                          <X className="w-5 h-5 text-slate-400" />
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">Question</label>
                          <input
                            type="text"
                            value={editingFaq.question}
                            onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase font-mono mb-1">Answer</label>
                          <textarea
                            rows={4}
                            value={editingFaq.answer}
                            onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                          />
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-2">
                        <button
                          onClick={() => setEditingFaqIdx(null)}
                          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            updateFaq(editingFaqIdx, editingFaq);
                            setEditingFaqIdx(null);
                            showNotify("FAQ updated");
                          }}
                          className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: PROFILE MANAGEMENT (CRUD PROFILE & SECURITY)          */}
        {/* ============================================================ */}
        {activeTab === "profile" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Card: Profile Information */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-extrabold text-xl shadow-lg shadow-blue-600/30">
                  {profileForm.name?.slice(0, 2).toUpperCase() || "SA"}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Admin Profile Details</h2>
                  <p className="text-xs text-slate-500 font-mono">
                    Role: <span className="text-blue-600 dark:text-blue-400 font-bold">{adminProfile.role}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                    Username
                  </label>
                  <input
                    type="text"
                    value={profileForm.username}
                    onChange={(e) => setProfileForm({ ...profileForm, username: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                    Admin Email
                  </label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                    Contact Phone
                  </label>
                  <input
                    type="text"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-mono"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                    Administrative Role Title
                  </label>
                  <input
                    type="text"
                    value={profileForm.role}
                    onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    updateAdminProfile(profileForm);
                    showNotify("Admin profile updated successfully");
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Profile</span>
                </button>
              </div>
            </div>

            {/* Right Card: Security & Change Password */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-blue-500" />
                  <span>Change Password</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Update your master credentials to prevent unauthorized administrative access.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1 font-mono">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={currentPassInput}
                    onChange={(e) => setCurrentPassInput(e.target.value)}
                    placeholder="Enter current password"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1 font-mono">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={newPassInput}
                    onChange={(e) => setNewPassInput(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1 font-mono">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassInput}
                    onChange={(e) => setConfirmPassInput(e.target.value)}
                    placeholder="Re-enter new password"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (newPassInput !== confirmPassInput) {
                      showNotify("New passwords do not match", "error");
                      return;
                    }
                    const res = updateAdminPassword(currentPassInput, newPassInput);
                    if (res.success) {
                      showNotify("Password changed successfully");
                      setCurrentPassInput("");
                      setNewPassInput("");
                      setConfirmPassInput("");
                    } else {
                      showNotify(res.error || "Failed to change password", "error");
                    }
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-md"
                >
                  Update Admin Password
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: SETTINGS (CRUD SETTINGS)                              */}
        {/* ============================================================ */}
        {activeTab === "settings" && (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-500" />
                <span>Site Configuration &amp; Contact Settings</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Update business identity, contact phone/WhatsApp, email, and feature flags.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                  Business Name
                </label>
                <input
                  type="text"
                  value={config.business.name}
                  onChange={(e) => updateBusiness({ name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                  Tagline
                </label>
                <input
                  type="text"
                  value={config.business.tagline}
                  onChange={(e) => updateBusiness({ tagline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                  Official Phone Display
                </label>
                <input
                  type="text"
                  value={config.business.contact.phoneDisplay}
                  onChange={(e) =>
                    updateBusiness({
                      contact: { ...config.business.contact, phoneDisplay: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                  WhatsApp Number (with country code e.g. 923104270426)
                </label>
                <input
                  type="text"
                  value={config.business.contact.whatsappRaw}
                  onChange={(e) =>
                    updateBusiness({
                      contact: {
                        ...config.business.contact,
                        whatsappRaw: e.target.value,
                        whatsappDisplay: `+${e.target.value}`,
                      },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-mono"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                  Core Mission Description
                </label>
                <textarea
                  rows={2}
                  value={config.business.coreMission}
                  onChange={(e) => updateBusiness({ coreMission: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm leading-relaxed"
                />
              </div>

              {/* Feature Toggles */}
              <div className="md:col-span-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Feature Toggles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-semibold">Testimonials Section</span>
                    <input
                      type="checkbox"
                      checked={config.business.toggles.showTestimonials}
                      onChange={(e) => updateToggles({ showTestimonials: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-semibold">Fiverr Link</span>
                    <input
                      type="checkbox"
                      checked={config.business.toggles.showFiverr}
                      onChange={(e) => updateToggles({ showFiverr: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-semibold">Upwork Link</span>
                    <input
                      type="checkbox"
                      checked={config.business.toggles.showUpwork}
                      onChange={(e) => updateToggles({ showUpwork: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => showNotify("Site settings updated successfully")}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save Settings</span>
              </button>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: SYSTEM & BACKUPS (CRUD SYSTEM)                        */}
        {/* ============================================================ */}
        {activeTab === "system" && (
          <div className="space-y-6">
            {/* System Diagnostic Status */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-xs font-mono text-slate-400">DEPLOYMENT TARGET</div>
                <div className="text-base font-bold text-slate-900 dark:text-white mt-1">Static HTML (out/)</div>
                <div className="text-[11px] text-emerald-500 font-mono mt-0.5">Host Anywhere</div>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-xs font-mono text-slate-400">ACTIVE SERVICES</div>
                <div className="text-base font-bold text-blue-600 dark:text-blue-400 mt-1">{config.services.length} Total</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">Live on Homepage</div>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-xs font-mono text-slate-400">ACTIVE PROJECTS</div>
                <div className="text-base font-bold text-slate-900 dark:text-white mt-1">{config.projects.length} Total</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">Verified Case Studies</div>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-xs font-mono text-slate-400">CMS STORAGE ENGINE</div>
                <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 mt-1">Reactive Storage</div>
                <div className="text-[11px] text-emerald-500 font-mono mt-0.5">100% Client Durability</div>
              </div>
            </div>

            {/* Backups & JSON Configuration */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1527] p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-500" />
                  <span>Data Backups &amp; Configuration JSON</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Export your modified website content as a JSON file, or restore from a previous backup.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Export Live Site Configuration</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Download a JSON file containing all customized services, projects, FAQs, and LedgerPro configuration.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      exportConfigJson();
                      showNotify("Configuration exported successfully");
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download JSON Backup</span>
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Import Configuration JSON</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Paste or upload a JSON backup to instantly update all site content and settings.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowImportModal(true)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Import JSON File</span>
                  </button>
                </div>
              </div>

              {/* Factory Reset Action */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-rose-600 dark:text-rose-400">
                    Reset System to Factory Defaults
                  </div>
                  <div className="text-xs text-slate-500">
                    Wipes all customized content, restored original configuration, and resets credentials to Admin / password.
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (
                      confirm(
                        "Are you sure you want to restore factory default configuration? All your custom CMS edits will be reset."
                      )
                    ) {
                      resetToDefaults();
                      showNotify("System restored to factory defaults");
                    }
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-900/40 transition-colors self-start sm:self-auto"
                >
                  <RefreshCw className="w-3.5 h-3.5 inline-block mr-1.5" />
                  <span>Factory Reset</span>
                </button>
              </div>
            </div>

            {/* Import Modal */}
            {showImportModal && (
              <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="w-full max-w-xl rounded-2xl bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-2xl">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Import Configuration JSON</h3>
                    <button onClick={() => setShowImportModal(false)}>
                      <X className="w-5 h-5 text-slate-400" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-500">
                    Paste the raw JSON content of your exported configuration below:
                  </p>

                  <textarea
                    rows={8}
                    value={jsonImportText}
                    onChange={(e) => setJsonImportText(e.target.value)}
                    placeholder="Paste JSON content here..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono leading-relaxed"
                  />

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-2">
                    <button
                      onClick={() => setShowImportModal(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        const res = importConfigJson(jsonImportText);
                        if (res.success) {
                          setShowImportModal(false);
                          setJsonImportText("");
                          showNotify("Configuration imported successfully!");
                        } else {
                          showNotify(res.error || "Failed to import JSON", "error");
                        }
                      }}
                      className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white"
                    >
                      Apply Configuration
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
