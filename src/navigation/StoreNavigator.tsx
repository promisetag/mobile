import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HStack } from "native-base";
import { routes } from "../constants";
import {
  CategoryScreen,
  CategorySelectedScreen,
  ProductDetailScreen,
  QrGeneratedScreen,
  SelectPresetScreen,
  TagDesignerScreen,
} from "../screens";
import { Ionicons } from "@expo/vector-icons";
import { LoginScreen } from "../screens/LoginScreen";
import { useAppSelector } from "../hooks/redux-toolkit";

const StoreStack = createNativeStackNavigator();

export const StoreNavigator = () => {
  const authenticated = useAppSelector((state) => state.auth.authenticated);
  return (
    <StoreStack.Navigator
      initialRouteName={routes.CATEGORY}
      screenOptions={({ navigation }) => ({
        animation: "slide_from_right",
        headerTitle: `PromiseTag`,
        headerRight: () => (
          <HStack space="4">
            <Ionicons name="cart-outline" size={24} color="black" />
          </HStack>
        ),
      })}
    >
      <StoreStack.Group navigationKey={authenticated ? "user" : "guest"}>
        <StoreStack.Screen name={routes.CATEGORY} component={CategoryScreen} />
        <StoreStack.Screen
          name={routes.CATEGORY_SELECTED}
          component={CategorySelectedScreen}
        />
        <StoreStack.Screen
          name={routes.PRODUCT_DETAIL}
          component={ProductDetailScreen}
        />
        <StoreStack.Screen
          name={routes.SELECT_PRESET}
          component={SelectPresetScreen}
          options={{
            headerTitle: "Select Preset Design",
            headerShadowVisible: false,
          }}
        />
        <StoreStack.Screen
          name={routes.TAG_DESIGNER}
          component={TagDesignerScreen}
          options={{
            headerTitle: "Design Your Tag",
            headerStyle: {
              backgroundColor: "#b4d1d7",
            },
            headerShadowVisible: false,
          }}
        />
      </StoreStack.Group>
      {authenticated ? (
        <StoreStack.Group>
          <StoreStack.Screen
            name={routes.QR_GENERATED}
            component={QrGeneratedScreen}
            options={{
              headerTitle: "QR Generated",
              headerStyle: {
                backgroundColor: "#b4d1d7",
              },
              headerShadowVisible: false,
            }}
          />
          {/*<StoreStack.Screen*/}
          {/*  name={routes.UPLOAD_MEDIA}*/}
          {/*  component={UploadMediaScreen}*/}
          {/*  options={{*/}
          {/*    headerTitle: "Design Your Tag",*/}
          {/*    headerStyle: {*/}
          {/*      backgroundColor: "#b4d1d7",*/}
          {/*    },*/}
          {/*    headerShadowVisible: false,*/}
          {/*  }}*/}
          {/*/>*/}
          {/*<StoreStack.Screen*/}
          {/*  name={routes.GENERATE_QR}*/}
          {/*  component={GenerateQRScreen}*/}
          {/*/>*/}
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
        </StoreStack.Group>
      ) : (
        <StoreStack.Group>
          <StoreStack.Screen
            name={routes.LOGIN}
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <StoreStack.Screen name={routes.REGISTER} component={LoginScreen} />
        </StoreStack.Group>
      )}
    </StoreStack.Navigator>
  );
};
