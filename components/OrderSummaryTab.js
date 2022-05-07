import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Input,
  Link,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";

const OrderSummaryTab = () => {
  const [coupon, setCoupon] = useState("One coupon applied");
  return (
    <ScrollView>
      <VStack p={"4"}>
        <HStack justifyContent={"center"} space={"2"}>
          <Text>Ship to:</Text>
          <Text fontWeight={"bold"}>Ashish Gole</Text>
        </HStack>
        <Text fontSize={"xs"} textAlign={"center"} my={"2"}>
          Cecilia Chapman, 711-2880 Nulla St. Lawrence...
        </Text>
        <Divider orientation={"horizontal"} bg={"muted.400"} />
        <Box px={"8"} py={"2"}>
          <HStack my={"2"} justifyContent={"center"}>
            <Text>Apply coupon code</Text>
          </HStack>
          <Input
            value={coupon}
            onChangeText={(newText) => setCoupon(newText)}
            InputRightElement={
              <Button
                onPress={() => setCoupon("")}
                size={"xs"}
                colorScheme={"danger"}
              >
                Remove
              </Button>
            }
            borderColor={"muted.500"}
          />
          <Text
            fontSize={"xs"}
            color={"emerald.500"}
            textAlign={"center"}
            my={"2"}
          >
            Offer applied on bill. You saved additional Rs. 99.
          </Text>
        </Box>
        <Divider orientation={"horizontal"} bg={"muted.400"} />
        <Box w={"80%"} mx={"auto"}>
          <Heading size={"md"} my={"2"}>
            Total
          </Heading>
          <VStack space={"1"}>
            <HStack justifyContent={"space-between"} p={"2"}>
              <Text fontWeight={"semibold"}>MRP</Text>
              <Text>Rs. 499</Text>
            </HStack>
            <HStack justifyContent={"space-between"} bg={"muted.200"} p={"2"}>
              <Text fontWeight={"semibold"}>Delivery</Text>
              <Text>Free</Text>
            </HStack>
            <HStack justifyContent={"space-between"} p={"2"}>
              <Text fontWeight={"semibold"}>Discount</Text>
              <Text color={"emerald.500"}>- Rs. 49</Text>
            </HStack>
            <HStack justifyContent={"space-between"} bg={"muted.200"} p={"2"}>
              <Text fontWeight={"semibold"}>Coupon discount</Text>
              <Text color={"emerald.500"}>- Rs. 99</Text>
            </HStack>
            <HStack justifyContent={"space-between"} p={"2"}>
              <Text fontWeight={"bold"}>Order Total</Text>
              <Text fontWeight={"bold"}>Rs. 1351</Text>
            </HStack>
          </VStack>
          <Text textAlign={"center"} my={"4"}>
            By continuing you agree to Promisetag's <Link>Terms of use</Link>{" "}
            and <Link>Privacy Policy</Link>
          </Text>
          <Button size={"lg"}>Continue</Button>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default OrderSummaryTab;
