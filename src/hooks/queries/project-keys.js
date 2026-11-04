const projectKeys = {
  all: ["projects"],

  lists: () => [...projectKeys.all, "list"],

  list: (params) => [...projectKeys.lists(), params],

  details: () => [...projectKeys.all, "detail"],

  detail: (id) => [...projectKeys.details(), id],
};

export default projectKeys;