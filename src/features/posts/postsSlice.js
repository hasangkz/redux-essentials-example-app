import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.unshift(action.payload);
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload;
      const eskiPost = state.find((post) => post.id === id);
      if (eskiPost) {
        eskiPost.title = title;
        eskiPost.content = content;
      }
    },
  },
});

export default postsSlice.reducer;
export const { addPost, updatePost } = postsSlice.actions;
