import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import style from "./index.module.scss";
import axios from "axios";
import Home from "pages/home/Home";
import { Route } from "react-router-dom";
import Routing from "Routing";
import Favorites from "pages/favorites/Favorites";

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
    axios
      .get("https://61e553d4595afe00176e54fc.mockapi.io/favorites")
      .then((respone) => {
        setFavoritesList(respone.data);
      });
  }, []);

  const onAddToCart = (cartItem) => {
    axios.post("https://61e553d4595afe00176e54fc.mockapi.io/cart", cartItem);
    setCartItems((prev) => [...prev, cartItem]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61e553d4595afe00176e54fc.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddFavorite = async (favorite) => {
    console.log("FavItem", favorite);
    if (favoritesList.find((favObj) => favObj.id === favorite.id)) {
      axios.delete(
        `https://61e553d4595afe00176e54fc.mockapi.io/favorites/${favorite.id}`
      );
      setFavoritesList((prev) =>
        prev.filter((item) => item.id !== favorite.id)
      );
    } else {
      const response = await axios.post(
        "https://61e553d4595afe00176e54fc.mockapi.io/favorites",
        favorite
      );
      setFavoritesList((prev) => [...prev, favorite]);
    }
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
        <Route exact path="/favorite">
          <Favorites
            favoritesList={favoritesList}
            onAddFavorite={onAddFavorite}
          />
        </Route>
        <Route exact path="/">
          <Home
            searchValue={searchValue}
            cards={cards}
            onAddToCart={onAddToCart}
            onAddFavorite={onAddFavorite}
            setCartItems={setCartItems}
            setSearchValue={setSearchValue}
          />
        </Route>
      </div>
    </div>
  );
};

export default App;
