import React from "react";
import style from "./Orders.module.scss";

const Orders = ({ order }) => {
  console.log("orderId,", order);
  return (
    <div className={style.card}>
      <div className={style.like}></div>
      <div className={style.shoeImgBlock}>
        <img width={160} src={order.img} alt="cardcroos" />
      </div>
      <p>{order.description}</p>
      <div className={style.card__content}>
        <div>
          <p>
            Ціна: <b>{order.price}$</b>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Orders;
