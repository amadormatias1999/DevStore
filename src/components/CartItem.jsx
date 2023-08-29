import React from "react";
import { Button } from "@chakra-ui/react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import Item from "./Item";
import {
  Card,
  CardBody,
  Heading,
  Text,
  Stack,
  Divider,
  Center,
  Image,
} from "@chakra-ui/react";
const CartItem = ({ id, Nombre, Precio, Imagen }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <Center>
      <Card className="card" maxW="sm" key={id}>
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading className="heading-card" size="md">
              {Nombre}
            </Heading>
            <Image className="img-adap" src={Imagen} alt={Nombre} />
            <Text color="blue.600" fontSize="2xl">
              {" "}
              ${Precio}
            </Text>
          </Stack>
          <button onClick={() => removeItem(id)}>Eliminar del carrito</button>
        </CardBody>
        <Divider />
      </Card>
    </Center>
  );
};

export default CartItem;
