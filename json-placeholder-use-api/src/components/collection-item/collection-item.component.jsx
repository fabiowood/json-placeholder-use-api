import React from "react";
import { withRouter } from "react-router-dom";
import "./collection-item.styles.scss";

const displayItemImage = ({ key, value }) => {
  return (
    <figure key={key}>
      <img
        className="collection-item-image"
        src={`${value}`}
        alt="album pictures"
      />
    </figure>
  );
};

const displayKey = ({ key }) => {
  return (
    key !== "url" &&
    key !== "userId" &&
    key !== "albumId" &&
    key !== "postId" &&
    key !== "email"
  );
};

const buildCollectionItemsDisplay = ({
  collectionItem,
  collectionItemType,
}) => {
  const collectionItemProperties = Object.entries(collectionItem);

  const listCollectionItemProperties = collectionItemProperties.map(
    ([key, value]) => {
      if (key === "thumbnailUrl") return displayItemImage({ key, value });

      if (
        (key === "title" || key === "body") &&
        collectionItemType !== "task"
      ) {
        value = `${value.slice(0, 16)}...`;
        key = key === "title" ? "" : "Texto";
      }
      if (key === "name") key = "Postado por";

      return displayKey({ key }) ? (
        <p key={key}>{`${key === "" ? "" : `${key}:`} ${value}`}</p>
      ) : null;
    }
  );

  return listCollectionItemProperties;
};

const directToItemDetails = ({
  collectionItem,
  collectionItemType,
  history,
}) => {
  if (collectionItemType === "task" || collectionItemType === "photo") return;
  
  if (collectionItemType === "album") {
    return history.push(
      `/photos/${collectionItem?.id}/${collectionItem?.title.replaceAll(
        " ",
        "_"
      )}`
    );
  }

  if (collectionItemType === "post") {
    return history.push(
      `/comments/${collectionItem?.id}/${collectionItem?.title.replaceAll(
        " ",
        "_"
      )}`
    );
  }

  return history.push(`/${collectionItemType}s/${collectionItem?.id}`);
};

const CollectionItem = ({ collectionItem, collectionItemType, history }) => {
  const listCollectionItemProperties = buildCollectionItemsDisplay({
    collectionItem,
    collectionItemType,
  });

  return (
    <article
      className="collection-item"
      onClick={() =>
        directToItemDetails({
          collectionItem,
          collectionItemType,
          history,
        })
      }
    >
      <div className="collection-item-content">
        {listCollectionItemProperties}
      </div>

      {
        collectionItemType === "album" && (
        <div className="collection-item-view-link">Ver Álbum</div>
        )
      }

      {
        collectionItemType === "post" && (
        <div className="collection-item-view-link">Ver Comentários</div>
        )
      }
    </article>
  );
};

export default withRouter(CollectionItem);
