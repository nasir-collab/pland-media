"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Image as ImageIcon,
  Upload,
  Copy,
  Trash2,
  Check,
  Loader2,
  ExternalLink,
  Search,
  Filter,
  RefreshCw,
  LayoutGrid,
  List,
  Edit2,
  AlertTriangle,
  FileImage,
  Info,
  X,
  Save,
} from "lucide-react";

interface MediaItem {
  id: string;
  name: string;
  url: string;
  mimeType: string;
  size: number;
  altText?: string;
  createdAt: string;
}

export default function AdminMediaPage() {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"ALL" | "IMAGE" | "SVG">("ALL");

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<MediaItem | null>(null);
  const [replacementFile, setReplacementFile] = useState<File | null>(null);
  const [savingItem, setSavingItem] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Drag and drop state
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const loadMedia = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/media");
      const data = await res.json();
      setMediaList(data.media || []);
    } catch (err) {
      console.error("Error loading media:", err);
      setErrorMsg("Failed to load media assets.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMedia();
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

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];

    // Validation
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      showNotification("Invalid file type. Please upload PNG, JPG, WEBP, or SVG images.", true);
      return;
    }
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      showNotification("File size exceeds 10MB limit.", true);
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("altText", file.name.replace(/\.[^/.]+$/, ""));

    try {
      const res = await fetch("/api/media", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");
      await loadMedia();
      showNotification(`Uploaded asset "${file.name}" successfully!`);
    } catch (err) {
      console.error(err);
      showNotification("Failed to upload asset.", true);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    showNotification("Asset URL copied to clipboard.");
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSaveMetadata = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    setSavingItem(true);

    try {
      if (replacementFile) {
        // Multi-part replacement
        const formData = new FormData();
        formData.append("file", replacementFile);
        formData.append("name", editingItem.name);
        formData.append("altText", editingItem.altText || "");

        const res = await fetch(`/api/media/${editingItem.id}`, {
          method: "PUT",
          body: formData,
        });
        if (!res.ok) throw new Error("Failed to replace asset");
      } else {
        // Metadata update
        const res = await fetch(`/api/media/${editingItem.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: editingItem.name,
            altText: editingItem.altText,
          }),
        });
        if (!res.ok) throw new Error("Failed to update metadata");
      }

      await loadMedia();
      showNotification("Asset metadata updated successfully.");
      setEditingItem(null);
      setReplacementFile(null);
    } catch (err) {
      console.error(err);
      showNotification("Error saving asset details.", true);
    } finally {
      setSavingItem(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeleting(true);
    try {
      const res = await fetch(`/api/media/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setMediaList((prev) => prev.filter((m) => m.id !== id));
      showNotification("Media asset removed.");
      setDeleteConfirmId(null);
    } catch (err) {
      console.error("Error deleting media:", err);
      showNotification("Failed to delete asset.", true);
    } finally {
      setDeleting(false);
    }
  };

  // Filtered Media
  const filteredMedia = mediaList.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.altText && item.altText.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.url.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      typeFilter === "ALL" ||
      (typeFilter === "SVG" && item.mimeType.includes("svg")) ||
      (typeFilter === "IMAGE" && !item.mimeType.includes("svg"));

    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8B626] font-bold">
              ✦ Creative Media Library &amp; CDN
            </span>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-[11px] font-mono text-gray-400">Total: {mediaList.length} Assets</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Creative &amp; Media Management
          </h1>
          <p className="text-xs text-gray-400 mt-1 max-w-2xl">
            Upload, inspect, replace, and configure image assets, hero blueprints, client logos, and case study visuals without breaking live page references.
          </p>
        </div>

        {/* Upload Button */}
        <label className="cursor-pointer px-4 py-2.5 bg-[#E8B626] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#F3C84B] transition-all flex items-center gap-2 shadow-lg shadow-[#E8B626]/20 self-start md:self-auto">
          {uploading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Upload className="w-4 h-4" />
          )}
          <span>{uploading ? "Processing Upload..." : "Upload New Asset"}</span>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,.svg"
            onChange={(e) => handleFileUpload(e.target.files)}
            disabled={uploading}
            className="hidden"
          />
        </label>
      </div>

      {/* Notifications */}
      {successMsg && (
        <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
          <Check className="w-4 h-4 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}
      {errorMsg && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Drag & Drop Upload Zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFileUpload(e.dataTransfer.files);
        }}
        className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center transition-all ${
          isDragging
            ? "border-[#E8B626] bg-[#E8B626]/10"
            : "border-white/10 bg-[#171717]/60 hover:border-white/20"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-2 max-w-sm mx-auto">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#E8B626]">
            <Upload className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold text-white">
            Drag and drop images here, or click upload button
          </div>
          <div className="text-[11px] text-gray-400 font-mono">
            Supported formats: PNG, JPG, WEBP, SVG (Max 10MB)
          </div>
        </div>
      </div>

      {/* Search, Filter, and View Mode Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search assets by name or alt text..."
            className="w-full pl-10 pr-4 py-2 bg-[#171717] border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E8B626]"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-[#171717] border border-white/10 rounded-xl p-1">
            {(["ALL", "IMAGE", "SVG"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  typeFilter === t
                    ? "bg-[#E8B626] text-black font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 bg-[#171717] border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === "grid" ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === "list" ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Media Catalog View */}
      {loading ? (
        <div className="p-16 text-center text-xs text-gray-500 font-mono bg-[#171717] rounded-2xl border border-white/10 flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-[#E8B626]" />
          <span>Loading asset repository...</span>
        </div>
      ) : filteredMedia.length === 0 ? (
        <div className="p-16 text-center text-xs text-gray-500 font-mono bg-[#171717] rounded-2xl border border-white/10">
          No assets match your search criteria.
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="bg-[#171717] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#E8B626]/50 transition-all flex flex-col justify-between shadow-lg"
            >
              <div className="relative h-44 w-full bg-[#111111] overflow-hidden" style={{ position: "relative" }}>
                <Image
                  src={item.url}
                  alt={item.altText || item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-gray-300 uppercase">
                  {(item.size / 1024).toFixed(0)} KB
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-white truncate mb-1" title={item.name}>
                    {item.name}
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono truncate mb-2" title={item.altText}>
                    Alt: {item.altText || "None"}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-1.5">
                  <button
                    onClick={() => handleCopy(item.url, item.id)}
                    className="flex-1 py-1.5 px-2 bg-white/5 hover:bg-white/10 rounded-lg text-[11px] font-mono text-gray-300 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    title="Copy URL"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3 h-3 text-[#E8B626]" />
                        <span className="text-[#E8B626]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy URL</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setEditingItem(item);
                      setReplacementFile(null);
                    }}
                    className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    title="Edit Metadata / Replace"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setDeleteConfirmId(item.id)}
                    className="p-1.5 text-gray-400 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer"
                    title="Delete Asset"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-[#171717] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1f1f1f] text-gray-400 font-mono uppercase text-[10px] tracking-wider border-b border-white/5">
              <tr>
                <th className="py-3 px-6">Preview</th>
                <th className="py-3 px-6">Asset Name</th>
                <th className="py-3 px-6">Alt Description</th>
                <th className="py-3 px-6">Size / Type</th>
                <th className="py-3 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {filteredMedia.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-6">
                    <div className="relative w-12 h-10 rounded-lg overflow-hidden bg-black" style={{ position: "relative" }}>
                      <Image src={item.url} alt={item.name} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="py-3 px-6 font-bold text-white text-xs truncate max-w-xs">
                    {item.name}
                  </td>
                  <td className="py-3 px-6 text-gray-400 text-xs truncate max-w-xs">
                    {item.altText || "No Alt Text"}
                  </td>
                  <td className="py-3 px-6 font-mono text-[11px] text-gray-400">
                    {(item.size / 1024).toFixed(1)} KB • {item.mimeType.split("/")[1] || "asset"}
                  </td>
                  <td className="py-3 px-6 text-right space-x-2">
                    <button
                      onClick={() => handleCopy(item.url, item.id)}
                      className="px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded text-[11px] font-mono text-gray-300 cursor-pointer"
                    >
                      {copiedId === item.id ? "Copied" : "Copy URL"}
                    </button>
                    <button
                      onClick={() => {
                        setEditingItem(item);
                        setReplacementFile(null);
                      }}
                      className="p-1 text-gray-400 hover:text-white cursor-pointer"
                      title="Edit / Replace"
                    >
                      <Edit2 className="w-3.5 h-3.5 inline" />
                    </button>
                    <button
                      onClick={() => setDeleteConfirmId(item.id)}
                      className="p-1 text-gray-400 hover:text-red-400 cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5 inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#171717] border border-red-500/30 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <AlertTriangle className="w-6 h-6 shrink-0" />
              <h3 className="text-base font-bold text-white">Delete Asset Confirmation</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Are you sure you want to delete this media asset? Any pages or blog posts linking to this image will display a broken visual reference.
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

      {/* Asset Detail & Edit / Replace Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#171717] border border-white/10 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FileImage className="w-4 h-4 text-[#E8B626]" />
                <span>Asset Details &amp; Metadata</span>
              </h3>
              <button
                onClick={() => {
                  setEditingItem(null);
                  setReplacementFile(null);
                }}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Asset Preview */}
            <div className="relative h-48 w-full bg-[#111111] rounded-xl overflow-hidden border border-white/10" style={{ position: "relative" }}>
              <Image
                src={editingItem.url}
                alt={editingItem.altText || editingItem.name}
                fill
                className="object-contain"
              />
            </div>

            <form onSubmit={handleSaveMetadata} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-bold mb-1">Asset Name / Title</label>
                <input
                  type="text"
                  value={editingItem.name}
                  onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#1f1f1f] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#E8B626]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1">
                  Alt Text (Accessibility &amp; SEO)
                </label>
                <input
                  type="text"
                  value={editingItem.altText || ""}
                  onChange={(e) => setEditingItem({ ...editingItem, altText: e.target.value })}
                  placeholder="Descriptive text for screen readers and search engines"
                  className="w-full px-3 py-2 bg-[#1f1f1f] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#E8B626]"
                />
              </div>

              {/* Replace Asset Feature */}
              <div className="bg-[#1f1f1f] border border-white/5 rounded-xl p-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 text-[#E8B626]" />
                    <span>Replace Asset File</span>
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">Preserves references</span>
                </div>
                <input
                  type="file"
                  accept="image/*,.svg"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setReplacementFile(e.target.files[0]);
                    }
                  }}
                  className="text-xs text-gray-400 file:mr-2 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-[11px] file:bg-white/10 file:text-white file:cursor-pointer"
                />
                {replacementFile && (
                  <div className="text-[11px] text-[#E8B626] font-mono">
                    Ready to replace with: {replacementFile.name} ({(replacementFile.size / 1024).toFixed(1)} KB)
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setEditingItem(null);
                    setReplacementFile(null);
                  }}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-gray-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingItem}
                  className="px-5 py-2 bg-[#E8B626] text-black font-bold rounded-xl flex items-center gap-2 cursor-pointer hover:bg-[#F3C84B]"
                >
                  {savingItem ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                  <span>{savingItem ? "Saving..." : "Save Details"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
