import Link from "next/link";
import { Button } from "@chakra-ui/button";
import { Text, Flex, Box } from "@chakra-ui/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { PrimaryButtonProps } from "./interface";

function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <Button
      rightIcon={props.rightIcon ? props.rightIcon : <ChevronRightIcon />}
      colorScheme="gray"
      {...props}
    >
      {props.children}
    </Button>
  );
}

export default PrimaryButton;
