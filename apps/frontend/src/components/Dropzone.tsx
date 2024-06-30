import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { ScanIcon } from "./Icon";
import { blobToBase64, getDeviceId, resizeImage } from "../util";
import { useWallet } from "@vechain/dapp-kit-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { submitReceipt } from "../networking";
import { useDisclosure, useSubmission } from "../hooks";

export const Dropzone = () => {
  const { account } = useWallet();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { setIsLoading, setResponse } = useSubmission();
  const { onOpen } = useDisclosure();
  const [isDragging, setIsDragging] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      onFileUpload(acceptedFiles); // Pass the files to the callback
    },
    maxFiles: 1, // Allow only one file
    accept: {
      "image/*": [], // Accept only image files
    },
    onDragEnter: () => {
      setIsDragging(true);
    },
    onDragLeave: () => {
      setIsDragging(false);
    },
  });

  const handleCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      alert("Recaptcha not loaded");
      return;
    }

    const token = await executeRecaptcha("submit_receipt");
    return token;
  }, [executeRecaptcha]);

  const onFileUpload = useCallback(
    async (files: File[]) => {
      if (files.length > 1 || files.length === 0) {
        alert("Please upload only one file");
        return;
      }

      if (!account) {
        alert("Please connect your wallet");
        return;
      }

      setIsLoading(true);
      onOpen();

      const file = files[0];

      const resizedBlob = await resizeImage(file);
      const base64Image = await blobToBase64(resizedBlob as Blob);

      const captcha = await handleCaptchaVerify();

      if (!captcha) {
        alert("Captcha failed, please try again");
        return;
      }

      const deviceID = await getDeviceId();

      try {
        const response = await submitReceipt({
          address: account,
          captcha,
          deviceID,
          image: base64Image,
        });

        console.log(response);

        setResponse(response);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    },
    [account, handleCaptchaVerify, onOpen, setIsLoading, setResponse]
  );

  return (
    <VStack w={"full"} mt={3}>
      <Box
        {...getRootProps()}
        p={5}
        border="2px"
        borderColor={isDragging ? "#FFA500" : "#00BF63"}
        borderStyle="dashed"
        borderRadius="md"
        bg={isDragging ? "#FFA5001A" : "#00BF6333"}
        textAlign="center"
        cursor="pointer"
        _hover={{
          borderColor: "#FFA500",
          bg: "#FFA5001A",
        }}
        w={"full"}
        h={"200px"}
        display="flex" // Make the Box a flex container
        alignItems="center" // Align items vertically in the center
        justifyContent="center" // Center content horizontally
      >
        <input {...getInputProps()} />
        <HStack>
          <ScanIcon size={120} color={"gray"} />
          <Text>Upload to scan</Text>
        </HStack>
      </Box>
    </VStack>
  );
};
