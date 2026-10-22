"use client";

import React from "react";
import { Phone, MessageSquareText } from "lucide-react";

interface MobileBottomBarProps {
  onEnquireClick: () => void;
  phoneNumber?: string;
}

export default function MobileBottomBar({
  onEnquireClick,
  phoneNumber = "+918777018187",
}: MobileBottomBarProps) {
  return (
    <aside
      aria-label="Mobile Quick CTA Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#E8B626] border-t border-[#d4a319] shadow-[0_-6px_25px_rgba(0,0,0,0.45)] pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="grid grid-cols-2 divide-x divide-black/20 text-black">
        {/* Call Now */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-2 py-3.5 px-3 font-extrabold text-sm sm:text-base tracking-wide hover:bg-black/5 active:bg-black/15 transition-colors select-none"
          aria-label="Call Plan D Media now"
        >
          <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center shrink-0">
            <Phone className="w-3.5 h-3.5 fill-black text-black" />
          </div>
          <span className="font-sans font-bold">Call Now</span>
        </a>

        {/* Enquire Now */}
        <button
          type="button"
          onClick={onEnquireClick}
          className="flex items-center justify-center gap-2 py-3.5 px-3 font-extrabold text-sm sm:text-base tracking-wide hover:bg-black/5 active:bg-black/15 transition-colors select-none cursor-pointer"
          aria-label="Open consultation inquiry form"
        >
          <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center shrink-0">
            <MessageSquareText className="w-3.5 h-3.5 text-black" />
          </div>
          <span className="font-sans font-bold">Enquire Now</span>
        </button>
      </div>
    </aside>
  );
}
