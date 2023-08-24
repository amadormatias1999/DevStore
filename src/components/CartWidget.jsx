import React, { useContext } from "react";
import imagenCarrito from "../assets/images/icons8-shopping-cart-50.png";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link to="/cart" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
      <img src={imagenCarrito} alt="" /> {totalQuantity}
    </Link>
  );
};

export default CartWidget;
