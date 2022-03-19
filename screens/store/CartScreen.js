import {
  AddIcon,
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  MinusIcon,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import Screen from "../../components/Screen";

const CartScreen = () => {
  return (
    <Screen>
      <ScrollView p="4" h="60%">
        <Box bg="white" p="4" borderRadius="sm" shadow="9">
          <HStack space="4">
            <Image
              source={require("../../assets/images/qr/tagpng.png")}
              size="lg"
              alt="product_image"
              resizeMode="contain"
            />
            <VStack space="4">
              <Box>
                <Heading size="sm">Product Name</Heading>
                <Text>Product Description</Text>
              </Box>
              <HStack
                justifyContent="space-between"
                space="12"
                alignItems="center"
              >
                <Heading size="sm">₹250</Heading>
                <HStack alignItems="center" space="2">
                  <IconButton
                    icon={<MinusIcon size="4" />}
                    variant="outline"
                    borderRadius="full"
                    colorScheme="amber"
                  ></IconButton>
                  <Text size="4">01</Text>
                  <IconButton
                    icon={<AddIcon size="4" />}
                    variant="outline"
                    borderRadius="full"
                    colorScheme="amber"
                  ></IconButton>
                </HStack>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      </ScrollView>
      <VStack space="4" bg="white" p="4" borderTopRadius="lg">
        <HStack alignItems="center" justifyContent="space-between">
          <Heading size="sm" color="muted.500">
            Subtotal
          </Heading>
          <Text>₹250</Text>
        </HStack>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading size="sm" color="muted.500">
            Delivery & Handling
          </Heading>
          <Text>₹50</Text>
        </HStack>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading size="sm">Total</Heading>
          <Text>₹300</Text>
        </HStack>
        <HStack justifyContent="center">
          <Button w="full" borderRadius="lg" size="lg" colorScheme="pink">
            Checkout
          </Button>
        </HStack>
      </VStack>
    </Screen>
  );
};

export default CartScreen;
