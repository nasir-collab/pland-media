"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  Users,
  Zap,
  Code,
  BarChart3,
  MapPin,
  Building2,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Phone,
} from "lucide-react";
import MarqueeTicker from "@/components/MarqueeTicker";
import CTASection from "@/components/CTASection";
import ConsultationModal from "@/components/ConsultationModal";

interface EdgePillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const edgePillars: EdgePillar[] = [
  {
    number: "01",
    title: "Independent Leaders",
    tagline: "Agile & Client-First",
    description:
      "We are an independent agency answerable only to our clients, not external investors. We believe in agility, relentless tool investment, and going outside the rulebook to deliver true ROI — freedom that bigger corporate agencies cannot offer.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "We Are Integrated",
    tagline: "Omnichannel Cohesion",
    description:
      "No need to juggle multiple agencies for SEO, paid campaigns, social branding, creative production, and technology! We have a deep understanding of how each piece fits into the puzzle of a profitable digital marketing engine.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Strictly Limited Clients",
    tagline: "Cap At 30 Active Partnerships",
    description:
      "We never work with more than 30 clients at a time to ensure undivided senior attention and dedication for each brand. We grow with our clients by focusing deeply on operations and delivery, not aggressive sales pitching.",
    icon: Users,
  },
  {
    number: "04",
    title: "100% Risk Free",
    tagline: "Pay Upon Improvement",
    description:
      "There are no locked-in 'fixed term' contracts and zero advances. Clients only pay once there is verified improvement in digital metrics and search rankings. Absolute accountability with zero financial risk.",
    icon: Zap,
  },
  {
    number: "05",
    title: "Full-Stack Tech Leverage",
    tagline: "In-House Engineering",
    description:
      "Very few digital marketing agencies in Kolkata have an in-house team of full-stack software engineers to build and fix web assets fast! We heavily invest in custom code, automation, and Generative AI to multiply campaign ROI.",
    icon: Code,
  },
  {
    number: "06",
    title: "Radical Transparency",
    tagline: "Direct Communication",
    description:
      "No beating around the bush and no 50-page vanity PDF reports! The best partnerships thrive on honest reporting. We share no-nonsense weekly and monthly dashboards inside dedicated client communication groups.",
    icon: BarChart3,
  },
];

const pressFeatures = [
  { name: "ANI News", src: "/press/Features_ANI.png" },
  { name: "Business Standard", src: "/press/Features_BusinessStandard.png" },
  { name: "India Herald", src: "/press/Features_IndiaHerald.png" },
  { name: "WebIndia123", src: "/press/Features_WebIndia123.png" },
  { name: "IIDE", src: "/press/iide.png" },
];

export default function AboutPage() {
  const [activeOffice, setActiveOffice] = useState<"ecospace" | "biowonder">("ecospace");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-16 bg-[#111111] text-white min-h-screen">
      {/* 1. Hero Section: Based in Kolkata, Creating Impact Worldwide */}
      <section className="py-20 sm:py-28 border-b border-white/10 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E8B626]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="rr-container-1650 relative z-10">
          {/* Metadata Top Bar */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 font-mono pb-8 border-b border-white/10 mb-12">
            <span className="text-[#E8B626] font-bold">(01 / 05)</span>
            <span className="tag-parenthesis text-[#E8B626]">(Based in Kolkata)</span>
            <span>(Creating Impact Worldwide)</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="hidden sm:inline">LEADTECH PLAN D MEDIA (OPC) PVT. LTD.</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
                <span className="text-stroke-title mr-3 font-light">Based in Kolkata.</span>
                <span>Creating Impact Worldwide.</span>
              </h1>

              <div className="pt-2">
                <span className="text-lg sm:text-2xl font-normal text-[#E8B626] block">
                  Success Driven, ROI Focused Digital Agency in Kolkata
                </span>
              </div>

              <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed font-light pt-2 max-w-3xl">
                <p>
                  Plan D Media started with a clear objective: to cater to growing companies in Kolkata and Eastern India who cannot afford to hire bloated national agency conglomerates and have burnt their hands with unreliable freelancers.
                </p>
                <p>
                  We bring world-class knowledge, rigorous enterprise processes, and modern engineering tools to the table — our founding leadership has managed national-level agencies and marquee consumer brands for years.
                </p>
                <p>
                  With <strong className="text-white font-medium">10+ years in the business</strong>, we have helped hundreds of brands scale up predictable revenues, achieve top-3 Google rankings, and lower customer acquisition costs. We believe every digital effort must result in commercial sales, which is why we built an agency structure that directly reflects business impact.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-[#E8B626] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#F3C84B] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#E8B626]/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Free Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+918240418456"
                  className="rr-btn-underline text-sm text-gray-300 hover:text-white inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E8B626]" />
                  <span>Call +91 82404 18456</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Column */}
            <div className="lg:col-span-4 space-y-5">
              <div className="p-8 rounded-3xl bg-[#171717] border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8B626]/10 rounded-full blur-3xl pointer-events-none" />

                <span className="text-xs font-mono uppercase tracking-widest text-[#E8B626] block mb-6 font-bold">
                  (Proven Credentials)
                </span>

                <div className="space-y-6">
                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-white">10+</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Years in Digital Business</div>
                  </div>

                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-[#E8B626]">100+</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Enterprise Brands Scaled</div>
                  </div>

                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-white">98.4%</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Client Retention Rate in Kolkata</div>
                  </div>

                  <div>
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-[#E8B626]">₹120M+</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Profitable Ad Spend Managed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee Ticker */}
      <MarqueeTicker />

      {/* 2. The Plan D Edge: 6 Strategic Pillars */}
      <section className="py-24 sm:py-32 border-b border-white/10 relative">
        <div className="rr-container-1650">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20 pb-8 border-b border-white/10">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E8B626] shadow-[0_0_8px_#E8B626]" />
                <span className="tag-parenthesis text-xs font-mono text-[#E8B626] uppercase">
                  (The Plan D Advantage)
                </span>
                <span className="text-xs font-mono text-gray-500">(06 Pillars)</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                <span className="text-stroke-title mr-3 font-light">Get the</span>
                <span>Plan D Edge !</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                Why growing companies choose Plan D Media over legacy agencies and unpredictable freelancers.
              </p>
            </div>
          </div>

          {/* 6 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {edgePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="group relative bg-[#171717] hover:bg-[#1a1a1a] border border-white/10 hover:border-[#E8B626]/50 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(232,182,38,0.12)]"
                >
                  <div>
                    {/* Header: Number & Tagline */}
                    <div className="flex items-center justify-between pb-6 border-b border-white/10">
                      <span className="text-xs font-mono text-gray-400">
                        ({pillar.number} / 06)
                      </span>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-[#E8B626]/30 text-[#E8B626]">
                        {pillar.tagline}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="pt-6 pb-4 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-[#E8B626]/50 group-hover:bg-[#E8B626]/10 flex items-center justify-center text-[#E8B626] transition-all duration-300">
                        <Icon className="w-7 h-7 stroke-[1.75]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#E8B626] transition-colors tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-300 font-light leading-relaxed pt-2">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-8 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-[#E8B626] shrink-0" />
                    <span>Verified Operational Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Dual Office Showcase (EcoSpace & Biowonder) */}
      <section className="py-24 sm:py-32 border-b border-white/10 bg-[#141414]">
        <div className="rr-container-1650">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 pb-8 border-b border-white/10">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E8B626] shadow-[0_0_8px_#E8B626]" />
                <span className="tag-parenthesis text-xs font-mono text-[#E8B626] uppercase">
                  (Strategic Hubs)
                </span>
                <span className="text-xs font-mono text-gray-500">
                  (Dual Kolkata Workspaces)
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.12]">
                <span className="text-stroke-title mr-3 font-light">Where We</span>
                <span>Operate &amp; Build</span>
              </h2>
            </div>

            {/* Switcher Buttons: EcoSpace vs Biowonder */}
            <div className="flex items-center gap-3 bg-[#1c1c1c] p-1.5 rounded-full border border-white/10">
              <button
                type="button"
                onClick={() => setActiveOffice("ecospace")}
                className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeOffice === "ecospace"
                    ? "bg-[#E8B626] text-white font-bold shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EcoSpace Office
              </button>
              <button
                type="button"
                onClick={() => setActiveOffice("biowonder")}
                className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeOffice === "biowonder"
                    ? "bg-[#E8B626] text-white font-bold shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Biowonder Office
              </button>
            </div>
          </div>

          {/* Active Office Content */}
          {activeOffice === "ecospace" ? (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 group bg-[#1c1c1c]">
                  <Image
                    src="/ecospace-tower.jpg"
                    alt="EcoSpace Business Park Tower"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                    <span className="text-xs font-mono text-[#E8B626]">EcoSpace Tower 4A</span>
                  </div>
                </div>

                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 group bg-[#1c1c1c]">
                  <Image
                    src="/ecospace-entrance.jpg"
                    alt="EcoSpace Business Park Entrance"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                    <span className="text-xs font-mono text-[#E8B626]">Tech Campus Entrance</span>
                  </div>
                </div>

                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 group bg-[#1c1c1c]">
                  <Image
                    src="/ecospace-campus.png"
                    alt="EcoSpace Business Park Campus Grounds"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                    <span className="text-xs font-mono text-[#E8B626]">Lush Work Environment</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#1a1a1a] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#E8B626] mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Headquarters &amp; Tech Operations</span>
                  </div>
                  <h4 className="text-white text-xl font-bold">EcoSpace Business Park</h4>
                  <p className="text-sm text-gray-400 font-light mt-1">
                    Plot No. AA II, Action Area II, Newtown, Kolkata, West Bengal 700160
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-[#E8B626] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#F3C84B] transition-colors shrink-0"
                >
                  Visit EcoSpace Office →
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 group bg-[#1c1c1c]">
                  <Image
                    src="/biowonder-facade.png"
                    alt="Biowonder Eco-Architecture Facade"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                    <span className="text-xs font-mono text-[#E8B626]">Vertical Green Architecture</span>
                  </div>
                </div>

                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 group bg-[#1c1c1c]">
                  <Image
                    src="/biowonder-plaza.jpg"
                    alt="Biowonder Plaza & Corporate Lobby"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                    <span className="text-xs font-mono text-[#E8B626]">Biophilic Urban Design</span>
                  </div>
                </div>

                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 group bg-[#1c1c1c]">
                  <Image
                    src="/biowonder-tower.png"
                    alt="Biowonder Executive Floor"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                    <span className="text-xs font-mono text-[#E8B626]">South Kolkata Hub</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#1a1a1a] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#E8B626] mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Creative Strategy &amp; Client Boardroom</span>
                  </div>
                  <h4 className="text-white text-xl font-bold">Biowonder Business Center</h4>
                  <p className="text-sm text-gray-400 font-light mt-1">
                    789, Eastern Metropolitan Bypass, Anandapur, East Kolkata Twp, Kolkata, WB 700107
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-[#E8B626] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#F3C84B] transition-colors shrink-0"
                >
                  Visit Biowonder Office →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. We Got Featured ! (Press Media Badges) */}
      <section className="py-20 sm:py-28 border-b border-white/10 bg-[#111111]">
        <div className="rr-container-1650">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="tag-parenthesis text-xs font-mono text-[#E8B626] uppercase">
              (Industry Recognition)
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              We Got Featured !
            </h2>
            <p className="text-sm text-gray-400 font-light">
              Plan D Media is covered regularly across leading national news wires and marketing publications.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            {pressFeatures.map((press, i) => (
              <div
                key={i}
                className="w-44 sm:w-52 h-20 rounded-2xl bg-white px-6 py-3 flex items-center justify-center shadow-lg border border-white/20 hover:scale-105 hover:border-[#E8B626] transition-all duration-300"
              >
                <Image
                  src={press.src}
                  alt={press.name}
                  width={160}
                  height={50}
                  className="max-h-10 w-auto object-contain filter"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Plan D Media Callout Banner */}
      <section className="py-20 border-b border-white/10 bg-[#161616]">
        <div className="rr-container-1650">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#171717] to-[#141414] border border-[#E8B626]/30 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8B626]/10 border border-[#E8B626]/30 text-xs font-mono text-[#E8B626]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Most Loved Digital Marketing Agency in Kolkata</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                Senior execution, zero fluff, and 50% more cost-effective.
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                Our specialists come from top national agency networks, bringing deep tactical expertise with zero tolerance for mediocrity. Experience why we hold the highest client retention rate in Eastern India.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 rounded-full bg-[#E8B626] hover:bg-[#F3C84B] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#E8B626]/25 hover:scale-105 cursor-pointer text-center"
              >
                Free Consultation →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA Section */}
      <CTASection />

      {/* Interactive Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
