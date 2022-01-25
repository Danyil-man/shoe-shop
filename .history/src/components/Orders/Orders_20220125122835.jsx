import React from "react";
import style from "./Orders.module.scss";

const Orders = ({ order, orderId }) => {
  console.log("orderId,", orderId);
  return (
    <>
      <h4></h4>
      <div className={style.card}>
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
    </>
  );
};
export default Orders;
