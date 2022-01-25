import React, { useContext, useState } from "react";
import style from "./FavoriteCard.module.scss";
import like from "img/like.svg";
import liked from "img/liked.png";
import AppContext from "store/context";

const FavoriteCard = ({ favoriteItem, onAddFavorite }) => {
  const [favorited, setFavorite] = useState(true);
  const { isItemFavorite } = useContext(AppContext);

  const addedToFavorite = () => {
    onAddFavorite(favoriteItem);
    setFavorite(!favorited);
  };
  return (
    <>
      <div
        key={favoriteItem.id}
        onClick={addedToFavorite}
        className={style.card}
      >
        <div className={style.like}>
          {isItemFavorite ? (
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
    </>
  );
};

export default FavoriteCard;
