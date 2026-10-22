"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client?: string;
  industry?: string;
  image?: string;
  results?: string;
}

interface CaseStudiesSectionProps {
  caseStudies?: CaseStudy[];
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  // Curated flagship portfolio items with genuine project imagery
  const defaultProjects = [
    {
      title: "Centurion University — Full-Funnel Admission Growth",
      category: "Performance Marketing, Paid Acquisition",
      year: "(2025)",
      image: "/project-1.jpg",
      slug: "centurion-university-admissions",
      metric: "+184% Verified Enrollments",
    },
    {
      title: "SRMB Srijan Steel — B2B Digital Command Center",
      category: "Enterprise SEO, Core Web Vitals",
      year: "(2024)",
      image: "/project-2.jpg",
      slug: "srmb-steel-seo-scale",
      metric: "Top 3 National Rankings",
    },
    {
      title: "IEM Kolkata — Autonomous Candidate Pipeline",
      category: "Conversion Web Engineering, Next.js",
      year: "(2025)",
      image: "/project-3.jpg",
      slug: "iem-kolkata-web-engineering",
      metric: "1.4s Instant LCP",
    },
    {
      title: "La Derma Aesthetics — Clinical Patient Scale",
      category: "Creative Campaigns, WhatsApp AI",
      year: "(2024)",
      image: "/project-4.jpg",
      slug: "la-derma-aesthetics-patient-funnel",
      metric: "4.8x Campaign ROAS",
    },
    {
      title: "Techno India Group — Multi-Campus Outreach",
      category: "Omnichannel Advertising, Brand Films",
      year: "(2024)",
      image: "/project-5.jpg",
      slug: "techno-india-growth",
      metric: "2.1M Targeted Impressions",
    },
    {
      title: "Brainware University — High-Intent Enrollment Engine",
      category: "Performance Branding, Paid Social",
      year: "(2025)",
      image: "/project-6.jpg",
      slug: "brainware-university-scale",
      metric: "3.2x Lead Pipeline",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
      <div className="rr-container-1650">
        {/* Section Header matching Whiteboard Media (Projects) header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20 pb-8 border-b border-white/10">
          {/* Left Metadata & Underline link */}
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="tag-parenthesis text-sm font-mono text-[#E8B626]">
                (Selected Work)
              </span>
              <span className="text-sm font-mono text-gray-500">
                (All — 25 Case Studies)
              </span>
            </div>

            <div>
              <Link href="/case-studies" className="rr-btn-underline text-base">
                Browse all work
              </Link>
            </div>
          </div>

          {/* Right: Giant Typography "Selected Works" */}
          <div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none">
              <span className="text-stroke-title mr-4 font-light">Selected</span>
              <span>Works</span>
            </h2>
          </div>
        </div>

        {/* Portfolio Showcase Grid matching Adon layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {defaultProjects.map((project, idx) => (
            <div key={idx} className="group flex flex-col justify-between">
              {/* Image Frame with Zoom & Hover Effect */}
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 bg-[#171717] mb-5">
                <Link href={`/case-studies/${project.slug}`} className="block w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  
                  {/* Floating Cursor Hover Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="px-5 py-2.5 rounded-full bg-[#E8B626] text-black font-bold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-1.5">
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Impact Metric Badge */}
                  <div className="absolute top-4 right-4 bg-[#111111]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-mono text-[#E8B626]">
                    {project.metric}
                  </div>
                </Link>
              </div>

              {/* Title, Category & Year */}
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#E8B626] transition-colors leading-snug">
                  <Link href={`/case-studies/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-400 font-light pt-1">
                  <span>{project.category}</span>
                  <span className="font-mono text-gray-500">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
