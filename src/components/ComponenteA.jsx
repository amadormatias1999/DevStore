import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const ComponenteA = () => {
  const { cart, setCart, comision, longitud } = useContext(CartContext);
  return (
    <div>
      <h1>{comision}</h1>
      <p>{cart}</p>
      <button onClick={() => setCart("Nuevo Valor")}> Cambiar Valor</button>
      <p>{longitud}</p>
    </div>
  );
};

export default ComponenteA;
