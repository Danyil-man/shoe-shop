import React from "react";
import style from "./Card.module.scss";

const Card = ({ img, description, price, add, like, onAdd, onLike }) => {
  return (
    <div className={style.card}>
      <div className={style.like}>
        <img onClick={onLike} src={like} alt="like" />
      </div>
      <img width={133} height={112} src={img} alt="cardcroos" />
      <p>{description}</p>
      <div className={style.card__content}>
        <div>
          <p>Ціна: </p>
          <b> {price} </b>
        </div>
        <button onClick={onAdd} className={style.button}>
          <img src={add} alt="click" />
        </button>
      </div>
    </div>
  );
};

export default Card;
