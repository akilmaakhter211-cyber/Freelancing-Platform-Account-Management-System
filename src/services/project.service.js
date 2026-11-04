import {
  getMockProjects,
  getMockProjectById,
  createMockProject,
  updateMockProject,
  deleteMockProject,
} from "@/services/mock/project.mock";

import {
  getProjectsAPI,
  getProjectByIdAPI,
  createProjectAPI,
  updateProjectAPI,
  deleteProjectAPI,
} from "@/services/api/project.api";

const USE_MOCK =
  process.env.NEXT_PUBLIC_USE_MOCK === "true";

const projectService = {
  getAll: (params) =>
    USE_MOCK
      ? getMockProjects(params)
      : getProjectsAPI(params),

  getById: (id) =>
    USE_MOCK
      ? getMockProjectById(id)
      : getProjectByIdAPI(id),

  create: (data) =>
    USE_MOCK
      ? createMockProject(data)
      : createProjectAPI(data),

  update: ({ id, data }) =>
    USE_MOCK
      ? updateMockProject(id, data)
      : updateProjectAPI({ id, data }),

  delete: (id) =>
    USE_MOCK
      ? deleteMockProject(id)
      : deleteProjectAPI(id),
};

export default projectService;