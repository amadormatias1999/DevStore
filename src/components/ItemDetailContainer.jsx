import React from "react";
import ItemDetail from "../components/ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [producto, setProduct] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "Productos");
    getDocs(productosCollection).then((querySnapshot) => {
      const productos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProduct(productos);
    });
  });
  return (
    <>
      <ItemDetail productos={producto} />
    </>
  );
};

export default ItemDetailContainer;
