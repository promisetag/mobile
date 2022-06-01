import { AspectRatio, Box, Heading, Image, Text, VStack } from "native-base";
import { Pressable } from "react-native";
import { routes } from "../constants";
import { useAppDispatch } from "../hooks/redux-toolkit";
import { setCategory } from "../features/categorySlice";

export const CategoryItem = ({ item, navigation }) => {
  const dispatch = useAppDispatch();

  const onCategorySelected = () => {
    dispatch(setCategory(item.title));
    navigation.navigate(routes.PRODUCT_LIST, { categoryId: item.id });
  };

  return (
    <Pressable onPress={onCategorySelected}>
      <Box
        my="4"
        bg={item.background_color}
        position="relative"
        borderRadius="32"
        px="8"
        h="40"
      >
        <Box position="absolute" top="0" right="0" bottom="0">
          <AspectRatio h="100%" ratio={2 / 3}>
            <Image source={{ uri: item.image_url }} alt="title" />
          </AspectRatio>
        </Box>
        <VStack space="sm" w="3/5" position="absolute" bottom="4" left="8">
          <Heading textTransform="uppercase">{item.title}</Heading>
          <Text isTruncated noOfLines={2}>
            {item.description}
          </Text>
        </VStack>
      </Box>
    </Pressable>
  );
};
