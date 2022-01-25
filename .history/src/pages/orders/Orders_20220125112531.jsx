import React from "react";

const Orders = () => {
  return (
    <div className={style.wrapper}>
      <h1>My Favorites</h1>
      <div className={style.sneakers__content}>
        {state.favoritesList.map((favoriteItem) => (
          <FavoriteCard
            favoriteItem={favoriteItem}
            onAddFavorite={onAddFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
