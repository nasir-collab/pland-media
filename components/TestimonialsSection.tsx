import React from "react";
import { Star, Quote, Building2, GraduationCap, HeartPulse } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Supriya Pattanayak",
      role: "Admissions Directorate",
      organization: "Centurion University",
      icon: <GraduationCap className="w-5 h-5 text-[#E8B626]" />,
      quote:
        "Plan D Media transformed our student enrollment funnel. Their automated WhatsApp qualification bot and precision Google Search campaigns delivered over 2,400 confirmed admissions while cutting our cost-per-inquiry by more than half. They are our undisputed growth partner.",
      metric: "+410% Qualified Enquiries",
    },
    {
      name: "Arindam Mukherjee",
      role: "Head of Brand Strategy",
      organization: "SRMB Srijan Private Limited",
      icon: <Building2 className="w-5 h-5 text-[#E8B626]" />,
      quote:
        "Industrial manufacturing and construction marketing is tricky—most agencies don't understand B2B dealers. Plan D Media secured #1 Google organic rankings for our flagship TMT bars and generated a 320% surge in verified distributor applications.",
      metric: "#1 Search Ranking in Eastern India",
    },
    {
      name: "Dr. K. Banerjee",
      role: "Chief Aesthetic Surgeon",
      organization: "La Derma Aesthetics & Hair Clinic",
      icon: <HeartPulse className="w-5 h-5 text-[#E8B626]" />,
      quote:
        "In cosmetic dermatology, trust is everything. Plan D Media built high-converting doctor consultation pages and local SEO campaigns that book 350+ premium procedure appointments each month at an exceptional 6.2x ROAS.",
      metric: "6.2x ROAS on Procedures",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header matching Whiteboard Media style */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/10 gap-4 mb-16">
          <div className="flex items-center gap-6 text-xs text-gray-400 font-mono">
            <span className="text-[#E8B626] font-bold">(Client Endorsements)</span>
            <span>(Verified Accountability)</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <div className="flex text-[#E8B626]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#E8B626]" />
              ))}
            </div>
            <span>5.0 / 5.0 Rating Across Client Portfolio</span>
          </div>
        </div>

        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Loved by founders, marketers, and market leaders.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#171717] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#E8B626]/40 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {t.icon}
                  </div>
                  <Quote className="w-8 h-8 text-white/10 group-hover:text-[#E8B626]/25 transition-colors" />
                </div>

                <div className="bg-[#1f1f1f] border border-white/5 rounded-lg px-3 py-1.5 inline-block text-xs font-mono font-semibold text-[#E8B626] mb-4">
                  {t.metric}
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic mb-8 font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-white/5 pt-4">
                <div className="font-bold text-white text-sm">{t.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {t.role} • <span className="text-gray-200">{t.organization}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
