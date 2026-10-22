"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Inbox,
  Briefcase,
  Layers,
  FileText,
  Settings,
  LogOut,
  ExternalLink,
  Menu,
  X,
  Loader2,
  Globe,
  Image as ImageIcon,
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setLoading(false);
      return;
    }

    fetch("/api/auth/me")
      .then((res) => {
        if (!res.ok) {
          router.push("/admin/login");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data?.authenticated) {
          setUser(data.user);
        }
      })
      .catch(() => {
        router.push("/admin/login");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pathname, isLoginPage, router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[#E8B626]" />
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
            Validating Security Credentials...
          </span>
        </div>
      </div>
    );
  }

  const navItems = [
    { label: "Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Pages & Content", href: "/admin/pages", icon: Globe },
    { label: "Media & Assets", href: "/admin/media", icon: ImageIcon },
    { label: "Blog & Intelligence", href: "/admin/posts", icon: FileText },
    { label: "Case Studies", href: "/admin/case-studies", icon: Briefcase },
    { label: "Services", href: "/admin/services", icon: Layers },
    { label: "Leads & Audits", href: "/admin/leads", icon: Inbox },
    { label: "Site Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#171717] border-b border-white/10 sticky top-0 z-50">
        <Link href="/admin" className="flex items-center gap-2">
          <Image
            src="/logo.png?v=authentic"
            alt="Plan D Media CMS"
            width={280}
            height={52}
            unoptimized
            className="h-7 w-auto object-contain"
          />
        </Link>

        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="p-2 text-gray-400 hover:text-white"
        >
          {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#171717] border-r border-white/10 flex flex-col justify-between transition-transform duration-300 lg:static lg:translate-x-0 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Logo */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <Link href="/admin" className="flex flex-col gap-1.5">
              <Image
                src="/logo.png?v=authentic"
                alt="Plan D Media CMS"
                width={280}
                height={52}
                unoptimized
                className="h-8 w-auto object-contain"
              />
              <span className="text-[10px] text-gray-400 font-mono pl-0.5">Control Console v2.0</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#E8B626] text-white font-bold shadow-md shadow-[#E8B626]/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Badge & Bottom Actions */}
        <div className="p-4 border-t border-white/10 space-y-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs text-gray-400 hover:text-white hover:bg-white/5 transition-colors font-medium border border-white/5"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-[#E8B626]" />
              View Live Website
            </span>
            <span className="text-[10px] text-gray-500 font-mono">↗</span>
          </Link>

          <div className="p-3 bg-[#1f1f1f] rounded-xl border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-7 h-7 rounded-full bg-[#E8B626]/20 text-[#E8B626] font-bold text-xs flex items-center justify-center shrink-0">
                {user?.name?.[0] || "A"}
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-white truncate">{user?.name || "Administrator"}</div>
                <div className="text-[10px] text-gray-400 truncate font-mono">{user?.role || "SUPER_ADMIN"}</div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <main className="flex-1 min-w-0 p-6 lg:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
