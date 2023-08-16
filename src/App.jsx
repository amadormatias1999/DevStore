// import NavBar from "./components/NavBar";
// import ItemListContainer from "./components/ItemListContainer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import Home from "./components/Home";
// import Ayuda from "./components/Ayuda";
// import Cart from "./components/Cart";
// import ItemDetailContainer from "./components/ItemDetailContainer";

// const App = () => {
//   return (
//     <div className="header">
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <ItemListContainer greeting="¡Bienvenidxs a nuestra tienda!" />
//             }
//           />

//           <Route exact path="/Home" element={<Home />} />
//           <Route exact path="/Ayuda" element={<Ayuda />} />
//           <Route exact path="/cart" element={<Cart />} />
//           <Route
//             exact
//             path="/category/:category"
//             element={<ItemListContainer />}
//           />
//           <Route
//             exact
//             path="/Item/:id"
//             element={<ItemDetailContainer></ItemDetailContainer>}
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Ayuda from "./components/Ayuda";

import Cart from "./components/Cart";
import ShoppingCartContext from "./context/ShoppingCartContext";
import ComponenteA from "./components/ComponenteA";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Ayuda" element={<Ayuda />} />

        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/category/:category"
          element={<ItemListContainer />}
        />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
