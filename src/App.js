import React from "react";
import {
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  StackDivider,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { VscHome } from "react-icons/vsc";

function App() {
  return (
    <>
      {/* <Container border="5px" maxW="full" bgColor="blue.200" p={0} m={0}> */}
      <Flex>
        <Box
          borderRight="1px"
          bgColor="orange.100"
          p={10}
          h="100vh"
          minHeight="100vh"
          position="fixed"
        >
          <Flex direction="column" w="190px">
            <Box>
              <Text>Yohanes.</Text>
            </Box>
            <VStack pt={10} w="70px" h="560px" mt={50}>
              <HStack px={5} m={0} cursor="pointer">
                <Icon color="teal" fontSize="xl" as={VscHome}></Icon>
                <Text fontWeight="bold" pt={1} pl={2}>
                  Home
                </Text>
              </HStack>
              <HStack px={5} m={0} cursor="pointer">
                <Icon color="teal" fontSize="xl" as={VscHome}></Icon>
                <Text fontWeight="bold" pt={1} pl={2}>
                  Home
                </Text>
              </HStack>
              <HStack px={5} m={0} cursor="pointer">
                <Icon color="teal" fontSize="xl" as={VscHome}></Icon>
                <Text fontWeight="bold" pt={1} pl={2}>
                  Home
                </Text>
              </HStack>
              <HStack px={5} m={0} cursor="pointer">
                <Icon color="teal" fontSize="xl" as={VscHome}></Icon>
                <Text fontWeight="bold" pt={1} pl={2}>
                  Home
                </Text>
              </HStack>
              <HStack px={5} m={0} cursor="pointer">
                <Icon color="teal" fontSize="xl" as={VscHome}></Icon>
                <Text fontWeight="bold" pt={1} pl={2}>
                  Home
                </Text>
              </HStack>
            </VStack>
            <Box mt={112}>
              <Text>Yohanes.</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex w="auto" h="100vh" ml={270}>
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
              <Avatar
                size="xl"
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />{" "}
            </WrapItem>
            <Heading as="h4" size="md">
              Yohanes Ray Febriyanto Silitonga
            </Heading>
            <Text fontSize="md">I'm a Front-End Developer</Text>
            <HStack spacing={4}>
              <IconButton aria-label="Search database" icon={<SearchIcon />} />
            </HStack>
          </VStack>
        </Box>
      </Flex>
      {/* </Container> */}
    </>
  );
}

export default App;
