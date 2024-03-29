import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";

const store = configureStore({
  reducer: {
    taskSlice: tasksReducer,
  },
});

export default store;
