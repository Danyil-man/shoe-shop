import React from "react";
import search from "img/search.png";
import style from "./SearchBlock.module.scss";
import { useState } from "react/cjs/react.development";

const SearchBlock = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log("valuesearch:", searchValue);
  return (
    <div className={style.headCard}>
      <h1>
        {searchValue ? `Пошук по запиту: '${searchValue}'` : "Всі кросівки"}
      </h1>
      <div className={style.searchBlock}>
        <img src={search} alt="Search" />
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
          placeholder="Пошук..."
        />
      </div>
    </div>
  );
};

export default SearchBlock;
