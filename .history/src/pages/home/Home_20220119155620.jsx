import React from "react";

const Home = () => {
  return (
    <div className={style.content}>
      <SearchBlock searchValue={searchValue} setSearchValue={setSearchValue} />
      <Cards
        cards={cards}
        searchValue={searchValue}
        setCartItems={setCartItems}
        onAddFavorite={onAddFavorite}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default Home;
