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
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ nombre, id, image, precio }) => {
  return (
    <>
      <Card className="card" maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Image className="img-adap" src={image} alt={nombre} />
            <Heading className="heading-card" size="md">
              {nombre}
            </Heading>

            <Text> ${precio}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="15">
            <Button className="btn-c">
              <Link to={`/item/${id}`}>Detalles</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default Item;
