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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#171717] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-10 z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

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
                className="px-6 py-2.5 bg-[#E8B626] text-white font-semibold rounded-full hover:bg-[#D4A319] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#E8B626]/10 text-[#E8B626] border border-[#E8B626]/20">
                <Sparkles className="w-3.5 h-3.5" /> Plan D Media • High-Growth Discovery
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              Request a Confidential Growth Audit
            </h2>
            <p className="text-gray-400 text-sm mb-6 font-light">
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

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#E8B626]" />
                  <span>100% Confidential • Senior Strategist Review</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-3 bg-[#E8B626] text-white font-bold rounded-full hover:bg-[#D4A319] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 text-sm cursor-pointer shadow-md shadow-[#E8B626]/20"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Submit Audit Request
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
