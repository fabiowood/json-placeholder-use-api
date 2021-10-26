import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./comment-display.styles.scss";

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
    <Fragment>
      <ul className="comment-display-container">
        {Object.entries(comment).map(([key, value]) => {
          if (key === "name") key = "Nome";
          if (key === "body") key = "Comentário";
          return (
            <Fragment>
              <li key={key} className="comment-display-item">
                <strong>{`${key}:`}</strong> {`${value}`}
              </li>
            </Fragment>
          );
        })}
        <a href="/posts">Ver Posts</a>
      </ul>
    </Fragment>
  );
};

export default withRouter(CommentDisplay);
