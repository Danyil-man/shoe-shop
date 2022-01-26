import React from "react";
import style from "./Cards.module.scss";
import Card from "./Card";
import { useContext } from "react/cjs/react.development";
import AppContext from "store/context";

const Cards = () => {
  const { cards } = useContext(AppContext);
  const renderItem = () => {
    const filter = cards.filter((card) =>
      card.description.includes(searchValue)
    );

    return (isLoading ? [...Array(8)] : filter).map((card) => (
      <Card
        {...card}
        isLoading={isLoading}
        onAddToCart={onAddToCart}
        onAddFavorite={onAddFavorite}
      />
    ));
  };

  return <div className={style.sneakers__content}>{renderItem()}</div>;
};

export default Cards;
