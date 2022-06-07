import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  ScrollView,
  Text,
} from "native-base";
import { useWindowDimensions } from "react-native";
import { ImageCarousel, StarRating } from "../components";

const product = {
  images: [
    {
      id: 1,
      image_url: require("../assets/images/samples/products/product_image_001.jpg"),
      thumbnail_url: require("../assets/images/samples/products/thumbnails/product_image_001_tn.jpg"),
    },
    {
      id: 2,
      image_url: require("../assets/images/samples/products/product_image_002.jpg"),
      thumbnail_url: require("../assets/images/samples/products/thumbnails/product_image_002_tn.jpg"),
    },
    {
      id: 3,
      image_url: require("../assets/images/samples/products/product_image_003.jpg"),
      thumbnail_url: require("../assets/images/samples/products/thumbnails/product_image_003_tn.jpg"),
    },
  ],
  variants: [
    {
      type: "surface",
      value: "gold",
    },
    {
      type: "surface",
      value: "silver",
    },
  ],
  name: "The Promise Lovetag",
  ratings: {
    review_count: 36,
    avg_rating: 4,
  },
  original_price: 2349,
  discounted_price: 1499,
  quantity: 12,
  description:
    "Real toys left for makers then and should in farther had arranged return in seven. Business parents'. Star was, events, of forward a repeat troubled caution like so universal little. Best term every their it that with involved. Lift times, then their he epic I many to and deep follow.",
  quantity_threshold: 15,
};

const images = [];

export const ProductListScreen = ({ route, navigation }) => {
  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;
  return (
    <Box flex={"1"}>
      <Box h={windowHeight - 170}>
        <ScrollView>
          <Box>
            <Box h={"80"} pb={"4"}>
              <ImageCarousel
                data={product.images}
                width={windowWidth}
                renderItem={({ item }) => (
                  <Box>
                    <Image
                      key={item.id}
                      source={item.image_url}
                      resizeMode={"cover"}
                      width={windowWidth}
                      height={64}
                      alt={`slide_${item.id}`}
                    />
                  </Box>
                )}
              />
            </Box>
          </Box>
          <Box mt={"10"} mx={"4"}>
            <Heading size={"lg"}>{product.name}</Heading>
            <HStack space={"8"}>
              <StarRating rating={product.ratings.avg_rating} />
              <Text color={"muted.500"}>
                {product.ratings.review_count} reviews
              </Text>
            </HStack>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <HStack alignItems={"center"} space={"4"} my={"3"}>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                  Rs. {product.discounted_price}
                </Text>
                <Text
                  fontSize={"lg"}
                  color={"muted.500"}
                  textDecorationLine={"line-through"}
                >
                  Rs. {product.original_price}
                </Text>
              </HStack>
              <Text color={"red.500"}>
                {product.quantity <= product.quantity_threshold &&
                  `Only ${product.quantity} left`}
              </Text>
            </HStack>
            <Heading size={"xs"}>Description</Heading>
            <Box>
              <ScrollView>
                <Text>{product.description}</Text>
              </ScrollView>
            </Box>
          </Box>
        </ScrollView>
      </Box>
      <HStack justifyContent={"space-between"} m={"4"}>
        <Button colorScheme={"amber"}>Select Preset</Button>
        <Button>Design Your Own</Button>
      </HStack>
    </Box>
  );
};
