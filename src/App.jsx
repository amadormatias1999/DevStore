import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  return (
    <div className="header">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidxs a nuestra tienda!" />
    </div>
  );
};

export default App;
