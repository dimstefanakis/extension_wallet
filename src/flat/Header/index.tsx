import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useSelector } from "react-redux";
import {
  ArrowBackIcon,
  BellIcon,
  SettingsIcon,
  StarIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import {
  HeaderProps,
  NonAuthenticatedHeaderProps,
} from "./interface";
import { RootState } from "../../store";

function Header({ title, rightAddon }: HeaderProps) {
  const { isLoggedIn } = useSelector(
    (state: RootState) => state.authentication
  );

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height={isLoggedIn ? "60px" : "50px"}
      minHeight={isLoggedIn ? "60px" : "50px"}
      backgroundColor="#F5F5F5"
      borderBottom="1px solid #DFDFE0"
    >
      {isLoggedIn ? (
        <AuthenticatedHeader />
      ) : (
        <NonAuthenticatedHeader title={title} rightAddon={rightAddon}/>
      )}
    </Flex>
  );
}

function AuthenticatedHeader() {
  const { account } = useSelector((state: RootState) => state.authentication);

  return (
    <Flex width="100%" alignItems="center" justifyContent="space-evenly">
      <ArrowBackIcon color="gray" />
      <StarIcon color="gray" />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        height="40px"
        width="170px"
        backgroundColor="white"
        border="1px solid #DFDFE0"
        borderRadius="100px"
        px={2}
        py={1}
      >
        <Box
          height="26px"
          width="26px"
          backgroundColor="red"
          borderRadius="100px"
        ></Box>
        <Text>{account?.account_id}</Text>
        <TriangleDownIcon color="gray" />
      </Flex>
      <BellIcon color="gray" />
      <SettingsIcon color="gray" />
    </Flex>
  );
}

function NonAuthenticatedHeader({ title, rightAddon }: NonAuthenticatedHeaderProps) {
  return (
    <Flex alignItems="center" position="relative" width="100%" justifyContent="center">
      {title ? (
        <Text>{title}</Text>
      ) : (
        <Image src="/homepage.png" height="25px" />
      )}
      <Flex position="absolute" right="20px">{rightAddon}</Flex>
    </Flex>
  );
}

export default Header;
