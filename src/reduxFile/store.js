import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "./postSlice";

const store = configureStore({
  reducer: {
    post: postSliceReducer,
  },
});

export default store;
