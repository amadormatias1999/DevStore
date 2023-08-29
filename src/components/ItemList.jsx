import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((p) => {
        return (
          <Item
            key={p.id}
            id={p.id}
            nombre={p.Nombre}
            description={p.description}
            image={p.Imagen}
            precio={p.Precio}
          />
        );
      })}
    </>
  );
};
export default ItemList;
