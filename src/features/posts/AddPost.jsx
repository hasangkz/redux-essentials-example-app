import React from 'react';
import { useState } from 'react';
import { addPost } from './postsSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
export const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const handlePost = () => {
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
        })
      );
    }
    setTitle('');
    setContent('');
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='postContent'>Content:</label>
        <textarea
          type='text'
          id='postContent'
          name='postContent'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type='button' onClick={handlePost}>
          Save Post
        </button>
      </form>
    </section>
  );
};
