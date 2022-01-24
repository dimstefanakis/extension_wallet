import { Button, ButtonProps } from "@chakra-ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";

function ContinueButton(props: ButtonProps) {
  return (
    <Button
      name="continue"
      bg="brand.100"
      width="124px"
      color="white"
      mt={5}
      rightIcon={<ChevronRightIcon />}
      _hover={{ bg: "brand.100" }}
      _active={{
        bg: "brand.100",
      }}
      {...props}
    >
      Continue
    </Button>
  );
}

export default ContinueButton;
