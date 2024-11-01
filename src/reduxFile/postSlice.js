import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      { id: 1, title: "First Post", content: "First Post" },
      { id: 2, title: "Second Post", content: "Second Post" },
    ],
  },
  reducers: {
    onCreate: (state, action) => {
      // (_title, _content)
      state.posts.push({
        id: state.posts.length + 1,
        title: action.payload.title,
        content: action.payload.content,
      });
    },
    onDelete: (state, action) => {
      // (_id)
      state.posts = state.posts.filter((p) => p.id !== Number(action.payload));
    },
    onUpdate: (state, action) => {
      // (_newList)
      state.posts = state.posts.map((p) =>
        p.id === action.payload.id
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
