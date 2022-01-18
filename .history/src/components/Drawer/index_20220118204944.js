import remove from "img/remove.svg";
import cartarrow from "img/cartarrow.svg";
import style from "./Drawe.module.scss";
import CartItem from "components/Cart";
import emptyCart from "img/emptyCart.png";
import { useEffect } from "react";
import axios from "axios";

const Drawer = ({ closeCart, cartItems, onRemoveItem, setCartItems }) => {
  useEffect(() => {
    axios
      .get("https://61e553d4595afe00176e54fc.mockapi.io/cart")
      .then((respone) => {
        setCartItems(respone.data);
      });
  }, []);
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
              <button className={style.greenbtn}>
                Оформити замовлення <img src={cartarrow} alt="cartaroow" />
              </button>
            </div>
          </div>
        ) : (
          <div className={style.emptyCartBlock}>
            <img src={emptyCart} alt="emptyCart" />
            <h2>Корзина пуста</h2>
            <p>Добавте хоча б одну пару кросівок, щоб зробити замовлення</p>
            <button>Вернутися назад</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
