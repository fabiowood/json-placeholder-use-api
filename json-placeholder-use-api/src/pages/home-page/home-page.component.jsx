import React from "react";
import "./home-page.styles.scss";

const HomePage = () => {
  return (
    <section className="home-page">
      <h1 className="home-page-title">Navegue pela JSON PlaceHolder API:</h1>
      <div className="home-page-container">
        <article className="home-page-container-option">
          <h2>
            <a href="/albums">Álbuns</a>
          </h2>
        </article>
        <article className="home-page-container-option">
          <h2>
            <a href="/posts">Posts</a>
          </h2>
        </article>
        <article className="home-page-container-option">
          <h2>
            <a href="/tasks">Tarefas</a>
          </h2>
        </article>
      </div>
    </section>
  );
};

export default HomePage;
