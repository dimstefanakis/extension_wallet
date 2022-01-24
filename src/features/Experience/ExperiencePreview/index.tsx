import { useRouter } from "next/router";
import { Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { ExperienceProps } from "../interface";

function ExperiencePreview({
  title,
  description,
  userCount,
  avatar,
  slug,
  color,
}: ExperienceProps) {
  const router = useRouter();

  function handleExperiencePreviewClick(){
    router.push(`/experience/${slug}`)
  }

  return (
    <Flex mb="10px" alignItems="center" onClick={handleExperiencePreviewClick} data-testid="experiencePreview">
      <Image h="75px" w="75px" src={avatar} mr="17px" />
      <Flex flexFlow="column" flex="1" justifyContent="space-evenly">
        <Text fontSize="16px" fontWeight="600" color="text.200">
          {title}
        </Text>
        <Text mt="5px" fontSize="12px" color="text.300">
          {description}
        </Text>
        <Text color="blue.300" fontSize="12px" mt="1px">
          +{userCount} users
        </Text>
      </Flex>
      <Flex
        width="50px"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <ChevronRightIcon />
      </Flex>
    </Flex>
  );
}

export default ExperiencePreview;
