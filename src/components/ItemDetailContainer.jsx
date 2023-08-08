import React from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      nombre: "Remera JS",
      description: "Remesa JavaScript oversize",
      stock: 5,
      category: "Remeras",
      image: "../src/assets/images/merch/jsRemera.jpg",
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

// // import React from "react";
// // import ItemDetail from "./ItemDetail";

// // const ItemDetailContainer = () => {
// //   const productos = [
// //     {
// //       id: 1,
// //       nombre: "Remera JS",
// //       description: "...",
// //       stock: 4,
// //       imagen: "src/assets/images/merch/jsRemera.jpg",
// //       category: 1,
// //     },
// //     {
// //       id: 2,
// //       nombre: "Remera NodeJS",
// //       description: "...",
// //       stock: 5,
// //       imagen: "...",
// //       category: 1,
// //     },
// //     ,
// //     {
// //       id: 3,
// //       nombre: "Remera React JS",
// //       description: "...",
// //       stock: 6,
// //       imagen: "...",
// //       category: 1,
// //     },
// //     {
// //       id: 4,
// //       nombre: "Mousepad Negro",
// //       description: ".....",
// //       stock: 7,
// //       imagen: "...",
// //       category: 2,
// //     },

// //     {
// //       id: 5,
// //       nombre: "Mousepad Gris Oscuro",
// //       description: ".....",
// //       stock: 4,
// //       imagen: "...",
// //       category: 2,
// //     },
// //     {
// //       id: 6,
// //       nombre: "Mousepad Gris ",
// //       description: ".....",
// //       stock: 5,
// //       imagen: "...",
// //       category: 2,
// //     },
// //     {
// //       id: 7,
// //       nombre: "Teclados",
// //       description: ".....",
// //       stock: 5,
// //       imagen: "...",
// //       category: 3,
// //     },
// //     {
// //       id: 8,
// //       nombre: "Teclados",
// //       description: ".....",
// //       stock: 18,
// //       imagen: "...",
// //       category: 3,
// //     },
// //     {
// //       id: 9,
// //       nombre: "Teclados",
// //       description: ".....",
// //       stock: 17,
// //       imagen: "...",
// //       category: 3,
// //     },
// //   ];
// //   const obtenerProductos = new Promise((resolve, reject) => {
// //     if (productos.length > 0) {
// //       setTimeout(() => {
// //         resolve(productos);
// //       }, 2000);
// //     } else {
// //       reject(new Error("No hay datos"));
// //     }
// //   });

// //   obtenerProductos
// //     .then((res) => {
// //       console.log(res);
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //     });

// //   return (
// //     <>
// //       <ItemDetail productos={productos} />
// //     </>
// //   );
// // };

// // export default ItemDetailContainer;

// import React from "react";
// import ItemDetail from "./ItemDetail";

// const ItemDetailContainer = () => {
//   const productos = [
//     {
//       id: 1,
//       nombre: "Producto A",
//       description: "Descripcion de Producto A",
//       stock: 5,
//       category: "cat1",
//     },
//     {
//       id: 2,
//       nombre: "Producto B",
//       description: "Descripcion de Producto B",
//       stock: 10,
//       category: "cat2",
//     },
//     {
//       id: 3,
//       nombre: "Producto C",
//       description: "Descripcion de Producto C",
//       stock: 20,
//       category: "cat3",
//     },
//     {
//       id: 4,
//       nombre: "Producto D",
//       description: "Descripcion de Producto D",
//       stock: 15,
//       category: "cat1",
//     },
//     {
//       id: 5,
//       nombre: "Producto E",
//       description: "Descripcion de Producto E",
//       stock: 25,
//       category: "cat1",
//     },
//     {
//       id: 6,
//       nombre: "Producto F",
//       description: "Descripcion de Producto F",
//       stock: 30,
//       category: "cat3",
//     },
//   ];

//   const getProductos = new Promise((resolve, reject) => {
//     if (productos.length > 0) {
//       setTimeout(() => {
//         resolve(productos);
//       }, 2000);
//     } else {
//       reject(new Error("No hay datos"));
//     }
//   });

//   getProductos
//     .then((res) => {
//       // console.log(res)
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   return (
//     <>
//       <ItemDetail productos={productos} />
//     </>
//   );
// };

// export default ItemDetailContainer;
