/* eslint-disable default-case */
import React from "react";
import "./breadcrumb.styles.scss";

const BreadCrumb = () => {
  let locationAdjustedPathName = "";
  switch (window.location.pathname) {
    case "/albums":
      locationAdjustedPathName = "Álbuns e Fotografias";
      break;
    case "/posts":
      locationAdjustedPathName = "Posts e Comments";
      break;
    case "/tasks":
      locationAdjustedPathName = "Tarefas";
      break;
    default:
      locationAdjustedPathName = "JSON PlaceHolder Use API";
  }
  return (
    <section className="breadcrumb-container">
      <p>
        Você está em: <a href="/">Home</a> {`=>`}
        <strong>
          <a href={window.location.pathname}> {locationAdjustedPathName}</a>
        </strong>
      </p>
    </section>
  );
};

export default BreadCrumb;
