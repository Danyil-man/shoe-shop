import React, { useEffect, useState } from "react";
import style from "./Cards.module.scss";
import axios from "axios";
import Card from "./Card";
const Cards = ({ cards, onAddToCart }) => {
  return (
    <div className={style.sneakers__content}>
      {cards
        // .filter((card) => card.title.toLowerCase().includes(searchValue))
        .map((card) => (
          <Card key={card.id} card={card} onAdd={onAddToCart} />
        ))}
    </div>
  );
};

export default Cards;
