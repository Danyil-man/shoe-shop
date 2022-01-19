import React, { useEffect, useState } from "react";
import style from "./Cards.module.scss";
import Card from "./Card";
const Cards = ({ cards, onAddToCart, searchValue, onAddFavorite }) => {
  return (
    <div className={style.sneakers__content}>
      {cards
        //.filter((card) => card.description.includes(searchValue))
        .map((card) => (
          <Card
            card={card}
            onAddToCart={onAddToCart}
            onAddFavorite={onAddFavorite}
          />
        ))}
    </div>
  );
};

export default Cards;
