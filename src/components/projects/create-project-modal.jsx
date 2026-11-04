
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "@/schemas/project.schema";
import { useCreateProject } from "@/hooks/mutations/project-mutations";
import Button from "@/components/ui/button";

export default function CreateProjectModal({ onClose }) {
  const createProject = useCreateProject();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      client: "",
      platform: "Upwork",
      category: "Web Development",
      budget: "",
      currency: "USD",
      status: "Pending",
      priority: "Medium",
      startDate: "",
      deadline: "",
      description: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await createProject.mutateAsync(data);
      alert("Project created successfully!");
      onClose();
    } catch (error) {
      alert("Failed to create project. Please try again.");
    }
  };

  const fields = [
    { name: "title", label: "Project Title", placeholder: "Enter project title" },
    { name: "client", label: "Client Name", placeholder: "Enter client name" },
  ];

  const selectFields = [
    {
      name: "platform",
      label: "Platform",
      options: ["Upwork", "Fiverr", "Freelancer", "Direct Client"],
    },
    {
      name: "category",
      label: "Category",
      options: ["Web Development", "Web Design", "Data Entry", "Other"],
    },
    {
      name: "currency",
      label: "Currency",
      options: ["USD", "BDT", "EUR", "GBP"],
    },
    {
      name: "status",
      label: "Status",
      options: ["Pending", "In Progress", "Submitted", "Completed"],
    },
    {
      name: "priority",
      label: "Priority",
      options: ["Low", "Medium", "High"],
    },
  ];

  const inputClass =
    "mt-2 w-full rounded-xl border border-gray-700 bg-[#181818] px-4 py-3 text-sm text-white outline-none focus:border-violet-500";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-700 bg-[#252525] p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Create New Project</h2>
            <p className="mt-1 text-sm text-gray-400">
              Add your project information below.
            </p>
          </div>

          <button onClick={onClose} className="text-2xl text-gray-400">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="text-sm text-gray-300">
                  {field.label}
                </label>
                <input
                  {...register(field.name)}
                  placeholder={field.placeholder}
                  className={inputClass}
                />
                <p className="mt-1 text-xs text-red-400">
                  {errors[field.name]?.message}
                </p>
              </div>
            ))}

            {selectFields.map((field) => (
              <div key={field.name}>
                <label className="text-sm text-gray-300">
                  {field.label}
                </label>
                <select {...register(field.name)} className={inputClass}>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-red-400">
                  {errors[field.name]?.message}
                </p>
              </div>
            ))}

            <div>
              <label className="text-sm text-gray-300">Budget</label>
              <input
                type="number"
                step="0.01"
                {...register("budget")}
                placeholder="Enter project budget"
                className={inputClass}
              />
              <p className="mt-1 text-xs text-red-400">
                {errors.budget?.message}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-300">Start Date</label>
              <input
                type="date"
                {...register("startDate")}
                className={inputClass}
              />
              <p className="mt-1 text-xs text-red-400">
                {errors.startDate?.message}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-300">Deadline</label>
              <input
                type="date"
                {...register("deadline")}
                className={inputClass}
              />
              <p className="mt-1 text-xs text-red-400">
                {errors.deadline?.message}
              </p>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300">Description</label>
            <textarea
              {...register("description")}
              rows={4}
              placeholder="Describe your project..."
              className={inputClass}
            />
            <p className="mt-1 text-xs text-red-400">
              {errors.description?.message}
            </p>
          </div>

          <div className="flex justify-end gap-3 border-t border-gray-700 pt-5">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>

            <Button type="submit" loading={createProject.isPending}>
              Create Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
