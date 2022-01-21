import { AppContext } from "App";
import Card from "components/Cards/Card";
import React, { useContext } from "react";
import FavoriteCard from "./FavoriteCard";
import style from "./Favorites.module.scss";

const Favorites = ({ onAddFavorite }) => {
  const state = useContext(AppContext);
  return (
    <div className={style.wrapper}>
      <h1>My Favorites</h1>
      <div className={style.sneakers__content}>
        {favoritesList.map((favoriteItem) => (
          <FavoriteCard
            favoriteItem={favoriteItem}
            onAddFavorite={onAddFavorite}
          />
        ))}
      </div>
    </div>
  );
};
export default Favorites;
