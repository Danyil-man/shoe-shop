import React, { useEffect } from "react";
import style from "./Cart.module.scss";
import remove from "img/remove.svg";
const CartItem = ({ card }) => {
  console.log("Cart", card);

  return (
    <div key={card.id} className={style.cartItem}>
      <img width={90} src={card.img} alt="cartSneakers" />
      <div className={style.cartDescription}>
        <p>{card.description}</p>
        <b>{card.price}$</b>
      </div>
      <img className={style.removebtn} src={remove} alt="remove" />
    </div>
  );
};

export default CartItem;
