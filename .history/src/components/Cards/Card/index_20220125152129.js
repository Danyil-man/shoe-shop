import React, { useContext, useEffect, useState } from "react";
import style from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import checkedImg from "img/btnChecked.svg";
import like from "img/like.svg";
import addImg from "img/plus.svg";
import liked from "img/liked.png";
import AppContext from "store/context";

const Card = ({ card, onAddToCart, onAddFavorite, isLoading }) => {
  const [favorite, setFavorite] = useState(false);
  const state = useContext(AppContext);

  const addToCart = () => {
    onAddToCart({ id, parentId: id, description, img, price });
  };

  const addedToFavorite = () => {
    onAddFavorite(card);
    setFavorite(!favorite);
  };

  return (
    <div className={style.card}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={160}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div onClick={addedToFavorite} className={style.like}>
            {favorite ? (
              <img src={liked} alt="like" />
            ) : (
              <img src={like} alt="like" />
            )}
          </div>
          <div className={style.shoeImgBlock}>
            <img src={card.img} alt="cardcroos" />
          </div>
          <p>{card.description}</p>
          <div className={style.card__content}>
            <div>
              <p>
                Ціна: <b>{card.price}$</b>
              </p>
            </div>
            <button onClick={addToCart} className={style.button}>
              <img
                src={state.isItemAdded(card.id) ? checkedImg : addImg}
                alt="click"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
