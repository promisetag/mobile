import {
  Box,
  Heading,
  HStack,
  IconButton, SearchIcon,
  SectionList,
  StatusBar
} from "native-base";
import DotsVerticalIcon from "../../assets/icons/DotsVerticalIcon";
import Screen from "../../components/Screen";



const CartDeliveryScreen = () => {
  return (
    <Screen>
      <StatusBar barStyle={"dark-content"} />
      <Box mx="4">
        <HStack justifyContent="space-between">
          <Heading size="md">{title}</Heading>
          <HStack space="4">
            <IconButton icon={<SearchIcon size="4" />} variant="ghost" />
            <IconButton icon={<DotsVerticalIcon size="4" />} />
          </HStack>
        </HStack>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Heading size="sm" my="4">
              {title}
            </Heading>
          )}
          renderItem={(item) => <Item item={item} />}
        />
      </Box>
    </Screen>
  );
};

export default CartDeliveryScreen;
