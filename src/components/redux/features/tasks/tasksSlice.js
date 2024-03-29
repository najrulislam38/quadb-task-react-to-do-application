import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "taskSlice",
  initialState,
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
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
