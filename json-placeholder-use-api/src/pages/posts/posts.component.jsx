import React, { useState, useEffect } from "react";

import Collection from "../../components/collection/collection.component";

const Posts = () => {
  const [posts, setPostsList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPostsList(posts));
  }, []);

  return (
    <Collection key={posts} collection={posts} collectionItemType="post" />
  );
};

export default Posts;
