"use client";

import {
  Search,
  Bell,
  ChevronDown,
  Menu,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur-md md:px-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Open menu"
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
        >
          <Menu size={21} />
        </button>

        <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 md:flex md:w-[300px]">
          <Search size={17} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />

          <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400">
            /
          </kbd>
        </div>

        <p className="text-sm font-semibold text-slate-800 md:hidden">
          FreelanceHub
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-50"
        >
          <Bell size={19} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
        </button>

        <div className="h-8 w-px bg-slate-200" />

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-slate-50"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
            AM
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-xs font-semibold text-slate-800">
              Alex Morgan
            </p>
            <p className="text-[10px] text-slate-400">
              Freelancer
            </p>
          </div>

          <ChevronDown size={15} className="text-slate-400" />
        </button>
      </div>
    </header>
  );
}