import { Text, Flex } from "@chakra-ui/layout";
import { SectionHeaderProps } from "./interface";

function SectionHeader({ title, rightAddon }: SectionHeaderProps) {
  return (
    <Flex width="100%" mb="16px" mt="20px" justifyContent="space-between">
      <Text color="text.200" fontSize="16px" fontWeight="600">{title}</Text>
      {rightAddon}
    </Flex>
  );
}

export default SectionHeader;
