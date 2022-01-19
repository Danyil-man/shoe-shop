import Cards from "components/Cards";
import SearchBlock from "components/SearchBlock";
import React from "react";
import style from "./Home.module.scss";

const Home = ({
  searchValue,
  cards,
  setSearchValue,
  setCartItems,
  onAddToCart,
  onAddFavorite,
  favorite,
  setFavorite,
}) => {
  return (
    <div className={style.content}>
      <SearchBlock searchValue={searchValue} setSearchValue={setSearchValue} />
      <Cards
        cards={cards}
        searchValue={searchValue}
        favorite={favorite}
        setFavorite={setFavorite}
        setCartItems={setCartItems}
        onAddFavorite={onAddFavorite}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default Home;
