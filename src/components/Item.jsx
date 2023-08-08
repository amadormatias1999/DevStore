import React from "react";
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
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ nombre, description, id, category, image }) => {
  return (
    <>
      <Card className="card" maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading className="heading-card" size="md">
              {nombre}
            </Heading>
            <Image className="img-adap" src={image} alt={nombre} />

            <Text>{description}</Text>
            <Text>{category}</Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="15">
            <Button className="btn-c">
              <Link to={`/item/${id}`}>Detalles</Link>
            </Button>
            <Button className="btn-a">Agregar al Carrito</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default Item;
