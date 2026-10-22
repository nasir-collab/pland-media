"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Globe,
  Edit2,
  X,
  Loader2,
  Save,
  ExternalLink,
  CheckCircle2,
  Search,
  Plus,
  Copy,
  Trash2,
  Eye,
  SlidersHorizontal,
  FileCheck,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Layout,
  Layers,
  Sparkles,
} from "lucide-react";

interface PageRecord {
  id: string;
  title: string;
  slug: string;
  heroHeading?: string;
  heroSub?: string;
  metaTitle?: string;
  metaDesc?: string;
  content?: string;
  status: string;
  updatedAt: string;
}

export default function AdminPagesManager() {
  const [pages, setPages] = useState<PageRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "PUBLISHED" | "DRAFT">("ALL");

  // Edit / Create state
  const [editingPage, setEditingPage] = useState<Partial<PageRecord> | null>(null);
  const [activeTab, setActiveTab] = useState<"general" | "hero" | "content" | "seo">("hero");
  const [isNewPage, setIsNewPage] = useState(false);
  const [saving, setSaving] = useState(false);
  const [cloningId, setCloningId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Notifications
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  const loadPages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/pages");
      const data = await res.json();
      setPages(data.pages || []);
    } catch (e) {
      console.error("Error loading pages:", e);
      setErrorMsg("Failed to load pages catalog.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPages();
  }, []);

  const showNotification = (msg: string, isError = false) => {
    if (isError) {
      setErrorMsg(msg);
      setTimeout(() => setErrorMsg(""), 4000);
    } else {
      setSuccessMsg(msg);
      setTimeout(() => setSuccessMsg(""), 3500);
    }
  };

  const handleEdit = (page: PageRecord) => {
    setEditingPage({ ...page });
    setIsNewPage(false);
    setActiveTab("hero");
    setIsDirty(false);
  };

  const handleNewPage = () => {
    setEditingPage({
      title: "New Landing Page",
      slug: "new-growth-landing-page",
      heroHeading: "Accelerating High-Intent Client Acquisition",
      heroSub: "Are you having trouble to engineer predictable revenue scale in your industry?",
      metaTitle: "New Growth Page | Plan D Media",
      metaDesc: "Discover high-precision performance marketing and organic SEO solutions tailored by Plan D Media.",
      content: JSON.stringify({
        tagNumber: "[01 / 01]",
        tags: ["Performance", "Growth", "Client Acquisition", "ROAS"],
        heroImage: "/hero-strategy-map.png",
      }),
      status: "DRAFT",
    });
    setIsNewPage(true);
    setActiveTab("general");
    setIsDirty(true);
  };

  const handleClone = async (page: PageRecord) => {
    setCloningId(page.id);
    try {
      const res = await fetch("/api/pages/clone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: page.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to clone page");

      await loadPages();
      showNotification(`Cloned "${page.title}" as new Draft: "${data.page.title}"`);
      // Open cloned page immediately
      handleEdit(data.page);
    } catch (err: any) {
      console.error(err);
      showNotification(err.message || "Error cloning page.", true);
    } finally {
      setCloningId(null);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPage) return;
    setSaving(true);

    try {
      const isCreate = isNewPage || !editingPage.id;
      const url = isCreate ? "/api/pages" : `/api/pages/${editingPage.id}`;
      const method = isCreate ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingPage),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save page configuration");

      await loadPages();
      showNotification(
        isCreate ? "New landing page created successfully!" : "Page configuration updated successfully."
      );
      setEditingPage(null);
      setIsDirty(false);
    } catch (err: any) {
      console.error(err);
      showNotification(err.message || "Error saving page configuration.", true);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeleting(true);
    try {
      const res = await fetch(`/api/pages/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete page");

      setPages((prev) => prev.filter((p) => p.id !== id));
      showNotification("Page deleted successfully.");
      setDeleteConfirmId(null);
    } catch (err: any) {
      console.error(err);
      showNotification(err.message || "Could not delete page.", true);
    } finally {
      setDeleting(false);
    }
  };

  // Filtered pages
  const filteredPages = pages.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.heroHeading && p.heroHeading.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus =
      statusFilter === "ALL" ||
      (statusFilter === "PUBLISHED" && p.status === "PUBLISHED") ||
      (statusFilter === "DRAFT" && p.status === "DRAFT");

    return matchesSearch && matchesStatus;
  });

  const protectedSlugs = ["home", "about", "contact", "services", "case-studies", "blog"];

  // Metrics
  const totalCount = pages.length;
  const publishedCount = pages.filter((p) => p.status === "PUBLISHED").length;
  const draftCount = pages.filter((p) => p.status === "DRAFT").length;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8B626] font-bold">
              ✦ Site Architecture &amp; CMS
            </span>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-[11px] font-mono text-gray-400">Total: {totalCount} Pages</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Pages &amp; Content Management
          </h1>
          <p className="text-xs text-gray-400 mt-1 max-w-2xl">
            Edit hero banners, value propositions, challenge headlines, live preview routes, and SEO meta tags across all core, service, and industry pages.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleNewPage}
            className="px-4 py-2.5 bg-[#E8B626] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#F3C84B] transition-all flex items-center gap-2 shadow-lg shadow-[#E8B626]/20 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Page</span>
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-[#171717] border border-white/10 rounded-2xl p-4.5">
          <div className="text-[11px] font-mono uppercase text-gray-400 mb-1">Total Routes</div>
          <div className="text-2xl font-bold font-mono text-white">{totalCount}</div>
        </div>
        <div className="bg-[#171717] border border-white/10 rounded-2xl p-4.5">
          <div className="text-[11px] font-mono uppercase text-green-400 mb-1">Published Live</div>
          <div className="text-2xl font-bold font-mono text-green-400">{publishedCount}</div>
        </div>
        <div className="bg-[#171717] border border-white/10 rounded-2xl p-4.5">
          <div className="text-[11px] font-mono uppercase text-yellow-400 mb-1">Draft Staging</div>
          <div className="text-2xl font-bold font-mono text-yellow-400">{draftCount}</div>
        </div>
        <div className="bg-[#171717] border border-white/10 rounded-2xl p-4.5">
          <div className="text-[11px] font-mono uppercase text-[#E8B626] mb-1">Core Architecture</div>
          <div className="text-2xl font-bold font-mono text-[#E8B626]">6 Core</div>
        </div>
      </div>

      {/* Notifications */}
      {successMsg && (
        <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}
      {errorMsg && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Search and Filters Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search pages by title, slug, or headline..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#171717] border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E8B626] transition-colors"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-gray-400 uppercase hidden sm:inline">Status:</span>
          {(["ALL", "PUBLISHED", "DRAFT"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                statusFilter === status
                  ? "bg-[#E8B626] text-black font-bold"
                  : "bg-[#171717] text-gray-400 hover:text-white border border-white/5"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Pages Table */}
      <div className="bg-[#171717] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-16 text-center text-xs text-gray-500 font-mono flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-[#E8B626]" />
            <span>Loading pages catalog...</span>
          </div>
        ) : filteredPages.length === 0 ? (
          <div className="p-16 text-center text-xs text-gray-500 font-mono">
            No pages found matching &quot;{searchQuery}&quot;.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#1f1f1f] text-gray-400 font-mono uppercase text-[10px] tracking-wider border-b border-white/5">
                <tr>
                  <th className="py-3.5 px-6">Page Name</th>
                  <th className="py-3.5 px-6">Live URL Route</th>
                  <th className="py-3.5 px-6">Challenge / Subheading</th>
                  <th className="py-3.5 px-6">Status</th>
                  <th className="py-3.5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {filteredPages.map((p) => {
                  const path = p.slug === "home" ? "/" : `/${p.slug}`;
                  const isProtected = protectedSlugs.includes(p.slug);

                  return (
                    <tr key={p.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-bold text-white text-sm">
                        <div className="flex items-center gap-2">
                          <span>{p.title}</span>
                          {isProtected && (
                            <span
                              className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30"
                              title="Protected Core Architecture Page"
                            >
                              Core
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6 font-mono text-[#E8B626] text-[11px]">
                        <a
                          href={path}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline flex items-center gap-1 inline-flex"
                        >
                          <span>{path}</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                      </td>
                      <td className="py-4 px-6 text-gray-400 text-xs max-w-sm truncate">
                        {p.heroSub || p.heroHeading || "No hero headline configured"}
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${
                            p.status === "PUBLISHED"
                              ? "bg-green-500/10 text-green-400 border-green-500/30"
                              : "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right space-x-1 whitespace-nowrap">
                        <button
                          onClick={() => handleEdit(p)}
                          className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5 text-[#E8B626]" />
                          <span>Edit</span>
                        </button>

                        <button
                          onClick={() => handleClone(p)}
                          disabled={cloningId === p.id}
                          className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors inline-block cursor-pointer"
                          title="Clone Page as Template"
                        >
                          {cloningId === p.id ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin text-[#E8B626]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {!isProtected && (
                          <button
                            onClick={() => setDeleteConfirmId(p.id)}
                            className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors inline-block cursor-pointer"
                            title="Delete Custom Page"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#171717] border border-red-500/30 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <AlertTriangle className="w-6 h-6 shrink-0" />
              <h3 className="text-base font-bold text-white">Delete Page Confirmation</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Are you sure you want to delete this page? This action removes the route configuration from the database. Live requests will return a 404 response.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs text-gray-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDelete(deleteConfirmId)}
                disabled={deleting}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 cursor-pointer"
              >
                {deleting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                <span>{deleting ? "Deleting..." : "Confirm Delete"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit / Create Drawer Modal */}
      {editingPage && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => {
              if (isDirty) {
                if (confirm("You have unsaved changes. Discard and exit?")) {
                  setEditingPage(null);
                }
              } else {
                setEditingPage(null);
              }
            }}
          />

          <div className="relative w-full max-w-2xl bg-[#171717] border-l border-white/10 h-full p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10 shadow-2xl animate-in slide-in-from-right duration-300">
            <form onSubmit={handleSave} className="space-y-6">
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase text-[#E8B626] font-bold">
                      {isNewPage ? "✦ Create New Page" : "✦ Edit Landing Page"}
                    </span>
                    {isDirty && (
                      <span className="text-[10px] font-mono text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded-full border border-yellow-500/30">
                        Unsaved Edits
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    {editingPage.title || "Untitled Page"}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={editingPage.slug === "home" ? "/" : `/${editingPage.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                    title="Preview Live Route"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      if (isDirty) {
                        if (confirm("You have unsaved changes. Discard and exit?")) {
                          setEditingPage(null);
                        }
                      } else {
                        setEditingPage(null);
                      }
                    }}
                    className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-white/10 gap-2">
                {[
                  { id: "hero", label: "Hero Banner" },
                  { id: "general", label: "General & URL" },
                  { id: "content", label: "Sections / JSON" },
                  { id: "seo", label: "SEO Metadata" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTab(t.id as any)}
                    className={`pb-2.5 px-3 text-xs font-mono font-medium transition-colors border-b-2 cursor-pointer ${
                      activeTab === t.id
                        ? "border-[#E8B626] text-[#E8B626] font-bold"
                        : "border-transparent text-gray-400 hover:text-white"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Tab 1: Hero Banner */}
              {activeTab === "hero" && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      Main Hero Heading
                    </label>
                    <input
                      type="text"
                      value={editingPage.heroHeading || ""}
                      onChange={(e) => {
                        setEditingPage({ ...editingPage, heroHeading: e.target.value });
                        setIsDirty(true);
                      }}
                      placeholder="e.g. Performance Marketing & Paid Media"
                      className="w-full px-3.5 py-2.5 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      Prominent Challenge / Subheading (Screenshot Style)
                    </label>
                    <textarea
                      rows={3}
                      value={editingPage.heroSub || ""}
                      onChange={(e) => {
                        setEditingPage({ ...editingPage, heroSub: e.target.value });
                        setIsDirty(true);
                      }}
                      placeholder="e.g. Are you having trouble to scale customer acquisition without eroding ROAS?"
                      className="w-full px-3.5 py-2.5 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626] leading-relaxed"
                    />
                    <p className="text-[10px] text-gray-500 mt-1">
                      Prominently formatted at the top of the left column with generous vertical breathing space.
                    </p>
                  </div>

                  {/* Status Toggle */}
                  <div className="bg-[#1f1f1f] border border-white/5 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Publishing State</div>
                      <div className="text-[10px] text-gray-400">
                        {editingPage.status === "PUBLISHED"
                          ? "Page is live to all visitors."
                          : "Page is in Draft staging mode."}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingPage({
                          ...editingPage,
                          status: editingPage.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED",
                        });
                        setIsDirty(true);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border transition-colors cursor-pointer ${
                        editingPage.status === "PUBLISHED"
                          ? "bg-green-500/10 text-green-400 border-green-500/30"
                          : "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {editingPage.status === "PUBLISHED" ? "● PUBLISHED" : "○ DRAFT"}
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 2: General & URL */}
              {activeTab === "general" && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      Internal Page Title
                    </label>
                    <input
                      type="text"
                      value={editingPage.title || ""}
                      onChange={(e) => {
                        setEditingPage({ ...editingPage, title: e.target.value });
                        setIsDirty(true);
                      }}
                      className="w-full px-3.5 py-2.5 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      URL Slug
                    </label>
                    <div className="flex items-center">
                      <span className="px-3 py-2.5 bg-[#141414] border border-r-0 border-white/10 rounded-l-xl text-xs font-mono text-gray-500">
                        /
                      </span>
                      <input
                        type="text"
                        value={editingPage.slug || ""}
                        onChange={(e) => {
                          setEditingPage({ ...editingPage, slug: e.target.value });
                          setIsDirty(true);
                        }}
                        className="w-full px-3.5 py-2.5 bg-[#1f1f1f] border border-white/10 rounded-r-xl text-xs font-mono text-[#E8B626] focus:outline-none focus:border-[#E8B626]"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Content / JSON */}
              {activeTab === "content" && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-gray-300">
                      Modular Section Configuration (JSON)
                    </label>
                    <span className="text-[10px] font-mono text-gray-500">Structured CMS Payload</span>
                  </div>
                  <textarea
                    rows={12}
                    value={editingPage.content || ""}
                    onChange={(e) => {
                      setEditingPage({ ...editingPage, content: e.target.value });
                      setIsDirty(true);
                    }}
                    placeholder={`{\n  "tagNumber": "[01 / 06]",\n  "tags": ["SEO", "Performance"],\n  "heroImage": "/hero-strategy-map.png"\n}`}
                    className="w-full px-3.5 py-2.5 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs font-mono text-gray-200 focus:outline-none focus:border-[#E8B626] leading-relaxed"
                  />
                  <p className="text-[10px] text-gray-400">
                    Controls capability tags, tag numbers, hero visual references, and modular component configuration.
                  </p>
                </div>
              )}

              {/* Tab 4: SEO Metadata */}
              {activeTab === "seo" && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-gray-300">
                        SEO Meta Title Tag
                      </label>
                      <span className="text-[10px] font-mono text-gray-500">
                        {(editingPage.metaTitle || "").length} / 65 chars
                      </span>
                    </div>
                    <input
                      type="text"
                      value={editingPage.metaTitle || ""}
                      onChange={(e) => {
                        setEditingPage({ ...editingPage, metaTitle: e.target.value });
                        setIsDirty(true);
                      }}
                      placeholder="e.g. Performance Marketing & Paid Search | Plan D Media"
                      className="w-full px-3.5 py-2.5 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626]"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-gray-300">
                        SEO Meta Description
                      </label>
                      <span className="text-[10px] font-mono text-gray-500">
                        {(editingPage.metaDesc || "").length} / 160 chars
                      </span>
                    </div>
                    <textarea
                      rows={4}
                      value={editingPage.metaDesc || ""}
                      onChange={(e) => {
                        setEditingPage({ ...editingPage, metaDesc: e.target.value });
                        setIsDirty(true);
                      }}
                      placeholder="High-precision Google Ads, Meta Ads, and algorithmic acquisition designed for positive unit economics and predictable scale."
                      className="w-full px-3.5 py-2.5 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626] leading-relaxed"
                    />
                  </div>

                  {/* Google Search Result Preview */}
                  <div className="bg-[#101010] border border-white/10 rounded-xl p-4 space-y-1.5">
                    <div className="text-[10px] font-mono uppercase text-gray-500">
                      Search Snippet Simulation
                    </div>
                    <div className="text-sm font-medium text-[#8ab4f8] truncate">
                      {editingPage.metaTitle || editingPage.title || "Plan D Media"}
                    </div>
                    <div className="text-[11px] font-mono text-[#006621]">
                      https://pland.in/{editingPage.slug || ""}
                    </div>
                    <div className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {editingPage.metaDesc || editingPage.heroSub || "Plan D Media digital marketing agency."}
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Action Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-end gap-3 sticky bottom-0 bg-[#171717] py-3">
                <button
                  type="button"
                  onClick={() => setEditingPage(null)}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl text-xs font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 bg-[#E8B626] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#F3C84B] transition-all flex items-center gap-2 shadow-lg shadow-[#E8B626]/20 cursor-pointer"
                >
                  {saving ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Save className="w-4 h-4" />
                  )}
                  <span>{saving ? "Saving Changes..." : "Save Page Configuration"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
