import React, { useContext, useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "./CartContext";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Center,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [ordenId, setOrdenId] = useState(null);
  const [ordenEnviada, setOrdenEnviada] = useState(false);

  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      nombre,
      email,
      productos: cart,
    };

    try {
      const docRef = await addDoc(OrdenCollection, orden);
      setOrdenId(docRef.id);
      clearCart();
      setOrdenEnviada(true);
    } catch (error) {
      console.error("Error al agregar la orden:", error);
    }
  };

  const OrdenCollection = collection(db, "Orden");

  return (
    <div>
      {ordenEnviada ? (
        <h3>Su numero de orden es: {ordenId}</h3>
      ) : (
        <>
          <h4>Productos que vas a comprar:</h4>
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
          <h3 className="total-productos">Total: ${total}</h3>

          <h2>Ultimo paso para terminar su compra</h2>
          <form onSubmit={handleSubmit}>
            <Center>
              <FormControl>
                <FormLabel>Nombre y Apellido</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setNombre(e.target.value)}
                />
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormHelperText>
                  Nunca compartiremos tu correo electrónico.
                </FormHelperText>
                <ButtonGroup>
                  {" "}
                  <Button type="submit" colorScheme="blue">
                    Enviar información y Finalizar compra
                  </Button>
                </ButtonGroup>
              </FormControl>
            </Center>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
