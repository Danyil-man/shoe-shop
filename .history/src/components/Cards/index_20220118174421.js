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
        setCards(respone.data);
      });
    axios
      .get("https://61e553d4595afe00176e54fc.mockapi.io/cart")
      .then((respone) => {
        setCartItems(respone.data);
      });
  }, []);

  const onAddToCart = (cartItem) => {
    axios.post("https://61e553d4595afe00176e54fc.mockapi.io/cart", cartItem);
    setCartItems((prev) => [...prev, cartItem]);
  };

  return (
    <div className={style.sneakers__content}>
      {cards
        // .filter((card) => card.title.toLowerCase().includes(searchValue))
        .map((card) => (
          <Card
            key={card.id}
            card={card}
            // id={card.id}
            // img={card.img}
            // description={card.description}
            // price={card.price}
            onAdd={onAddToCart}
          />
        ))}
    </div>
  );
};

export default Cards;
