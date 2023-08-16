import React, { useState } from "react";
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

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const filteredProducts = productos.filter((productos) => productos.id == id);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
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
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />

            <CardFooter>
              {quantityAdded > 0 ? (
                <Link to="/cart">
                  <Button className="btn-a">Terminar mi compra</Button>
                </Link>
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
