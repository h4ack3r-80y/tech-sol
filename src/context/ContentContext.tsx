"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  siteConfig as defaultSiteConfig,
  SiteConfig,
  ServiceItem,
  ProjectItem,
  FaqItem,
  LedgerProConfig,
} from "@/config/siteConfig";

export interface AdminProfile {
  name: string;
  username: string;
  email: string;
  phone: string;
  role: string;
  avatarUrl?: string;
  lastLogin?: string;
}

interface ContentContextType {
  config: SiteConfig;
  isAdminAuthenticated: boolean;
  adminProfile: AdminProfile;
  login: (username: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
  updateAdminProfile: (profile: Partial<AdminProfile>) => void;
  updateAdminPassword: (oldPass: string, newPass: string) => { success: boolean; error?: string };
  updateBusiness: (business: Partial<SiteConfig["business"]>) => void;
  updateLedgerPro: (ledgerPro: Partial<LedgerProConfig>) => void;
  // Services CRUD
  addService: (service: ServiceItem) => void;
  updateService: (id: string, service: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;
  // Projects CRUD
  addProject: (project: ProjectItem) => void;
  updateProject: (id: string, project: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;
  // FAQs CRUD
  addFaq: (faq: FaqItem) => void;
  updateFaq: (index: number, faq: FaqItem) => void;
  deleteFaq: (index: number) => void;
  // Settings & System
  updateToggles: (toggles: Partial<SiteConfig["business"]["toggles"]>) => void;
  exportConfigJson: () => void;
  importConfigJson: (jsonStr: string) => { success: boolean; error?: string };
  resetToDefaults: () => void;
}

const defaultAdminProfile: AdminProfile = {
  name: "Shayan Ahmad",
  username: "Admin",
  email: "admin@techsol.com",
  phone: "+92 310 4270426",
  role: "Lead Administrator & Executive",
};

const ContentContext = createContext<ContentContextType | null>(null);

const STORAGE_KEYS = {
  CONFIG: "techsol_cms_config_v1",
  AUTH: "techsol_admin_session",
  ADMIN_PROFILE: "techsol_admin_profile",
  ADMIN_PASSWORD: "techsol_admin_password",
};

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(defaultSiteConfig);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [adminProfile, setAdminProfile] = useState<AdminProfile>(defaultAdminProfile);
  const [adminPassword, setAdminPassword] = useState<string>("password");
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // Initialize from LocalStorage
  useEffect(() => {
    try {
      // Load saved config
      const savedConfig = localStorage.getItem(STORAGE_KEYS.CONFIG);
      if (savedConfig) {
        const parsed = JSON.parse(savedConfig);
        // Ensure ledgerPro object is merged properly
        setConfig({
          ...defaultSiteConfig,
          ...parsed,
          business: {
            ...defaultSiteConfig.business,
            ...(parsed.business || {}),
            contact: {
              ...defaultSiteConfig.business.contact,
              ...(parsed.business?.contact || {}),
            },
            toggles: {
              ...defaultSiteConfig.business.toggles,
              ...(parsed.business?.toggles || {}),
            },
          },
          ledgerPro: {
            ...defaultSiteConfig.ledgerPro,
            ...(parsed.ledgerPro || {}),
          },
        });
      }

      // Load admin credentials & profile
      const savedPassword = localStorage.getItem(STORAGE_KEYS.ADMIN_PASSWORD);
      if (savedPassword) {
        setAdminPassword(savedPassword);
      } else {
        localStorage.setItem(STORAGE_KEYS.ADMIN_PASSWORD, "password");
      }

      const savedProfile = localStorage.getItem(STORAGE_KEYS.ADMIN_PROFILE);
      if (savedProfile) {
        setAdminProfile(JSON.parse(savedProfile));
      }

      // Check session
      const savedSession = localStorage.getItem(STORAGE_KEYS.AUTH);
      if (savedSession === "true") {
        setIsAdminAuthenticated(true);
      }
    } catch (e) {
      console.error("Failed to load CMS data from localStorage", e);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Helper to persist config
  const saveConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(newConfig));
    } catch (err) {
      console.error("Failed to persist CMS config to localStorage", err);
    }
  };

  // Auth: Login
  const login = (usernameInput: string, passwordInput: string) => {
    const trimmedUser = usernameInput.trim();
    // Default username is 'Admin', case-insensitive check
    const matchesUser = trimmedUser.toLowerCase() === adminProfile.username.toLowerCase();
    const matchesPass = passwordInput === adminPassword;

    if (matchesUser && matchesPass) {
      setIsAdminAuthenticated(true);
      const updatedProfile = {
        ...adminProfile,
        lastLogin: new Date().toLocaleString(),
      };
      setAdminProfile(updatedProfile);
      localStorage.setItem(STORAGE_KEYS.AUTH, "true");
      localStorage.setItem(STORAGE_KEYS.ADMIN_PROFILE, JSON.stringify(updatedProfile));
      return { success: true };
    }

    return {
      success: false,
      error: "Invalid username or password. Default username: 'Admin' and password: 'password'.",
    };
  };

  // Auth: Logout
  const logout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem(STORAGE_KEYS.AUTH);
  };

  // Profile: Update
  const updateAdminProfile = (profileData: Partial<AdminProfile>) => {
    const updated = { ...adminProfile, ...profileData };
    setAdminProfile(updated);
    localStorage.setItem(STORAGE_KEYS.ADMIN_PROFILE, JSON.stringify(updated));
  };

  // Profile: Change Password
  const updateAdminPassword = (oldPass: string, newPass: string) => {
    if (oldPass !== adminPassword) {
      return { success: false, error: "Current password does not match." };
    }
    if (!newPass || newPass.length < 4) {
      return { success: false, error: "New password must be at least 4 characters long." };
    }
    setAdminPassword(newPass);
    localStorage.setItem(STORAGE_KEYS.ADMIN_PASSWORD, newPass);
    return { success: true };
  };

  // Content: Business Information
  const updateBusiness = (businessData: Partial<SiteConfig["business"]>) => {
    const updatedConfig: SiteConfig = {
      ...config,
      business: {
        ...config.business,
        ...businessData,
      },
    };
    saveConfig(updatedConfig);
  };

  // Content: LedgerPro SaaS
  const updateLedgerPro = (ledgerProData: Partial<LedgerProConfig>) => {
    const updatedConfig: SiteConfig = {
      ...config,
      ledgerPro: {
        ...config.ledgerPro,
        ...ledgerProData,
      },
    };
    saveConfig(updatedConfig);
  };

  // CRUD: Services
  const addService = (service: ServiceItem) => {
    const updatedConfig: SiteConfig = {
      ...config,
      services: [service, ...config.services],
    };
    saveConfig(updatedConfig);
  };

  const updateService = (id: string, updatedFields: Partial<ServiceItem>) => {
    const updatedServices = config.services.map((svc) =>
      svc.id === id ? { ...svc, ...updatedFields } : svc
    );
    saveConfig({ ...config, services: updatedServices });
  };

  const deleteService = (id: string) => {
    const updatedServices = config.services.filter((svc) => svc.id !== id);
    saveConfig({ ...config, services: updatedServices });
  };

  // CRUD: Projects
  const addProject = (project: ProjectItem) => {
    const updatedConfig: SiteConfig = {
      ...config,
      projects: [project, ...config.projects],
    };
    saveConfig(updatedConfig);
  };

  const updateProject = (id: string, updatedFields: Partial<ProjectItem>) => {
    const updatedProjects = config.projects.map((proj) =>
      proj.id === id ? { ...proj, ...updatedFields } : proj
    );
    saveConfig({ ...config, projects: updatedProjects });
  };

  const deleteProject = (id: string) => {
    const updatedProjects = config.projects.filter((proj) => proj.id !== id);
    saveConfig({ ...config, projects: updatedProjects });
  };

  // CRUD: FAQs
  const addFaq = (faq: FaqItem) => {
    const updatedConfig: SiteConfig = {
      ...config,
      faqs: [...config.faqs, faq],
    };
    saveConfig(updatedConfig);
  };

  const updateFaq = (index: number, updatedFaq: FaqItem) => {
    const updatedFaqs = config.faqs.map((f, i) => (i === index ? updatedFaq : f));
    saveConfig({ ...config, faqs: updatedFaqs });
  };

  const deleteFaq = (index: number) => {
    const updatedFaqs = config.faqs.filter((_, i) => i !== index);
    saveConfig({ ...config, faqs: updatedFaqs });
  };

  // Settings: Feature Toggles
  const updateToggles = (toggles: Partial<SiteConfig["business"]["toggles"]>) => {
    const updatedConfig: SiteConfig = {
      ...config,
      business: {
        ...config.business,
        toggles: {
          ...config.business.toggles,
          ...toggles,
        },
      },
    };
    saveConfig(updatedConfig);
  };

  // System: Export Configuration JSON
  const exportConfigJson = () => {
    try {
      const dataStr =
        "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(config, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute(
        "download",
        `techsol-config-export-${new Date().toISOString().slice(0, 10)}.json`
      );
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    } catch (e) {
      console.error("Export config failed", e);
    }
  };

  // System: Import Configuration JSON
  const importConfigJson = (jsonStr: string) => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (!parsed.business || !parsed.services || !parsed.projects) {
        return { success: false, error: "Invalid configuration format: Missing core fields." };
      }
      saveConfig(parsed);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || "Failed to parse JSON file." };
    }
  };

  // System: Reset All to Factory Defaults
  const resetToDefaults = () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.CONFIG);
      localStorage.removeItem(STORAGE_KEYS.AUTH);
      localStorage.removeItem(STORAGE_KEYS.ADMIN_PROFILE);
      localStorage.setItem(STORAGE_KEYS.ADMIN_PASSWORD, "password");
      setConfig(defaultSiteConfig);
      setAdminProfile(defaultAdminProfile);
      setAdminPassword("password");
      setIsAdminAuthenticated(false);
    } catch (e) {
      console.error("Reset failed", e);
    }
  };

  return (
    <ContentContext.Provider
      value={{
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
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
}
