import React from "react";
import cross1 from "./../img/cross/cross1.jpg";
import cross2 from "./../img/cross/cross2.jpg";
import cross3 from "./../img/cross/cross3.jpg";
import cross4 from "./../img/cross/cross4.jpg";
import cross5 from "./../img/cross/cross5.jpg";
import cross6 from "./../img/cross/cross6.jpg";
import cross7 from "./../img/cross/cross7.jpg";
import cross8 from "./../img/cross/cross8.jpg";
import unlike from "./../img/like.svg";
import button from "./../img/plus.svg";
import Card from "./Card";

function Cards (){
    const cards = [
        {
          img: cross1,
          price: "39200",
          description: "Чоловічі кросівки Nike Blazer Mid Suede",
          button: button,
          unlike: unlike,
        },
        {
          img: cross2,
          price: "3900",
          description: "Чоловічі кросівки Nike Blazer Mid Suede",
          button: button,
          unlike: unlike,
        },
        {
          img: cross3,
          price: "3900",
          description: "Чоловічі кросівки Nike Blazer Mid Suede",
          button: button,
          unlike: unlike,
        },
        {
          img: cross4,
          price: "3900",
          description: "Чоловічі кросівки Nike Blazer Mid Suede",
          button: button,
          unlike: unlike,
        },
        {
          img: cross5,
          price: "3900",
          description: "Чоловічі кросівки Nike Blazer Mid Suede",
          button: button,
          unlike: unlike,
        },
        {
          img: cross6,
          price: "3900",
          description: "Чоловічі кросівки Nike Blazer Mid Suede",
          button: button,
          unlike: unlike,
        },
        {
          img: cross7,
          price: "3900",
          description: "Чоловічі кросівки Nike Blazer Mid Suede",
          button: button,
          unlike: unlike,
        },
        {
          img: cross8,
          price: "3900",
          description: "Чоловічі кросівки Nike Blazer Mid Suede",
          button: button,
          unlike: unlike,
        },
      ];
    return(
        <div className="sneakers__content">
            {cards.map(card => 
            <Card
              img={card.img}
              description={card.description}
              price={card.price}
              button={card.button}
              unlike={card.unlike}
            />
          )}
        </div>
    )
}

export default Cards;