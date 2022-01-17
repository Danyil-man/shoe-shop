import React from "react";
import style from "./Card.module.scss";

const Card = ({ img, description, price, button, like }) => {
  function Added() {
    alert("added");
  }
  return (
    <div className={style.card}>
      <div className={style.like}>
        <img src={like} alt="Unliked" />
      </div>
      <img width={133} height={112} src={img} alt="cardcroos" />
      <p>{description}</p>
      <div className={style.card__content}>
        <div>
          <p>Ціна: </p>
          <b> {price} </b>
        </div>
        <button onClick={Added} className="button">
          <img src={button} alt="click" />
        </button>
      </div>
    </div>
  );
};

export default Card;
