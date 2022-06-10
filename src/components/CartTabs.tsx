import { Box, Center, Flex, Text, useColorModeValue } from "native-base";
import * as React from "react";
import { Animated, Dimensions, Pressable } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { DeliveryTab } from "./DeliveryTab";
import { OrderSummaryTab } from "./OrderSummaryTab";

const PaymentTab = () => (
  <Center flex={1} my="4" key="3">
    This is Tab 3
  </Center>
);

const initialLayout = {
  width: Dimensions.get("window").width,
};
const renderScene = SceneMap({
  first: DeliveryTab,
  second: OrderSummaryTab,
  third: PaymentTab,
});

export const CartTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "Delivery",
    },
    {
      key: "second",
      title: "Order Summary",
    },
    {
      key: "third",
      title: "Payment Options",
    },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const fontWeight = index === i ? "bold" : "normal";
          const color =
            index === i
              ? useColorModeValue("#000", "#e5e5e5")
              : useColorModeValue("#1f2937", "#a1a1aa");
          const borderColor =
            index === i
              ? "cyan.500"
              : useColorModeValue("coolGray.200", "gray.400");
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              key={i}
            >
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}
              >
                <Flex
                  borderRadius={"16"}
                  bg={"gray.50"}
                  w={"8"}
                  h={"8"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Text>{i}</Text>
                </Flex>
                <Animated.Text
                  style={{
                    color,
                    fontWeight,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};
