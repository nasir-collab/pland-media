"use client";

import React, { useState, useEffect } from "react";
import {
  Inbox,
  Search,
  Filter,
  Phone,
  Mail,
  Building,
  Calendar,
  Trash2,
  Edit3,
  CheckCircle2,
  MessageSquare,
  Loader2,
  ExternalLink,
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  status: string;
  notes?: string;
  createdAt: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [savingNote, setSavingNote] = useState(false);
  const [activeNote, setActiveNote] = useState("");

  const loadLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (e) {
      console.error("Error loading leads:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status } : l))
      );
      if (selectedLead?.id === id) {
        setSelectedLead((prev) => (prev ? { ...prev, status } : null));
      }
    } catch (e) {
      console.error("Error changing status:", e);
    }
  };

  const handleSaveNote = async () => {
    if (!selectedLead) return;
    setSavingNote(true);
    try {
      await fetch(`/api/leads/${selectedLead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: activeNote }),
      });
      setLeads((prev) =>
        prev.map((l) =>
          l.id === selectedLead.id ? { ...l, notes: activeNote } : l
        )
      );
      setSelectedLead((prev) => (prev ? { ...prev, notes: activeNote } : null));
    } catch (e) {
      console.error("Error saving note:", e);
    } finally {
      setSavingNote(false);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to delete this inquiry record?")) return;
    try {
      await fetch(`/api/leads/${id}`, { method: "DELETE" });
      setLeads((prev) => prev.filter((l) => l.id !== id));
      if (selectedLead?.id === id) setSelectedLead(null);
    } catch (e) {
      console.error("Error deleting lead:", e);
    }
  };

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      (l.company && l.company.toLowerCase().includes(search.toLowerCase())) ||
      l.phone.includes(search);
    const matchesFilter = filterStatus === "ALL" || l.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const statusColors: Record<string, string> = {
    NEW: "bg-[#d4ff00]/10 text-[#d4ff00] border-[#d4ff00]/30",
    CONTACTED: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    QUALIFIED: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    CONVERTED: "bg-green-500/10 text-green-400 border-green-500/30",
    CLOSED: "bg-gray-500/10 text-gray-400 border-gray-500/30",
  };

  return (
    <div className="space-y-8 max-w-7xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00] block mb-1">
            ✦ Commercial Pipeline
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Enquiries & Inbound Leads
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            View, qualify, and update status on all website form and audit submissions.
          </p>
        </div>

        <button
          onClick={loadLeads}
          className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-mono rounded-xl hover:bg-white/10 transition-colors"
        >
          Refresh Feed
        </button>
      </div>

      {/* Filter / Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search by name, email, phone, company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#10121a] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d4ff00] transition-colors"
          />
          <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {["ALL", "NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "CLOSED"].map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                filterStatus === s
                  ? "bg-[#d4ff00] text-black font-bold"
                  : "bg-[#10121a] text-gray-400 border border-white/5 hover:text-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Leads Table + Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Table Column */}
        <div className="lg:col-span-7 bg-[#10121a] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          {loading ? (
            <div className="p-12 text-center text-xs text-gray-500 font-mono">
              Loading inquiries...
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-12 text-center text-xs text-gray-500 font-mono">
              No matching inquiries found.
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {filteredLeads.map((lead) => {
                const isSelected = selectedLead?.id === lead.id;
                return (
                  <div
                    key={lead.id}
                    onClick={() => {
                      setSelectedLead(lead);
                      setActiveNote(lead.notes || "");
                    }}
                    className={`p-5 cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-[#151824] border-l-4 border-l-[#d4ff00]"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <div className="font-bold text-white text-sm flex items-center gap-2">
                          <span>{lead.name}</span>
                          {lead.status === "NEW" && (
                            <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
                          )}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {lead.email} • {lead.phone}
                        </div>
                      </div>

                      <select
                        value={lead.status}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border bg-transparent cursor-pointer ${
                          statusColors[lead.status] || "border-white/10 text-white"
                        }`}
                      >
                        <option value="NEW" className="bg-[#151824] text-white">NEW</option>
                        <option value="CONTACTED" className="bg-[#151824] text-white">CONTACTED</option>
                        <option value="QUALIFIED" className="bg-[#151824] text-white">QUALIFIED</option>
                        <option value="CONVERTED" className="bg-[#151824] text-white">CONVERTED</option>
                        <option value="CLOSED" className="bg-[#151824] text-white">CLOSED</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-400 mt-3 pt-3 border-t border-white/5">
                      <span className="text-[#00f0ff] font-mono">{lead.service}</span>
                      {lead.budget && (
                        <span>Budget: <strong className="text-gray-300 font-mono">{lead.budget}</strong></span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Detail Inspector Column */}
        <div className="lg:col-span-5 bg-[#10121a] border border-white/10 rounded-2xl p-6 sticky top-8 shadow-xl">
          {selectedLead ? (
            <div className="space-y-6">
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedLead.name}</h3>
                  <div className="text-xs text-gray-400 font-mono mt-0.5">
                    Received {new Date(selectedLead.createdAt).toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => handleDeleteLead(selectedLead.id)}
                  title="Delete Lead"
                  className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Communication Actions */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs text-white font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4ff00]" />
                  <span>Call Phone</span>
                </a>
                <a
                  href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-xl text-xs text-[#25D366] font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Data attributes */}
              <div className="space-y-3 text-xs bg-[#151824] p-4 rounded-xl border border-white/5">
                <div>
                  <span className="text-gray-500 font-mono block">Email:</span>
                  <a href={`mailto:${selectedLead.email}`} className="text-[#00f0ff] hover:underline font-medium">
                    {selectedLead.email}
                  </a>
                </div>
                {selectedLead.company && (
                  <div>
                    <span className="text-gray-500 font-mono block">Company:</span>
                    <span className="text-white font-medium">{selectedLead.company}</span>
                  </div>
                )}
                <div>
                  <span className="text-gray-500 font-mono block">Requested Service:</span>
                  <span className="text-white font-medium">{selectedLead.service}</span>
                </div>
                {selectedLead.budget && (
                  <div>
                    <span className="text-gray-500 font-mono block">Budget Allocation:</span>
                    <span className="text-[#d4ff00] font-mono font-bold">{selectedLead.budget}</span>
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Inquiry Message:
                </h4>
                <div className="bg-[#151824] p-4 rounded-xl text-xs text-gray-300 leading-relaxed whitespace-pre-line border border-white/5">
                  {selectedLead.message}
                </div>
              </div>

              {/* Internal Notes */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 flex items-center justify-between">
                  <span>Internal Strategist Notes</span>
                  {savingNote && <Loader2 className="w-3 h-3 animate-spin text-[#d4ff00]" />}
                </h4>
                <textarea
                  rows={3}
                  placeholder="Add private audit notes or deal progress..."
                  value={activeNote}
                  onChange={(e) => setActiveNote(e.target.value)}
                  className="w-full bg-[#151824] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d4ff00] transition-colors resize-none mb-2"
                />
                <button
                  onClick={handleSaveNote}
                  disabled={savingNote}
                  className="px-4 py-2 bg-[#d4ff00] text-black font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#c2ea00] transition-colors"
                >
                  Save Internal Note
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500 text-xs font-mono">
              Select an inquiry from the list to inspect client details and update internal status.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
