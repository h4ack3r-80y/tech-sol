import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsDirectory } from "@/components/projects/ProjectsDirectory";

export const metadata: Metadata = {
  title: "Verified Case Studies & Production Systems | TechSol",
  description:
    "Explore verified production case studies engineered by TechSol (Shayan Ahmad Digital Solutions): IHS E&S Solar & Electronics POS/ERP and AMS Superstore POS/ERP.",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-[#070B14] min-h-screen text-slate-900 dark:text-white relative transition-colors">
      <div className="absolute inset-0 bg-corporate-grid opacity-25 dark:opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Production Portfolio"
          title="Verified Production Case Studies"
          subtitle="We engineer systems around verified commercial operational demands. Explore our flagship production case studies deployed for high-volume electronics retail and supermarket superstore management."
        />

        <div className="mt-12">
          <ProjectsDirectory projects={siteConfig.projects} />
        </div>
      </div>
    </div>
  );
}
