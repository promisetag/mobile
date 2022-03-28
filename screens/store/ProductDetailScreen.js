import {
  AddIcon,
  Box,
  Button,
  Divider,
  FlatList,
  Heading,
  HStack,
  Image,
  MinusIcon,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { Dimensions } from "react-native";
import ShoppingCartIcon from "../../assets/icons/ShoppingCartIcons";
import Ratings from "../../components/Ratings";
import routes from "../../navigation/routes";

const ProductDetailScreen = ({ route, navigation }) => {
  const { width } = Dimensions.get("screen");
  const productDetail = {
    thumbnails: [
      {
        id: 1,
        uri: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        alt: "product one",
      },
      {
        id: 2,
        uri: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        alt: "product two",
      },
      {
        id: 3,
        uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        alt: "product three",
      },
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

  const renderImages = ({ item }) => {
    return (
      <Box
        position="relative"
        as="flex"
        alignItems="center"
        width={width}
        color="emerald.400"
      >
        <Image
          source={{ uri: item.uri }}
          alt="image slider"
          size="2xl"
          resizeMode="contain"
          key={item.id}
        />
      </Box>
    );
  };

  const { id } = route.params;
  return (
    <VStack>
      <Box h="35%" w="full" bg="amber.200">
        <FlatList
          data={productDetail.thumbnails}
          renderItem={renderImages}
          horizontal={true}
          keyExtractor={(item) => item.id}
        />
      </Box>
      <ScrollView h="65%" w="full" px="4" py="4">
        <VStack space="4">
          <HStack space="8">
            <Heading size="md">{productDetail.name}</Heading>
            <Text color="emerald.500">(Only {productDetail.stock} left)</Text>
          </HStack>
          <HStack space="8">
            <Ratings rating={productDetail.avg_rating} />
            <HStack space="2">
              <Text>{productDetail.avg_rating}</Text>
              <Text>({productDetail.reviews_count} reviews)</Text>
            </HStack>
          </HStack>
          <Text fontWeight="bold" color="emerald.500">
            Size Guide
          </Text>
          <HStack space="24">
            <Text fontWeight="medium">Size</Text>
            <HStack space="4">
              <Box
                borderRadius="full"
                borderWidth="1"
                w="8"
                h="8"
                as="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text>S</Text>
              </Box>
              <Box
                borderRadius="full"
                borderWidth="1"
                w="8"
                h="8"
                as="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text>M</Text>
              </Box>
              <Box
                borderRadius="full"
                borderWidth="1"
                w="8"
                h="8"
                as="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text>L</Text>
              </Box>
              <Box
                borderRadius="full"
                borderWidth="1"
                w="8"
                h="8"
                as="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text>XL</Text>
              </Box>
            </HStack>
          </HStack>
          <HStack space="20">
            <Text fontWeight="medium">Quantity</Text>
            <HStack space="4">
              <MinusIcon size="4" />
              <Text>1</Text>
              <AddIcon size="4" />
            </HStack>
          </HStack>
          <Divider orientation="horizontal" thickness="2" />
          <Box>
            <Heading size="xs">Description</Heading>
            <Text>{productDetail.description}</Text>
          </Box>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            bg="#3bd7cc"
            p="2"
            borderRadius="lg"
            shadow="4"
          >
            <Text ml="4" fontSize="xl" fontWeight="bold" color="white">
              Rs. 1750
            </Text>
            <Button
              onPress={() => navigation.navigate(routes.GENERATE_QR)}
              leftIcon={<ShoppingCartIcon w="3" h="3" />}
              bg="white"
            >
              Add to cart
            </Button>
          </HStack>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default ProductDetailScreen;
