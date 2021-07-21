import React, { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";

import { BsHouseFill, BsPersonBoundingBox } from "react-icons/bs";
import {
  FaCode,
  FaComments,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaStream,
  FaTwitter,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import Annes from "./images/Annes.jpeg";
import Logo from "./images/Logo.png";
import Logov2 from "./images/Logov2.png";
import ThemeButton from "./ThemeButton";

function App(props) {
  const [logo, setLogo] = useState(true);

  return (
    <>
      {/* <Container border="5px" maxW="full" bgColor="blue.200" p={0} m={0}> */}
      <Flex>
        <Box
          borderRight="1px"
          p={10}
          h="100vh"
          minHeight="100vh"
          position="fixed"
        >
          <Flex direction="column" w="190px">
            <Image boxSize="150px" src={logo ? Logov2 : Logo} alt="" />
            <Box onClick={() => setLogo((logo) => !logo)}>
              <ThemeButton />
            </Box>
            <VStack pt={20} w="70px" h="560px" mt={50}>
              <HStack px={5} pb={2} m={0} cursor="pointer">
                <Icon fontSize="xl" as={BsHouseFill}></Icon>
                <Text fontSize="lg" fontWeight="bold" pt={1} pl={2}>
                  Home
                </Text>
              </HStack>
              <HStack px={5} pb={2} m={0} cursor="pointer">
                <Icon fontSize="xl" as={BsPersonBoundingBox}></Icon>
                <Text fontSize="lg" fontWeight="bold" pt={1} pl={2}>
                  About
                </Text>
              </HStack>
              <HStack px={5} pb={2} m={0} cursor="pointer">
                <Icon fontSize="xl" as={FaCode}></Icon>
                <Text fontSize="lg" fontWeight="bold" pt={1} pl={2}>
                  Skills
                </Text>
              </HStack>
              <HStack pl={4} pb={2} m={0} cursor="pointer">
                <Icon fontSize="xl" as={FaStream}></Icon>
                <Text fontSize="lg" fontWeight="bold" pt={1} pl={2}>
                  Project
                </Text>
              </HStack>
              <HStack pl={5} pb={2} m={0} cursor="pointer">
                <Icon fontSize="xl" as={FaComments}></Icon>
                <Text fontSize="lg" fontWeight="bold" pt={1} pl={2}>
                  Contact
                </Text>
              </HStack>
            </VStack>
            <Box mt={112}>
              <Text>Yohanes.</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex
        w="auto"
        h="100vh"
        ml={270}
        // bgGradient={[
        //   "linear(to-tr, teal.300,yellow.400)",
        //   "linear(to-t, blue.200, teal.500)",
        //   "linear(to-b, orange.100, gray.300)",
        // ]}
      >
        <Box className="container" w="100%" mx={40} my="auto" px={15}>
          <VStack
            justifyContent="center"
            alignItems="center"
            spacing={4}
            maxW={540}
            m="auto"
            position="relative"
            zIndex={1}
          >
            <WrapItem>
              <Avatar size="xl" name="Christian Nwamba" src={Annes} />
            </WrapItem>
            <Heading as="h4" size="md">
              Yohanes Ray Febriyanto Silitonga
            </Heading>
            <Text fontSize="md">I'm a Front-End Developer</Text>
            <HStack spacing={2}>
              <IconButton
                aria-label="Search database"
                icon={<FaLinkedinIn />}
              />
              <IconButton aria-label="Search database" icon={<FaGithub />} />
              <IconButton aria-label="Search database" icon={<IoIosMail />} />
              <IconButton aria-label="Search database" icon={<FaTwitter />} />
              <IconButton aria-label="Search database" icon={<FaInstagram />} />
            </HStack>
          </VStack>
        </Box>
      </Flex>
      {/* </Container> */}
    </>
  );
}

export default App;
