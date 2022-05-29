import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StoreNavigator } from "./StoreNavigator";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
    <Tab.Screen
      name="Store"
      component={StoreNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="home" size={24} color={"black"} />
        ),
      }}
    />
    {/*<Tab.Screen*/}
    {/*    name="Scanner"*/}
    {/*    component={ScannerScreen}*/}
    {/*    options={{*/}
    {/*        tabBarIcon: ({focused, color, size}) => (*/}
    {/*            <Ionicons name="scan" size={24} color="black"/>*/}
    {/*        ),*/}
    {/*    }}*/}
    {/*/>*/}
    {/*<Tab.Screen*/}
    {/*  name="Notifications"*/}
    {/*  component={NotificationsScreen}*/}
    {/*  options={{*/}
    {/*    tabBarIcon: ({ focused, color, size }) => (*/}
    {/*      <Ionicons name="notifications" size={24} color="black" />*/}
    {/*    ),*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<Tab.Screen*/}
    {/*  name="Profile"*/}
    {/*  component={ProfileScreen}*/}
    {/*  options={{*/}
    {/*    tabBarIcon: ({ focused, color, size }) => (*/}
    {/*      <FontAwesome name="user" size={24} color="black" />*/}
    {/*    ),*/}
    {/*  }}*/}
    {/*/>*/}
  </Tab.Navigator>
);
