import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";
import SectionHeader from "../../../flat/SectionHeader";
import CategoryPreview from "../CategoryPreview";
import categories from "../../../../mockdata/categories.json";

function PopularCategories() {
  return (
    <Flex width="100%" flexFlow="column">
      <SectionHeader
        title="Popular Categories"
        rightAddon={
          <Flex alignItems="center">
            <Text color="brand.100">See All</Text>
            <ChevronRightIcon ml={2} color="brand.100" h="20px" w="20px"/>
          </Flex>
        }
      />
      <Flex width="100%" flexFlow="row wrap" justifyContent="space-between">
        {categories.map((category) => {
          return (
            <React.Fragment key={category.title}>
              <CategoryPreview
                title={category.title}
                avatar={category.avatar}
                color={category.color}
              />
            </React.Fragment>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default PopularCategories;
