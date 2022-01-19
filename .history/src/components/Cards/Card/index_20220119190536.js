import React, { useEffect, useState } from "react";
import style from "./Card.module.scss";
import checkedImg from "img/btnChecked.svg";
import like from "img/like.svg";
import add from "img/plus.svg";
import liked from "img/liked.png";

const Card = ({ card, onAddToCart, onAddFavorite }) => {
  const [checked, setChecked] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const addedToDrawer = () => {
    onAddToCart({ card });
    setChecked(true);
  };
  const addedToFavorite = () => {
    onAddFavorite(card);
    setFavorite(!favorite);
  };

  return (
    <div className={style.card}>
      <div onClick={addedToFavorite} className={style.like}>
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
          <button onClick={() => setChecked(false)} className={style.button}>
            <img src={checkedImg} alt="click" />
          </button>
        ) : (
          <button onClick={addedToDrawer} className={style.button}>
            <img src={add} alt="click" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
