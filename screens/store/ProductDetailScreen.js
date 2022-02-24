import { Box, FlatList, HStack, Image, Text, VStack } from "native-base";
import { Dimensions } from "react-native";
import Ratings from "../../components/Ratings";

const ProductDetailScreen = ({ route, navigation }) => {
  const { width } = Dimensions.get("screen");
  const productDetail = {
    thumbnails: [
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    ],
    id: 1,
    wishlisted: true,
    colors: ["black", "red", "yellow"],
    name: "The DogTag",
    stock: 12,
    reviews_count: 30,
    avg_rating: 4.9,
    sizes: ["S", "M", "L", "XL"],
    max_allowed_quantity: 5,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 1750,
  };

  const renderImages = ({ item, index }) => {
    return (
      <Box>
        <Image
          source={{ uri: item }}
          alt="image slider"
          width={width}
          height="full"
        />
      </Box>
    );
  };

  const { id } = route.params;
  return (
    <VStack>
      <Box h="1/2" w="full" bg="amber.200">
        <FlatList
          data={productDetail.thumbnails}
          renderItem={renderImages}
          keyExtractor={(item, index) => index}
        />
      </Box>
      <Box h="1/2" w="full" bg="blue.500">
        <VStack>
          <HStack space="8">
            <Text>{productDetail.name}</Text>
            <Text>(Only {productDetail.stock} left)</Text>
          </HStack>
          <HStack space="8">
            <Ratings rating={productDetail.avg_rating} />
            <Text>{productDetail.avg_rating}</Text>
            <Text>{productDetail.reviews_count} reviews</Text>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default ProductDetailScreen;
