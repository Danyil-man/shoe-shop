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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(isLoading); //Loading
      console.log("firstLoad", isLoading);
      const responseCart = await axios.get(
        "https://61e553d4595afe00176e54fc.mockapi.io/cart"
      );

      const responseFavorites = await axios.get(
        "https://61e553d4595afe00176e54fc.mockapi.io/favorites"
      );

      const responseCards = await axios.get(
        "https://61e553d4595afe00176e54fc.mockapi.io/items"
      );
      setIsLoading(!isLoading); //Loaded

      setCartItems(responseCart.data);
      setFavoritesList(responseFavorites.data);
      setCards(responseCards.data);
      console.log("secondLoad", isLoading);
    }
    fetchData();
  }, []);

  const onAddToCart = (cartItem) => {
    if (cartItems.find((favObj) => favObj.id === cartItem.id)) {
      axios.delete(
        `https://61e553d4595afe00176e54fc.mockapi.io/cart/${cartItem.id}`
      );
      setCartItems((prev) => prev.filter((item) => item.id !== cartItem.id));
    } else {
      axios.post("https://61e553d4595afe00176e54fc.mockapi.io/cart", cartItem);
      setCartItems((prev) => [...prev, cartItem]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61e553d4595afe00176e54fc.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddFavorite = async (favorite) => {
    try {
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
        setFavoritesList((prev) => [...prev, response.data]);
      }
    } catch {
      alert("Item didn't add");
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
        <Route exact path="/shoe-shop/favorite">
          <Favorites
            favoritesList={favoritesList}
            onAddFavorite={onAddFavorite}
          />
        </Route>
        <Route exact path="/">
          <Home
            searchValue={searchValue}
            cards={cards}
            cartItems={cartItems}
            isLoading={isLoading}
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
