import React, { useContext } from "react";
import AppContext from "store/context";

export const usePrice = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return { totalPrice };
};
