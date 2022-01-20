import React, { useEffect, useState } from "react";
import style from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import checkedImg from "img/btnChecked.svg";
import like from "img/like.svg";
import add from "img/plus.svg";
import liked from "img/liked.png";

const Card = ({ card, onAddToCart, onAddFavorite, added = false }) => {
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
      <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <circle cx="20" cy="20" r="20" />
      </ContentLoader>
      {/* <div onClick={addedToFavorite} className={style.like}>
        {favorite ? (
          <img src={liked} alt="like" />
        ) : (
          <img src={like} alt="like" />
        )}
      </div>
      <div className={style.shoeImgBlock}>
        <img width={160} src={card.img} alt="cardcroos" />
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
      </div> */}
    </div>
  );
};

export default Card;
