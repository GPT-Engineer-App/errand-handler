import { Box, Flex, Heading, Spacer, Switch, useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "gray.100" : "gray.900"} px={4} py={2}>
      <Flex align="center">
        <Heading size="md">Todo App</Heading>
        <Spacer />
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      </Flex>
    </Box>
  );
};

export default Navbar;