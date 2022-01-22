import React, { useContext } from "react";
import logo from "img/headlogo.png";
import cart from "img/cart1.svg";
import user from "img/user.svg";
import style from "./Header.module.scss";
import favorite from "img/favorite.svg";
import { Link } from "react-router-dom";
import AppContext from "store/context";

const Header = ({ openCart }) => {
  const state = useContext(AppContext);
  console.log(
    "state",
    state.cartItems.reducer((sum, obj) => obj.price + sum, 0)
  );
  return (
    <header className={style.header}>
      <Link to="/shoe-shop">
        <div className={style.headerLeft}>
          <img width={50} height={50} src={logo} alt="logo" />
          <div className={style.headerName}>
            <h3 className={style.textupper}>React Shoes</h3>
            <p>Магазин кросівок </p>
          </div>
        </div>
      </Link>

      <ul className={style.headerRight}>
        <li onClick={openCart} className={style.priceBlock}>
          <img src={cart} alt="cart" />
          <span> "price" $</span>
        </li>
        <li className={style.favoriteBlock}>
          <Link to="/shoe-shop/favorite">
            <img src={favorite} alt="favorite" />
          </Link>
        </li>
        <li className={style.userBlock}>
          <img src={user} alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
