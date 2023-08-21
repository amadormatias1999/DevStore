import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Ayuda from "./components/Ayuda";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
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
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
