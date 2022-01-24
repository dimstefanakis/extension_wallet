import { Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { CategoryProps } from "./interface";

function CategoryPreview({ avatar, title, color }: CategoryProps) {
  return (
    <Flex
      data-testid="categoryPreview"
      height="100px"
      borderRadius="6px"
      width="160px"
      flexFlow="column"
      backgroundColor={color}
      justifyContent="space-between"
      p="12px"
      mb="16px"
    >
      <Image h="35px" w="35px" src={avatar} />
      <Flex justifyContent="space-between" alignItems="self-end">
        <Text mt={3} color="rgba(51, 55, 59, 0.7)" fontWeight="600">{title}</Text>
        <ChevronRightIcon mb="3px" color="text.200"/>
      </Flex>
    </Flex>
  );
}

export default CategoryPreview;
