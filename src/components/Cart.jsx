import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Item from "./Item";
import { Button } from "@chakra-ui/react";
// import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clearCart, removeItem, total } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay productos </h1>
        <Link to="/"> Ir a comprar</Link>
      </div>
    );
  }
  return (
    <div>
      {cart.map((p) => (
        <div key={p.id}>
          <Item {...p} />
          <Button onClick={() => removeItem(p.id)}>Eliminar del carrito</Button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()}> Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
