import remove from "img/remove.svg";
import style from "./Drawe.module.scss";
import CartItem from "components/Cart";
import emptyCart from "img/emptyCart.png";
import Response from "components/responseComponent/Response";
import { useState } from "react/cjs/react.development";
import { useContext } from "react";
import AppContext from "store/context";

const Drawer = ({ closeCart, cartItems, onRemoveItem }) => {
  const state = useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const onSubmitOrder = () => {
    setIsOrderComplete(true);
    state.setCartItems([]);
  };
  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <h2>
          Корзина <img onClick={closeCart} src={remove} alt="remove" />
        </h2>

        {cartItems.length > 0 ? (
          <div className={style.items}>
            {cartItems.map((cart) => (
              <CartItem cart={cart} onRemoveItem={onRemoveItem} />
            ))}

            <div className={style.cartSum}>
              <ul>
                <li>
                  <span>Сума:</span>
                  <b>10200грн.</b>
                </li>
              </ul>
              <button onClick={onSubmitOrder} className={style.greenbtn}>
                Оформити замовлення
              </button>
            </div>
          </div>
        ) : (
          <Response
            title="Корзина пуст"
            description="Добавте хоча б одну пару кросівок, щоб зробити замовлення"
            img={emptyCart}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
