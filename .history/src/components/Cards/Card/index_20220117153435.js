import React, { useEffect, useState } from "react";
import style from "./Card.module.scss";
import checkedImg from "img/btnChecked.svg";
import like from "img/like.svg";
import add from "img/plus.svg";
const Card = ({ img, description, price }) => {
  const [checked, setChecked] = useState(false);
  console.log(img);
  return (
    <div className={style.card}>
      <div className={style.like}>{/* <img src={like} alt="like" /> */}</div>
      <img width={133} height={112} src={img} alt="cardcroos" />
      <p>{description}</p>
      <div className={style.card__content}>
        <div>
          <p>Ціна: </p>
          <b> {price} </b>
        </div>
        {checked ? (
          <button onClick={() => setChecked(false)} className={style.button}>
            <img src={checkedImg} alt="click" />
          </button>
        ) : (
          <button onClick={() => setChecked(true)} className={style.button}>
            <img src={add} alt="click" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
