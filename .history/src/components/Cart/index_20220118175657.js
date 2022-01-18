import React, { useEffect } from "react";
import style from "./Cart.module.scss";
import remove from "img/remove.svg";
const CartItem = ({ cart, onRemoveItem }) => {
  return (
    <div key={cart.card.id} className={style.cartItem}>
      <img width={90} src={cart.card.img} alt="cartSneakers" />
      <div className={style.cartDescription}>
        <p>{cart.card.description}</p>
        <b>{cart.card.price}$</b>
      </div>
      <img
        onClick={() => onRemoveItem}
        className={style.removebtn}
        src={remove}
        alt="remove"
      />
    </div>
  );
};

export default CartItem;
