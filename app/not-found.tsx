import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="relative z-10 text-center max-w-lg mx-auto py-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#E8B626]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8B626]">
            (404 • Resource Not Located)
          </span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-black text-white tracking-tighter mb-4 font-mono">
          4<span className="text-[#E8B626]">0</span>4
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
          This Page Has Been Repositioned or Archived
        </h2>

        <p className="text-sm text-gray-400 mb-8 leading-relaxed font-light">
          The requested URL does not match an active asset on Plan D Media. Return to our homepage or explore our core capabilities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#E8B626] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#D4A319] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#E8B626]/20 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-white font-medium text-xs uppercase tracking-wider border border-white/15 transition-colors flex items-center justify-center gap-2"
          >
            <span>Explore Capabilities</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
