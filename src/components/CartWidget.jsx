import React, { useContext } from "react";
import imagenCarrito from "../assets/images/icons8-shopping-cart-50.png";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link to="/cart" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
      <img src={imagenCarrito} alt="" /> {totalQuantity}
    </Link>
  );
};

export default CartWidget;

// import React, { useContext } from "react";
// import { Flex, Box, Spacer } from "@chakra-ui/react";
// import cart from "../assets/images/icons8-shopping-cart-50.png";
// import { Badge } from "@chakra-ui/react";
// import { CartContext } from "./CartContext";
// import { Link } from "react-router-dom";

// const CartWidget = () => {
//   const { totalQuantity } = useContext(CartContext);
//   return (
//     <Flex>
//       <Link
//         to="/cart"
//         style={{ display: totalQuantity > 0 ? "block" : "none" }}
//       >
//         <Box p="4">
//           <img src={cart} alt="" /> {totalQuantity}
//         </Box>
//       </Link>
//       <Spacer />
//       <Box p="4">
//         <Badge colorScheme="purple">5</Badge>
//       </Box>
//     </Flex>
//   );
// };

// export default CartWidget;

// import React, { useContext } from "react";
// import { Flex, Box, Spacer } from "@chakra-ui/react";
// import cart from "../assets/images/icons8-shopping-cart-50.png";
// import { Badge } from "@chakra-ui/react";
// import { CartContext } from "./CartContext";
// import { Link } from "react-router-dom";

// const CartWidget = () => {
//   const { totalQuantity } = useContext(CartContext);
//   return (
//     <Flex>
//       {totalQuantity > 0 && (
//         <Link to="/cart">
//           <Box p="4">
//             <img src={cart} alt="" /> {totalQuantity}
//           </Box>
//         </Link>
//       )}
//       <Spacer />
//       <Box p="4">
//         <Badge colorScheme="purple">5</Badge>
//       </Box>
//     </Flex>
//   );
// };

// export default CartWidget;
