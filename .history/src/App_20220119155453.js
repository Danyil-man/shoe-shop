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
  const [favoritesList, setFavoritesList] = useState([]);
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
    axios.delete(`https://61e553d4595afe00176e54fc.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddFavorite = (favorite) => {
    axios.post(
      "https://61e553d4595afe00176e54fc.mockapi.io/favorites",
      favorite
    );
    setFavoritesList((prev) => [...prev, favorite]);
  };

  return (
    <div className={style.overlay}>
      <div className={style.wrapper}>
        {cart && (
          <Drawer
            cartItems={cartItems}
            closeCart={() => setCart(false)}
            onRemoveItem={onRemoveItem}
            setCartItems={setCartItems}
          />
        )}
        <Header openCart={() => setCart(true)} />
      </div>
    </div>
  );
};

export default App;
