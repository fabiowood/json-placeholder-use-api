import React from "react";
import "./breadcrumb.styles.scss";

import { withRouter } from "react-router-dom";

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
        locationAdjustedPathName = "Postagens";
        break;
      case "/tasks":
        locationAdjustedPathName = "To-Dos";
        break;
      default:
        locationAdjustedPathName = "JSON PlaceHolder Use API";
    }
  }

  return locationAdjustedPathName;
};

const BreadCrumb = ({ location }) => {
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

export default withRouter(BreadCrumb);
