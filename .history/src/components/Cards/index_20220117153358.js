import React, { useEffect, useState } from "react";
import Card from "./Card";
import style from "./Cards.module.scss";
import axios from "axios";
import asd from "img/cross/1.png";
function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("https://61e553d4595afe00176e54fc.mockapi.io/items")
      .then((respone) => {
        return respone.json();
      })
      .then((json) => setCards(json));
  }, []);

  return (
    <div className={style.sneakers__content}>
      <img src={asd} />
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
