"use client";

import { useQuery } from "@tanstack/react-query";
import projectService from "@/services/project.service";
import projectKeys from "./project-keys";

// Get All Projects
export const useProjects = (params = {}) => {
  return useQuery({
    queryKey: projectKeys.list(params),
    queryFn: () => projectService.getAll(params),
  });
};

// Get Single Project
export const useProject = (id) => {
  return useQuery({
    queryKey: projectKeys.detail(id),
    queryFn: () => projectService.getById(id),
    enabled: Boolean(id),
  });
};