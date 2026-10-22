"use client";

import React, { Suspense, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import MobileBottomBar from "./MobileBottomBar";
import ConsultationModal from "./ConsultationModal";

function NavigationChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setModalOpen(true);
    window.addEventListener("open-consultation-modal", handleOpen);
    return () => window.removeEventListener("open-consultation-modal", handleOpen);
  }, []);

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="flex-grow pb-16 md:pb-0">{children}</main>
      <Footer />
      {/* Sticky Bottom Bar for Mobile Devices */}
      <MobileBottomBar
        onEnquireClick={() => setModalOpen(true)}
        phoneNumber="+918777018187"
      />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<main className="flex-grow">{children}</main>}>
      <NavigationChrome>{children}</NavigationChrome>
    </Suspense>
  );
}

