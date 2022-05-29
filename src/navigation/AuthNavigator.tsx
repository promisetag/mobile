import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "native-base";

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => (
  <Text>Auth Page</Text>
  // <AuthStack.Navigator>
  //   <AuthStack.Screen
  //     name="Login"
  //     component={LoginScreen}
  //     options={{ headerShown: false }}
  //   />
  //   <AuthStack.Screen
  //     name="Register"
  //     component={RegisterScreen}
  //     options={{ headerTitle: "Sign Up" }}
  //   />
  //   <AuthStack.Screen name="Otp" component={OtpScreen} />
  // </AuthStack.Navigator>
);
