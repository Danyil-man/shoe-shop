import React from "react";
import style from "./Cart.module.scss";

const CartItem = (props) => {
  return (
    <div className={style.cartItem}>
      <img
        className="cartimg"
        width={90}
        src={props.cartimg}
        alt="cartSneakers"
      />
      <div className="cartdescription">
        <p>{props.cartdescriptin}</p>
        <b>{props.cartprice}</b>
      </div>
      <img className="removebtn" src={props.cartremove} alt="remove" />
    </div>
  );
};

export default CartItem;
