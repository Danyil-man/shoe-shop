import React from "react";
import cross1 from "/img/cross/cross1.jpg";
import cross2 from "img/cross/cross2.jpg";
import cross3 from "img/cross/cross3.jpg";
import cross4 from "img/cross/cross4.jpg";
import cross5 from "img/cross/cross5.jpg";
import cross6 from "img/cross/cross6.jpg";
import cross7 from "img/cross/cross7.jpg";
import cross8 from "img/cross/cross8.jpg";
import like from "img/like.svg";
import button from "img/plus.svg";
import Card from "./Card";
import style from "./Cards.module.scss";

function Cards() {
  const cards = [
    {
      img: cross1,
      price: "39200",
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
      button: button,
      like: like,
    },
    {
      img: cross2,
      price: "3900",
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
      button: button,
      like: like,
    },
    {
      img: cross3,
      price: "3900",
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
      button: button,
      like: like,
    },
    {
      img: cross4,
      price: "3900",
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
      button: button,
      like: like,
    },
    {
      img: cross5,
      price: "3900",
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
      button: button,
      like: like,
    },
    {
      img: cross6,
      price: "3900",
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
      button: button,
      like: like,
    },
    {
      img: cross7,
      price: "3900",
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
      button: button,
      like: like,
    },
    {
      img: cross8,
      price: "3900",
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
      button: button,
      like: like,
    },
  ];
  return (
    <div className={style.sneakers__content}>
      {cards.map((card) => (
        <Card
          img={card.img}
          description={card.description}
          price={card.price}
          button={card.button}
          like={card.like}
        />
      ))}
    </div>
  );
}

export default Cards;
