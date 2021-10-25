import React from "react";
import "./collection.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const Collection = ({ collection, collectionItemType, title }) => {
  const collectionItems = collection.map((collectionItem) => (
    <CollectionItem
      key={collectionItem.id}
      collectionItem={collectionItem}
      collectionItemType={collectionItemType}
    />
  ));

  return (
    <section className="collection-container">
      {title && <h3>Nome da Coleção: {title}</h3>}
      <article className="collection-items">{collectionItems}</article>
    </section>
  );
};

export default Collection;
