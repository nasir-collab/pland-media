import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { ArrowUpRight, CheckCircle2, Zap, Search, Code, Share2, Cpu } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Services & Capabilities | Plan D Media - Performance Growth",
  description:
    "Explore Plan D Media's specialized disciplines: Paid Acquisition, Enterprise SEO, Next.js Web Engineering, Social Branding, and AI Lead Funnels.",
};

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-[#E8B626]" />,
  Search: <Search className="w-6 h-6 text-[#E8B626]" />,
  Code: <Code className="w-6 h-6 text-[#E8B626]" />,
  Share2: <Share2 className="w-6 h-6 text-[#E8B626]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#E8B626]" />,
};

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { order: "asc" },
  });

  return (
    <div className="pt-28 pb-16 bg-[#111111] text-white min-h-screen">
      {/* Top Header matching Whiteboard Media */}
      <section className="py-20 sm:py-28 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-6 text-xs text-gray-400 font-mono pb-8 border-b border-white/10 mb-12">
            <span className="text-[#E8B626] font-bold">(Capabilities)</span>
            <span>(Specialized Disciplines)</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-8">
              We define the problem before we sell the idea.
            </h1>
            <p className="text-gray-400 text-base sm:text-xl leading-relaxed font-light max-w-2xl">
              We do not offer fragmented, generic agency packages. Every engagement is custom-architected across paid acquisition, technical SEO, and conversion infrastructure to achieve verified commercial outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Breakdown */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, index) => {
            let deliverablesList: string[] = [];
            let metricsList: { label: string; value: string }[] = [];
            try {
              deliverablesList = JSON.parse(service.deliverables);
              metricsList = JSON.parse(service.keyMetrics);
            } catch {
              // fallback
            }

            return (
              <div
                key={service.id}
                className="bg-[#171717] border border-white/10 rounded-2xl p-8 sm:p-12 hover:border-[#E8B626]/40 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
                  {/* Left Column: Overview */}
                  <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#E8B626]/10 transition-all">
                        {iconMap[service.icon] || <Zap className="w-6 h-6 text-[#E8B626]" />}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">
                          0{index + 1}/ Capability
                        </span>
                        <div className="text-xs text-[#E8B626] font-mono mt-0.5">
                          {service.category}
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                      {service.title}
                    </h2>

                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                      {service.shortDescription}
                    </p>

                    {/* Key Metrics Badges */}
                    {metricsList.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                        {metricsList.map((m, idx) => (
                          <div key={idx} className="bg-[#1f1f1f] rounded-xl p-3 border border-white/5">
                            <div className="text-base sm:text-lg font-bold font-mono text-[#E8B626]">
                              {m.value}
                            </div>
                            <div className="text-[11px] text-gray-400 mt-0.5 font-mono">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E8B626] text-white font-bold text-xs tracking-wide hover:bg-[#D4A319] transition-colors shadow-md shadow-[#E8B626]/20"
                      >
                        <span>View Full Service Blueprint</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Deliverables Checklist */}
                  <div className="lg:w-1/2 bg-[#1f1f1f] rounded-xl p-6 sm:p-8 border border-white/5">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E8B626]" />
                      Core Deliverables &amp; Protocols Included
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {deliverablesList.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 font-light">
                          <CheckCircle2 className="w-4 h-4 text-[#E8B626] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
