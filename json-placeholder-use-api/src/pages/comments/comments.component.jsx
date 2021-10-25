import React, { useState, useEffect } from "react";

import Collection from "../../components/collection/collection.component";

const Comments = ({ match }) => {
  const { postId, postTitle } = match.params;
  
  const [comments, setCommentsList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((comments) => setCommentsList(comments));
  }, [postId]);

  return (
    <Collection
      key={comments}
      collection={comments}
      collectionItemType="comment"
      title={postTitle}
    />
  );
};

export default Comments;
