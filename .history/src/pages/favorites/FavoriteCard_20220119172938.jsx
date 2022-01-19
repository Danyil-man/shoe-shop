import React from "react";
import style from "./FavoriteCard.module.scss";

const FavoriteCard = () => {
  return (
    <>
      <div className={style.card}>
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
    </>
  );
};

export default FavoriteCard;
