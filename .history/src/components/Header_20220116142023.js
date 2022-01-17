import React from "react";
import logo from "./../img/headlogo.png";
import cart from "./../img/cart1.svg";
import user from "./../img/user.svg";

function Header() {
  return (
    <header className="header">
      <div className="headerLeft">
        <img width={50} height={50} src={logo} alt="logo" />
        <div className="headername">
          <h3 className="textupper">React Shoes</h3>
          <p>Магазин кросівок </p>
        </div>
      </div>
      <ul className="headerright">
        <li className="money_li">
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
