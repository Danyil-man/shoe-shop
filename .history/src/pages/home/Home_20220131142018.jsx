import React from "react";
import Cards from "../../components/Cards";
import SearchBlock from "../../components/SearchBlock";
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
