import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HStack } from "native-base";
import { routes } from "../constants";
import { CategoryScreen } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import { ProductListScreen } from "../screens/ProductListScreen";

const StoreStack = createNativeStackNavigator();

export const StoreNavigator = () => {
  return (
    <StoreStack.Navigator
      initialRouteName={routes.CATEGORY}
      screenOptions={({ navigation }) => ({
        animation: "slide_from_right",
        headerTitle: `Hi`,
        headerRight: () => (
          <HStack space="4">
            <Ionicons name="cart-outline" size={24} color="black" />
          </HStack>
        ),
      })}
    >
      {/*<StoreStack.Screen*/}
      {/*  name={routes.PROMISE_TAG}*/}
      {/*  component={PromisetagScreen}*/}
      {/*  options={{*/}
      {/*    headerShadowVisible: false,*/}
      {/*    headerStyle: {*/}
      {/*      backgroundColor: "#f5f5f5",*/}
      {/*    },*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<StoreStack.Screen*/}
      {/*  name={routes.FILE_LIST}*/}
      {/*  component={FileListScreen}*/}
      {/*  options={{*/}
      {/*    headerShadowVisible: false,*/}
      {/*    headerStyle: {*/}
      {/*      backgroundColor: "#f5f5f5",*/}
      {/*    },*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<StoreStack.Screen*/}
      {/*  name={routes.MY_ACCOUNT}*/}
      {/*  component={MyAccountScreen}*/}
      {/*  options={{*/}
      {/*    headerShadowVisible: false,*/}
      {/*    headerStyle: {*/}
      {/*      backgroundColor: "#f5f5f5",*/}
      {/*    },*/}
      {/*  }}*/}
      {/*/>*/}
      <StoreStack.Screen name={routes.CATEGORY} component={CategoryScreen} />
      <StoreStack.Screen
        name={routes.PRODUCT_LIST}
        component={ProductListScreen}
      />
      {/*<StoreStack.Screen*/}
      {/*  name={routes.PRODUCT_DETAIL}*/}
      {/*  component={ProductDetailScreen}*/}
      {/*/>*/}
      {/*<StoreStack.Screen*/}
      {/*  name={routes.GENERATE_QR}*/}
      {/*  component={GenerateQRScreen}*/}
      {/*/>*/}
      {/*<StoreStack.Screen*/}
      {/*  name={routes.CART}*/}
      {/*  component={CartScreen}*/}
      {/*  options={() => ({*/}
      {/*    headerTitle: "Your Cart",*/}
      {/*  })}*/}
      {/*/>*/}
      {/*<StoreStack.Screen*/}
      {/*  name={routes.CART_DELIVERY}*/}
      {/*  component={CartDeliveryScreen}*/}
      {/*/>*/}
    </StoreStack.Navigator>
  );
};
