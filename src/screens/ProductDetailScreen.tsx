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
import { ImageCarousel, Screen, StarRating } from "../components";
import { routes } from "../constants";
import { useGetProductByIdQuery } from "../services/promisetag-api";
import { LoadingScreen } from "./LoadingScreen";

export const ProductDetailScreen = ({ navigation }) => {
  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetProductByIdQuery(1);

  console.log(product);

  if (isError) {
    console.log(error);
    // @ts-ignore
    return <Text>Error: {error.error}</Text>;
  }
  if (isLoading) return <LoadingScreen />;

  return (
    <Screen>
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
                        src={item.image_url}
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
                <StarRating rating={product.reviews_avg_rating} />
                <Text color={"muted.500"}>{product.reviews_count} reviews</Text>
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
          <Button
            colorScheme={"amber"}
            onPress={() => navigation.navigate(routes.SELECT_PRESET)}
          >
            Select Preset
          </Button>
          <Button onPress={() => navigation.navigate(routes.TAG_DESIGNER)}>
            Design Your Own
          </Button>
        </HStack>
      </Box>
    </Screen>
  );
};
