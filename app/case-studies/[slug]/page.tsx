import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { ArrowLeft, Zap } from "lucide-react";
import CTASection from "@/components/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await prisma.caseStudy.findUnique({ where: { slug } });
  if (!cs) return { title: "Case Study Not Found" };

  return {
    title: `${cs.title} | Plan D Media Case Study`,
    description: cs.challenge,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await prisma.caseStudy.findUnique({ where: { slug } });

  if (!cs) notFound();

  let parsedResults: { metric: string; value: string; detail: string }[] = [];
  try {
    parsedResults = JSON.parse(cs.results);
  } catch {
    // fallback
  }

  return (
    <div className="pt-28 pb-16 bg-[#111111] text-white min-h-screen">
      <section className="py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-[#E8B626] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to All Case Studies</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-mono">
            <span className="text-[#E8B626] font-bold">
              ({cs.industry})
            </span>
            <span className="text-gray-400">
              Client: <strong className="text-white font-medium">{cs.client}</strong>
            </span>
            <span className="text-gray-500">(2025)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-6">
            {cs.title}
          </h1>

          {/* Hero Image */}
          <div className="relative h-80 sm:h-[440px] w-full rounded-2xl overflow-hidden border border-white/10 my-10 bg-[#1c1c1c]" style={{ position: "relative" }}>
            <Image
              src={cs.image}
              alt={cs.client}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {parsedResults.map((r, i) => (
              <div key={i} className="bg-[#171717] border border-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold font-mono text-[#E8B626] mb-1">
                  {r.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">{r.metric}</div>
                <div className="text-xs text-gray-400 font-light">{r.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
                  <span className="text-[#E8B626] font-mono text-xs">(01)</span>
                  The Growth Challenge
                </h2>
                <p className="text-gray-300 text-base leading-relaxed font-light">
                  {cs.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
                  <span className="text-[#E8B626] font-mono text-xs">(02)</span>
                  The Plan D Engineering Solution
                </h2>
                <p className="text-gray-300 text-base leading-relaxed font-light">
                  {cs.solution}
                </p>
              </div>

              {/* Tags */}
              <div className="border-t border-white/10 pt-6">
                <span className="text-xs font-mono uppercase text-gray-400 tracking-wider block mb-3">
                  Technologies &amp; Competencies Deployed:
                </span>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.split(",").map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#1f1f1f] border border-white/10 rounded-full text-xs text-gray-300 font-mono"
                    >
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar CTA */}
            <div>
              <div className="bg-[#171717] border border-white/10 rounded-2xl p-6 sticky top-28 space-y-6">
                <h3 className="text-lg font-bold text-white leading-snug">
                  Require similar outcomes for your enterprise?
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Book a direct 30-minute campaign discovery session with our senior architects. We analyze your customer acquisition leaks and propose a custom execution plan.
                </p>

                <Link
                  href="/contact"
                  className="w-full py-3.5 bg-[#E8B626] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#D4A319] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#E8B626]/20 cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  <span>Request Growth Consultation</span>
                </Link>

                <div className="pt-4 border-t border-white/5 text-[11px] text-gray-400 space-y-2 font-mono">
                  <div>• 100% Confidential Discovery Call</div>
                  <div>• Direct Senior Partner Review</div>
                  <div>• Verified Case Study Data Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
