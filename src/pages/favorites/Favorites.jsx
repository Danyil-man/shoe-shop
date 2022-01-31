import React, { useContext } from "react";
import style from "./Favorites.module.scss";
import noFavorite from "../../img/noFavorite.png";
import FavoriteCard from "./FavoriteCard";
import AppContext from "../../store/context";
import Response from "../../components/ResponseComponent/Response";

const Favorites = () => {
  const { favoritesList, onAddFavorite } = useContext(AppContext);
  return (
    <div className={style.wrapper}>
      <h1>My Favorites</h1>
      <div className={style.sneakers__content}>
        {favoritesList.length > 0 ? (
          <>
            {favoritesList.map((favoriteItem) => (
              <FavoriteCard
                {...favoriteItem}
                onAddFavorite={onAddFavorite}
                favorited={true}
              />
            ))}
          </>
        ) : (
          <Response
            title="No favorites"
            description="you haven't added anything to your favorites"
            img={noFavorite}
          />
        )}
      </div>
    </div>
  );
};
export default Favorites;
