import React from "react";
import style from "./FavoriteCard.module.scss";

const FavoriteCard = ({ favoriteItem }) => {
  console.log("favItem", favoriteItem);
  return (
    <>
      <div className={style.card}>
        <div className={style.shoeImgBlock}>
          <img width={160} src={favoriteItem.img} alt="cardcroos" />
        </div>
        <p>{favoriteItem.description}</p>
        <div className={style.card__content}>
          <div>
            <p>
              Ціна: <b>{favoriteItem.price}$</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteCard;
