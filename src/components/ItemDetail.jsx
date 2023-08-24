import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Stack,
  Divider,
  ButtonGroup,
  Center,
  Image,
} from "@chakra-ui/react";

import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const filteredProducts = productos.filter((productos) => productos.id == id);
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = filteredProducts[0];
    addItem(item, quantity);
  };

  return (
    <Center>
      {filteredProducts.map((p) => {
        return (
          <Card className="card" maxW="sm" key={p.id}>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading className="heading-card" size="md">
                  {p.nombre}
                </Heading>
                <Image className="img-adap" src={p.image} alt={p.nombre} />

                <Text>{p.description}</Text>
                <Text>{p.category}</Text>
                <Text color="blue.600" fontSize="2xl">
                  {p.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              {quantityAdded > 0 ? (
                <Button className="btn-a">
                  <Link to="/cart">Finalizar compra</Link>
                </Button>
              ) : (
                <ItemCount onAdd={handleOnAdd} />
              )}
            </CardFooter>
          </Card>
        );
      })}
    </Center>
  );
};

export default ItemDetail;
