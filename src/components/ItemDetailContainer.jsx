import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      nombre: "Remera JS",
      description: "Remesa JavaScript oversize",
      stock: 5,
      category: "Remeras",
      image: "../src/assets/images/merch/jsRemera.jpg",
      precio: 70,
    },
    {
      id: 2,
      nombre: "Remera Node",
      description: "Remesa Node JS oversize",
      stock: 5,
      category: "Remeras",
      image: "../src/assets/images/merch/nodeRemera.jpg",
    },
    {
      id: 3,
      nombre: "Remera React JS",
      description: "Remesa React JS oversize de algodon",
      stock: 5,
      category: "Remeras",
      image: "../src/assets/images/merch/reactRemera.jpg",
    },
    {
      id: 4,
      nombre: "Mousepad Negro",
      description: "Mousepad negro 40cm ",
      stock: 10,
      category: "Mousepads",
      image: "../src/assets/images/mousepads/pexels-pew-nguyen-12786595.jpg",
    },
    {
      id: 5,
      nombre: "Mousepad gris",
      description: "Mousepad negro de 50 cm",
      stock: 10,
      category: "Mousepads",
      image: "../src/assets/images/mousepads/pexels-pew-nguyen-12786598.jpg",
    },
    {
      id: 6,
      nombre: "Mousepad gris oscuro",
      description: "Mousepad gris oscuro de 45 cm",
      stock: 10,
      category: "Mousepads",
      image: "../src/assets/images/mousepads/pexels-zesan-8524593.jpg",
    },
    {
      id: 7,
      nombre: "Teclado Redragon",
      description: "Teclado mecanico gamer 65%",
      stock: 20,
      category: "Teclados",
      image: "../src/assets/images/teclados/pexels-anete-lusina-4792716.jpg",
    },
    {
      id: 8,
      nombre: "Teclado Logitech",
      description: "Logitech MX MASTER 3",
      stock: 15,
      category: "Teclados",
      image:
        "../src/assets/images/teclados/pexels-matheus-bertelli-7031691.jpg",
    },
    {
      id: 9,
      nombre: "Teclado Magic Keyboard",
      description: "Teclado Apple Mac",
      stock: 25,
      category: "Teclados",
      image:
        "../src/assets/images/teclados/pexels-shvets-production-7191989.jpg",
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
    .then((res) => {})
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
};
export default ItemDetailContainer;

// import React, { useEffect, useState } from "react";
// import ItemDetail from "./ItemDetail";
// import { doc, getDoc, getFirestore } from "firebase/firestore";

// const ItemDetailContainer = () => {
//   const [producto, setProduct] = useState(null);

//   useEffect(() => {
//     const db = getFirestore();
//     const oneItem = doc(db, "Merch", "7Tgfstxli9my762aH0a4");
//     getDoc(oneItem).then((snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.data();
//         setProduct(data);
//       }
//     });
//   }, []);

//   return (
//     <>
//       <ItemDetail productos={producto} />
//     </>
//   );
// };

// export default ItemDetailContainer;
