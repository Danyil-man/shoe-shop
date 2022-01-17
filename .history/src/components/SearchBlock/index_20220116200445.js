import React from "react";
import search from "./../../img/search.png";
import style from "./SearchBlock.module.scss";

function Content() {
  return (
    <div className={style.headCard}>
      <h1 className="headcard">Всі кросівки</h1>
      <div className="search__block">
        <img src={search} alt="Search" />
        <input placeholder="Пошук..." />
      </div>
    </div>
  );
}

export default Content;
