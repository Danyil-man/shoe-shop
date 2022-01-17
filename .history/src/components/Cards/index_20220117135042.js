import React from "react";
import Card from "./Card";
import style from "./Cards.module.scss";

function Cards() {
  const cards = [];

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
