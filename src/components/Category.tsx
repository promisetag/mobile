import { useNavigation } from "@react-navigation/native";
import { AspectRatio, Box, Heading, Image, Text, VStack } from "native-base";
import { Pressable } from "react-native";
import { routes } from "../constants";

export const Category = ({ id, title, description, color, imageUrl }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(routes.PRODUCT_LIST, { id })}>
      <Box
        my="4"
        bg={color}
        position="relative"
        borderRadius="32"
        px="8"
        h="40"
      >
        <Box position="absolute" top="0" right="0" bottom="0">
          <AspectRatio h="100%" ratio={2 / 3}>
            <Image source={{ uri: imageUrl }} alt="title" />
          </AspectRatio>
        </Box>
        <VStack space="sm" w="3/5" position="absolute" bottom="4" left="8">
          <Heading textTransform="uppercase">{title}</Heading>
          <Text>{description}</Text>
        </VStack>
      </Box>
    </Pressable>
  );
};
