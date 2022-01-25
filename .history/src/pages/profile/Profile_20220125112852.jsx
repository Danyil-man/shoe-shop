import React from "react";
import style from "./Orders.module.scss";

const Orders = () => {
  return (
    <div className={style.wrapper}>
      <h1>My Orders</h1>
      <div className={style.sneakers__content}></div>
    </div>
  );
};

export default Orders;
