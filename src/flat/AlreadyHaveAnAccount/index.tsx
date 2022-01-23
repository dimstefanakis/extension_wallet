import Link from "next/link";
import { Button } from "@chakra-ui/button";
import { Text, Flex, Box } from "@chakra-ui/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";

function AlreadyHaveAnAccount() {
  return (
    <Flex flexFlow="column" width="100%" alignItems="center">
      <Text>Already have a NEAR account?</Text>
      <Box mt={2}>
        <Link href="#">
          <Button rightIcon={<ChevronRightIcon />} colorScheme="gray">Log in with NEAR</Button>
        </Link>
      </Box>
    </Flex>
  );
}

export default AlreadyHaveAnAccount;
