import React, { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import SearchBlock from "./components/SearchBlock";
import Drawer from "./components/Drawer";
import style from "./index.module.scss";

function App() {
  const [cart, setCart] = useState(true);
  return (
    <div className={style.overlay}>
      <div className={style.wrapper}>
        {cart ? <Drawer /> : null}
        <Header />
        <div className={style.content}>
          <SearchBlock />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
