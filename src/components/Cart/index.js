import React from "react";
import style from "./Cart.module.scss";
import remove from "img/remove.svg";
const CartItem = ({ cartImg, cartDescriptin, cartPrice }) => {
  return (
    <div className={style.cartItem}>
      <img width={90} src={cartImg} alt="cartSneakers" />
      <div className={style.cartDescription}>
        <p>{cartDescriptin}</p>
        <b>{cartPrice}$</b>
      </div>
      <img className={style.removebtn} src={remove} alt="remove" />
    </div>
  );
};

export default CartItem;
