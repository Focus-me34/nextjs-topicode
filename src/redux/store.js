import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import userReducer from "./features/userSlice";
import topicReducer from "./features/topicSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
    topicReducer,
    userReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});
