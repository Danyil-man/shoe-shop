import React, { useEffect, useState } from "react";
import style from "./Cards.module.scss";
import Card from "./Card";
const Cards = ({
  cards,
  onAddToCart,
  searchValue,
  onAddFavorite,
  favorite,
  setFavorite,
}) => {
  return (
    <div className={style.sneakers__content}>
      {cards
        .filter((card) => card.description.includes(searchValue))
        .map((card) => (
          <Card
            card={card}
            favorite={favorite}
            setFavorite={setFavorite}
            onAddToCart={onAddToCart}
            onAddFavorite={onAddFavorite}
          />
        ))}
    </div>
  );
};

export default Cards;
