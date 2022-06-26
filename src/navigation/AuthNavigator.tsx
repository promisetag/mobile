import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./TabNavigator";

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name={"Tab"}
      component={TabNavigator}
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);
