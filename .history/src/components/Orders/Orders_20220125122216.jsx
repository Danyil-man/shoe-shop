import React from "react";
import style from "./Orders.module.scss";

const Orders = () => {
  return (
    <div className={style.card}>
      <div className={style.like}>
        {favorited ? (
          <img src={liked} alt="like" />
        ) : (
          <img src={like} alt="like" />
        )}
      </div>
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
  );
};
export default Orders;
