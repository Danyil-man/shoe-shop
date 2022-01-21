import React, { useContext, useEffect, useState } from "react";
import style from "./Cards.module.scss";
import Card from "./Card";
import AppContext from "store/context";
const Cards = ({
  cards,
  isLoading,
  onAddToCart,
  searchValue,
  onAddFavorite,
  cartItems,
}) => {
  const state = useContext(AppContext);

  const renderItem = () => {
    const filter = cards.filter((card) =>
      card.description.includes(searchValue)
    );

    return (isLoading ? [...Array(8)] : filter).map((card) => (
      <Card
        card={card}
        isLoading={isLoading}
        added={state.isItemAdded(card.id)}
        onAddToCart={onAddToCart}
        onAddFavorite={onAddFavorite}
      />
    ));
  };

  return <div className={style.sneakers__content}>{renderItem()}</div>;
};

export default Cards;
