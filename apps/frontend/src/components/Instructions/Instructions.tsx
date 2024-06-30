import { Card, Flex, Image, Text } from "@chakra-ui/react";

const Steps = [
  {
    icon: "/notification.png",
    title: "1. TAG",
    description: "Tag, you're it! Get real-time notifications for manager specials. Visit your preferred store and snag your favorite deals.",
  },
  {
    icon: "/grocery-cart.png",
    title: "2. SNAG",
    description: "Head to your chosen store and snag your favorite deals.",
  },
  {
    icon: "/money.png",
    title: "3. BAG",
    description: "Secure the bag: scan your receipt, compete on the foodi3 leaderboard and earn rewards like extra grocery discounts, savings on local events, and B3tter tokens for anything.",
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w="full" bg="#FFF8E7" borderRadius={8} p={4}>
      <Flex
        p={{ base: 4 }}
        w="full"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
      >
        {Steps.map((step, index) => (
          <Flex
            key={index}
            direction="column"
            alignItems="center"
            maxW={{ base: "full", md: "md" }}
            p={6}
            borderWidth={1}
            borderRadius={8}
            borderColor="#E2E8F0"
            bg="white"
            m={{ base: 4, md: 2 }}
            textAlign="center"
            boxShadow="base"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-4px)",
              shadow: "lg",
            }}
          >
            <Image
              src={step.icon}
              boxSize={{ base: "50px", md: "70px" }}
              mx="auto"
              my={4}
              alt={step.title}
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
              }}
            />
            <Text mt={4} fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
              {step.title}
            </Text>
            <Text mt={2} fontSize={{ base: "sm", md: "md" }}>
              {step.description}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
};
