import React, { useState, useEffect } from "react";
import "./posts.styles.scss";

import Post from "../../components/post/post.component";

const Posts = () => {
  const [posts, setPostsList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPostsList(posts));
  });

  return (
    <section className="posts">
      <div>Posts List</div>
      <div>
        {
          posts.map((post) => (
          <Post key={post.id} post={post} />
        ))
        }
      </div>
    </section>
  );
};

export default Posts;
