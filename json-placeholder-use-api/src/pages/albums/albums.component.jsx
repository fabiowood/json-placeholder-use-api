import React, { useState, useEffect } from "react";

import Collection from "../../components/collection/collection.component";

const Albums = () => {
  const [albums, setAlbumsList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albums) => setAlbumsList(albums));
  }, []);

  return (
    <Collection key={albums} collection={albums} collectionItemType="album" />
  );
};

export default Albums;
