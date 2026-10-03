import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { LedgerProShowcase } from "@/components/home/LedgerProShowcase";
import { SolutionsMatrix } from "@/components/home/SolutionsMatrix";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FounderSection } from "@/components/home/FounderSection";
import { TestimonialsPlaceholder } from "@/components/home/TestimonialsPlaceholder";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <LedgerProShowcase />
      <SolutionsMatrix />
      <ServicesGrid />
      <FeaturedProjects />
      <ProcessTimeline />
      <WhyChooseUs />
      <FounderSection />
      <TestimonialsPlaceholder />
      <FaqSection />
      <FinalCta />
    </>
  );
}
