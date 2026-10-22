"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, ArrowRight, Loader2, Sparkles, ShieldCheck } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultService,
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: defaultService || "Performance Marketing & Paid Ads",
    budget: "₹1,00,000 - ₹3,00,000 / mo",
    message: "",
    hp: "", // Honeypot
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to submit inquiry. Please try again or WhatsApp us directly.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* 1. PERSISTENT FLOATING CLOSE BUTTON - Fixed to viewport so it NEVER scrolls away on mobile/desktop */}
      <button
        type="button"
        onClick={onClose}
        className="fixed top-3 right-3 sm:top-5 sm:right-5 z-[70] flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1c1c1c]/95 hover:bg-[#2a2a2a] text-white border border-[#E8B626]/50 hover:border-[#E8B626] shadow-[0_8px_30px_rgba(0,0,0,0.85)] backdrop-blur-xl cursor-pointer active:scale-95 transition-all group"
        aria-label="Close dialog"
      >
        <X className="w-4 h-4 text-[#E8B626] group-hover:rotate-90 transition-transform duration-200" />
        <span className="text-xs font-mono font-bold tracking-wider uppercase text-white">Close</span>
      </button>

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity cursor-pointer"
        onClick={onClose}
        title="Click to dismiss"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#171717] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-10 z-10 my-8">
        {/* Sticky Close Bar inside modal header */}
        <div className="sticky -top-5 sm:-top-10 -mx-5 sm:-mx-10 px-5 sm:px-10 py-3 bg-[#171717]/95 backdrop-blur-xl border-b border-white/10 z-20 flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#E8B626]/10 text-[#E8B626] border border-[#E8B626]/20">
              <Sparkles className="w-3 h-3" /> Growth Discovery Audit
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white border border-white/15 text-xs font-mono font-medium transition-colors cursor-pointer"
            aria-label="Close form"
          >
            <X className="w-3.5 h-3.5 text-[#E8B626]" />
            <span>✕ Close</span>
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-[#E8B626]/10 border border-[#E8B626]/30 text-[#E8B626] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Audit Request Confirmed
            </h3>
            <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed font-light">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. A senior growth strategist from Plan D Media will analyze your domain and contact you within 4 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#E8B626] text-black font-bold rounded-full hover:bg-[#D4A319] transition-colors cursor-pointer shadow-lg shadow-[#E8B626]/20"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              Request a Confidential Growth Audit
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mb-6 font-light">
              Get an honest assessment of your customer acquisition, paid funnel leaks, and organic search opportunity. No sales pressure.
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot hidden input */}
              <input
                type="text"
                name="hp"
                value={formData.hp}
                onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sen"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#1f1f1f] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8B626] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#1f1f1f] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8B626] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98300 00000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#1f1f1f] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8B626] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">
                    Company / Website URL
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. acmebrand.com"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full bg-[#1f1f1f] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8B626] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">
                    Primary Service Focus
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-[#1f1f1f] border border-white/10 rounded-lg px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#E8B626] transition-colors"
                  >
                    <option value="Performance Marketing & Paid Ads">
                      Performance Marketing (PPC & Meta)
                    </option>
                    <option value="Enterprise SEO & Organic Growth">
                      Enterprise SEO & Organic Growth
                    </option>
                    <option value="Conversion Infrastructure & Web Engineering">
                      Next.js Web & Funnel Engineering
                    </option>
                    <option value="Social Branding & Creative Studio">
                      Social Branding & Content Studio
                    </option>
                    <option value="AI Growth Systems & Sales Funnel Engineering">
                      AI Lead Systems & Funnel Automation
                    </option>
                    <option value="Full 360 Growth Partnership">
                      Full 360° Growth Partnership
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">
                    Estimated Monthly Ad / Growth Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full bg-[#1f1f1f] border border-white/10 rounded-lg px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#E8B626] transition-colors"
                  >
                    <option value="₹50,000 - ₹1,00,000 / mo">₹50,000 - ₹1,00,000 / month</option>
                    <option value="₹1,00,000 - ₹3,00,000 / mo">₹1,00,000 - ₹3,00,000 / month</option>
                    <option value="₹3,00,000 - ₹10,00,000 / mo">₹3,00,000 - ₹10,00,000 / month</option>
                    <option value="₹10,00,000+ / mo">₹10,00,000+ / month (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1">
                  Tell us about your growth targets or current hurdles
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. We are generating 100 leads a month but CPA is too high, or we need to rank #1 for enterprise keywords..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#1f1f1f] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8B626] transition-colors resize-none font-light"
                />
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-mono text-xs font-semibold tracking-wide transition-colors cursor-pointer text-center"
                >
                  ✕ Cancel / Close Form
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <div className="hidden lg:flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                    <ShieldCheck className="w-4 h-4 text-[#E8B626]" />
                    <span>100% Confidential</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-7 py-3 bg-[#E8B626] text-black font-extrabold rounded-full hover:bg-[#D4A319] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 text-sm cursor-pointer shadow-lg shadow-[#E8B626]/20"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Audit Request</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-2 text-center text-[11px] font-mono text-gray-500">
                Tap anywhere outside, click &quot;Close&quot;, or press ESC to dismiss.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
