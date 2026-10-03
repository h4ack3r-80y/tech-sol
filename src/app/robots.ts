import { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.business.contact.domain 
    ? `https://${siteConfig.business.contact.domain}`
    : "https://shayanahmaddigitalsolutions.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
