import React from "react";
import cross1 from "../../img/cross/cross1.jpg";
import cross2 from "../../img/cross/cross2.jpg";
import cross3 from "../../img/cross/cross3.jpg";
import cross4 from "../../img/cross/cross4.jpg";
import cross5 from "../../img/cross/cross5.jpg";
import cross6 from "../../img/cross/cross6.jpg";
import cross7 from "../../img/cross/cross7.jpg";
import cross8 from "../../img/cross/cross8.jpg";
import Card from "./Card";
import style from "./Cards.module.scss";

function Cards() {
  const cards = [
    {
      img: "/img/cross/cross1.jpg",
      price: 11200,
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
    },
    {
      img: "/img/cross/cross2.jpg",
      price: 10900,
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
    },
    {
      img: "/img/cross/cross3.jpg",
      price: 8900,
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
    },
    {
      img: "/img/cross/cross4.jpg",
      price: 9900,
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
    },
    {
      img: "/img/cross/cross5.jpg",
      price: 7800,
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
    },
    {
      img: "/img/cross/cross6.jpg",
      price: 8499,
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
    },
    {
      img: "/img/cross/cross7.jpg",
      price: 9900,
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
    },
    {
      img: "/img/cross/cross8.jpg",
      price: 7899,
      description: "Чоловічі кросівки Nike Blazer Mid Suede",
    },
  ];

  return (
    <div className={style.sneakers__content}>
      {cards.map((card) => (
        <Card
          img={card.img}
          description={card.description}
          price={card.price}
        />
      ))}
    </div>
  );
}

export default Cards;
