import { mockProjects } from "@/data/mock-data/projects";

let projects = [...mockProjects];

// Simulate API delay
const delay = (ms = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Get All Projects
export const getMockProjects = async (params = {}) => {
  await delay();

  const { search = "", status = "All", priority = "All" } = params;

  let result = [...projects];

  if (search) {
    result = result.filter(
      (project) =>
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.client.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (status !== "All") {
    result = result.filter(
      (project) => project.status === status
    );
  }

  if (priority !== "All") {
    result = result.filter(
      (project) => project.priority === priority
    );
  }

  return result;
};

// Get Single Project
export const getMockProjectById = async (id) => {
  await delay();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    throw new Error("Project not found");
  }

  return project;
};

// Create Project
export const createMockProject = async (projectData) => {
  await delay();

  const newProject = {
    ...projectData,
    id: `PRJ-${Date.now()}`,
  };

  projects = [newProject, ...projects];

  return newProject;
};

// Update Project
export const updateMockProject = async (id, updatedData) => {
  await delay();

  const index = projects.findIndex((item) => item.id === id);

  if (index === -1) {
    throw new Error("Project not found");
  }

  projects[index] = {
    ...projects[index],
    ...updatedData,
  };

  return projects[index];
};

// Delete Project
export const deleteMockProject = async (id) => {
  await delay();

  const exists = projects.some((item) => item.id === id);

  if (!exists) {
    throw new Error("Project not found");
  }

  projects = projects.filter((item) => item.id !== id);

  return { success: true, id };
};