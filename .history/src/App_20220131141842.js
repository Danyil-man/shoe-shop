import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import axios from "axios";
import AppContext from "./store/context";
import PageRouting from "./routing";

const App = () => {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cards, setCards] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(isLoading); //Loading
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
      } catch {
        alert("Error");
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (cartItem) => {
    try {
      const findItem = cartItems.find(
        (favObj) => favObj.parentId === cartItem.id
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => item.parentId !== cartItem.id)
        );
        await axios.delete(
          `https://61e553d4595afe00176e54fc.mockapi.io/cart/${findItem.id}`
        );
      } else {
        const response = await axios.post(
          "https://61e553d4595afe00176e54fc.mockapi.io/cart",
          cartItem
        );
        setCartItems((prev) => [...prev, response.data]);
      }
    } catch {
      alert("Error");
    }
  };

  const onRemoveItem = async (id) => {
    try {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      axios.delete(`https://61e553d4595afe00176e54fc.mockapi.io/cart/${id}`);
    } catch {
      alert("Error");
    }
  };

  const onAddFavorite = async (favorite) => {
    try {
      const findFav = favoritesList.find((favObj) => favObj.id === favorite.id);
      if (findFav) {
        setFavoritesList((prev) =>
          prev.filter((item) => item.id !== favorite.id)
        );
        await axios.delete(
          `https://61e553d4595afe00176e54fc.mockapi.io/favorites/${favorite.id}`
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

  const isItemFavorite = (id) => {
    return favoritesList.some((item) => item.parentId === id);
  };

  const isItemAdded = (id) => {
    return cartItems.some((item) => item.parentId === id);
  };

  return (
    <AppContext.Provider
      value={{
        cards,
        cart,
        cartItems,
        favoritesList,
        searchValue,
        isLoading,
        setSearchValue,
        isItemAdded,
        isItemFavorite,
        setCart,
        setCartItems,
        onRemoveItem,
        onAddToCart,
        onAddFavorite,
      }}
    >
      <div className={style.overlay}>
        <div className={style.wrapper}>
          <PageRouting />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
