import React, { useEffect, useState } from "react";
import style from "./Cards.module.scss";
import Card from "./Card";
const Cards = ({
  cards,
  isLoading,
  onAddToCart,
  searchValue,
  onAddFavorite,
  cartItems,
  added,
}) => {
  const renderItem = () => {
    const filter = cards.filter((card) =>
      card.description.includes(searchValue)
    );
    return (isLoading ? [...Array[8]] : filter).cards
      .filter((card) => card.description.includes(searchValue))
      .map((card) => (
        <Card
          card={card}
          isLoading={isLoading}
          added={cartItems.some((item) => item.id === card.id)}
          onAddToCart={onAddToCart}
          onAddFavorite={onAddFavorite}
        />
      ));
  };

  return <div className={style.sneakers__content}>{renderItem()}</div>;
};

export default Cards;
