import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";
import { SearchIcon, UpDownIcon } from "@chakra-ui/icons";

function Search() {
  return (
    <Flex width="100%">
      <InputGroup width="80%">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input placeholder="Search experiences" variant="filled" />
      </InputGroup>
      <Flex width="20%" justifyContent="center" alignItems="center">
        <UpDownIcon w="18px" h="18px" color="gray"/>
      </Flex>
    </Flex>
  );
}

export default Search;
