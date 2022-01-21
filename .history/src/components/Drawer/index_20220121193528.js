import remove from "img/remove.svg";
import style from "./Drawe.module.scss";
import CartItem from "components/Cart";
import emptyCart from "img/emptyCart.png";
import orderCompeleteImg from "img/orderConfirmed.png";
import Response from "components/responseComponent/Response";
import { useState } from "react/cjs/react.development";
import { useContext } from "react";
import AppContext from "store/context";
import axios from "axios";

const Drawer = ({ closeCart, cartItems, onRemoveItem }) => {
  const state = useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderID] = useState(null);
  const [loading, setLoading] = useState(false);
  const onSubmitOrder = async () => {
    try {
      setLoading(true)
      const response = await axios.post(
        "https://61e553d4595afe00176e54fc.mockapi.io/orders",
        cartItems
      );
      setOrderID(response.data.id);
      setIsOrderComplete(true);
      state.setCartItems([]);
      setLoading(false)
    } catch {
      alert("Не вдалося оформити замовлення");
    }
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
              <button disabled={} onClick={onSubmitOrder} className={style.greenbtn}>
                Оформити замовлення
              </button>
            </div>
          </div>
        ) : (
          <Response
            title={isOrderComplete ? "Заказ оформлено" : "Корзина пуста"}
            description={
              isOrderComplete
                ? `Ваше замовлення №${orderId} буде передано кур'єру`
                : "Добавте хоча б одну пару кросівок, щоб зробити замовлення"
            }
            img={isOrderComplete ? orderCompeleteImg : emptyCart}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
