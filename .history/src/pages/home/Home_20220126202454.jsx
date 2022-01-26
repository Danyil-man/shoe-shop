import Cards from "components/Cards";
import SearchBlock from "components/SearchBlock";
import React, { useContext } from "react";
import AppContext from "store/context";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={style.content}>
      <SearchBlock />
      <Cards />
    </div>
  );
};

export default Home;
