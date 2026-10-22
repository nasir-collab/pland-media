"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export interface CapabilityCardItem {
  number: string;
  title: string;
  tagline?: string;
  badge?: string;
  description: string;
  features?: string[];
  quote?: string;
  slug?: string;
}

interface ReferenceCapabilitiesGridProps {
  badge?: string;
  title1?: string;
  title2?: string;
  description?: string;
  items: CapabilityCardItem[];
  columns?: 2 | 3;
}

export default function ReferenceCapabilitiesGrid({
  badge = "Specialized Capabilities",
  title1 = "Engineered for",
  title2 = "Measurable Scale",
  description,
  items,
  columns = 3,
}: ReferenceCapabilitiesGridProps) {
  const gridClass =
    columns === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-8"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";

  return (
    <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
      <div className="rr-container-1650">
        <div className="max-w-4xl mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-mono text-[#E8B626] uppercase tracking-wider block mb-3">
            ({badge})
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            {title1} <span className="text-[#E8B626] font-normal">{title2}</span>
          </h2>
          {description && (
            <p className="text-base text-gray-400 font-light leading-relaxed mt-4 max-w-2xl">
              {description}
            </p>
          )}
        </div>

        <div className={gridClass}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-2xl bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#E8B626] font-bold">
                    {item.number || `0${idx + 1}`}
                  </span>
                  {item.badge && (
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#E8B626] transition-colors">
                    {item.title}
                  </h3>
                  {item.tagline && (
                    <p className="text-xs font-mono text-gray-400 mt-1">
                      {item.tagline}
                    </p>
                  )}
                </div>

                {item.quote && (
                  <p className="text-xs italic text-gray-400 font-light pl-3 border-l-2 border-[#E8B626]/50">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                )}

                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>

                {item.features && item.features.length > 0 && (
                  <ul className="space-y-2.5 pt-2 border-t border-white/5">
                    {item.features.map((f, fIdx) => (
                      <li
                        key={fIdx}
                        className="text-xs text-gray-300 font-light flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B626] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-8 mt-6 border-t border-white/5 text-xs font-mono text-gray-500 flex items-center justify-between">
                <span>Phase Architecture</span>
                {item.slug ? (
                  <Link
                    href={item.slug}
                    className="text-[#E8B626] hover:underline flex items-center gap-1"
                  >
                    Explore &rarr;
                  </Link>
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-[#E8B626]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
