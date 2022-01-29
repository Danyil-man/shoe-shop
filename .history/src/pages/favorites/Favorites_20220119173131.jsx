import React from "react";
import FavoriteCard from "./FavoriteCard";
import style from "./Favorites.module.scss";

const Favorites = ({ favoritesList }) => {
  return (
    <div className={style.wrapper}>
      <h1>My Favorites</h1>
      <div className={style.sneakers__content}>
        {favoritesList.map((favoriteItem) => (
          <FavoriteCard />
        ))}
      </div>
    </div>
  );
};
export default Favorites;