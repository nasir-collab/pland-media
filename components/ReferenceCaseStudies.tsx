"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Building2, GraduationCap, HeartPulse } from "lucide-react";

interface CaseStudyItem {
  id: string;
  name: string;
  industry: string;
  scope: string;
  highlight: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const defaultCaseStudies: CaseStudyItem[] = [
  {
    id: "srmb-steel",
    name: "SRMB Steel",
    industry: "Manufacturing & B2B",
    scope: "Audit, Strategy, Performance Marketing, SEO and Automation",
    highlight: "+240% Pipeline Velocity",
    icon: Building2,
    desc: "Engineered scalable Google Search and high-impact Meta conversion funnels driving qualified dealership inquiries and construction contracts across Eastern India.",
  },
  {
    id: "centurion-university",
    name: "Centurion University",
    industry: "Higher Education",
    scope: "Audit, Strategy, Performance Marketing, SEO and Automation",
    highlight: "3.8x Lower CAC",
    icon: GraduationCap,
    desc: "Built full-funnel admissions lead generation across engineering, management, and vocational disciplines with automated multi-channel CRM nurturing.",
  },
  {
    id: "la-derma",
    name: "La Derma Skin & Hair Clinic",
    industry: "Healthcare & Aesthetics",
    scope: "Audit, Strategy, Performance Marketing, SEO and Automation",
    highlight: "320% Call Volume",
    icon: HeartPulse,
    desc: "Dominant local search positioning and localized Meta video campaigns generating direct patient bookings for clinical dermatology and hair restoration.",
  },
];

interface ReferenceCaseStudiesProps {
  badge?: string;
  title1?: string;
  title2?: string;
  caseStudies?: CaseStudyItem[];
}

export default function ReferenceCaseStudies({
  badge = "Selected Work",
  title1 = "Proven Growth",
  title2 = "in Action",
  caseStudies = defaultCaseStudies,
}: ReferenceCaseStudiesProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#141414] border-b border-white/10 relative overflow-hidden">
      <div className="rr-container-1650">
        <div className="mb-14 sm:mb-18 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#E8B626] mb-3">
              <span>({badge})</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {title1} <span className="text-[#E8B626] font-normal">{title2}</span>
            </h2>
          </div>

          <Link
            href="/case-studies"
            className="rr-btn-underline text-xs sm:text-sm font-mono uppercase tracking-wider text-gray-300"
          >
            View All Enterprise Work &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => {
            const Icon = cs.icon;
            return (
              <div
                key={cs.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#E8B626] font-bold">
                      [0{idx + 1}]
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {cs.industry}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E8B626]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#E8B626] transition-colors">
                      {cs.name}
                    </h3>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-[#E8B626]/20">
                    <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                      Verified Outcome
                    </div>
                    <div className="text-xl font-bold text-[#E8B626]">
                      {cs.highlight}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-white/5 text-xs font-mono text-gray-500 flex items-center justify-between">
                  <span className="truncate max-w-[200px]">{cs.scope}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E8B626] shrink-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
