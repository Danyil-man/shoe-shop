import React from "react";
import style from "./Cart.module.scss";
import remove from "img/remove.svg";
const CartItem = ({ cartimg, cartdescriptin, cartprice }) => {
  return (
    <div className={style.cartItem}>
      <img width={90} src={cartimg} alt="cartSneakers" />
      <div className={style.cartDescription}>
        <p>{cartdescriptin}</p>
        <b>{cartprice}$</b>
      </div>
      <img className={style.removebtn} src={remove} alt="remove" />
    </div>
  );
};

export default CartItem;
