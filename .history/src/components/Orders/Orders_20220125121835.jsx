import React from "react";

const Orders = () => {
  return (
    <div key={favoriteItem.id} onClick={addedToFavorite} className={style.card}>
      <div className={style.like}>
        {favorited ? (
          <img src={liked} alt="like" />
        ) : (
          <img src={like} alt="like" />
        )}
      </div>
      <div className={style.shoeImgBlock}>
        <img width={160} src={favoriteItem.img} alt="cardcroos" />
      </div>
      <p>{favoriteItem.description}</p>
      <div className={style.card__content}>
        <div>
          <p>
            Ціна: <b>{favoriteItem.price}$</b>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Orders;
