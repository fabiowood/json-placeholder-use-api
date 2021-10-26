import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import "./collection-item.styles.scss";

import AlbumImage from "../../assets/photo-album.jpg";
import PostImage from "../../assets/photo-post.jpg";
import TodosImage from "../../assets/photo-todos.jpg";
import CommentsImage from "../../assets/photo-comment.jpg";

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

const buildCollectionItemsDisplay = ({ collectionItem }) => {
  const collectionItemProperties = Object.entries(collectionItem);

  const listCollectionItemProperties = collectionItemProperties.map(
    ([key, value]) => {
      if (key === "thumbnailUrl") return displayItemImage({ key, value });

      if (key === "title" || key === "body") {
        value = `${value.slice(0, 16)}...`;
        key = key === "title" ? "" : "Texto";
      }
      if (key === "name") key = "Postado por";
      if (key === "completed") {
        key = "";
        value = value ? "Done!" : "Pending!";
      }

      return displayKey({ key }) ? (
        <p key={key}>
          <strong>{`${key === "" ? "" : `${key}:`}`}</strong> {`${value}`}
        </p>
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
        <Fragment>
          <figure className="collection-item-image-container">
            <img src={`${AlbumImage}`} alt="Access Album" />
          </figure>
          <div className="collection-item-view-link">Ver Álbum</div>
        </Fragment>
        )
      }

      {
        collectionItemType === "post" && (
        <Fragment>
          <figure className="collection-item-image-container">
            <img src={`${PostImage}`} alt="Access Post" />
          </figure>
          <div className="collection-item-view-link">Ver Comentários</div>
        </Fragment>
        )
      }

      {
        collectionItemType === "task" && (
        <Fragment>
          <figure className="collection-item-image-container">
            <img src={`${TodosImage}`} alt="Access Images" />
          </figure>
        </Fragment>
        )
      }

      {
        collectionItemType === "comment" && (
        <Fragment>
          <figure className="collection-item-image-container">
            <img src={`${CommentsImage}`} alt="Access Comments to Post" />
          </figure>
        </Fragment>
        )
      }
    </article>
  );
};

export default withRouter(CollectionItem);
