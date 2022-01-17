import remove from "./../img/remove.svg";
import cartarrow from "./../img/cartarrow.svg";
import cross1 from "./../img/cross/cross1.jpg";
import cross2 from "./../img/cross/cross2.jpg";
import cross3 from "./../img/cross/cross3.jpg";
import CartItem from "./CartItem";



const Overlay =() => {
    const Carts = [
        {
           cartimg: cross1,
           cartdescriptin: "Чоловічі кросівки Nike Blazer Mid Suede",
           cartprice: "3900грн.",
           cartremove: remove,
        },
        {
            cartimg: cross2,
            cartdescriptin: "Чоловічі кросівки Nike Blazer Mid Suede",
            cartprice: "3900грн.",
            cartremove: remove,
         },
         {
            cartimg: cross3,
            cartdescriptin: "Чоловічі кросівки Nike Blazer Mid Suede",
            cartprice: "3900грн.",
            cartremove: remove,
         },
    ];
    return(
        <div className="overlay">
          <div className="drawer">
            <h2>Корзина <img className="removebtn" src={remove} alt="remove"/></h2>

            <div className="items">
            {Carts.map( cart => <CartItem
            cartimg = {cart.cartimg}
            cartdescriptin = {cart.cartdescriptin}
            cartprice = {cart.cartprice}
            cartremove = {cart.cartremove}
            /> )}

            <div className="cartSum">
            <ul>
              <li>
                <span>
                  Сума:
                </span>
                <b>
                  10200грн.
                </b>
              </li>
            </ul>
            <button className="greenbtn">Оформити замовлення <img src={cartarrow} alt="cartaroow" />
            </button>
            </div>
            </div>
          </div>
        </div>
    )
    
}

export default Overlay;