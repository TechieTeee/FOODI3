import { ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonStyle: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primarySubtle: {
      bg: "#DB4A2B", // Change the background color to #DB4A2B
      color: "white",  // Adjust text color for better contrast
      _hover: {
        bg: "#DB4A2B", // Keep hover background consistent
        opacity: 0.8,  // Apply opacity for hover effect
      },
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "md",
    rounded: "full",
    variant: "solid",
  },
};
