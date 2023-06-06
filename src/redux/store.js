import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "./features/topicSlice";

export const store = configureStore({
  reducer: {
    topicReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
