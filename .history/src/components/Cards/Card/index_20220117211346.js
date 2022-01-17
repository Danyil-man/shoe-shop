import React, { useEffect, useState } from "react";
import style from "./Card.module.scss";
import checkedImg from "img/btnChecked.svg";
import like from "img/like.svg";
import add from "img/plus.svg";
const Card = ({ img, description, price, onAdd }) => {
  const [checked, setChecked] = useState(false);

  const succesfullyAdded = () => {
    onAdd({ img, description, price });
    setChecked(true);
  };

  return (
    <div className={style.card}>
      <div className={style.like}>
        <img src={like} alt="like" />
      </div>
      <div className={style.shoeImgBlock}>
        <img width={160} src={img} alt="cardcroos" />
      </div>
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
          <button onClick={succesfullyAdded} className={style.button}>
            <img src={add} alt="click" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
