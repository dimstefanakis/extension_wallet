import { Flex } from "@chakra-ui/layout";
import { LayoutProps } from "./interface";

function Layout({ children }: LayoutProps) {
  return (
    <Flex
      flexFlow="column"
      width="100%"
      height="100%"
      maxW="362px"
      maxH="604px"
    >
      {children}
    </Flex>
  );
}

export default Layout;
