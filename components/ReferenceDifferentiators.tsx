"use client";

import React from "react";
import { Percent, Award, Users } from "lucide-react";

export default function ReferenceDifferentiators() {
  const pillars = [
    {
      icon: Percent,
      title: "50% Less Expensive",
      desc: "Plan D Media is nearly 50% less expensive than conventional full-service agencies, delivering greater velocity, transparency, and agility without agency bloat.",
      highlight: "High ROI Velocity",
    },
    {
      icon: Award,
      title: "Zero Tolerance For Mediocrity",
      desc: "We hold every pixel, conversion rate, and ad dollar to elite standards. If creative doesn't convert or keywords don't rank, we iterate relentlessly until they win.",
      highlight: "Elite Execution",
    },
    {
      icon: Users,
      title: "Highest Client Retention Rate",
      desc: "Our clients stay because we treat their marketing budgets like our own money. 92%+ retention rate across education, manufacturing, healthcare, and retail.",
      highlight: "92%+ Client Retention",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
      <div className="rr-container-1650">
        <div className="max-w-4xl mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-mono text-[#E8B626] uppercase tracking-wider block mb-3">
            (The Plan D Advantage)
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            What Makes Plan D Media The Most Loved Digital Marketing Agency in Kolkata?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-2xl bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E8B626]">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#E8B626] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-white/5 text-xs font-mono text-[#E8B626]">
                  &bull; {p.highlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
