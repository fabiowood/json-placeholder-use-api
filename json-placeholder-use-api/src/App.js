import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Component Dependencies:

import Header from "./components/header/header.component.jsx";
import BreadCrumb from "./components/breadcrumb/breadcrumb.component.jsx";
import HomePage from "./pages/home-page/home-page.component.jsx";
import Albums from "./pages/albums/albums.component.jsx";
import Posts from "./pages/posts/posts.component.jsx";
import Tasks from "./pages/tasks/tasks.component.jsx";
// import Photos from "./pages/photos/photos.component.jsx";
// import Comments from "./pages/comments/comments.component.jsx";

const App = () => {
  return (
    <Fragment>
      <main className="app">
        <section className="content-wrapper">
          <Header />
          <BreadCrumb />
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/albums" component={ Albums } />
            <Route exact path="/posts" component={ Posts } />
            <Route exact path="/tasks" component={ Tasks } />
            {/* <Route exact path="/albums/:id/photos" component={ Photos } />
            <Route exact path="/posts/:id/comments" component={ Comments } /> */}
          </Switch>
        </section>
      </main>
    </Fragment>
  );
};

export default App;
