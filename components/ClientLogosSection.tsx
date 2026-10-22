"use client";

import React from "react";
import Image from "next/image";

interface ClientBrand {
  name: string;
  src: string;
  industry: string;
}

const clientLogos: ClientBrand[] = [
  { name: "Support Elders", src: "/clients/clients_SupportElders-1.png", industry: "Elder Healthcare" },
  { name: "Gandhi Institute of Management", src: "/clients/client_GIMT-1.png", industry: "Higher Education" },
  { name: "Teeth Care Dental", src: "/clients/clients_TeethCare-1.png", industry: "Dental Healthcare" },
  { name: "Shyam Metalics", src: "/clients/clients_ShyamMetalic-3.png", industry: "Manufacturing & Steel" },
  { name: "Navin Classes", src: "/clients/client_NavinClass.png", industry: "Professional EdTech" },
  { name: "NAME Education", src: "/clients/client_NameEdu.png", industry: "Media & Events Academy" },
  { name: "My Medical Study", src: "/clients/client_MyMedicalStudy.png", industry: "Medical EdTech" },
  { name: "Medhavi Skills University", src: "/clients/client_Medhavi.png", industry: "University Education" },
  { name: "MAAC Serampore", src: "/clients/client_MaacSaltlake.png", industry: "Animation & VFX" },
  { name: "SRMB Steel", src: "/clients/clients_SRMB-2.png", industry: "TMT Rebar & Infrastructure" },
  { name: "Centurion University", src: "/clients/client_Centurion-1.png", industry: "Higher Education" },
  { name: "IEM Labs", src: "/clients/clients_IEMLabs-1.png", industry: "Cybersecurity & IT" },
  { name: "UEM Kolkata", src: "/clients/client_UEM-1.png", industry: "Engineering & Tech" },
  { name: "iLEAD Kolkata", src: "/clients/client_iLEAD-1.png", industry: "Media & Design College" },
  { name: "Emami Realty", src: "/clients/clients_EmamiReality.png", industry: "Luxury Real Estate" },
  { name: "Makaibari Tea", src: "/clients/clients_Makaibari.png", industry: "Organic Darjeeling Tea" },
  { name: "Borosil", src: "/clients/client_Borosil-2.png", industry: "Consumer Goods" },
  { name: "The Prime Watches", src: "/clients/client_ThePrime-2.png", industry: "Luxury Horology" },
  { name: "Sylvan Ply", src: "/clients/clients_SylvanPly-1.png", industry: "Building Materials" },
  { name: "Jay Shree Tea", src: "/clients/clients_JayShreeTea-3.png", industry: "Heritage Agro Brand" },
  { name: "Birla Academy", src: "/clients/clients_BirlaAcademy-1.png", industry: "Fine Arts & Culture" },
  { name: "Aptiplus IAS", src: "/clients/client_Aptiplus-1.png", industry: "Civil Services Coaching" },
  { name: "Law Prep Tutorial", src: "/clients/client_LawPrep-1.png", industry: "CLAT Legal EdTech" },
  { name: "Image Clinic", src: "/clients/clients_ImageClinic-1.png", industry: "Aesthetic Healthcare" },
  { name: "Sukran Group", src: "/clients/clients_SukranGroup-1.png", industry: "Real Estate & Housing" },
  { name: "Orbit Group", src: "/clients/clients_Orbit-1.png", industry: "Commercial Real Estate" },
  { name: "Obeetee Carpets", src: "/clients/client_Obeetee-2.png", industry: "Luxury Handcrafted Rugs" },
];

export default function ClientLogosSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
      <div className="rr-container-1650">
        {/* Section Title matching Whiteboard Media typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-18 pb-8 border-b border-white/10">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8B626] shadow-[0_0_10px_#E8B626]" />
              <span className="tag-parenthesis text-xs font-mono text-[#E8B626] tracking-wider uppercase">
                (Client Roster)
              </span>
              <span className="text-xs font-mono text-gray-500">
                (100+ Enterprise Brands Scaled Across Bengal & India)
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.12]">
              <span className="text-stroke-title mr-3 font-light">Help to brands</span>
              <span>growing up and show their success stories to the world</span>
            </h2>
          </div>

          <div className="text-left lg:text-right shrink-0">
            <span className="text-xs font-mono text-gray-400 block mb-1">
              Verified Enterprise Scale
            </span>
            <span className="text-2xl sm:text-3xl font-mono font-bold text-[#E8B626]">
              100+ Client Portfolios
            </span>
          </div>
        </div>

        {/* High-Impact Single Continuous Client Logo Slider */}
        <div className="relative overflow-hidden py-6 -mx-6 sm:-mx-12 px-6 sm:px-12">
          {/* Subtle gradient edges for smooth luxury fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#111111] via-[#111111]/85 to-transparent z-20" />

          {/* Single Continuous Marquee Track with Substantial Card Dimensions */}
          <div
            className="animate-marquee flex items-center gap-7 sm:gap-10 hover:[animation-play-state:paused]"
            style={{ animationDuration: "60s" }}
          >
            {[...clientLogos, ...clientLogos].map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="w-64 sm:w-76 md:w-84 h-36 sm:h-42 md:h-46 shrink-0 rounded-2xl bg-white p-2.5 sm:p-3 flex items-center justify-center shadow-xl border border-white/20 transition-all duration-400 hover:scale-105 hover:border-[#E8B626] hover:shadow-[0_20px_45px_rgba(232,182,38,0.25)] group cursor-pointer relative"
                title={`${brand.name} • ${brand.industry}`}
              >
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={380}
                    height={215}
                    className="w-full h-full object-contain filter transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Subtle industry pill on hover */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-sm text-[10px] font-mono text-[#E8B626] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 border border-[#E8B626]/30">
                  {brand.industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
