import React from "react";
import logo from "./../../img/headlogo.png";
import cart from "./../../img/cart1.svg";
import user from "./../../img/user.svg";
import style from "./Header.module.scss";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerLeft}>
        <img width={50} height={50} src={logo} alt="logo" />
        <div className={style.headerName}>
          <h3 className={style.textupper}>React Shoes</h3>
          <p>Магазин кросівок </p>
        </div>
      </div>
      <ul className={style.headerRight}>
        <li>
          <img src={cart} alt="cart" />
          <span>10200грн.</span>
        </li>
        <li>
          <img src={user} alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
