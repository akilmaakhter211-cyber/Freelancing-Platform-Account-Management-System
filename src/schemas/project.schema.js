import { z } from "zod";

export const projectSchema = z.object({
  title: z
    .string()
    .min(3, "Project title must be at least 3 characters"),

  client: z
    .string()
    .min(2, "Client name is required"),

  platform: z
    .string()
    .min(1, "Please select a platform"),

  category: z
    .string()
    .min(1, "Category is required"),

  budget: z.coerce
    .number()
    .positive("Budget must be greater than 0"),

  currency: z
    .string()
    .min(1, "Please select currency"),

  status: z.enum([
    "Pending",
    "In Progress",
    "Submitted",
    "Completed",
  ]),

  priority: z.enum([
    "Low",
    "Medium",
    "High",
  ]),

  startDate: z
    .string()
    .min(1, "Start date is required"),

  deadline: z
    .string()
    .min(1, "Deadline is required"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),
}).refine(
  (data) => data.deadline >= data.startDate,
  {
    message: "Deadline cannot be before start date",
    path: ["deadline"],
  }
);