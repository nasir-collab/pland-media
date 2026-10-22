import prisma from "@/lib/prisma";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import RoiServicesSection from "@/components/RoiServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ServicesSection from "@/components/ServicesSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import ClientLogosSection from "@/components/ClientLogosSection";

export default async function HomePage() {
  const [services, caseStudies] = await Promise.all([
    prisma.service.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { order: "asc" },
    }),
    prisma.caseStudy.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { order: "asc" },
    }),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* 1. Hero: Editorial Typography + Background Wavy Video */}
      <HeroSection />

      {/* 2. Manifesto / About: (Who we are) "Every great brand story begins with a blank space" */}
      <ManifestoSection />

      {/* 3. Our ROI-based Digital Marketing Services in Kolkata (6 Services from Plan D) */}
      <RoiServicesSection />

      {/* 4. Portfolio: (Selected Work) Asymmetrical Case Studies Grid */}
      <CaseStudiesSection caseStudies={caseStudies} />

      {/* 5. Capabilities: (Our Capabilities) "We define the problem before we sell the idea" */}
      <ServicesSection services={services} />

      {/* 6. Marquee: "We make brand big and bolder" */}
      <MarqueeTicker />

      {/* 7. Client Logos: "Help to brands growing up and show their success stories to the world" */}
      <ClientLogosSection />
    </div>
  );
}
