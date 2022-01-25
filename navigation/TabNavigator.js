import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationsScreen from "../screens/tabs/NotificationScreen";
import ProfileScreen from "../screens/tabs/ProfileScreen";
import ScannerScreen from "../screens/tabs/ScannerScreen";
import StoreNavigator from "./StoreNavigator";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
    <Tab.Screen
      name="Home"
      component={StoreNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <Feather name="home" color="black" size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Scanner"
      component={ScannerScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="scan" size={24} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="notifications" size={24} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <FontAwesome name="user" size={24} color="black" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
