"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Wallet,
  UserRound,
  BookOpen,
  Settings,
  LogOut,
  BriefcaseBusiness,
  ChevronLeft,
} from "lucide-react";

const menuGroups = [
  {
    title: "WORKSPACE",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Projects", href: "/projects", icon: FolderKanban },
      { name: "Clients", href: "/clients", icon: Users },
      { name: "Earnings", href: "/earnings", icon: Wallet },
    ],
  },
  {
    title: "PERSONAL",
    items: [
      { name: "My Profile", href: "/profile", icon: UserRound },
      { name: "Learning Guide", href: "/guides", icon: BookOpen },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-[260px] flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="flex h-[76px] items-center justify-between border-b border-slate-100 px-6">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
            <BriefcaseBusiness size={21} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              Freelance<span className="text-indigo-600">Hub</span>
            </h1>
            <p className="text-[10px] font-medium tracking-wider text-slate-400">
              WORKSPACE PLATFORM
            </p>
          </div>
        </Link>

        <button
          type="button"
          aria-label="Collapse sidebar"
          className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
        >
          <ChevronLeft size={17} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-8 overflow-y-auto px-4 py-7">
        {menuGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-3 px-3 text-[10px] font-bold tracking-[1.5px] text-slate-400">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href ||
                  (item.href !== "/dashboard" &&
                    pathname.startsWith(item.href + "/"));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-medium transition-all ${
                      active
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <Icon
                      size={19}
                      className={
                        active
                          ? "text-indigo-600"
                          : "text-slate-400 group-hover:text-slate-700"
                      }
                    />
                    {item.name}

                    {item.name === "Projects" && (
                      <span className="ml-auto rounded-md bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500">
                        5
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-slate-100 p-4">
        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-500 hover:bg-slate-50"
        >
          <Settings size={19} />
          Settings
        </Link>

        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-red-500 hover:bg-red-50"
        >
          <LogOut size={19} />
          Sign Out
        </button>

        <div className="mt-3 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
            AM
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-slate-800">
              Alex Morgan
            </p>
            <p className="text-[10px] text-slate-400">Freelancer</p>
          </div>
        </div>
      </div>
    </aside>
  );
}