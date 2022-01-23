import { Text, Flex } from "@chakra-ui/layout";
import { SectionHeaderProps } from "./interface";

function SectionHeader({ title, rightAddon }: SectionHeaderProps) {
  return (
    <Flex width="100%">
      <Text flex="1">{title}</Text>
      {rightAddon}
    </Flex>
  );
}

export default SectionHeader;
