import React, { useContext } from "react";
import style from "./Response.module.scss";
import emptyCart from "img/emptyCart.png";
import AppContext from "store/context";

const Response = ({ title, desciption, img }) => {
  const state = useContext(AppContext);

  return (
    <>
      <div className={style.emptyCartBlock}>
        <img src={img} alt="emptyCart" />
        <h2>{title}</h2>
        <p>{desciption}</p>
        <button onClick={() => state.setCart(false)}>Вернутися назад</button>
      </div>
    </>
  );
};

export default Response;
