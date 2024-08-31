import { HStack, Image } from "@chakra-ui/react";
// import React from "react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image boxSize="60px" src={logo} />
      <text>NavBar</text>
    </HStack>
  );
};

export default NavBar;
