import React, { useContext } from "react";
import search from "../../img/search.png";
import style from "./SearchBlock.module.scss";
import remove from "../../img/remove.svg";
import AppContext from "../../store/context";

const SearchBlock = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);
  return (
    <div className={style.headCard}>
      <h1>{searchValue ? `Search on: '${searchValue}'` : "All sneakers"}</h1>
      <div className={style.searchBlock}>
        <img src={search} alt="Search" />

        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
          placeholder="Search..."
        />
        {searchValue ? (
          <img
            onClick={() => setSearchValue("")}
            className={style.clearSearchBtn}
            src={remove}
            alt="remove"
          />
        ) : null}
      </div>
    </div>
  );
};

export default SearchBlock;
