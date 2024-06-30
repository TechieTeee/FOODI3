import { Box, Container, HStack, Image } from "@chakra-ui/react";
import { ConnectWalletButton } from "./ConnectWalletButton";

export const Navbar = () => {
  return (
    <Box
      px={0}
      position={"sticky"}
      top={0}
      zIndex={10}
      py={4}
      h={"auto"}
      w={"full"}
      bg={"#FFF8E7"} // Changed background color
      transition="background-color 0.3s ease" // Smooth transition for background color change
      _hover={{
        bg: "#F7FAFC", // Adjusted background color on hover
      }}
    >
      <Container
        w="full"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems={"center"}
        maxW={"container.xl"}
      >
        <HStack flex={1} justifyContent={"start"}>
          <Image
            src="/Foodi3_Logo.svg"
            width="33%"
            height="auto"
            transition="transform 0.3s ease" // Smooth transition for transform
            _hover={{
              transform: "rotate(360deg)", // Rotate on hover
            }}
          />
        </HStack>

        <HStack flex={1} spacing={4} justifyContent={"end"}>
          <ConnectWalletButton
            transition="transform 0.3s ease" // Smooth transition for transform
            _hover={{
              transform: "scale(1.1)", // Scale up on hover
            }}
          />
        </HStack>
      </Container>
    </Box>
  );
};
