import {
  Box,
  Card,
  HStack,
  Image,
  VStack,
  Text,
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import { MdOutlineArrowOutward } from "react-icons/md";

export const InfoCard = () => {
  return (
    <Card w={"full"} bg="#FFF8E7" borderRadius={16} p={3}>
      <VStack w={"full"} spacing={{ base: 2, md: 4 }}>
        <Image src="/Cover_Image.png" borderRadius={16} />
        <Flex
          w={"full"}
          justifyContent={"space-between"}
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
          p={4}  // Add padding to maintain spacing
        >
          <HStack alignSelf={{ base: "center", md: "flex-start" }}>
            <Image src="/logo.png" h={16} borderRadius={16} />
            <Text fontSize={24} fontWeight={800}>
              FOODI3
            </Text>
          </HStack>
          <Flex
            mt={{ base: 4, md: 0 }}
            direction={{ base: "column", md: "row" }}
          >
            <Link isExternal href="https://github.com/TechieTeee/Foodi3">
              <Button
                rounded={"full"}
                colorScheme="primary"
                size={"md"}
                leftIcon={<MdOutlineArrowOutward />}
                mt={{ base: 2, md: 0 }}
                ml={{ base: 0, md: 2 }}
                bg="#DB4A2B"  // Changed background color
              >
                Github repository
              </Button>
            </Link>
          </Flex>
        </Flex>
      </VStack>
    </Card>
  );
};
