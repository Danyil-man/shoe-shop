import React from "react";

const CartItem = (props) => {
  return (
    <div className="cartItem">
      <img className="cartimg" width={90} src={props.cartimg} alt="cartCneakers" />
      <div className="cartdescription">
        <p>{props.cartdescriptin}</p>
        <b>{props.cartprice}</b>
      </div>
      <img className="removebtn" src={props.cartremove} alt="remove" />
    </div>
  );
}

export default CartItem;
