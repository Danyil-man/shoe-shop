import React, { useContext, useState } from "react";
import style from "./FavoriteCard.module.scss";
import like from "img/like.svg";
import liked from "img/liked.png";
import AppContext from "store/context";

const FavoriteCard = ({ id, img, favorited = false, description, price }) => {
  const [isFavorited, setIsFavorite] = useState(favorited);
  const { onAddFavorite } = useContext(AppContext);
  const favObj = { id, parentId: id, img, description, price };
  const addedToFavorite = () => {
    onAddFavorite(favObj);
    setIsFavorite(!isFavorited);
  };
  return (
    <>
      <div key={id} className={style.card}>
        <div onClick={addedToFavorite} className={style.like}>
          <img src={isFavorited ? liked : like} alt="favorite" />
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
