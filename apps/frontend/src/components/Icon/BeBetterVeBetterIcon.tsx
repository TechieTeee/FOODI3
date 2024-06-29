import { Image, ImageProps, VStack } from "@chakra-ui/react"
import React from "react"

type Props = {
  beBetterProps?: ImageProps
  veBetterProps?: ImageProps
}

/**
 * BeBetterVeBetterIcon displays the BeBetterVeBetter logo
 */
export const BeBetterVeBetterIcon: React.FC<Props> = ({ veBetterProps, beBetterProps }) => (
  <VStack spacing={2} align="flex-start" w="full">
    <Image src="/Foodi3_Logo.svg"  {...veBetterProps}  width="33%" height="auto"/>
  </VStack>
)
