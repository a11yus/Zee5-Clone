import React, { useContext } from "react";
import {
  Box,
  Container,
  Flex,
  Image
} from "@chakra-ui/react";

import { BsPersonCircle } from "react-icons/bs";

const SecondNavbar = () => {

  return (
    <div style={{position: 'fixed', zIndex: '200', width: '80rem'}}>
      <Container
        maxWidth="100%"
        h={75}
        boxSizing="border-box"
        padding={2}
        alignItems="center"
        textAlign={"center"}
        background="#0F0617"
        marginTop="-2.5rem"
      >
        <Flex justifyContent="space-between">
            <Box boxSize={51} ml='4rem'>
              <Image src="https://seeklogo.com/images/Z/zee5-logo-A4464FCB2C-seeklogo.com.png" />
            </Box>
            <Box boxSize={50} mr='4rem'>
            <BsPersonCircle color="white" size="3.5rem" />
            </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default SecondNavbar;

