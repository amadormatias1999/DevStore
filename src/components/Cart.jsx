import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Item from "./Item";
import CartItem from "./CartItem";
const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay productos </h1>
        <Link to="/">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <div key={p.id}>
          <CartItem {...p} />
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
