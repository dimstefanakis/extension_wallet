import { Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { HeaderProps, NonAuthenticatedHeaderProps } from "./interface";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function Header({ title }: HeaderProps) {
  const { isLoggedIn } = useSelector(
    (state: RootState) => state.authentication
  );

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height={isLoggedIn ? 70 : 50}
      backgroundColor="#F5F5F5"
      borderBottom="1px solid #DFDFE0"
    >
      {isLoggedIn ? null : <NonAuthenticatedHeader title={title}/>}
    </Flex>
  );
}

function NonAuthenticatedHeader({ title }: NonAuthenticatedHeaderProps) {
  return title ? <Text>{title}</Text> : <Image src="/homepage.png" height="25px"/>;
}

export default Header;
