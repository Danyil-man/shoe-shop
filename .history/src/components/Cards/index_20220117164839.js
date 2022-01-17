import React, { useEffect, useState } from "react";
import style from "./Cards.module.scss";
import axios from "axios";
import Card from "./Card";
const Cards = ({ setCartItems }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get("https://61e553d4595afe00176e54fc.mockapi.io/items")
      .then((respone) => {
        respone = setCards(respone.data);
      });
  }, []);

  const onAddToCart = (cartItem) => {
    setCartItems((prev) => [...prev, cartItem]);
  };
  return (
    <div className={style.sneakers__content}>
      {cards.map((card) => (
        <Card
          imgUrl={card.img}
          description={card.description}
          price={card.price}
          onAdd={onAddToCart}
        />
      ))}
    </div>
  );
};

export default Cards;
