/* eslint-disable default-case */
import React from "react";
import "./breadcrumb.styles.scss";

const defineLocationName = () => {
  let locationAdjustedPathName = "";
  
  if (window.location.pathname.includes("photos"))
    locationAdjustedPathName = "Fotografias";

  if (window.location.pathname.includes("comments"))
    locationAdjustedPathName = "Comentários";

  if (!locationAdjustedPathName) {
    switch (window.location.pathname) {
      case "/albums":
        locationAdjustedPathName = "Álbuns";
        break;
      case "/posts":
        locationAdjustedPathName = "Posts";
        break;
      case "/tasks":
        locationAdjustedPathName = "Tarefas";
        break;
      default:
        locationAdjustedPathName = "JSON PlaceHolder Use API";
    }
  }

  return locationAdjustedPathName;
};

const BreadCrumb = () => {
  const locationAdjustedPathName = defineLocationName();

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
