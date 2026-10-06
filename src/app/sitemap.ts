import { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.business.contact.domain 
    ? `https://${siteConfig.business.contact.domain}`
    : "https://shayanahmaddigitalsolutions.com";

  const routes = [
    "",
    "/services",
    "/services/pos-erp-development",
    "/services/custom-software",
    "/services/web-development",
    "/services/mobile-app-development",
    "/services/ai-automation",
    "/services/cybersecurity",
    "/services/cloud-solutions",
    "/services/saas-development",
    "/projects",
    "/projects/ihs-pos-erp",
    "/projects/ams-pos-erp",
    "/process",
    "/about",
    "/contact",
    "/request-a-quote",
    "/book-a-consultation",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") || route.startsWith("/projects") ? 0.8 : 0.6,
  }));
}
