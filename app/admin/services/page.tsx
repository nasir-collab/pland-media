"use client";

import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Plus,
  Edit2,
  Trash2,
  Eye,
  CheckCircle2,
  X,
  Loader2,
  Save,
  ExternalLink,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  category: string;
  order: number;
  featured: boolean;
  status: string;
  deliverables: string;
  keyMetrics: string;
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingService, setEditingService] = useState<Partial<Service> | null>(null);
  const [saving, setSaving] = useState(false);
  const [deliverablesInput, setDeliverablesInput] = useState("");
  const [metricsInput, setMetricsInput] = useState("");

  const loadServices = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/services?all=true");
      const data = await res.json();
      setServices(data.services || []);
    } catch (e) {
      console.error("Error loading services:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleEdit = (service: Service) => {
    setEditingService(service);
    try {
      const parsedD = JSON.parse(service.deliverables);
      setDeliverablesInput(Array.isArray(parsedD) ? parsedD.join("\n") : "");
    } catch {
      setDeliverablesInput("");
    }
    try {
      const parsedM = JSON.parse(service.keyMetrics);
      setMetricsInput(
        Array.isArray(parsedM)
          ? parsedM.map((m: { label: string; value: string }) => `${m.label}: ${m.value}`).join("\n")
          : ""
      );
    } catch {
      setMetricsInput("");
    }
  };

  const handleNew = () => {
    setEditingService({
      title: "",
      slug: "",
      tagline: "",
      shortDescription: "",
      fullDescription: "",
      icon: "Zap",
      category: "Digital Marketing",
      order: services.length + 1,
      featured: false,
      status: "PUBLISHED",
    });
    setDeliverablesInput("");
    setMetricsInput("");
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;
    setSaving(true);

    const deliverablesArray = deliverablesInput
      .split("\n")
      .map((d) => d.trim())
      .filter(Boolean);

    const metricsArray = metricsInput
      .split("\n")
      .map((line) => {
        const [label, value] = line.split(":");
        return { label: label?.trim() || "", value: value?.trim() || "" };
      })
      .filter((m) => m.label && m.value);

    const payload = {
      ...editingService,
      deliverables: deliverablesArray,
      keyMetrics: metricsArray,
    };

    try {
      const isNew = !editingService.id;
      const url = isNew ? "/api/services" : `/api/services/${editingService.id}`;
      const method = isNew ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save service");

      await loadServices();
      setEditingService(null);
    } catch (err) {
      console.error(err);
      alert("Failed to save service. Please check details.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this service blueprint?")) return;
    try {
      await fetch(`/api/services/${id}`, { method: "DELETE" });
      setServices((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error("Error deleting service:", err);
    }
  };

  return (
    <div className="space-y-8 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00] block mb-1">
            ✦ Service Architecture
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Capabilities & Service Blueprints
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Manage your service offerings, deliverables, metrics, and publication status.
          </p>
        </div>

        <button
          onClick={handleNew}
          className="px-4 py-2.5 bg-[#d4ff00] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#c2ea00] transition-colors flex items-center gap-1.5 shadow-lg shadow-[#d4ff00]/15"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Service</span>
        </button>
      </div>

      {/* Services List Table */}
      <div className="bg-[#10121a] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12 text-center text-xs text-gray-500 font-mono">
            Loading service catalog...
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#151824] text-gray-400 font-mono uppercase text-[10px] tracking-wider border-b border-white/5">
                <tr>
                  <th className="py-3 px-6">Order</th>
                  <th className="py-3 px-6">Service Title & Category</th>
                  <th className="py-3 px-6">Slug</th>
                  <th className="py-3 px-6">Featured</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {services.map((service) => (
                  <tr key={service.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-mono text-gray-400 font-bold">
                      #{service.order}
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-bold text-white text-sm">{service.title}</div>
                      <div className="text-[11px] text-[#00f0ff] font-mono mt-0.5">
                        {service.category}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono text-gray-400 text-[11px]">
                      /services/{service.slug}
                    </td>
                    <td className="py-4 px-6">
                      {service.featured ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#d4ff00]/10 text-[#d4ff00] border border-[#d4ff00]/30 font-bold">
                          Featured
                        </span>
                      ) : (
                        <span className="text-gray-500 font-mono text-[10px]">Standard</span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                          service.status === "PUBLISHED"
                            ? "bg-green-500/10 text-green-400 border-green-500/30"
                            : "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
                        }`}
                      >
                        {service.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right space-x-2">
                      <a
                        href={`/services/${service.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-gray-400 hover:text-white inline-block"
                        title="View Public Page"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => handleEdit(service)}
                        className="p-1.5 text-gray-400 hover:text-[#d4ff00] inline-block"
                        title="Edit Service"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="p-1.5 text-gray-400 hover:text-red-400 inline-block"
                        title="Delete Service"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit / Create Modal */}
      {editingService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#10121a] border border-white/10 rounded-2xl p-6 sm:p-8 my-8 shadow-2xl">
            <button
              onClick={() => setEditingService(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold text-white mb-6">
              {editingService.id ? "Edit Service Offering" : "Create New Service"}
            </h2>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Service Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingService.title || ""}
                    onChange={(e) =>
                      setEditingService({
                        ...editingService,
                        title: e.target.value,
                        slug:
                          editingService.slug ||
                          e.target.value.toLowerCase().replace(/[^a-z0-9]/g, "-"),
                      })
                    }
                    className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    URL Slug *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingService.slug || ""}
                    onChange={(e) =>
                      setEditingService({ ...editingService, slug: e.target.value })
                    }
                    className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    value={editingService.category || ""}
                    onChange={(e) =>
                      setEditingService({ ...editingService, category: e.target.value })
                    }
                    className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Display Order
                  </label>
                  <input
                    type="number"
                    value={editingService.order ?? 1}
                    onChange={(e) =>
                      setEditingService({
                        ...editingService,
                        order: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Status
                  </label>
                  <select
                    value={editingService.status || "PUBLISHED"}
                    onChange={(e) =>
                      setEditingService({ ...editingService, status: e.target.value })
                    }
                    className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                  >
                    <option value="PUBLISHED">PUBLISHED</option>
                    <option value="DRAFT">DRAFT</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Tagline / High-Level Value Proposition
                </label>
                <input
                  type="text"
                  value={editingService.tagline || ""}
                  onChange={(e) =>
                    setEditingService({ ...editingService, tagline: e.target.value })
                  }
                  className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  value={editingService.shortDescription || ""}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      shortDescription: e.target.value,
                    })
                  }
                  className="w-full bg-[#151824] border border-white/10 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#d4ff00] resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Full Operational Blueprint (Detail Page)
                </label>
                <textarea
                  rows={4}
                  value={editingService.fullDescription || ""}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      fullDescription: e.target.value,
                    })
                  }
                  className="w-full bg-[#151824] border border-white/10 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#d4ff00] resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Deliverables (One per line)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Google Ads Search Campaigns&#10;Server-Side Tracking&#10;Weekly Reporting"
                    value={deliverablesInput}
                    onChange={(e) => setDeliverablesInput(e.target.value)}
                    className="w-full bg-[#151824] border border-white/10 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#d4ff00] resize-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Key Metrics (Format: Label: Value, one per line)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Avg ROAS: 4.8x&#10;CPA Reduction: -42%&#10;Ad Spend: ₹120M+"
                    value={metricsInput}
                    onChange={(e) => setMetricsInput(e.target.value)}
                    className="w-full bg-[#151824] border border-white/10 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#d4ff00] resize-none font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="featuredCheck"
                  checked={Boolean(editingService.featured)}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      featured: e.target.checked,
                    })
                  }
                  className="rounded border-white/10 bg-[#151824] text-[#d4ff00] focus:ring-0"
                />
                <label htmlFor="featuredCheck" className="text-xs text-gray-300">
                  Highlight as Featured Service on Homepage
                </label>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="px-4 py-2.5 rounded-xl border border-white/10 text-xs text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 bg-[#d4ff00] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#c2ea00] flex items-center gap-2"
                >
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  <span>Save Service</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
