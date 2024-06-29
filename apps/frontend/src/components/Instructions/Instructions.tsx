import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/notification.png",
    title: "TAG",
    description: "Tag, you're it! Get real-time notifications for manager specials. Visit your preferred store and snag your favorite deals.",
  },
  {
    icon: "/grocery-cart.png",
    title: "SNAG",
    description: "Head to your chosen store and snag your favorite deals.",
  },
  {
    icon: "/money.png",
    title: "BAG",
    description: "Secure the bag: scan your receipt, compete on the foodi3 leaderboard and earn rewards like extra grocery discounts, savings on local events, and B3tter tokens for anything.",
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w={"full"}>
      <Flex
        p={{ base: 4 }}
        w="100%"
        direction={{ base: "column", md: "row" }}
      >
        {Steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Flex>
    </Card>
  );
};
