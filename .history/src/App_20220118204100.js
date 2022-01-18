import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import SearchBlock from "./components/SearchBlock";
import Drawer from "./components/Drawer";
import style from "./index.module.scss";
import axios from "axios";

const App = () => {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    axios
      .get("https://61e553d4595afe00176e54fc.mockapi.io/items")
      .then((respone) => {
        setCards(respone.data);
      });
    axios
      .get("https://61e553d4595afe00176e54fc.mockapi.io/cart")
      .then((respone) => {
        setCartItems(respone.data);
      });
  }, []);

  const onAddToCart = (cartItem) => {
    axios.post("https://61e553d4595afe00176e54fc.mockapi.io/cart", cartItem);
    setCartItems((prev) => [...prev, cartItem]);
  };

  const onRemoveItem = (id) => {
    console.log("removeID", id);
    //axios.delete(`https://61e553d4595afe00176e54fc.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className={style.overlay}>
      <div className={style.wrapper}>
        {cart && (
          <Drawer
            cartItems={cartItems}
            closeCart={() => setCart(false)}
            onRemoveItem={onRemoveItem}
          />
        )}
        <Header openCart={() => setCart(true)} />
        <div className={style.content}>
          <SearchBlock
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <Cards
            cards={cards}
            setCartItems={setCartItems}
            searchValue={searchValue}
            onAddToCart={onAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
