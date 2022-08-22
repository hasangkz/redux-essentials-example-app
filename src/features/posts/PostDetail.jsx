import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const PostDetail = ({ match }) => {
  const { postID } = match.params;

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postID)
  );
  //! useSeleector kullanarak ana state eriştik ve ana state'in içeriklerinde find metodu uyguladık.

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className='post'>
        <h2>{post.title}</h2>
        <p className='post-content'>{post.content}</p>
        <Link to={`/editPost/${post.id}`} className='button'>
          Edit Post
        </Link>
      </article>
    </section>
  );
};
