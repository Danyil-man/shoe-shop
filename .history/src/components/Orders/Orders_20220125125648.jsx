import React from "react";
import style from "./Orders.module.scss";

const Orders = ({ order, loading }) => {
  return (
      <>
    {loading ? (
        <ContentLoader
          speed={2}
          width={160}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
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
  );
};
      </>
    
export default Orders;
