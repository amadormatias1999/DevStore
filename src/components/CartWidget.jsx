import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="d-flex">
      <FaShoppingCart />
      <p>3</p>
    </div>
  );
};

export default CartWidget;
