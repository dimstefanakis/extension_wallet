import Link from "next/link";
import { Button } from "@chakra-ui/button";
import { Text, Flex, Box } from "@chakra-ui/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { PrimaryButtonProps } from "./interface";

function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <Button
      rightIcon={props.rightIcon ? props.rightIcon : <ChevronRightIcon />}
      backgroundColor="text.200"
      color="white"
      _hover={{ bg: "text.200" }}
      _active={{
        bg: "text.200",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
}

export default PrimaryButton;
