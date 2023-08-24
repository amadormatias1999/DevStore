import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado ");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };
  const calcularTotal = () => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.precio * prod.quantity;
    });
    return total;
  };
  const total = calcularTotal();

  const calcularTotalQuantity = () => {
    let totalQuantity = 0;
    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });
    return totalQuantity;
  };
  const totalQuantity = calcularTotalQuantity();

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        total,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
