import { useState } from "react";
import {
  Button,
  HStack,
  Icon,
  Image,
  Input,
  Pressable,
  StatusBar,
  Text,
  useToast,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Screen } from "../components";
import {
  AuthResponse,
  useLoginByEmailAndPasswordMutation,
} from "../services/promisetag-api";
import { LoadingScreen } from "./LoadingScreen";
import * as Device from "expo-device";
import { useAppDispatch } from "../hooks/redux-toolkit";
import { login } from "../features/authSlice";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginByEmailAndPassword, { isLoading }] =
    useLoginByEmailAndPasswordMutation();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const handleLoginButtonClicked = async () => {
    try {
      const authResponse: AuthResponse = await loginByEmailAndPassword({
        email,
        password,
        device_name: Device.deviceName,
      }).unwrap();
      dispatch(
        login({
          authenticated: true,
          token: authResponse.token,
          user: authResponse.user,
        })
      );
    } catch (error) {
      toast.show({ description: error.data.message, status: "danger" });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Screen>
      <StatusBar barStyle={"dark-content"} />
      <VStack px={"4"} space={"4"} bg={"white"} borderBottomRadius={"20"}>
        <Image
          source={require("../assets/images/samples/login-bg-new.png")}
          w={"95%"}
          h={"50%"}
          mx={"auto"}
          alt="Login Image"
        />
        <Input
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="password"
          value={password}
          type={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Text textAlign={"right"}>Forgot Password?</Text>
        <Button size={"lg"} onPress={handleLoginButtonClicked}>
          Login
        </Button>
        <VStack alignItems={"center"} space={"2"}>
          <Text>Or login with</Text>
          <HStack space={"2"}>
            <Image
              source={require("../assets/images/samples/834722_facebook_icon.png")}
              size={"xs"}
              alt={"fb icon"}
            />
            <Image
              source={require("../assets/images/samples/google-logo-9808.png")}
              size={"xs"}
              alt={"google icon"}
            />
          </HStack>
          <HStack>
            <Text>Don't have an account? </Text>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text fontWeight={"bold"}>Sign Up</Text>
            </Pressable>
          </HStack>
        </VStack>
      </VStack>
      <HStack justifyContent="flex-end" my={"2"} mr={"4"} alignItems={"center"}>
        <Text>Continue as guest</Text>
        <Icon as={<MaterialIcons name="arrow-right" />} size={"md"} />
      </HStack>
    </Screen>
  );
};
