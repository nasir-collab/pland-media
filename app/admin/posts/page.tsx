"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  X,
  Loader2,
  Save,
  Copy,
  Sparkles,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  Share2,
  Tag,
  Wand2,
  Info,
} from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  authorName: string;
  readTime: string;
  tags: string;
  status: string;
  publishedAt: string;
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "PUBLISHED" | "DRAFT">("ALL");

  // Edit / Create state
  const [editingPost, setEditingPost] = useState<Partial<Post> | null>(null);
  const [activeTab, setActiveTab] = useState<"content" | "editorial" | "seo">("content");
  const [saving, setSaving] = useState(false);
  const [cloningId, setCloningId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  // AI Content Rewriter Modal State
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiTargetField, setAiTargetField] = useState<"title" | "excerpt" | "content">("content");
  const [aiMode, setAiMode] = useState<"clarity" | "professional" | "conversion" | "shorten" | "expand" | "headlines">("clarity");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiOriginalText, setAiOriginalText] = useState("");
  const [aiRewrittenText, setAiRewrittenText] = useState("");
  const [aiProvider, setAiProvider] = useState("");

  // Article Live Preview State
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState<"card" | "article">("card");

  // Notifications
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const loadPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/posts?all=true");
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (e) {
      console.error("Error loading posts:", e);
      setErrorMsg("Failed to load articles.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
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

  const handleEdit = (post: Post) => {
    setEditingPost({ ...post });
    setActiveTab("content");
  };

  const handleNew = () => {
    setEditingPost({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      coverImage: "/heroes/hero-perf-mktg.jpg",
      category: "Growth Intelligence",
      authorName: "Plan D Editorial Team",
      readTime: "5 min read",
      tags: "Performance Marketing, SEO, Growth Strategy",
      status: "DRAFT",
    });
    setActiveTab("content");
  };

  const handleClone = async (post: Post) => {
    setCloningId(post.id);
    try {
      const timestamp = Date.now().toString().slice(-4);
      const newPost = {
        ...post,
        id: undefined,
        title: `${post.title} (Clone)`,
        slug: `${post.slug}-copy-${timestamp}`,
        status: "DRAFT",
      };

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to clone post");

      await loadPosts();
      showNotification(`Cloned "${post.title}" as new Draft.`);
      handleEdit(data.post);
    } catch (err: any) {
      console.error(err);
      showNotification(err.message || "Error cloning post.", true);
    } finally {
      setCloningId(null);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;
    setSaving(true);

    try {
      const isNew = !editingPost.id;
      const url = isNew ? "/api/posts" : `/api/posts/${editingPost.id}`;
      const method = isNew ? "POST" : "PUT";

      // Auto-generate slug if empty
      const payload = {
        ...editingPost,
        slug:
          editingPost.slug && editingPost.slug.trim().length > 0
            ? editingPost.slug.toLowerCase().replace(/[^a-z0-9-]/g, "-")
            : (editingPost.title || "untitled-post")
                .toLowerCase()
                .replace(/[^a-z0-9-]/g, "-")
                .slice(0, 50),
      };

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save article");

      await loadPosts();
      showNotification(isNew ? "Article published as draft successfully!" : "Article changes saved successfully.");
      setEditingPost(null);
    } catch (err: any) {
      console.error(err);
      showNotification(err.message || "Failed to save article.", true);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeleting(true);
    try {
      const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setPosts((prev) => prev.filter((p) => p.id !== id));
      showNotification("Article deleted successfully.");
      setDeleteConfirmId(null);
    } catch (err: any) {
      console.error(err);
      showNotification("Failed to delete article.", true);
    } finally {
      setDeleting(false);
    }
  };

  // AI Content Rewriter Trigger
  const triggerAiRewrite = async (targetField: "title" | "excerpt" | "content") => {
    if (!editingPost) return;
    const currentText = editingPost[targetField] || "";
    if (!currentText.trim()) {
      showNotification(`Please enter some text in the ${targetField} field first.`, true);
      return;
    }

    setAiTargetField(targetField);
    setAiOriginalText(currentText);
    setAiRewrittenText("");
    setAiModalOpen(true);
    setAiLoading(true);

    try {
      const res = await fetch("/api/ai/rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: currentText,
          mode: aiMode,
          context: `Plan D Media Blog Article: ${editingPost.title || ""}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate rewrite");

      setAiRewrittenText(data.rewritten);
      setAiProvider(data.provider || "Plan D Editorial Engine");
    } catch (err: any) {
      console.error(err);
      showNotification("AI Rewriter service error: " + (err.message || ""), true);
    } finally {
      setAiLoading(false);
    }
  };

  const executeAiRewriteWithMode = async (newMode: typeof aiMode) => {
    setAiMode(newMode);
    setAiLoading(true);
    try {
      const res = await fetch("/api/ai/rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: aiOriginalText,
          mode: newMode,
          context: `Plan D Media Blog Article: ${editingPost?.title || ""}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate rewrite");

      setAiRewrittenText(data.rewritten);
      setAiProvider(data.provider || "Plan D Editorial Engine");
    } catch (err: any) {
      console.error(err);
      showNotification("AI Rewriter service error.", true);
    } finally {
      setAiLoading(false);
    }
  };

  const acceptAiSuggestion = () => {
    if (!editingPost || !aiRewrittenText) return;
    setEditingPost({
      ...editingPost,
      [aiTargetField]: aiRewrittenText,
    });
    setAiModalOpen(false);
    showNotification(`Applied AI suggestion to ${aiTargetField}. Remember to save changes!`);
  };

  // Categories list
  const categories = ["ALL", ...Array.from(new Set(posts.map((p) => p.category)))];

  // Filtered posts
  const filteredPosts = posts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.slug.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = categoryFilter === "ALL" || p.category === categoryFilter;
    const matchesStatus =
      statusFilter === "ALL" ||
      (statusFilter === "PUBLISHED" && p.status === "PUBLISHED") ||
      (statusFilter === "DRAFT" && p.status === "DRAFT");

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8B626] font-bold">
              ✦ Editorial &amp; Thought Leadership
            </span>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-[11px] font-mono text-gray-400">Total: {posts.length} Articles</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Blog &amp; Growth Intelligence Management
          </h1>
          <p className="text-xs text-gray-400 mt-1 max-w-2xl">
            Draft, clone, preview, and publish strategic articles, thought leadership, and SEO playbooks with integrated AI writing assistance.
          </p>
        </div>

        <button
          onClick={handleNew}
          className="px-4 py-2.5 bg-[#E8B626] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#F3C84B] transition-all flex items-center gap-2 shadow-lg shadow-[#E8B626]/20 self-start md:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Write New Article</span>
        </button>
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

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, excerpt, or slug..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#171717] border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E8B626]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Status Filter */}
          <div className="flex items-center gap-1 bg-[#171717] border border-white/10 rounded-xl p-1">
            {(["ALL", "PUBLISHED", "DRAFT"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  statusFilter === s
                    ? "bg-[#E8B626] text-black font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-[#171717] border border-white/10 rounded-xl px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-[#E8B626] font-mono cursor-pointer"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                Category: {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid of Posts */}
      {loading ? (
        <div className="p-16 text-center text-xs text-gray-500 font-mono bg-[#171717] rounded-2xl border border-white/10 flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-[#E8B626]" />
          <span>Loading articles...</span>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="p-16 text-center text-xs text-gray-500 font-mono bg-[#171717] rounded-2xl border border-white/10">
          No articles match your search criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#171717] border border-white/10 rounded-2xl overflow-hidden p-6 flex flex-col justify-between hover:border-[#E8B626]/40 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-[#E8B626] uppercase font-bold tracking-wider">
                    {post.category}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                      post.status === "PUBLISHED"
                        ? "bg-green-500/10 text-green-400 border-green-500/30"
                        : "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-xs line-clamp-3 mb-4 leading-relaxed font-light">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="text-[10px] text-gray-400 font-mono flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                  <span>{post.readTime}</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                    title="View Live Article"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleClone(post)}
                      disabled={cloningId === post.id}
                      className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      title="Clone Article"
                    >
                      {cloningId === post.id ? (
                        <Loader2 className="w-4 h-4 animate-spin text-[#E8B626]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      onClick={() => handleEdit(post)}
                      className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-[#E8B626]" />
                      <span>Edit</span>
                    </button>

                    <button
                      onClick={() => setDeleteConfirmId(post.id)}
                      className="p-2 text-gray-400 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer"
                      title="Delete Article"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#171717] border border-red-500/30 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <AlertTriangle className="w-6 h-6 shrink-0" />
              <h3 className="text-base font-bold text-white">Delete Article Confirmation</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Are you sure you want to delete this blog post? It will be permanently removed from the website and search engines.
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

      {/* Edit / Write Article Drawer */}
      {editingPost && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setEditingPost(null)}
          />

          <div className="relative w-full max-w-3xl bg-[#171717] border-l border-white/10 h-full p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10 shadow-2xl animate-in slide-in-from-right duration-300">
            <form onSubmit={handleSave} className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#E8B626] font-bold block mb-1">
                    {editingPost.id ? "✦ Edit Article" : "✦ Compose New Article"}
                  </span>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    {editingPost.title || "Untitled Article"}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewModalOpen(true)}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Live Preview"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#E8B626]" />
                    <span>Preview</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEditingPost(null)}
                    className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-white/10 gap-2">
                {[
                  { id: "content", label: "Article Content" },
                  { id: "editorial", label: "Editorial & Media" },
                  { id: "seo", label: "SEO & Distribution" },
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

              {/* Tab 1: Content */}
              {activeTab === "content" && (
                <div className="space-y-5 animate-in fade-in">
                  {/* Title with AI button */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-gray-300">Article Title</label>
                      <button
                        type="button"
                        onClick={() => triggerAiRewrite("title")}
                        className="text-[11px] text-[#E8B626] hover:underline flex items-center gap-1 cursor-pointer font-mono"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>AI Headline Rewrite</span>
                      </button>
                    </div>
                    <input
                      type="text"
                      value={editingPost.title || ""}
                      onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                      placeholder="e.g. Algorithmic ROAS: Scaling B2B Lead Engines in 2026"
                      className="w-full px-3.5 py-2.5 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626]"
                      required
                    />
                  </div>

                  {/* Slug */}
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      URL Slug (Auto-formatted)
                    </label>
                    <div className="flex items-center">
                      <span className="px-3 py-2 bg-[#141414] border border-r-0 border-white/10 rounded-l-xl text-xs font-mono text-gray-500">
                        /blog/
                      </span>
                      <input
                        type="text"
                        value={editingPost.slug || ""}
                        onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                        placeholder="algorithmic-roas-b2b-lead-engines"
                        className="w-full px-3.5 py-2 bg-[#1f1f1f] border border-white/10 rounded-r-xl text-xs font-mono text-[#E8B626] focus:outline-none focus:border-[#E8B626]"
                      />
                    </div>
                  </div>

                  {/* Excerpt with AI */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-gray-300">Executive Excerpt / Teaser</label>
                      <button
                        type="button"
                        onClick={() => triggerAiRewrite("excerpt")}
                        className="text-[11px] text-[#E8B626] hover:underline flex items-center gap-1 cursor-pointer font-mono"
                      >
                        <Wand2 className="w-3 h-3" />
                        <span>AI Polish Excerpt</span>
                      </button>
                    </div>
                    <textarea
                      rows={3}
                      value={editingPost.excerpt || ""}
                      onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                      placeholder="A crisp, high-impact summary that hooks readers on LinkedIn and Google search."
                      className="w-full px-3.5 py-2.5 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626] leading-relaxed"
                      required
                    />
                  </div>

                  {/* Body Content with AI Assistant Toolbar */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-gray-300">
                        Full Article Body
                      </label>
                      <button
                        type="button"
                        onClick={() => triggerAiRewrite("content")}
                        className="px-2.5 py-1 bg-[#E8B626]/10 border border-[#E8B626]/30 text-[#E8B626] rounded-lg text-[11px] font-mono flex items-center gap-1.5 hover:bg-[#E8B626]/20 transition-colors cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>AI Content Assistant</span>
                      </button>
                    </div>
                    <textarea
                      rows={14}
                      value={editingPost.content || ""}
                      onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                      placeholder="Write your article in structured paragraphs or markdown..."
                      className="w-full px-3.5 py-2.5 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-gray-200 focus:outline-none focus:border-[#E8B626] font-mono leading-relaxed"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Tab 2: Editorial & Media */}
              {activeTab === "editorial" && (
                <div className="space-y-5 animate-in fade-in">
                  {/* Category & Status */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">
                        Category
                      </label>
                      <input
                        type="text"
                        value={editingPost.category || ""}
                        onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                        placeholder="e.g. Growth Intelligence, SEO, Tech"
                        className="w-full px-3.5 py-2 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">
                        Publishing Status
                      </label>
                      <select
                        value={editingPost.status || "PUBLISHED"}
                        onChange={(e) => setEditingPost({ ...editingPost, status: e.target.value })}
                        className="w-full px-3.5 py-2 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626] font-mono cursor-pointer"
                      >
                        <option value="PUBLISHED">● PUBLISHED (Live)</option>
                        <option value="DRAFT">○ DRAFT (Staged)</option>
                      </select>
                    </div>
                  </div>

                  {/* Author & Read Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">
                        Author Name
                      </label>
                      <input
                        type="text"
                        value={editingPost.authorName || ""}
                        onChange={(e) => setEditingPost({ ...editingPost, authorName: e.target.value })}
                        className="w-full px-3.5 py-2 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">
                        Estimated Read Time
                      </label>
                      <input
                        type="text"
                        value={editingPost.readTime || ""}
                        onChange={(e) => setEditingPost({ ...editingPost, readTime: e.target.value })}
                        placeholder="5 min read"
                        className="w-full px-3.5 py-2 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626]"
                      />
                    </div>
                  </div>

                  {/* Cover Image */}
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      Cover Image URL
                    </label>
                    <input
                      type="text"
                      value={editingPost.coverImage || ""}
                      onChange={(e) => setEditingPost({ ...editingPost, coverImage: e.target.value })}
                      placeholder="/heroes/hero-perf-mktg.jpg or https://..."
                      className="w-full px-3.5 py-2 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626]"
                      required
                    />
                    {editingPost.coverImage && (
                      <div className="mt-3 relative h-36 w-full rounded-xl overflow-hidden border border-white/10 bg-black" style={{ position: "relative" }}>
                        <Image src={editingPost.coverImage} alt="Cover Preview" fill className="object-cover" />
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      Tags (Comma separated)
                    </label>
                    <input
                      type="text"
                      value={editingPost.tags || ""}
                      onChange={(e) => setEditingPost({ ...editingPost, tags: e.target.value })}
                      placeholder="Growth, SEO, Performance, B2B"
                      className="w-full px-3.5 py-2 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626]"
                    />
                  </div>
                </div>
              )}

              {/* Tab 3: SEO & Distribution */}
              {activeTab === "seo" && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      SEO Title (SERP Display)
                    </label>
                    <input
                      type="text"
                      value={editingPost.title || ""}
                      onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                      className="w-full px-3.5 py-2 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      Meta Description (SERP Snippet)
                    </label>
                    <textarea
                      rows={3}
                      value={editingPost.excerpt || ""}
                      onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                      className="w-full px-3.5 py-2 bg-[#1f1f1f] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#E8B626]"
                    />
                  </div>

                  {/* Search Engine Card Preview */}
                  <div className="bg-[#101010] border border-white/10 rounded-xl p-4 space-y-1">
                    <div className="text-[10px] font-mono uppercase text-gray-500">
                      Search Engine Result Preview
                    </div>
                    <div className="text-sm font-medium text-[#8ab4f8] truncate">
                      {editingPost.title || "Plan D Media Growth Article"}
                    </div>
                    <div className="text-[11px] font-mono text-[#006621]">
                      https://pland.in/blog/{editingPost.slug || "article-slug"}
                    </div>
                    <div className="text-xs text-gray-400 line-clamp-2">
                      {editingPost.excerpt || "Article summary for search engines."}
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-end gap-3 sticky bottom-0 bg-[#171717] py-3">
                <button
                  type="button"
                  onClick={() => setEditingPost(null)}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs text-gray-300 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 bg-[#E8B626] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#F3C84B] transition-all flex items-center gap-2 shadow-lg shadow-[#E8B626]/20 cursor-pointer"
                >
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  <span>{saving ? "Saving Post..." : "Save Article"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* AI Content Rewriting Diff Modal */}
      {aiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#171717] border border-[#E8B626]/40 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#E8B626]/10 flex items-center justify-center text-[#E8B626]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">AI Content Rewriting Assistant</h3>
                  <div className="text-[11px] font-mono text-gray-400">
                    Engine: <span className="text-[#E8B626]">{aiProvider || "Loading..."}</span> • Target: {aiTargetField.toUpperCase()}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setAiModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mode Selector */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: "clarity", label: "Clarity & Rhythm" },
                { id: "professional", label: "Executive / Formal" },
                { id: "conversion", label: "Conversion / CRO" },
                { id: "shorten", label: "Condense / Punchy" },
                { id: "expand", label: "Expand Nuance" },
                { id: "headlines", label: "Catchy Headlines" },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => executeAiRewriteWithMode(m.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    aiMode === m.id
                      ? "bg-[#E8B626] text-black font-bold shadow-md"
                      : "bg-[#1f1f1f] text-gray-400 hover:text-white border border-white/5"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Side-by-Side Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Original */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-gray-400 block font-bold">
                  Original Content
                </span>
                <div className="bg-[#111111] border border-white/5 rounded-xl p-4 text-xs text-gray-300 leading-relaxed font-light min-h-[140px] max-h-64 overflow-y-auto whitespace-pre-wrap">
                  {aiOriginalText}
                </div>
              </div>

              {/* Proposed Rewrite */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#E8B626] block font-bold">
                    Proposed Revision
                  </span>
                  {aiLoading && (
                    <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin text-[#E8B626]" />
                      Refining...
                    </span>
                  )}
                </div>
                <div className="bg-[#1f1f1f] border border-[#E8B626]/30 rounded-xl p-4 text-xs text-white leading-relaxed font-normal min-h-[140px] max-h-64 overflow-y-auto whitespace-pre-wrap shadow-inner">
                  {aiLoading ? (
                    <div className="flex items-center justify-center h-32 text-gray-500 font-mono text-xs gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-[#E8B626]" />
                      Generating polished copy...
                    </div>
                  ) : (
                    aiRewrittenText || "Click a rewriting mode above to generate suggestions."
                  )}
                </div>
              </div>
            </div>

            <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-[11px] text-yellow-300/80 flex items-center gap-2">
              <Info className="w-4 h-4 shrink-0" />
              <span>
                Safety standard: AI suggestions are never applied automatically. Click &quot;Accept &amp; Replace&quot; to review and update your editor.
              </span>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setAiModalOpen(false)}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs text-gray-300 cursor-pointer"
              >
                Discard
              </button>
              <button
                type="button"
                onClick={acceptAiSuggestion}
                disabled={aiLoading || !aiRewrittenText}
                className="px-6 py-2 bg-[#E8B626] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#F3C84B] transition-all flex items-center gap-2 shadow-lg shadow-[#E8B626]/20 cursor-pointer disabled:opacity-50"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Accept &amp; Replace</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Article Live Preview Modal */}
      {previewModalOpen && editingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#171717] border border-white/10 rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#E8B626]" />
                <h3 className="text-base font-bold text-white">Live Article Preview</h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-[#1f1f1f] p-1 rounded-xl border border-white/5 text-xs font-mono">
                  <button
                    onClick={() => setPreviewMode("card")}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      previewMode === "card" ? "bg-[#E8B626] text-black font-bold" : "text-gray-400"
                    }`}
                  >
                    Feed Card
                  </button>
                  <button
                    onClick={() => setPreviewMode("article")}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      previewMode === "article" ? "bg-[#E8B626] text-black font-bold" : "text-gray-400"
                    }`}
                  >
                    Full Page
                  </button>
                </div>

                <button
                  onClick={() => setPreviewModalOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Card Preview */}
            {previewMode === "card" && (
              <div className="max-w-md mx-auto bg-[#171717] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-52 w-full bg-black overflow-hidden" style={{ position: "relative" }}>
                  {editingPost.coverImage ? (
                    <Image src={editingPost.coverImage} alt={editingPost.title || ""} fill className="object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-xs text-gray-500 font-mono">
                      No cover image
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-md px-3 py-0.5 rounded-full border border-white/10 text-[10px] font-mono text-gray-300 uppercase">
                    {editingPost.category || "Insight"}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-2">
                    <span>{editingPost.readTime || "5 min read"}</span>
                    <span>•</span>
                    <span>{editingPost.authorName || "Plan D Editorial"}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {editingPost.title || "Untitled Article"}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 font-light">
                    {editingPost.excerpt || "No excerpt provided yet."}
                  </p>
                </div>
              </div>
            )}

            {/* Full Article Page Preview */}
            {previewMode === "article" && (
              <div className="bg-[#111111] p-6 sm:p-10 rounded-2xl border border-white/5 space-y-6">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-[#E8B626] font-bold">({editingPost.category || "Article"})</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{editingPost.readTime || "5 min read"}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{editingPost.authorName || "Plan D Editorial"}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  {editingPost.title || "Untitled Article"}
                </h1>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light pb-6 border-b border-white/10">
                  {editingPost.excerpt}
                </p>

                {editingPost.coverImage && (
                  <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-white/10" style={{ position: "relative" }}>
                    <Image src={editingPost.coverImage} alt="Cover" fill className="object-cover" />
                  </div>
                )}

                <div className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap font-light">
                  {editingPost.content || "Article body text will render here."}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
