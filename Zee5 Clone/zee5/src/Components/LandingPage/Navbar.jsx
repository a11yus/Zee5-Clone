import React, { useContext } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { RiVipCrownFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import MoreOption from "./MoreOption";
import { NavLink } from "react-router-dom";
import { ZeeContext } from "../Context/Context";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  let { Auth } = useContext(ZeeContext);

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
        position="relative"
      >
        <Flex justifyContent="space-around" align="center">
          <HStack>
            <Box boxSize={50}>
              <Image src="https://seeklogo.com/images/Z/zee5-logo-A4464FCB2C-seeklogo.com.png" />
            </Box>
              <Breadcrumb 
              fontSize={14} 
              color="white" 
              separator=" " 
              spacing='20px'
              pl='2rem'
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="/TV Shows">TV Shows</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                 <NavLink to={'/music'}><BreadcrumbLink>Music</BreadcrumbLink></NavLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <MoreOption />
          </HStack>
          <HStack w={520} margin="auto" marginRight={40}>
            <Box>
              <Flex gap={2} align={"center"}>
                <InputGroup alignContent={"center"}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={
                      <SearchIcon marginTop={-2} w={4} h={4} color="white" />
                    }
                  />
                  <Input
                    type="search"
                    w={400}
                    color="white"
                    borderRadius={5}
                    size={"sm"}
                    focusBorderColor='Purple'
                    placeholder="Search for Movies, Shows etc"
                  />
                </InputGroup>{" "}
                {
                  Auth ? 
                  <BsPersonCircle color="white" size="3.5rem" />
                  :
                  <Button
                  size="sm"
                  fontSize={10}
                  color="black"
                  bg={"white"}
                  padding={3}
                  variant="outline"
                >
                  <NavLink to={'/LoginPage'}>LOGIN</NavLink>
                </Button>
                }
                <Button
                  size="sm"
                  padding={3.5}
                  fontSize={12}
                  w={140}
                  colorScheme="purple"
                  // onClick={handlec}
                  leftIcon={
                    <Icon as={RiVipCrownFill} width="18px" height="18px" />
                  }
                >
                  <NavLink to={'/premiumplan'}>BUY PLAN</NavLink>
                </Button>
                <>
                  <Button
                    size="sm"
                    onClick={onOpen}
                    colorScheme="none"
                    leftIcon={
                      <Icon color={"white"} w={30} h={30} as={AiOutlineMenu} />
                    }
                  ></Button>

                  <Drawer
                    marginTop={30}
                    size="xs"
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent bg='#0f0617'>
                      <DrawerCloseButton />
                      <DrawerHeader></DrawerHeader>

                      <DrawerBody bg='#0f0617' color='#7b767f'>
                        <Link to={"/"}>
                          <h2>Home</h2>
                        </Link>
                        <hr />
                        <Accordion defaultIndex={[0]} allowMultiple>
                          <AccordionItem>
                            <h2>
                              <AccordionButton>
                                <Box flex="1" textAlign="left">
                                  Explore
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <Link href="/tvshows">TV Shows</Link>
                              <br />
                              <Link href="/movies">Movies</Link>
                              <br />
                              <Link href="/">Web Series</Link>
                              <br />
                              <Link href="/">News</Link>
                              <br />
                              <Link href="/">Eduaraa</Link>
                              <br />
                              <Link href="/">Premium</Link>
                              <br />
                              <Link href="/">Live Tv</Link>
                              <br />
                              <Link href="/music">Music</Link>
                              <br />
                              <Link href="/">ZEEPLEX</Link>
                              <br />
                              <Link href="/">Play</Link>
                              <br />
                              <Link href="/">Articles</Link>
                              <br />
                              <Link href="/">Kids</Link>
                              <br />
                              <Link href="/">Videos</Link>
                              <br />
                              <Link href="/">Stories</Link>
                              <br />
                              <Link href="/">Channels</Link>
                              <br />
                            </AccordionPanel>
                          </AccordionItem>

                          <AccordionItem>
                            <h2>
                              <AccordionButton>
                                <Box flex="1" textAlign="left">
                                  Plans
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <Link>Buy Plan</Link>
                              <br />
                              <Link>Have a Prepaid code?</Link>
                            </AccordionPanel>
                          </AccordionItem>

                          <AccordionItem>
                            <h2>
                              <AccordionButton>
                                <Box flex="1" textAlign="left">
                                  Settings
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <Link>Language</Link>
                              <br />
                              <Link>Reset setting to default</Link>
                            </AccordionPanel>
                          </AccordionItem>

                          <AccordionItem>
                            <h2>
                              <AccordionButton>
                                <Box flex="1" textAlign="left">
                                  Info
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <Link>About us</Link>
                              <br />
                              <Link>Help Center</Link>
                              <br />
                              <Link>Content Redressal Mechanism</Link>
                              <br />
                              <Link>Terms of use</Link>
                              <br />
                              <Link>Privacy Policy</Link>
                              <br />
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      </DrawerBody>
                      <hr />
                      <DrawerFooter textAlign="center">
                        <Text>Version 2.51.65</Text>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </>
              </Flex>
            </Box>
          </HStack>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;

