import React, { useState, useEffect } from "react";

import Collection from "../../components/collection/collection.component";

const Photos = ({ match }) => {
  const { albumId, albumTitle } = match.params;

  const [photos, setPhotosList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then((photos) => setPhotosList(photos));
  }, [albumId]);

  return (
    <Collection
      key={photos}
      collection={photos}
      collectionItemType="photo"
      title={albumTitle}
    />
  );
};

export default Photos;
