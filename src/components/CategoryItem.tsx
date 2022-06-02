import {
  Box,
  Heading,
  Image,
  Text,
  useContrastText,
  VStack,
} from "native-base";
import { Pressable } from "react-native";
import { routes } from "../constants";
import { useAppDispatch } from "../hooks/redux-toolkit";
import { setCategory } from "../features/categorySlice";

export const CategoryItem = ({ item, navigation }) => {
  const dispatch = useAppDispatch();
  const textColor = useContrastText(item.background_color);

  const onCategorySelected = () => {
    dispatch(setCategory(item));
    navigation.navigate(routes.CATEGORY_SELECTED);
  };

  return (
    <Pressable onPress={onCategorySelected}>
      <Box my="4" bg={item.background_color} borderRadius="8" px="8" py={"8"}>
        <Image
          position={"absolute"}
          bottom={0}
          right={0}
          src={item.image_url}
          size={"xl"}
          key={item.title}
          resizeMode={"contain"}
          alt={item.title}
        />
        <VStack space="sm" w="3/5">
          <Heading textTransform="uppercase" size={"md"} color={textColor}>
            {item.title}
          </Heading>
          <Text isTruncated noOfLines={2} color={textColor}>
            {item.description}
          </Text>
        </VStack>
      </Box>
    </Pressable>
  );
};
