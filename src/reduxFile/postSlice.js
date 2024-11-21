import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    onCreate: (state, action) => {
      state.posts.push(action.payload);
    },
    onDelete: (state, action) => {
      state.posts = state.posts.filter(
        (p) => p.postId !== Number(action.payload)
      );
    },
    onUpdate: (state, action) => {
      state.posts = state.posts.map((p) =>
        p.postId === action.payload.postId
          ? {
              ...p,
              title: action.payload.title,
              content: action.payload.content,
            }
          : p
      );
    },
  },
});

export const { onCreate, onDelete, onUpdate } = postSlice.actions;
export default postSlice.reducer;
