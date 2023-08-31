import React, { useContext, useEffect, useState } from "react";
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
import { Link, useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from "firebase/firestore";

const ItemDetail = ({}) => {
  const { id } = useParams();
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);
  const [producto, setProduct] = useState([]);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(producto, quantity);
  };

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "Productos", id);

    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ ...snapshot.data(), id: snapshot.id });
      } else {
        console.log("Error");
      }
    });
  }, []);

  return (
    <Center>
      <Card className="card-detail" maxW="sm" key={producto.id}>
        <CardBody>
          <Stack mt="6" spacing="3">
            <Image
              className="img-adap"
              src={producto.Imagen}
              alt={producto.Nombre}
            />
            <Heading className="heading-card" size="md">
              {producto.Nombre}
            </Heading>
            <Text>{producto.description}</Text>
            <Text>{producto.category}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${producto.Precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          {quantityAdded > 0 ? (
            <Button>
              <Link to="/cart">Ir al carrito de compras</Link>
            </Button>
          ) : (
            <ItemCount onAdd={handleOnAdd} />
          )}
        </CardFooter>
      </Card>
    </Center>
  );
};

export default ItemDetail;
