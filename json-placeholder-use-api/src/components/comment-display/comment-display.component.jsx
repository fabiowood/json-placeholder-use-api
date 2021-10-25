import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const CommentDisplay = ({ location }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const urlPath = location.pathname;
    if (urlPath.includes("comments")) {
      fetch(`https://jsonplaceholder.typicode.com${urlPath}`)
        .then((response) => response.json())
        .then((result) => setComment(result));
    }
  }, [location.pathname]);

  return (
    <ul>
      {
        Object.entries(comment).map(([key, value]) => {
        return <li key={key}>{`${key}: ${value}`}</li>;
        })
      }
    </ul>
  );
};

export default withRouter(CommentDisplay);
