import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductListScreen from "../screens/store/ProductListScreen";
import CategoryScreen from "../screens/store/CategoryScreen";
import { Ionicons } from "@expo/vector-icons";
import CartScreen from "../screens/store/CartScreen";
import { useMst } from "../models/root";
import routes from "./routes";
import { HStack } from "native-base";
import ShoppingCartIcon from "../assets/icons/ShoppingCartIcons";
import CogOutlineIcon from "../assets/icons/CogOutlineIcon";

const StoreStack = createNativeStackNavigator();

const StoreNavigator = () => {
  const { drawer, auth } = useMst();

  return (
    <StoreStack.Navigator
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
      <StoreStack.Screen name={routes.CATEGORY} component={CategoryScreen} />
      <StoreStack.Screen
        name={routes.PRODUCT_LIST}
        component={ProductListScreen}
      />
      <StoreStack.Screen name={routes.CART} component={CartScreen} />
    </StoreStack.Navigator>
  );
};

export default StoreNavigator;
