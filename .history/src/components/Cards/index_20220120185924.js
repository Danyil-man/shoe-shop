import React, { useEffect, useState } from "react";
import style from "./Cards.module.scss";
import Card from "./Card";
const Cards = ({
  cards,
  onAddToCart,
  searchValue,
  onAddFavorite,
  cartItems,
  added,
}) => {
  return (
    <div className={style.sneakers__content}>
      {cards
        .filter((card) => card.description.includes(searchValue))
        .map((card) => (
          <Card
            card={card}
            added={cartItems.find((item) => item.id === card.id)}
            onAddToCart={onAddToCart}
            onAddFavorite={onAddFavorite}
          />
        ))}
    </div>
  );
};

export default Cards;
