import React from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Content from "./components/SearchBlock";
import Drawer from "./components/Drawer";
import style from "./index.module.scss";

function App() {
  return (
    <div className={style.overlay}>
      <div className={style.wrapper}>
        <Drawer />
        <Header />
        <div className={style.content}>
          <Content />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
