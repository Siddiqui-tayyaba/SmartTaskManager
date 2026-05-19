import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",

  initialState: {
    tasks: [] as {
      id: string;
      title: string;
      completed?: boolean;
    }[],
  },

  reducers: {
    // API data store karne ke liye
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { setTasks } = taskSlice.actions;

export default taskSlice.reducer;
