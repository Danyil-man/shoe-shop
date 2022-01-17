import React, { useEffect, useState } from "react";
import Card from "./Card";
import style from "./Cards.module.scss";
import axios from "axios";

const Cards = ({ setCartItems }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get("https://61e553d4595afe00176e54fc.mockapi.io/items")
      .then((respone) => {
        respone = setCards(respone);
      });
  }, []);

  const onAddToCart = (cartItem) => {
    setCartItems((prev) => [...prev, cartItem]);
  };
  return (
    <div className={style.sneakers__content}>
      {cards.map((card) => (
        <Card
          img={card.img}
          description={card.description}
          price={card.price}
          onAdd={onAddToCart}
        />
      ))}
    </div>
  );
};

export default Cards;
