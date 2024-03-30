import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../localStorage/localStorage";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "taskSlice",
  initialState: loadState() || initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state?.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "inProgress", ...payload });
      } else {
        const lastElement = state?.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "inProgress",
          ...payload,
        });
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((task) => task.id === payload);
      target.status = "complete";
    },
  },
});

export const { addTask, deleteTask, updateStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
