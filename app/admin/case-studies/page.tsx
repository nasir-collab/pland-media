"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Layers,
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  X,
  Loader2,
  Save,
  CheckCircle2,
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  tags: string;
  image: string;
  featured: boolean;
  status: string;
  order: number;
}

export default function AdminCaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingCS, setEditingCS] = useState<Partial<CaseStudy> | null>(null);
  const [saving, setSaving] = useState(false);
  const [resultsInput, setResultsInput] = useState("");

  const loadCaseStudies = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/case-studies?all=true");
      const data = await res.json();
      setCaseStudies(data.caseStudies || []);
    } catch (e) {
      console.error("Error loading case studies:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const handleEdit = (cs: CaseStudy) => {
    setEditingCS(cs);
    try {
      const parsed = JSON.parse(cs.results);
      if (Array.isArray(parsed)) {
        setResultsInput(
          parsed.map((r: { metric: string; value: string; detail?: string }) =>
            `${r.metric} | ${r.value} | ${r.detail || ""}`
          ).join("\n")
        );
      } else {
        setResultsInput("");
      }
    } catch {
      setResultsInput("");
    }
  };

  const handleNew = () => {
    setEditingCS({
      title: "",
      slug: "",
      client: "",
      industry: "Higher Education",
      challenge: "",
      solution: "",
      tags: "Performance Marketing, PPC",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
      featured: false,
      status: "PUBLISHED",
      order: caseStudies.length + 1,
    });
    setResultsInput("Admissions Converted | 2,400+ | Directly attributed seat enrollments\nStudent Enquiries | +410% | Scaled undergraduate inquiries");
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCS) return;
    setSaving(true);

    const parsedResults = resultsInput
      .split("\n")
      .map((line) => {
        const parts = line.split("|");
        return {
          metric: parts[0]?.trim() || "",
          value: parts[1]?.trim() || "",
          detail: parts[2]?.trim() || "",
        };
      })
      .filter((r) => r.metric && r.value);

    const payload = {
      ...editingCS,
      results: parsedResults,
    };

    try {
      const isNew = !editingCS.id;
      const url = isNew ? "/api/case-studies" : `/api/case-studies/${editingCS.id}`;
      const method = isNew ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save case study");

      await loadCaseStudies();
      setEditingCS(null);
    } catch (err) {
      console.error(err);
      alert("Failed to save case study. Please check details.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this case study?")) return;
    try {
      await fetch(`/api/case-studies/${id}`, { method: "DELETE" });
      setCaseStudies((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Error deleting case study:", err);
    }
  };

  return (
    <div className="space-y-8 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00] block mb-1">
            ✦ Client Portfolio
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Case Studies Management
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Maintain verified client stories, measurable metric outcomes, and portfolio publication.
          </p>
        </div>

        <button
          onClick={handleNew}
          className="px-4 py-2.5 bg-[#d4ff00] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#c2ea00] transition-colors flex items-center gap-1.5 shadow-lg shadow-[#d4ff00]/15"
        >
          <Plus className="w-4 h-4" />
          <span>Add Case Study</span>
        </button>
      </div>

      {/* Grid of Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading ? (
          <div className="col-span-2 p-12 text-center text-xs text-gray-500 font-mono">
            Loading case studies...
          </div>
        ) : (
          caseStudies.map((cs) => {
            let resultsCount = 0;
            try {
              resultsCount = JSON.parse(cs.results).length;
            } catch {}

            return (
              <div
                key={cs.id}
                className="bg-[#10121a] border border-white/10 rounded-2xl overflow-hidden p-6 flex flex-col justify-between hover:border-[#d4ff00]/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#d4ff00] uppercase font-bold">
                      {cs.industry}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        cs.status === "PUBLISHED"
                          ? "bg-green-500/10 text-green-400 border-green-500/30"
                          : "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {cs.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{cs.title}</h3>
                  <div className="text-xs text-gray-400 font-mono mb-4">
                    Client: <strong className="text-gray-200">{cs.client}</strong>
                  </div>

                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                    {cs.challenge}
                  </p>

                  <div className="text-[11px] text-gray-500 font-mono">
                    {resultsCount} metrics documented • #{cs.order} order
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
                  <a
                    href={`/case-studies/${cs.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Public Page</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(cs)}
                      className="p-1.5 text-gray-400 hover:text-[#d4ff00]"
                      title="Edit Case Study"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(cs.id)}
                      className="p-1.5 text-gray-400 hover:text-red-400"
                      title="Delete Case Study"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Edit / Create Modal */}
      {editingCS && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#10121a] border border-white/10 rounded-2xl p-6 sm:p-8 my-8 shadow-2xl">
            <button
              onClick={() => setEditingCS(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold text-white mb-6">
              {editingCS.id ? "Edit Case Study" : "Add Case Study"}
            </h2>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Project / Case Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingCS.title || ""}
                    onChange={(e) =>
                      setEditingCS({
                        ...editingCS,
                        title: e.target.value,
                        slug:
                          editingCS.slug ||
                          e.target.value.toLowerCase().replace(/[^a-z0-9]/g, "-"),
                      })
                    }
                    className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Slug *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingCS.slug || ""}
                    onChange={(e) =>
                      setEditingCS({ ...editingCS, slug: e.target.value })
                    }
                    className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingCS.client || ""}
                    onChange={(e) =>
                      setEditingCS({ ...editingCS, client: e.target.value })
                    }
                    className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Industry
                  </label>
                  <input
                    type="text"
                    value={editingCS.industry || ""}
                    onChange={(e) =>
                      setEditingCS({ ...editingCS, industry: e.target.value })
                    }
                    className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Status
                  </label>
                  <select
                    value={editingCS.status || "PUBLISHED"}
                    onChange={(e) =>
                      setEditingCS({ ...editingCS, status: e.target.value })
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
                  Cover Image URL
                </label>
                <input
                  type="text"
                  value={editingCS.image || ""}
                  onChange={(e) =>
                    setEditingCS({ ...editingCS, image: e.target.value })
                  }
                  className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  The Challenge
                </label>
                <textarea
                  rows={3}
                  value={editingCS.challenge || ""}
                  onChange={(e) =>
                    setEditingCS({ ...editingCS, challenge: e.target.value })
                  }
                  className="w-full bg-[#151824] border border-white/10 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#d4ff00] resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  The Plan D Engineering Solution
                </label>
                <textarea
                  rows={3}
                  value={editingCS.solution || ""}
                  onChange={(e) =>
                    setEditingCS({ ...editingCS, solution: e.target.value })
                  }
                  className="w-full bg-[#151824] border border-white/10 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#d4ff00] resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Results Metrics (Format: Metric | Value | Detail, one per line)
                </label>
                <textarea
                  rows={3}
                  placeholder="Student Enquiries | +410% | Scaled high intent applicant volume&#10;Cost Per Lead | -54% | Halved acquisition costs"
                  value={resultsInput}
                  onChange={(e) => setResultsInput(e.target.value)}
                  className="w-full bg-[#151824] border border-white/10 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#d4ff00] resize-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Tags (Comma separated)
                </label>
                <input
                  type="text"
                  value={editingCS.tags || ""}
                  onChange={(e) =>
                    setEditingCS({ ...editingCS, tags: e.target.value })
                  }
                  className="w-full bg-[#151824] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#d4ff00]"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="csFeaturedCheck"
                  checked={Boolean(editingCS.featured)}
                  onChange={(e) =>
                    setEditingCS({
                      ...editingCS,
                      featured: e.target.checked,
                    })
                  }
                  className="rounded border-white/10 bg-[#151824] text-[#d4ff00] focus:ring-0"
                />
                <label htmlFor="csFeaturedCheck" className="text-xs text-gray-300">
                  Feature prominently on Homepage Showcase
                </label>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingCS(null)}
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
                  <span>Save Case Study</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
