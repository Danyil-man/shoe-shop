import Card from "components/Cards/Card";
import React, { useContext } from "react";
import AppContext from "store/context";
import FavoriteCard from "./FavoriteCard";
import style from "./Favorites.module.scss";

const Favorites = ({ onAddFavorite }) => {
  const state = useContext(AppContext);
  return (
    <div className={style.wrapper}>
      <h1>My Favorites</h1>
      <div className={style.sneakers__content}>
        {state.favoritesList.map((favoriteItem) => (
          <FavoriteCard {...favoriteItem} onAddFavorite={onAddFavorite} />
        ))}
      </div>
    </div>
  );
};
export default Favorites;
