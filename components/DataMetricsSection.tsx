"use client";

import React from "react";

interface MetricCard {
  label: string;
  value: string;
  desc: string;
}

const metrics: MetricCard[] = [
  {
    label: "Brand Reputation",
    value: "95%",
    desc: "A brand people can describe in one sentence is a brand people recommend. Strategy decides what that sentence is, before a single campaign goes near it.",
  },
  {
    label: "Customer Loyalty",
    value: "92%",
    desc: "Loyalty follows clarity. When an audience knows exactly what a brand stands for, they stop comparing it on price and start choosing it on conviction.",
  },
  {
    label: "Operational Efficiency",
    value: "85%",
    desc: "A defined positioning stops the guesswork. Every brief, every design round and every campaign starts from a settled answer instead of relitigating the brand each time.",
  },
  {
    label: "Customer Satisfaction",
    value: "95%",
    desc: "Brands disappoint when the promise and the experience don't match. Strategy sets a promise the business can actually keep, which is what satisfaction is made of.",
  },
];

export default function DataMetricsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
      <div className="rr-container-1650">
        {/* Section Header with solid circle dot tag matching reference */}
        <div className="mb-14 sm:mb-18 flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8B626]" />
            <span>Data-Information</span>
          </div>

          <span className="text-xs font-mono text-gray-500">
            Validated Enterprise Outcomes
          </span>
        </div>

        {/* 4-Column Metric Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-2xl bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-6">
                <h4 className="text-sm font-mono uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                  {m.label}
                </h4>

                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight group-hover:text-[#E8B626] transition-colors">
                  {m.value}
                </div>

                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-600">
                <span>Metric Index 0{idx + 1}</span>
                <span className="text-[#E8B626]">&bull; High Impact</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
