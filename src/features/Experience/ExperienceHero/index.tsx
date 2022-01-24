import Link from "next/link";
import { Flex, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { ExternalLinkIcon, MoonIcon } from "@chakra-ui/icons";
import PrimaryButton from "../../../flat/PrimaryButton";
import { ExperienceProps } from "../interface";

function ExperienceHero({
  color,
  avatar,
  title,
  description,
  userCount
}: ExperienceProps) {
  return (
    <Flex flexFlow="column">
      <Box
        position="relative"
        height="70px"
        width="100%"
        backgroundColor={color}
      >
        <Image
          h="75px"
          w="75px"
          src={avatar}
          position="absolute"
          left="20px"
          top="30px"
        />
      </Box>
      <Flex justifyContent="flex-end" m={3}>
        <Link href="#">
          <Flex justifyContent="center" alignItems="center">
            <ExternalLinkIcon color="blue.400" />
            <Text color="blue.400" ml={2}>
              Share
            </Text>
          </Flex>
        </Link>
      </Flex>
      <Flex flexFlow="column" p={4}>
        <Text color="text.200" fontSize="18px" fontWeight="600">
          {title}
        </Text>
        <Text color="text.300" fontSize="14px">
          {description}
        </Text>
        <Link href="#">
          <Text color="blue.300" mt={3}>
            Utilities
          </Text>
        </Link>
        <Flex justifyContent="flex-start" alignItems="center" mt={5}>
          <PrimaryButton width="100px">Open</PrimaryButton>
          <MoonIcon ml={4} color="text.300"/>
          <Text ml={1} color="text.300">{userCount}+ users</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ExperienceHero;
