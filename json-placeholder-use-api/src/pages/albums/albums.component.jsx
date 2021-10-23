import React, { useState, useEffect } from "react";
import "./albums.styles.scss";

import Album from "../../components/album/album.component";

const Albums = () => {
  const [albums, setAlbumsList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albums) => setAlbumsList(albums));
  });

  return (
    <section className="albums-container">
      <div>Albums List</div>
      <div>
        {
          albums.map((album) => (
          <Album key={album.id} album={album} />
        ))
        }
      </div>
    </section>
  );
};

export default Albums;
