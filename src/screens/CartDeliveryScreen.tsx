import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Select,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";
import { CartTabs, Screen } from "../components";
import { images } from "../constants";

export const CartDeliveryScreen = () => {
  const [quantity, setQuantity] = useState("1");

  return (
    <Screen>
      <Box bg="white" rounded="md" p="4" m="4">
        <HStack space="4">
          <Image
            source={images.TAG}
            alt="product"
            size="md"
            resizeMode="contain"
          />
          <VStack space="4">
            <HStack justifyContent="space-between">
              <Heading size="sm" width="60%">
                Promisetag metal token with chain
              </Heading>
              <IconButton
                icon={
                  <MaterialCommunityIcons
                    name="delete-outline"
                    size={24}
                    color="red"
                  />
                }
              />
            </HStack>
            <HStack justifyContent="space-between" alignItems="center">
              <HStack alignItems="center" space="2">
                <Text>Qty:</Text>
                <Select
                  w="12"
                  selectedValue={quantity}
                  onValueChange={(itemValue) => setQuantity(itemValue)}
                  dropdownIcon={
                    <Icon
                      as={Ionicons}
                      name="chevron-down-sharp"
                      size="4"
                      key="font-family"
                    />
                  }
                >
                  <Select.Item value="1" label="1" key="1" />
                  <Select.Item value="2" label="2" key="2" />
                  <Select.Item value="3" label="3" key="3" />
                  <Select.Item value="4" label="4" key="4" />
                </Select>
              </HStack>
              <Heading size="sm">Rs. 1045</Heading>
            </HStack>
          </VStack>
        </HStack>
      </Box>
      <CartTabs />
    </Screen>
  );
};
