import React from "react";
import search from "./../../img/search.png";

function Content() {
  return (
    <div className="contennt__headCard">
      <h1 className="headcard">Всі кросівки</h1>
      <div className="search__block">
        <img src={search} alt="Search" />
        <input placeholder="Пошук..." />
      </div>
    </div>
  );
}

export default Content;
