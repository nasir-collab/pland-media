"use client";

import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

function NavigationChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
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

