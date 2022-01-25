import React from "react";
import style from "./Cards.module.scss";
import Card from "./Card";

const Cards = ({
  cards,
  isLoading,
  onAddToCart,
  searchValue,
  onAddFavorite,
}) => {
  const renderItem = () => {
    const filter = cards.filter((card) =>
      card.description.includes(searchValue)
    );

    return (isLoading ? [...Array(8)] : filter).map((card) => (
      <Card
        id={card.id}
        img={card.img}
        price={card.price}
        description={card.description}
        isLoading={isLoading}
        onAddToCart={onAddToCart}
        onAddFavorite={onAddFavorite}
      />
    ));
  };

  return <div className={style.sneakers__content}>{renderItem()}</div>;
};

export default Cards;
