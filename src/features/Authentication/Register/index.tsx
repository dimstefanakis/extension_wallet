import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/layout";
import Link from "next/link";
import ViaPhone from "./ViaPhone";
import ViaEmail from "./ViaEmail";
import AlreadyHaveAnAccount from "../../../flat/AlreadyHaveAnAccount";
import Divider from "../../../flat/Divider";
import useNavigateToMainPageIfLoggedIn from "./hooks/useNavigateToMainPageIfLoggedIn";

function Register() {
  useNavigateToMainPageIfLoggedIn();
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      flexFlow="column"
    >
      <Tabs variant="unstyled" width="100%" justifyContent="center">
        <TabList my={6} justifyContent="center">
          <Tab
            border="1px solid transparent"
            borderRadius="10px"
            _selected={{ border: "1px solid #BEBEC2" }}
          >
            Email
          </Tab>
          <Tab
            border="1px solid transparent"
            borderRadius="10px"
            _selected={{ border: "1px solid #BEBEC2" }}
          >
            Phone
          </Tab>
        </TabList>

        <TabPanels display="flex" justifyContent="center" width="100%">
          <TabPanel width="100%">
            <ViaEmail />
          </TabPanel>

          <TabPanel width="100%">
            <ViaPhone />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Text fontSize="12px" color="#6F6E73" textAlign="center">
        by clicking continue you must agree to near labs{" "}
        <Link href="#">
          <a style={{ color: "#2196f3" }}>Terms & Conditions</a>
        </Link>{" "}
        and{" "}
        <Link href="#">
          <a style={{ color: "#2196f3" }}>Privacy Policy</a>
        </Link>
      </Text>
      <Divider />
      <AlreadyHaveAnAccount />
    </Flex>
  );
}

export default Register;
