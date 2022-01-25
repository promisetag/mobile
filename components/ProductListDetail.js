import { AspectRatio, Box, HStack, Image, Text, VStack } from "native-base";
import { Dimensions } from "react-native";
import HeartOutlineIcon from "../assets/icons/HeartOutlineIcon";
import StarOutlineIcon from "../assets/icons/StarIcon";

const ProductListDetail = ({ thumbnailUrl, title, price, reviews }) => {
  const screen = Dimensions.get("screen");
  return (
    <Box mx="4">
      <VStack>
        <Box position="relative">
          <AspectRatio ratio={2 / 3} w={screen.width / 2 - 50}>
            <Image
              source={{ uri: thumbnailUrl }}
              alt="thumbnail"
              resizeMode="contain"
            />
          </AspectRatio>
          <Box position="absolute" right="8" top="8">
            <HeartOutlineIcon size="8" color="muted.200" />
          </Box>
        </Box>
        <HStack>
          <VStack flex="1">
            <Text isTruncated maxW="90%">
              {title}
            </Text>
            <Text color="muted.500">Rs. {price}</Text>
          </VStack>
          <HStack alignItems="center" space="2">
            <StarOutlineIcon size="4" />
            <Text>{reviews}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProductListDetail;
