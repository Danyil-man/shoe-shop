import React, { useEffect, useState } from "react";
import style from "./Card.module.scss";
import checkedImg from "img/btnChecked.svg";
import like from "img/like.svg";
import add from "img/plus.svg";
const Card = ({ img, description, price, id, onAdd }) => {
  const [checked, setChecked] = useState(false);

  const succesfullyAdded = () => {
    onAdd({ id, img, description, price });
    setChecked(true);
  };
  console.log(id);
  return (
    <div key={id} className={style.card}>
      <div className={style.like}>
        <img src={like} alt="like" />
      </div>
      <div className={style.shoeImgBlock}>
        <img width={160} src={img} alt="cardcroos" />
      </div>
      <p>{description}</p>
      <div className={style.card__content}>
        <div>
          <p>
            Ціна: <b>{price}$</b>
          </p>
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
