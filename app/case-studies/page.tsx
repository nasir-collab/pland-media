import React from "react";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Case Studies & Client Results | Plan D Media",
  description:
    "Explore how Plan D Media scales client admissions, B2B dealer networks, and patient leads with verified commercial outcomes.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await prisma.caseStudy.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { order: "asc" },
  });

  return (
    <div className="pt-28 pb-16 bg-[#111111] text-white min-h-screen">
      {/* Top Header matching Whiteboard Media */}
      <section className="py-20 sm:py-28 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-6 text-xs text-gray-400 font-mono pb-8 border-b border-white/10 mb-12">
            <span className="text-[#E8B626] font-bold">(Projects)</span>
            <span>(Selected Commercial Scale)</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-8">
              Verified commercial scale &amp; measurable returns.
            </h1>
            <p className="text-gray-400 text-base sm:text-xl leading-relaxed font-light max-w-2xl">
              We partner with industry-leading universities, manufacturers, aesthetic clinics, and fast-scaling startups. Review our verified case studies below.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudies.map((cs) => {
              let parsedResults: { metric: string; value: string; detail: string }[] = [];
              try {
                parsedResults = JSON.parse(cs.results);
              } catch {
                // fallback
              }

              return (
                <div
                  key={cs.id}
                  className="group bg-[#171717] border border-white/10 rounded-2xl overflow-hidden hover:border-[#E8B626]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#1c1c1c]" style={{ position: "relative" }}>
                    <Image
                      src={cs.image}
                      alt={cs.client}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 bg-[#111111]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-mono text-gray-300 uppercase">
                      {cs.industry}
                    </div>

                    {parsedResults.length > 0 && (
                      <div className="absolute bottom-4 left-4 bg-[#E8B626] text-white px-3.5 py-1.5 rounded-full font-mono text-xs font-bold shadow-lg flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{parsedResults[0].value} {parsedResults[0].metric}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                        <span>{cs.client}</span>
                        <span>(2025)</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-[#E8B626] transition-colors mb-3 leading-snug">
                        {cs.title}
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                        {cs.challenge}
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-5 mb-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {parsedResults.map((r, i) => (
                          <div key={i} className="bg-[#1f1f1f] rounded-xl p-3 border border-white/5">
                            <div className="text-base font-bold font-mono text-[#E8B626]">
                              {r.value}
                            </div>
                            <div className="text-[11px] text-gray-300 font-mono truncate mt-0.5">
                              {r.metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="rr-btn-underline text-xs inline-flex items-center gap-1 w-fit"
                    >
                      <span>Read Case Study Breakdown →</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
