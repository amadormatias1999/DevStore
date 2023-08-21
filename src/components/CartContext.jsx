import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cartList.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Item already in cart, update quantity
      setCartList((prevCartList) =>
        prevCartList.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      // Item not in cart, add it
      setCartList((prevCartList) => [...prevCartList, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCartList((prevCartList) =>
      prevCartList.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  const clearCart = () => {
    setCartList([]);
  };

  const isInCart = (itemId) => {
    return cartList.some((cartItem) => cartItem.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeItem, clearCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
