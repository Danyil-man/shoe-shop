import React, { useContext, useState } from "react";
import style from "./FavoriteCard.module.scss";
import like from "img/like.svg";
import liked from "img/liked.png";
import AppContext from "store/context";

const FavoriteCard = ({
  id,
  parentId,
  img,
  description,
  price,
  onAddFavorite,
}) => {
  const [favorited, setFavorite] = useState(true);
  const { isItemFavorite } = useContext(AppContext);
  const favObj = { id, parentId, img, description, price };
  const addedToFavorite = () => {
    onAddFavorite(favObj);
    setFavorite(!favorited);
  };
  return (
    <>
      <div key={id} onClick={addedToFavorite} className={style.card}>
        <div className={style.like}>
          {isItemFavorite(id) ? (
            <img src={liked} alt="like" />
          ) : (
            <img src={like} alt="like" />
          )}
        </div>
        <div className={style.shoeImgBlock}>
          <img width={160} src={img} alt="cardcroos" />
        </div>
        <p>{description}</p>
        <div className={style.card__content}>
          <div>
            <p>
              Ціна: <b>{price}$</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteCard;
