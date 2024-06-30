import { Image, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
  beBetterProps?: ImageProps;
  veBetterProps?: ImageProps;
};

/**
 * BeBetterVeBetterIcon displays the BeBetterVeBetter logo
 */
export const BeBetterVeBetterIcon: React.FC<Props> = ({ veBetterProps, beBetterProps }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <VStack spacing={2} align="flex-start" w="full">
      <Image
        src="/Foodi3_Logo.svg"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        {...veBetterProps}
        width="33%"
        height="auto"
        transition="transform 0.3s ease-in-out"
        transform={hovered ? "rotateY(180deg)" : "rotateY(0deg)"}
        _hover={{
          transform: "rotateY(180deg)",
        }}
      />
    </VStack>
  );
};
