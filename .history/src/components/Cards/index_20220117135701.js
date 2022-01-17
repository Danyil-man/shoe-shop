import React, { useEffect, useState } from "react";
import Card from "./Card";
import style from "./Cards.module.scss";
import axios from "axios";

function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {}, []);

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
