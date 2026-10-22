"use client";

import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  desc: string;
}

const steps: ProcessStep[] = [
  {
    number: "[01]",
    title: "Discovery & Research",
    desc: "Every brief begins on a blank board. We remove the assumptions, the inherited bias and the borrowed template before anyone in the room proposes a solution.",
  },
  {
    number: "[02]",
    title: "Define the Problem",
    desc: "We sit with the business problem long enough to actually understand it \u2014 the category, the competitive set, and what the brand is genuinely trying to move.",
  },
  {
    number: "[03]",
    title: "Decode the Insight",
    desc: "We study the culture and the customer who is already ignoring your last five ads, and find the truth that makes them stop.",
  },
  {
    number: "[04]",
    title: "Build With Intent",
    desc: "Positioning, brand architecture and communication strategy, built so the idea survives past one campaign cycle rather than one quarter.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
      <div className="rr-container-1650">
        {/* Top Header Split: Left Label + Giant '04', Right Statement Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 sm:pb-20 border-b border-white/10 items-end">
          {/* Left Column: Subhead & Big 04 */}
          <div className="lg:col-span-4 flex items-baseline justify-between lg:block space-y-4">
            <span className="text-sm sm:text-base text-gray-400 font-mono block leading-relaxed uppercase tracking-wider">
              We follow a clarity <br />
              -first working process
            </span>
            <div className="text-6xl sm:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-none">
              04
            </div>
          </div>

          {/* Right Column: Statement Heading */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              We sharpen your brands and businesses create exceptional experiences where people live work
            </h2>
          </div>
        </div>

        {/* 4-Column Step Cards Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 sm:pt-16">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="p-8 sm:p-10 rounded-2xl bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="space-y-6">
                <span className="text-xs sm:text-sm font-mono text-[#E8B626] font-bold block">
                  {step.number}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-[#E8B626] transition-colors whitespace-pre-line">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-8 flex items-center justify-between text-xs font-mono text-gray-500">
                <span>Phase 0{idx + 1}</span>
                <span className="w-8 h-px bg-white/10 group-hover:bg-[#E8B626]/50 group-hover:w-12 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
