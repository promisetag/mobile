import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HStack } from "native-base";
import CogOutlineIcon from "../assets/icons/CogOutlineIcon";
import ShoppingCartIcon from "../assets/icons/ShoppingCartIcons";
import { useMst } from "../models/root";
import CartDeliveryScreen from "../screens/store/CartDeliveryScreen";
import CartScreen from "../screens/store/CartScreen";
import CategoryScreen from "../screens/store/CategoryScreen";
import FileListScreen from "../screens/store/FileListScreen";
import GenerateQRScreen from "../screens/store/GenerateQRScreen";
import MyAccountScreen from "../screens/store/MyAccountScreen";
import ProductDetailScreen from "../screens/store/ProductDetailScreen";
import ProductListScreen from "../screens/store/ProductListScreen";
import PromisetagScreen from "../screens/store/PromistagScreen";
import routes from "./routes";

const StoreStack = createNativeStackNavigator();

const StoreNavigator = () => {
  const { drawer, auth } = useMst();

  return (
    <StoreStack.Navigator
    initialRouteName={routes.CART_DELIVERY}
      screenOptions={({ navigation }) => ({
        animation: "slide_from_right",
        headerTitle: `Hi ${auth.firstName}`,
        headerRight: () => (
          <HStack space="4">
            <ShoppingCartIcon
              size="8"
              onPress={() => navigation.navigate(routes.CART)}
            />
            <CogOutlineIcon size="8" onPress={() => drawer.toggle()} />
          </HStack>
        ),
      })}
    >
      <StoreStack.Screen
        name={routes.PROMISE_TAG}
        component={PromisetagScreen}
        options={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#f5f5f5",
          },
        }}
      />
      <StoreStack.Screen
        name={routes.FILE_LIST}
        component={FileListScreen}
        options={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#f5f5f5",
          },
        }}
      />
      <StoreStack.Screen
        name={routes.MY_ACCOUNT}
        component={MyAccountScreen}
        options={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#f5f5f5",
          },
        }}
      />
      <StoreStack.Screen name={routes.CATEGORY} component={CategoryScreen} />
      <StoreStack.Screen
        name={routes.PRODUCT_LIST}
        component={ProductListScreen}
      />
      <StoreStack.Screen
        name={routes.PRODUCT_DETAIL}
        component={ProductDetailScreen}
      />
      <StoreStack.Screen
        name={routes.GENERATE_QR}
        component={GenerateQRScreen}
      />
      <StoreStack.Screen
        name={routes.CART}
        component={CartScreen}
        options={() => ({
          headerTitle: "Your Cart",
        })}
      />
    <StoreStack.Screen name={routes.CART_DELIVERY} component={CartDeliveryScreen} />
    </StoreStack.Navigator>
  );
};

export default StoreNavigator;
