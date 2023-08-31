import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import {
  Card,
  CardBody,
  Heading,
  Text,
  Stack,
  Divider,
  Center,
  Image,
  Button,
} from "@chakra-ui/react";
const CartItem = ({ id, Nombre, Precio, Imagen, description }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <Center>
      <Card className="card-detail" maxW="sm" key={id}>
        <CardBody>
          <Stack mt="6" spacing="3">
            <Image className="img-adap" src={Imagen} alt={Nombre} />
            <Heading className="heading-card" size="md">
              {Nombre}
            </Heading>
            <Text>{description}</Text>
            <Text color="blue.600" fontSize="2xl">
              {" "}
              ${Precio}
            </Text>
          </Stack>
          <Button onClick={() => removeItem(id)}>Eliminar del carrito</Button>
        </CardBody>
        <Divider />
      </Card>
    </Center>
  );
};

export default CartItem;
