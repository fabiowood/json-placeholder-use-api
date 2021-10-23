import React from "react";
import "./post.styles.scss";

const Post = ({ post }) => {
  const { userId, id, title, body } = post
  return (
    <section className="post-container">
      <article className='post-container-item'>
        <h3>{ title }</h3>
        <p>{ id }</p>
        <p>{ userId }</p>
        <p>{ body }</p>
        <p>Ver comments</p>
      </article>
    </section>
  );
};

export default Post;