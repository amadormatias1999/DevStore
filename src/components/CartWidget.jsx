import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const productosAgregados = 3; // Número hardcodeado

  return (
    <div>
      <FaShoppingCart />
      {productosAgregados > 0 && (
        <span className="notification">{productosAgregados}</span>
      )}
    </div>
  );
};

export default CartWidget;
