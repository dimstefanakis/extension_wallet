import Link from "next/link";
import { Button } from "@chakra-ui/button";
import { Text, Flex, Box } from "@chakra-ui/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";
import PrimaryButton from "../PrimaryButton";

function AlreadyHaveAnAccount() {
  return (
    <Flex flexFlow="column" width="100%" alignItems="center">
      <Text color="text.200">Already have a NEAR account?</Text>
      <Box mt={2}>
        <Link href="#">
          <PrimaryButton rightIcon={<ChevronRightIcon />}>
            Log in with NEAR
          </PrimaryButton>
        </Link>
      </Box>
    </Flex>
  );
}

export default AlreadyHaveAnAccount;
