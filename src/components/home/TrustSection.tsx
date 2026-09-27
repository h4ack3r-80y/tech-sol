import React from "react";
import { CheckCircle2, Shield, Wrench, MessageSquareCheck, Expand, RefreshCw } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TrustSection() {
  const pillars = [
    {
      icon: Wrench,
      title: "Practical Solutions",
      description:
        "We build systems engineered to resolve tangible business bottlenecks—not experimental tech stacks or unnecessary complexity.",
    },
    {
      icon: MessageSquareCheck,
      title: "Clear Communication",
      description:
        "Direct, transparent collaboration with honest project assessments, documented milestones, and zero technical posturing.",
    },
    {
      icon: Shield,
      title: "Security-Conscious Development",
      description:
        "Defensive security principles, role-based authorization, and protected data channels built directly into application architecture.",
    },
    {
      icon: Expand,
      title: "Scalable Architecture",
      description:
        "Structured codebases and modular database schemas that support growing transaction volumes and changing operational needs.",
    },
    {
      icon: CheckCircle2,
      title: "Business-Focused Thinking",
      description:
        "We evaluate software based on operational ROI, counter throughput, error reduction, and financial visibility—not lines of code.",
    },
    {
      icon: RefreshCw,
      title: "Long-Term Support Mindset",
      description:
        "Technology partnerships designed for continuous operational stability, reliable backups, and steady system refinement.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#090F1E] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Our Core Philosophy"
          title="Technology With a Business Purpose"
          subtitle="We don't build technology simply for the sake of technology. We first understand the client's goals, challenges, workflow, and requirements, then design a solution around the actual business need."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0D1527] hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-200 group flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/80 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-normal text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
