import React from "react";
import "./album.styles.scss";

const Album = ({ album }) => {
  const { userId, id, title } = album
  return (
    <section className="album-container">
      <article className='album-container-item'>
        <h3>{ title }</h3>
        <p>{ id }</p>
        <p>{ userId }</p>
        <p>Ver Fotos</p>
      </article>
    </section>
  );
};

export default Album;