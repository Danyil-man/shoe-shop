import React, { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import SearchBlock from "./components/SearchBlock";
import Drawer from "./components/Drawer";
import style from "./index.module.scss";

const App = () => {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className={style.overlay}>
      <div className={style.wrapper}>
        {cart && (
          <Drawer cartItems={cartItems} closeCart={() => setCart(false)} />
        )}
        <Header openCart={() => setCart(true)} />
        <div className={style.content}>
          <SearchBlock />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default App;
