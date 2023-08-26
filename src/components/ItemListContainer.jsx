import React from "react";
import ItemList from "./ItemList";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const productos = [
    {
      id: 1,
      nombre: "Remera JS",
      stock: 5,
      category: "Remeras",
      image: "../src/assets/images/merch/jsRemera.jpg",
      precio: 60,
    },
    {
      id: 2,
      nombre: "Remera Node",
      stock: 5,
      category: "Remeras",
      image: "../src/assets/images/merch/nodeRemera.jpg",
      precio: 60,
    },
    {
      id: 3,
      nombre: "Remera React JS",
      stock: 5,
      category: "Remeras",
      image: "../src/assets/images/merch/reactRemera.jpg",
      precio: 60,
    },
    {
      id: 4,
      nombre: "Mousepad Negro",
      stock: 10,
      category: "Mousepads",
      image: "../src/assets/images/mousepads/pexels-pew-nguyen-12786595.jpg",
      precio: 60,
    },
    {
      id: 5,
      nombre: "Mousepad gris",
      stock: 10,
      category: "Mousepads",
      image: "../src/assets/images/mousepads/pexels-pew-nguyen-12786598.jpg",
      precio: 60,
    },
    {
      id: 6,
      nombre: "Mousepad gris oscuro",
      stock: 10,
      category: "Mousepads",
      image: "../src/assets/images/mousepads/pexels-zesan-8524593.jpg",
      precio: 60,
    },
    {
      id: 7,
      nombre: "Teclado Redragon",
      stock: 20,
      category: "Teclados",
      image: "../src/assets/images/teclados/pexels-anete-lusina-4792716.jpg",
      precio: 60,
    },
    {
      id: 8,
      nombre: "Teclado Logitech",
      stock: 15,
      category: "Teclados",
      image:
        "../src/assets/images/teclados/pexels-matheus-bertelli-7031691.jpg",
      precio: 60,
    },
    {
      id: 9,
      nombre: "Teclado Magic Keyboard",
      stock: 25,
      category: "Teclados",
      image:
        "../src/assets/images/teclados/pexels-shvets-production-7191989.jpg",
      precio: 60,
    },
  ];

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject(new Error("No hay datos"));
    }
  });

  getProductos
    .then((res) => {
      // console.log(res)
    })
    .catch((error) => {
      console.log(error);
    });

  const filteredProducts = productos.filter(
    (producto) => producto.category === category
  );

  return (
    <Center p="1rem">
      <ItemList productos={filteredProducts} />
    </Center>
  );
};

export default ItemListContainer;

// import React, { useEffect, useState } from "react";
// import ItemList from "./ItemList";
// import { Center } from "@chakra-ui/react";
// import { useParams } from "react-router-dom";
// import { getDocs, collection, getFirestore } from "firebase/firestore";

// const ItemListContainer = () => {
//   const { category } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [productos, setProducts] = useState([]);

//   useEffect(() => {
//     const db = getFirestore();
//     const itemsCollection = collection(db, "Teclados");

//     getDocs(itemsCollection)
//       .then((snapshot) => {
//         const docs = snapshot.docs.map((doc) => doc.data());
//         setProducts(docs);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);
//   useEffect(() => {
//     console.log("Productos cargados:", productos);
//   }, [productos]);

//   const filteredProducts = productos.filter(
//     (producto) => producto.category === category
//   );

//   return (
//     <Center p="1rem">
//       {loading ? <p>Cargando...</p> : <ItemList productos={filteredProducts} />}
//     </Center>
//   );
// };

// export default ItemListContainer;
