import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TourScreen from "../screens/TourScreen";
import TabNavigator from "./TabNavigator";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Tab"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen name="Tour" component={TourScreen} />
  </HomeStack.Navigator>
);

export default HomeNavigator;
