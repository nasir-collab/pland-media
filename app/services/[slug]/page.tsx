import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await prisma.service.findUnique({ where: { slug } });
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Plan D Media`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await prisma.service.findUnique({ where: { slug } });

  if (!service) notFound();

  let deliverablesList: string[] = [];
  let metricsList: { label: string; value: string }[] = [];
  try {
    deliverablesList = JSON.parse(service.deliverables);
    metricsList = JSON.parse(service.keyMetrics);
  } catch {
    // fallback
  }

  return (
    <div className="pt-28 pb-16 bg-[#111111] text-white min-h-screen">
      {/* Header Breadcrumb */}
      <section className="py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-[#E8B626] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to All Capabilities</span>
          </Link>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono font-bold text-[#E8B626]">
              ({service.category})
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-6">
            {service.title}
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-light">
            {service.tagline}
          </p>

          {/* Key Metrics */}
          {metricsList.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-10">
              {metricsList.map((m, idx) => (
                <div key={idx} className="bg-[#171717] border border-white/10 rounded-2xl p-5">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-[#E8B626]">
                    {m.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 font-mono">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Full Description */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Operational Blueprint &amp; Methodology
                </h2>
                <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed whitespace-pre-line space-y-4 font-light">
                  {service.fullDescription}
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="bg-[#171717] border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#E8B626]" />
                  Verified Deliverables &amp; Systems
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {deliverablesList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#E8B626] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#171717] border border-white/10 rounded-2xl p-6 sticky top-28">
                <h3 className="text-lg font-bold text-white mb-2">
                  Ready to deploy this capability?
                </h3>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed font-light">
                  Schedule a confidential audit with our lead architect. We will review your current data and deliver a concrete 90-day execution roadmap.
                </p>

                <Link
                  href="/contact"
                  className="w-full py-3.5 bg-[#E8B626] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#D4A319] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#E8B626]/20 cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  <span>Request Specific Audit</span>
                </Link>

                <div className="mt-6 pt-6 border-t border-white/5 space-y-3 text-xs text-gray-400 font-mono">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#E8B626]" />
                    <span>No junior hand-offs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#E8B626]" />
                    <span>Weekly strategic reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#E8B626]" />
                    <span>Guaranteed SLA &amp; server telemetry</span>
                  </div>
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
