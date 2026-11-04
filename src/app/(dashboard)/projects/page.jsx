
"use client";

import { useState } from "react";
import { useProjects } from "@/hooks/queries/project-queries";
import CreateProjectModal from "@/components/projects/create-project-modal";

import {
  Search,
  Plus,
  FolderKanban,
  CalendarDays,
  DollarSign,
} from "lucide-react";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const {
    data: projects = [],
    isLoading,
    isError,
  } = useProjects();

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.client.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || project.status === status;

    return matchesSearch && matchesStatus;
  });

  const statusColors = {
    "In Progress": "bg-blue-500/10 text-blue-400",
    Completed: "bg-green-500/10 text-green-400",
    Pending: "bg-orange-500/10 text-orange-400",
    Submitted: "bg-purple-500/10 text-purple-400",
  };

  return (
    <div className="space-y-7">

      {/* Page Heading */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Projects Management
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Manage and track all your freelance projects.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-medium text-white hover:bg-violet-700"
        >
          <Plus size={18} />
          Add New Project
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={19}
          />

          <input
            type="text"
            placeholder="Search projects or clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-[#252525] py-3 pl-12 pr-4 text-white outline-none focus:border-violet-500"
          />
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-xl border border-gray-700 bg-[#252525] px-5 py-3 text-white outline-none focus:border-violet-500"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Submitted">Submitted</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Project List */}
      {isLoading ? (
        <p className="py-10 text-center text-gray-400">
          Loading projects...
        </p>
      ) : isError ? (
        <p className="py-10 text-center text-red-400">
          Failed to load projects. Please try again.
        </p>
      ) : filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-gray-700 bg-[#252525] p-10 text-center">
          <FolderKanban
            className="mx-auto text-gray-500"
            size={40}
          />

          <p className="mt-4 text-gray-300">
            No projects found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-gray-700 bg-[#252525] p-6 transition hover:border-violet-500/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                    <FolderKanban size={23} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-white">
                      {project.title}
                    </h2>

                    <p className="mt-1 text-xs text-gray-400">
                      {project.client}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    statusColors[project.status] ||
                    "bg-gray-500/10 text-gray-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mt-5 line-clamp-2 text-sm text-gray-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm">
                <span className="flex items-center gap-2 text-gray-400">
                  <DollarSign size={16} />
                  {project.budget} {project.currency}
                </span>

                <span className="flex items-center gap-2 text-gray-400">
                  <CalendarDays size={16} />
                  {project.deadline}
                </span>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex justify-between text-xs">
                  <span className="text-gray-400">
                    Project Progress
                  </span>

                  <span className="text-violet-400">
                    {project.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-700">
                  <div
                    className="h-full rounded-full bg-violet-500"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Project Modal */}
      {showCreateModal && (
        <CreateProjectModal
          onClose={() => setShowCreateModal(false)}
        />
      )}

    </div>
  );
}
