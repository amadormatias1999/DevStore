import React from "react";
import brand from "../assets/images/DEVSTOREBRAND.png";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Flex>
          <Box p="4">
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Shop
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to={`/category/${"Remeras"}`}>Merch</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/category/${"Mousepads"}`}>Mousepads</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/category/${"Teclados"}`}>Teclados</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>{" "}
          <Spacer />
          <Box p="4">
            <Link to={"/"}>
              <h1 className="brand">DevStore</h1>
              {/* <img src={brand} alt="" width="100px" height="100px" /> */}
            </Link>
          </Box>
          <Spacer />
          <Box>
            <CartWidget></CartWidget>
          </Box>
        </Flex>
      </nav>
    </header>
  );
};

export default NavBar;
