import React from "react";
import style from "./Cart.module.scss";
import remove from "img/remove.svg";
const CartItem = ({ cart, onRemoveItem }) => {
  return (
    <div key={cart.id} className={style.cartItem}>
      <img width={90} src={cart.img} alt="cartSneakers" />
      <div className={style.cartDescription}>
        <p>{cart.description}</p>
        <b>{cart.price}$</b>
      </div>
      <img
        onClick={() => onRemoveItem(cart.id)}
        className={style.removebtn}
        src={remove}
        alt="remove"
      />
    </div>
  );
};

export default CartItem;
