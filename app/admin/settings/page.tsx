"use client";

import React, { useState, useEffect } from "react";
import { Settings, Save, CheckCircle2, Loader2, Sparkles, Building, Phone, Mail, MapPin } from "lucide-react";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        if (data.settings) setSettings(data.settings);
      })
      .catch((err) => console.error("Error loading settings:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSavedMessage("");

    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (!res.ok) throw new Error("Failed to save settings");

      setSavedMessage("Global settings saved successfully. Changes are live across the website.");
      setTimeout(() => setSavedMessage(""), 4000);
    } catch (err) {
      console.error(err);
      alert("Error saving global settings.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00] block mb-1">
            ✦ Global Environment
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Global Website Settings
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Configure legal identity, contact channels, address, and live notification tickers.
          </p>
        </div>
      </div>

      {savedMessage && (
        <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{savedMessage}</span>
        </div>
      )}

      {loading ? (
        <div className="p-16 text-center text-xs text-gray-500 font-mono bg-[#10121a] rounded-2xl border border-white/10">
          Loading global configurations...
        </div>
      ) : (
        <form onSubmit={handleSave} className="space-y-8">
          {/* Identity & Legal */}
          <div className="bg-[#10121a] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
              <Building className="w-4 h-4 text-[#d4ff00]" />
              Brand & Corporate Entity
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Public Brand Name
                </label>
                <input
                  type="text"
                  value={settings.site_name || ""}
                  onChange={(e) => handleChange("site_name", e.target.value)}
                  className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Full Legal Entity Name
                </label>
                <input
                  type="text"
                  value={settings.legal_name || ""}
                  onChange={(e) => handleChange("legal_name", e.target.value)}
                  className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Site Tagline
              </label>
              <input
                type="text"
                value={settings.site_tagline || ""}
                onChange={(e) => handleChange("site_tagline", e.target.value)}
                className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-[#10121a] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
              <Phone className="w-4 h-4 text-[#00f0ff]" />
              Official Communications & Headquarters
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Primary Phone / Hotline
                </label>
                <input
                  type="text"
                  value={settings.phone || ""}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Official Email Address
                </label>
                <input
                  type="email"
                  value={settings.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Office Address (Ecospace Business Park, Kolkata)
              </label>
              <textarea
                rows={2}
                value={settings.address || ""}
                onChange={(e) => handleChange("address", e.target.value)}
                className="w-full bg-[#151824] border border-white/10 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#d4ff00] resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Working Hours
              </label>
              <input
                type="text"
                value={settings.working_hours || ""}
                onChange={(e) => handleChange("working_hours", e.target.value)}
                className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[#10121a] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
              <Sparkles className="w-4 h-4 text-[#ff5500]" />
              Social Channels & Tickers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="text"
                  value={settings.linkedin_url || ""}
                  onChange={(e) => handleChange("linkedin_url", e.target.value)}
                  className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Instagram URL
                </label>
                <input
                  type="text"
                  value={settings.instagram_url || ""}
                  onChange={(e) => handleChange("instagram_url", e.target.value)}
                  className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Hero Announcement Ticker Text
              </label>
              <input
                type="text"
                value={settings.hero_announcement || ""}
                onChange={(e) => handleChange("hero_announcement", e.target.value)}
                className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="px-8 py-3.5 bg-[#d4ff00] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#c2ea00] flex items-center gap-2 shadow-lg shadow-[#d4ff00]/20"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>Save All Settings</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
