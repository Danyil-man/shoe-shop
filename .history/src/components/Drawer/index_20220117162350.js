import remove from "img/remove.svg";
import cartarrow from "img/cartarrow.svg";
import CartItem from "../Cart";
import style from "./Drawe.module.scss";

const Drawer = ({ closeCart, cartItems }) => {
  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <h2>
          Корзина <img onClick={closeCart} src={remove} alt="remove" />
        </h2>

        <div className={style.items}>
          {cartItems.map((cart) => (
            <CartItem
              cartimg={cart.img}
              cartdescriptin={cart.description}
              cartprice={cart.price}
            />
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
      </div>
    </div>
  );
};

export default Drawer;
