// SOLUCION
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  query,
  where,
  collection,
} from "firebase/firestore";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const collectionRef = category
      ? query(collection(db, "Productos"), where("Categoria", "==", category))
      : collection(db, "Merch");

    getDocs(collectionRef)
      .then((response) => {
        const productosCategory = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(productosCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <Center p="1rem">
      <ItemList productos={productos} />
    </Center>
  );
}

export default ItemListContainer;
