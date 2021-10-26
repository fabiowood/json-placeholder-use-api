import React from "react";
import "./home-page.styles.scss";

import AlbumImage from "../../assets/photo-album.jpg";
import PostImage from "../../assets/photo-post.jpg";
import TodosImage from "../../assets/photo-todos.jpg";

const HomePage = () => {
  return (
    <section className="home-page">
      <h1 className="home-page-title">Navegue pela JSON PlaceHolder API:</h1>
      <div className="home-page-container">
        <article className="home-page-container-option">
          <h2>
            <a href="/albums">
              <img src={`${AlbumImage}`} alt="Access Albums" />
              <span>Álbuns</span>
            </a>
          </h2>
        </article>
        <article className="home-page-container-option">
          <h2>
            <a href="/posts">
              <img src={`${PostImage}`} alt="Access Posts" />
              <span>Postagens</span>
            </a>
          </h2>
        </article>
        <article className="home-page-container-option">
          <h2>
            <a href="/tasks">
              <img src={`${TodosImage}`} alt="Access To-dos" />
              <span>To-Dos</span>
            </a>
          </h2>
        </article>
      </div>
    </section>
  );
};

export default HomePage;
