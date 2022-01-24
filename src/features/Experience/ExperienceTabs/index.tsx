import Link from "next/link";
import { Text } from "@chakra-ui/layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { ExperienceTabsProps } from "./interface";


function ExperienceTabs({ longDescription, url }: ExperienceTabsProps) {
  return (
    <Tabs width="100%" colorScheme="gray.900">
      <TabList>
        <Tab width="50%">One</Tab>
        <Tab width="50%">Two</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Text color="text.200" fontWeight="600" fontSize="16px">
            Overview
          </Text>
          <Text mt={3}>{longDescription}</Text>
          <Flex alignItems="center" mt={3}>
            <CalendarIcon color="blue.300" />
            <Link href="#">
              <Text ml={2} color="blue.300">
                {url}
              </Text>
            </Link>
          </Flex>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default ExperienceTabs;
