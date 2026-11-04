
"use client";

import {
  Wallet,
  FolderKanban,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
} from "lucide-react";
import EarningsChart from "@/components/dashboard/earnings-chart";

const stats = [
  {
    title: "Total Earnings",
    value: "$12,450",
    change: "+12.5%",
    positive: true,
    icon: Wallet,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Active Projects",
    value: "08",
    change: "+2 this month",
    positive: true,
    icon: FolderKanban,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Total Clients",
    value: "24",
    change: "+8.2%",
    positive: true,
    icon: Users,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Pending Payments",
    value: "$2,450",
    change: "-4.5%",
    positive: false,
    icon: TrendingUp,
    color: "bg-orange-100 text-orange-600",
  },
];

const projects = [
  {
    name: "E-commerce Website",
    client: "John Smith",
    progress: 75,
    status: "In Progress",
    color: "bg-violet-500",
  },
  {
    name: "Mobile App Design",
    client: "Sarah Wilson",
    progress: 50,
    status: "In Progress",
    color: "bg-blue-500",
  },
  {
    name: "Business Landing Page",
    client: "Michael Brown",
    progress: 90,
    status: "Review",
    color: "bg-emerald-500",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Welcome back, Alex! 👋
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Here is what's happening with your freelance workspace today.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-700 bg-[#252525] p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{item.title}</p>
                  <h2 className="mt-3 text-2xl font-bold text-white">
                    {item.value}
                  </h2>
                </div>

                <div className={`rounded-xl p-3 ${item.color}`}>
                  <Icon size={23} />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm">
                {item.positive ? (
                  <ArrowUpRight size={16} className="text-green-400" />
                ) : (
                  <ArrowDownRight size={16} className="text-red-400" />
                )}

                <span
                  className={
                    item.positive ? "text-green-400" : "text-red-400"
                  }
                >
                  {item.change}
                </span>
                <span className="text-gray-500">from last month</span>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Earnings Chart */}
      <EarningsChart />

      {/* Projects */}
      <div className="rounded-2xl border border-gray-700 bg-[#252525] p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Recent Projects
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Track your ongoing work
            </p>
          </div>

          <a
            href="/projects"
            className="text-sm font-medium text-violet-400 hover:text-violet-300"
          >
            View All →
          </a>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.name}>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="font-medium text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    Client: {project.client}
                  </p>
                </div>

                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                  {project.status}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-700">
                  <div
                    className={`h-full rounded-full ${project.color}`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>

                <span className="text-xs text-gray-400">
                  {project.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-700 bg-[#252525] p-6">
          <h2 className="text-lg font-semibold text-white">
            Quick Overview
          </h2>

          <div className="mt-6 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                Completed Projects
              </span>
              <span className="font-semibold text-white">32</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                Pending Tasks
              </span>
              <span className="font-semibold text-white">12</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                Success Rate
              </span>
              <span className="font-semibold text-green-400">94%</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-700 bg-[#252525] p-6">
          <h2 className="text-lg font-semibold text-white">
            Upcoming Deadlines
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <div className="rounded-xl bg-orange-500/10 p-3 text-orange-400">
              <Clock size={22} />
            </div>

            <div>
              <h3 className="text-sm font-medium text-white">
                E-commerce Website
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                Deadline: November 10, 2026
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
              <Clock size={22} />
            </div>

            <div>
              <h3 className="text-sm font-medium text-white">
                Mobile App Design
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                Deadline: November 15, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
