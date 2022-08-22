import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { updatePost } from './postsSlice';

export const EditPost = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postID } = match.params;

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postID)
  );

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(updatePost({ id: postID, title, content }));
      history.push(`/posts/${postID}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          placeholder="What's on your mind?"
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
      </form>
      <button type='button' onClick={handleUpdate}>
        Değişiklikleri Kaydet
      </button>
    </section>
  );
};
