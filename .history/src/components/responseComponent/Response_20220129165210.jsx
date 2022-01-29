import React, { useContext } from "react";
import style from "./Response.module.scss";
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
        <Link to="/">
          <button onClick={() => setCart(false)}>Go back</button>
        </Link>
      </div>
    </>
  );
};

export default Response;
