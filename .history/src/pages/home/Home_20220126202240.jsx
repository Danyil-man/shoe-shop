import Cards from "components/Cards";
import SearchBlock from "components/SearchBlock";
import React, { useContext } from "react";
import AppContext from "store/context";
import style from "./Home.module.scss";

const Home = ({}) => {
  const { cards } = useContext(AppContext);
  return (
    <div className={style.content}>
      <SearchBlock searchValue={searchValue} setSearchValue={setSearchValue} />
      <Cards
        cards={cards}
        searchValue={searchValue}
        isLoading={isLoading}
        setCartItems={setCartItems}
        onAddFavorite={onAddFavorite}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default Home;
