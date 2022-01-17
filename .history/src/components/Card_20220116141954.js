import React from "react";

const Card = ({ img, description, price, button, unlike }) => {
  return (
    <div className="card">
      <div className="like">
        <img src={props.unlike} alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.img} alt="cardcroos" />
      <p>{props.description}</p>
      <div className="card__content">
        <div>
          <p>Ціна: </p>
          <b> {props.price} </b>
        </div>
        <button className="button">
          <img src={props.button} alt="click" />
        </button>
      </div>
    </div>
  );
};

export default Card;
