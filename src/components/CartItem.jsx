// import React from "react";
// import {
//   Card,
//   CardBody,
//   CardFooter,
//   Heading,
//   Text,
//   Button,
//   Stack,
//   Divider,
//   ButtonGroup,
//   Image,
//   Center,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "./CartContext";

// const { removeItem } = useContext(CartContext);

// const Item = ({ nombre, description, category, image, precio }) => {
//   return (
//     <>
//       <Card className="card" maxW="sm">
//         <CardBody>
//           <Stack mt="6" spacing="3">
//             <Heading className="heading-card" size="md">
//               {nombre}
//             </Heading>
//             <Image className="img-adap" src={image} alt={nombre} />

//             <Text>{description}</Text>
//             <Text>{category}</Text>
//             <Text> {precio}</Text>
//           </Stack>
//         </CardBody>
//         <Divider />
//         <CardFooter>
//           <ButtonGroup spacing="15">
//             <Button onClick={removeItem} className="btn-c">
//               Eliminar Producto{" "}
//             </Button>
//           </ButtonGroup>
//         </CardFooter>
//       </Card>
//     </>
//   );
// };

// export default Item;
