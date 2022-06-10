import { Heading, HStack, IconButton } from "native-base";
import DotsVerticalIcon from "../assets/icons/DotsVerticalIcon";

export function AccountHeader() {
  return (
    <HStack
      alignItems="flex-start"
      justifyContent="space-between"
      pr="4"
      pl={"45%"}
      py="4"
      h={"18%"}
      borderTopRadius="32"
      bgColor="muted.300"
    >
      <Heading size="lg" width="32">
        Avantika Ahuja
      </Heading>
      <IconButton icon={<DotsVerticalIcon size="8" />} />
    </HStack>
  );
}
