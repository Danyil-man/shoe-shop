import React from "react";
import style from "./Cart.module.scss";
import remove from "img/remove.svg";
const CartItem = (props) => {
  return (
    <div className={style.cartItem}>
      <img width={90} src={props.cartimg} alt="cartSneakers" />
      <div className={style.cartDescription}>
        <p>{props.cartdescriptin}</p>
        <b>{props.cartprice}</b>
      </div>
      <img className={style.removebtn} src={remove} alt="remove" />
    </div>
  );
};

export default CartItem;
