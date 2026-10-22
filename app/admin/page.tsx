"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Inbox,
  Briefcase,
  Layers,
  FileText,
  ArrowUpRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Plus,
  Globe,
  Image as ImageIcon,
  SlidersHorizontal,
  Sparkles,
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
  createdAt: string;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    leadsCount: 0,
    servicesCount: 0,
    caseStudiesCount: 0,
    postsCount: 0,
    pagesCount: 0,
    mediaCount: 0,
  });
  const [recentLeads, setRecentLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [leadsRes, servicesRes, csRes, postsRes, pagesRes, mediaRes] = await Promise.all([
          fetch("/api/leads"),
          fetch("/api/services?all=true"),
          fetch("/api/case-studies?all=true"),
          fetch("/api/posts?all=true"),
          fetch("/api/pages"),
          fetch("/api/media"),
        ]);

        const leadsData = await leadsRes.json();
        const servicesData = await servicesRes.json();
        const csData = await csRes.json();
        const postsData = await postsRes.json();
        const pagesData = await pagesRes.json();
        const mediaData = await mediaRes.json();

        setStats({
          leadsCount: leadsData.leads?.length || 0,
          servicesCount: servicesData.services?.length || 0,
          caseStudiesCount: csData.caseStudies?.length || 0,
          postsCount: postsData.posts?.length || 0,
          pagesCount: pagesData.pages?.length || 0,
          mediaCount: mediaData.media?.length || 0,
        });

        setRecentLeads(leadsData.leads?.slice(0, 5) || []);
      } catch (e) {
        console.error("Dashboard data fetch error:", e);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const updateLeadStatus = async (id: string, newStatus: string) => {
    try {
      await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      setRecentLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
      );
    } catch (e) {
      console.error("Status update error:", e);
    }
  };

  const statusColors: Record<string, string> = {
    NEW: "bg-[#E8B626]/10 text-[#E8B626] border-[#E8B626]/30",
    CONTACTED: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    QUALIFIED: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    CONVERTED: "bg-green-500/10 text-green-400 border-green-500/30",
    CLOSED: "bg-gray-500/10 text-gray-400 border-gray-500/30",
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8B626] block mb-1 font-bold">
            ✦ Executive Command Center &amp; CMS
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-xs text-gray-400 mt-1 max-w-2xl">
            Real-time status of commercial inquiries, website page architecture, creative assets, and thought leadership articles.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/leads"
            className="px-4 py-2.5 bg-[#E8B626] text-black font-extrabold rounded-xl text-xs uppercase tracking-wider hover:bg-[#F3C84B] transition-all flex items-center gap-2 shadow-lg shadow-[#E8B626]/20 cursor-pointer"
          >
            <Inbox className="w-4 h-4" />
            <span>Manage All Enquiries</span>
          </Link>
        </div>
      </div>

      {/* Stats Grid - 6 Key CMS Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Leads */}
        <Link
          href="/admin/leads"
          className="bg-[#171717] border border-white/10 rounded-2xl p-4 hover:border-[#E8B626]/40 transition-all group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Enquiries</span>
            <Inbox className="w-3.5 h-3.5 text-[#E8B626]" />
          </div>
          <div className="text-2xl font-bold font-mono text-white group-hover:text-[#E8B626] transition-colors">
            {stats.leadsCount}
          </div>
          <p className="text-[10px] text-gray-500 mt-0.5">Total audit leads</p>
        </Link>

        {/* Pages */}
        <Link
          href="/admin/pages"
          className="bg-[#171717] border border-white/10 rounded-2xl p-4 hover:border-[#E8B626]/40 transition-all group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Website Pages</span>
            <Globe className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-white group-hover:text-[#E8B626] transition-colors">
            {stats.pagesCount}
          </div>
          <p className="text-[10px] text-gray-500 mt-0.5">Live &amp; draft routes</p>
        </Link>

        {/* Media */}
        <Link
          href="/admin/media"
          className="bg-[#171717] border border-white/10 rounded-2xl p-4 hover:border-[#E8B626]/40 transition-all group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Media Assets</span>
            <ImageIcon className="w-3.5 h-3.5 text-green-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-white group-hover:text-[#E8B626] transition-colors">
            {stats.mediaCount}
          </div>
          <p className="text-[10px] text-gray-500 mt-0.5">Images &amp; blueprints</p>
        </Link>

        {/* Articles */}
        <Link
          href="/admin/posts"
          className="bg-[#171717] border border-white/10 rounded-2xl p-4 hover:border-[#E8B626]/40 transition-all group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Articles</span>
            <FileText className="w-3.5 h-3.5 text-orange-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-white group-hover:text-[#E8B626] transition-colors">
            {stats.postsCount}
          </div>
          <p className="text-[10px] text-gray-500 mt-0.5">Growth playbooks</p>
        </Link>

        {/* Case Studies */}
        <Link
          href="/admin/case-studies"
          className="bg-[#171717] border border-white/10 rounded-2xl p-4 hover:border-[#E8B626]/40 transition-all group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Case Studies</span>
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-white group-hover:text-[#E8B626] transition-colors">
            {stats.caseStudiesCount}
          </div>
          <p className="text-[10px] text-gray-500 mt-0.5">Verified scale</p>
        </Link>

        {/* Services */}
        <Link
          href="/admin/services"
          className="bg-[#171717] border border-white/10 rounded-2xl p-4 hover:border-[#E8B626]/40 transition-all group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Capabilities</span>
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-white group-hover:text-[#E8B626] transition-colors">
            {stats.servicesCount}
          </div>
          <p className="text-[10px] text-gray-500 mt-0.5">Core offerings</p>
        </Link>
      </div>

      {/* Quick Launch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Link
          href="/admin/pages"
          className="bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 rounded-2xl p-5 transition-all group flex items-center justify-between"
        >
          <div>
            <div className="text-sm font-bold text-white group-hover:text-[#E8B626] transition-colors flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#E8B626]" />
              <span>Pages &amp; Content Management</span>
            </div>
            <div className="text-xs text-gray-400 mt-1 font-light">
              Edit hero headings, challenge subheads, clone landing pages, and preview live routes
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#E8B626] transition-colors shrink-0 ml-3" />
        </Link>

        <Link
          href="/admin/media"
          className="bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 rounded-2xl p-5 transition-all group flex items-center justify-between"
        >
          <div>
            <div className="text-sm font-bold text-white group-hover:text-[#E8B626] transition-colors flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-[#E8B626]" />
              <span>Creative Media Library</span>
            </div>
            <div className="text-xs text-gray-400 mt-1 font-light">
              Upload, preview, replace, and configure image assets without disrupting live references
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#E8B626] transition-colors shrink-0 ml-3" />
        </Link>

        <Link
          href="/admin/posts"
          className="bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 rounded-2xl p-5 transition-all group flex items-center justify-between"
        >
          <div>
            <div className="text-sm font-bold text-white group-hover:text-[#E8B626] transition-colors flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#E8B626]" />
              <span>Blog &amp; Thought Leadership</span>
            </div>
            <div className="text-xs text-gray-400 mt-1 font-light">
              Draft, polish with AI rewrite assistance, preview feed cards, and publish articles
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#E8B626] transition-colors shrink-0 ml-3" />
        </Link>
      </div>

      {/* Recent Leads Table */}
      <div className="bg-[#171717] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Recent Inbound Inquiries</h2>
            <p className="text-xs text-gray-400 mt-0.5">Latest prospective clients requesting audits</p>
          </div>
          <Link
            href="/admin/leads"
            className="text-xs text-[#E8B626] hover:underline font-mono"
          >
            View All ({stats.leadsCount}) →
          </Link>
        </div>

        {loading ? (
          <div className="p-12 text-center text-xs text-gray-500 font-mono">
            Loading latest inquiries...
          </div>
        ) : recentLeads.length === 0 ? (
          <div className="p-12 text-center text-xs text-gray-500 font-mono">
            No inquiries recorded yet. Test submissions from the public website!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#1f1f1f] text-gray-400 font-mono uppercase text-[10px] tracking-wider border-b border-white/5">
                <tr>
                  <th className="py-3 px-6">Prospect</th>
                  <th className="py-3 px-6">Service Requested</th>
                  <th className="py-3 px-6">Budget</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6">Date</th>
                  <th className="py-3 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-white">{lead.name}</div>
                      <div className="text-[11px] text-gray-400">{lead.email} • {lead.phone}</div>
                      {lead.company && (
                        <div className="text-[10px] text-[#E8B626] font-mono mt-0.5">
                          {lead.company}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6 text-gray-300">{lead.service || "General"}</td>
                    <td className="py-4 px-6 font-mono text-[11px] text-gray-400">{lead.budget || "N/A"}</td>
                    <td className="py-4 px-6">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                        className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border bg-transparent focus:outline-none cursor-pointer ${
                          statusColors[lead.status] || "border-white/10 text-white"
                        }`}
                      >
                        <option value="NEW" className="bg-[#171717] text-white">NEW</option>
                        <option value="CONTACTED" className="bg-[#171717] text-white">CONTACTED</option>
                        <option value="QUALIFIED" className="bg-[#171717] text-white">QUALIFIED</option>
                        <option value="CONVERTED" className="bg-[#171717] text-white">CONVERTED</option>
                        <option value="CLOSED" className="bg-[#171717] text-white">CLOSED</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 font-mono text-[10px] text-gray-500">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={`/admin/leads#${lead.id}`}
                        className="text-xs text-[#E8B626] hover:underline font-medium"
                      >
                        Inspect Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
