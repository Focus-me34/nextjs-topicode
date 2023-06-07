import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "./features/topicSlice";
import counterReducer from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
    topicReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
