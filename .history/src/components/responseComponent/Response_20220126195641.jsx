import React, { useContext } from "react";
import style from "./Response.module.scss";
import emptyCart from "img/emptyCart.png";
import AppContext from "store/context";
import { Link } from "react-router-dom";

const Response = ({ title, description, img }) => {
  const { setCart } = useContext(AppContext);

  return (
    <>
      <div className={style.emptyCartBlock}>
        <img src={img} alt="emptyCart" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => setCart(false) && <Link to="/shoe-shop" />}>
          Вернутися назад
        </button>
      </div>
    </>
  );
};

export default Response;
