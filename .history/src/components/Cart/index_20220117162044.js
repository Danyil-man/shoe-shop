import React from "react";
import style from "./Cart.module.scss";
import remove from "img/remove.svg";

const CartItem = (props) => {
  return (
    <div className={style.cartItem}>
      <img width={90} src={remove} alt="cartSneakers" />
      <div className={style.cartDescription}>
        <p>{props.cartdescriptin}</p>
        <b>{props.cartprice}</b>
      </div>
      <img className={style.removebtn} src={props.cartremove} alt="remove" />
    </div>
  );
};

export default CartItem;
