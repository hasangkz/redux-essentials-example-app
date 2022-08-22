import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  //! useSelector'un aldığı state, store.js'deki store demek.
  //? global state yani store her değiştiği zaman "posts" re-render olur ve kendini günceller
  return (
    <section>
      {posts.map((post) => (
        <article className='post-excerpt' key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}</p>
          <Link to={`/posts/${post.id}`} className='button muted-button'>
            View Post
          </Link>
        </article>
      ))}
    </section>
  );
};
