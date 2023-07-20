import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="text-center text-white">
        <h3>{greeting}</h3>
      </div>
    </div>
  );
};

export default ItemListContainer;
