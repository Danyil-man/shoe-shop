import React, { useEffect, useState } from "react";
import style from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import checkedImg from "img/btnChecked.svg";
import like from "img/like.svg";
import add from "img/plus.svg";
import liked from "img/liked.png";

const Card = ({
  card,
  onAddToCart,
  onAddFavorite,
  added = false,
  loading = false,
}) => {
  const [checked, setChecked] = useState(added);
  const [favorite, setFavorite] = useState(false);

  const addedToDrawer = () => {
    onAddToCart(card);
    setChecked(!checked);
  };
  const removeFromDrawer = () => {
    setChecked(!checked);
    onAddToCart(card);
  };
  const addedToFavorite = () => {
    onAddFavorite(card);
    setFavorite(!favorite);
  };

  return (
    <div className={style.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={220}
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
            {checked ? (
              <button onClick={removeFromDrawer} className={style.button}>
                <img src={checkedImg} alt="click" />
              </button>
            ) : (
              <button onClick={addedToDrawer} className={style.button}>
                <img src={add} alt="click" />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
