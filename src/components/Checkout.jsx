import React, { useContext, useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "./CartContext";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Center,
  Divider,
  Button,
} from "@chakra-ui/react";

const Checkout = () => {
  const { cart, total } = useContext(CartContext); // Obtén el contexto del carrito

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [ordenId, setOrdenId] = useState(null);
  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const productosComprados = {};

    const orden = {
      nombre,
      email,
      productos: cart,
    };

    addDoc(OrdenCollection, orden).then(({ id }) => setOrdenId(id));
  };

  const OrdenCollection = collection(db, "Orden");

  return (
    <div>
      <h4>Productos que vas a comprar:</h4>
      <div className="checkout-cart">
        <ul>
          {cart.map((producto) => (
            <li key={producto.id}>
              <div className="checkout-cart_body">
                <img
                  src={producto.Imagen}
                  alt={producto.Nombre}
                  style={{ maxWidth: "100px" }}
                />
                <p>{producto.Nombre}</p>
                <p>- Cantidad: {producto.quantity}</p>
                <p>- Precio x unidad: ${producto.Precio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="total-productos">Total: ${total}</p>
      <h2>Ultimo paso para terminar su compra</h2>
      <form onSubmit={handleSubmit}>
        <Center>
          <FormControl>
            <FormLabel>Nombre y Apellido</FormLabel>
            <Input type="text" onChange={(e) => setNombre(e.target.value)} />
            <Divider />
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            <FormHelperText>
              Nunca compartiremos tu correo electrónico.
            </FormHelperText>
            <button type="submit">Enviar informacion y Finalizar compra</button>
          </FormControl>
        </Center>
      </form>
      <h3>Su numero de orden es: {ordenId}</h3>
    </div>
  );
};

export default Checkout;
