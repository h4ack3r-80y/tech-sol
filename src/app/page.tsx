import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ReviewsSection />
      <FinalCta />
    </>
  );
}
