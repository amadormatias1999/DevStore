import React from "react";
import Item from "./Item";
// import { Center, Image } from "@chakra-ui/react";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((p) => {
        return (
          <Item
            key={p.id}
            id={p.id}
            nombre={p.nombre}
            description={p.description}
            image={p.image}
          />
        );
      })}
    </>
  );
};
export default ItemList;
