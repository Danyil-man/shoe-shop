import React from "react";
import search from "./../../img/search.png";
import style from "./SearchBlock.module.scss";

const SearchBlock = () => {
  return (
    <div className={style.headCard}>
      <h1>Всі кросівки</h1>
      <div className={style.searchBlock}>
        <img src={search} alt="Search" />
        <input placeholder="Пошук..." />
      </div>
    </div>
  );
};

export default SearchBlock;
