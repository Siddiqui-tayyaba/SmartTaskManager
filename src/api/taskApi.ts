import { api } from "./mockApi";

export const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

export const createTask = async (title: string) => {
  const response = await api.post("/tasks", {
    title,
    completed: false,
  });

  return response.data;
};

export const deleteTaskApi = async (id: string) => {
  await api.delete(`/tasks/${id}`);
};
