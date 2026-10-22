"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle, Loader2, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Performance Marketing & Paid Ads",
    budget: "₹1,00,000 - ₹3,00,000 / mo",
    message: "",
    hp: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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
        throw new Error(data.error || "Failed to submit inquiry");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to send inquiry. Please try again or reach out on WhatsApp.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-16 bg-[#111111] text-white min-h-screen">
      {/* Top Header matching Whiteboard Media */}
      <section className="py-20 sm:py-28 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-6 text-xs text-gray-400 font-mono pb-8 border-b border-white/10 mb-12">
            <span className="text-[#E8B626] font-bold">(Contact Us)</span>
            <span>(Direct Partner Access)</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-8">
              Let&apos;s start a great work right now.
            </h1>
            <p className="text-gray-400 text-base sm:text-xl leading-relaxed font-light max-w-2xl">
              Whether you are scaling student applications, industrial manufacturing dealer networks, or premium clinic appointments, we evaluate your opportunity with zero fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Plan D Media Headquarters
                </h2>
                <div className="text-xs font-mono text-[#E8B626] mb-4">
                  LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Headquartered in the premier corporate innovation corridor of Kolkata at Ecospace Business Park, Rajarhat.
                </p>
              </div>

              <div className="space-y-4 text-sm text-gray-300">
                <div className="bg-[#171717] border border-white/10 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#E8B626]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-1">Corporate Office</div>
                    <div className="text-xs text-gray-400 leading-relaxed font-light">
                      Ecospace Business Park, Premises No. 701, Action Area II, New Town, Kolkata, West Bengal 700160, India
                    </div>
                  </div>
                </div>

                <div className="bg-[#171717] border border-white/10 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#E8B626]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-1">Direct Telephone &amp; WhatsApp</div>
                    <a
                      href="tel:+918777018187"
                      className="text-xs text-[#E8B626] hover:underline block font-mono"
                    >
                      +91 87770 18187
                    </a>
                    <div className="text-[11px] text-gray-500 mt-1 font-mono">
                      Priority response within 4 hours
                    </div>
                  </div>
                </div>

                <div className="bg-[#171717] border border-white/10 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#E8B626]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-1">Electronic Inquiries</div>
                    <a
                      href="mailto:info@pland.in"
                      className="text-xs text-[#E8B626] hover:underline block font-mono"
                    >
                      info@pland.in
                    </a>
                    <div className="text-[11px] text-gray-500 mt-1 font-mono">
                      For RFPs, partnerships, and executive briefings
                    </div>
                  </div>
                </div>

                <div className="bg-[#171717] border border-white/10 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#E8B626]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-1">Operating Hours</div>
                    <div className="text-xs text-gray-400 font-light">
                      Monday to Saturday: 10:00 AM – 7:00 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#171717] border border-white/10 rounded-3xl p-8 sm:p-12 relative shadow-2xl">
                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 bg-[#E8B626]/10 border border-[#E8B626]/30 text-[#E8B626] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed font-light">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Our senior growth architect is reviewing your inquiry and will reach out shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "Performance Marketing & Paid Ads",
                          budget: "₹1,00,000 - ₹3,00,000 / mo",
                          message: "",
                          hp: "",
                        });
                      }}
                      className="px-6 py-2.5 bg-[#E8B626] text-white font-semibold rounded-full hover:bg-[#D4A319] transition-colors text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-8">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#E8B626] block mb-2 font-bold">
                        (Schedule Growth Consultation)
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Tell us about your objectives.
                      </h3>
                      <p className="text-xs text-gray-400 mt-2 font-light">
                        Complete this brief form to schedule an audit with our senior performance team.
                      </p>
                    </div>

                    {error && (
                      <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-xs">
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
                          <label className="block text-xs font-mono text-gray-300 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Samir Das"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8B626] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-gray-300 mb-1.5">
                            Corporate Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="samir@company.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8B626] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-gray-300 mb-1.5">
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
                            className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8B626] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-gray-300 mb-1.5">
                            Company Name / Website
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Acme Health"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({ ...formData, company: e.target.value })
                            }
                            className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8B626] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-gray-300 mb-1.5">
                            Target Service Vertical
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                            className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E8B626] transition-colors"
                          >
                            <option value="Performance Marketing & Paid Ads">
                              Performance Marketing &amp; Paid Ads
                            </option>
                            <option value="Enterprise SEO & Organic Growth">
                              Enterprise SEO &amp; Organic Growth
                            </option>
                            <option value="Conversion Infrastructure & Web Engineering">
                              Next.js Web Engineering
                            </option>
                            <option value="Social Branding & Creative Studio">
                              Social Branding &amp; Creative Studio
                            </option>
                            <option value="AI Growth Systems & Sales Funnel Engineering">
                              AI Lead Systems &amp; Automation
                            </option>
                            <option value="Full 360 Growth Partnership">
                              Full 360° Growth Partnership
                            </option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-gray-300 mb-1.5">
                            Monthly Budget Range
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) =>
                              setFormData({ ...formData, budget: e.target.value })
                            }
                            className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E8B626] transition-colors"
                          >
                            <option value="₹50,000 - ₹1,00,000 / mo">₹50,000 - ₹1,00,000 / mo</option>
                            <option value="₹1,00,000 - ₹3,00,000 / mo">₹1,00,000 - ₹3,00,000 / mo</option>
                            <option value="₹3,00,000 - ₹10,00,000 / mo">₹3,00,000 - ₹10,00,000 / mo</option>
                            <option value="₹10,00,000+ / mo">₹10,00,000+ / mo (Enterprise)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-gray-300 mb-1.5">
                          Brief Overview of Your Objectives
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your current acquisition channels, challenges, or goals..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full bg-[#1f1f1f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8B626] transition-colors resize-none font-light"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                          <ShieldCheck className="w-4 h-4 text-[#E8B626]" />
                          <span>Confidential • 100% Data Protection</span>
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full sm:w-auto px-8 py-3.5 bg-[#E8B626] text-white font-bold rounded-full hover:bg-[#D4A319] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 text-xs uppercase tracking-wider shadow-md shadow-[#E8B626]/20 cursor-pointer"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Growth Audit Request
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
          </div>
        </div>
      </section>
    </div>
  );
}
