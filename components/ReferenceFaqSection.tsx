"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export interface ReferenceFaqItem {
  number: string;
  question: string;
  answer: string;
}

interface ReferenceFaqSectionProps {
  badge?: string;
  title1?: string;
  title2?: string;
  description?: string;
  faqs: ReferenceFaqItem[];
  onOpenModal?: () => void;
}

export default function ReferenceFaqSection({
  badge = "FAQ",
  title1 = "Learn any",
  title2 = "question",
  description = "Everything you need to know about our operational methodology, attribution accountability, onboarding sprint, and transparent reporting standards.",
  faqs,
  onOpenModal,
}: ReferenceFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
      <div className="rr-container-1650">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: FAQ Badge & Section Title matching reference */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8B626]" />
              <span>{badge}</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight leading-[1.08]">
              {title1} <br />
              <span className="text-[#E8B626] font-medium">{title2}</span>
            </h2>

            <p className="text-base text-gray-400 font-light leading-relaxed max-w-md">
              {description}
            </p>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#171717] border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase text-[#E8B626] font-semibold block">
                Have a bespoke requirement?
              </span>
              <p className="text-sm text-gray-300 font-light">
                Schedule a confidential 30-minute discovery consultation with our senior growth architects.
              </p>
              {onOpenModal ? (
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E8B626] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#F3C84B] transition-colors cursor-pointer"
                >
                  <span>Speak with an Architect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E8B626] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#F3C84B] transition-colors"
                >
                  <span>Speak with an Architect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>

          {/* Right Column: Accordion List matching reference */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.number || index}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#171717] border-[#E8B626]/40 shadow-xl shadow-[#E8B626]/5"
                      : "bg-[#141414] border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium text-white leading-snug flex items-center gap-4">
                      <span className="text-xs sm:text-sm font-mono text-[#E8B626] shrink-0">
                        {faq.number || `0${index + 1}`}
                      </span>
                      <span>{faq.question}</span>
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#E8B626] text-black border-[#E8B626]"
                          : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out px-6 sm:px-7 ${
                      isOpen ? "grid-rows-[1fr] pb-6 sm:pb-7 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden text-sm sm:text-base text-gray-400 font-light leading-relaxed pl-8">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
