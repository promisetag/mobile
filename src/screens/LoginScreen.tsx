import { useState } from "react";
import { useMst } from "../../models/root";
import Screen from "../components/Screen";
import {
  Button,
  HStack,
  Icon,
  Image,
  Input,
  Pressable,
  Spinner,
  StatusBar,
  Text,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = useMst();

  const login = () => {
    auth.login(email, password);
  };

  return (
    <Screen>
      <StatusBar barStyle={"dark-content"} />
      {auth.state === "pending" && <Spinner size="lg" />}
      <VStack px={"4"} space={"4"} bg={"white"} borderBottomRadius={"20"}>
        <Image
          source={require("../../src_bk/assets/images/login-bg-new.png")}
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
        <Button size={"lg"} onPress={login}>
          Login
        </Button>
        <VStack alignItems={"center"} space={"2"}>
          <Text>Or login with</Text>
          <HStack space={"2"}>
            <Image
              source={require("../../src_bk/assets/images/834722_facebook_icon.png")}
              size={"xs"}
              alt={"fb icon"}
            />
            <Image
              source={require("../../src_bk/assets/images/google-logo-9808.png")}
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
