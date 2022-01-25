import { observer } from "mobx-react-lite";
import { useState } from "react";
import {
  Pressable,
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useMst } from "../../models/root";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = useMst();

  const login = () => {
    auth.login(email, password);
  };

  return (
    <View style={{ backgroundColor: "#ffd8d9", height: "100%" }}>
      {auth.state == "pending" && (
        <ActivityIndicator size="large" color="#00ff00" style={styles.loader} />
      )}
      <Image
        source={require("../../assets/images/login-bg.png")}
        style={{ marginLeft: -16, marginBottom: 16, height: "40%" }}
      />
      <View style={styles.container}>
        <View style={{ width: "auto" }}>
          <TextInput
            placeholder="email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="password"
            style={styles.input}
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={{ textAlign: "center" }}>Forgot Password?</Text>
          <Pressable style={styles.button_login} onPress={login}>
            <Text style={styles.button_login_text}>Login</Text>
          </Pressable>
          <Text style={{ textAlign: "center", marginTop: 16 }}>
            Or login with
          </Text>
          <View style={styles.button_group_social}>
            <Image
              source={require("../../assets/images/834722_facebook_icon.png")}
              style={styles.button_social}
            />
            <Image
              source={require("../../assets/images/google-logo-9808.png")}
              style={styles.button_social}
            />
          </View>
          <Text style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    borderTopRightRadius: 48,
    borderTopLeftRadius: 48,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    height: 50,
    textAlign: "center",
    fontSize: 16,
    margin: 12,
    borderWidth: 1,
    paddingVertical: 10,
    width: 250,
    borderRadius: 25,
  },

  button_login: {
    backgroundColor: "black",
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    alignItems: "center",
  },
  button_login_text: {
    color: "white",
    textAlign: "center",
    letterSpacing: 1,
  },
  button_social: { width: 40, height: 40, marginHorizontal: 8 },
  button_group_social: {
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
  },
  loader: {
    position: "absolute",
    justifyContent: "center",
    alignContent: "center",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#ffffff",
    opacity: 0.9,
    zIndex: 9999,
  },
});

export default observer(LoginScreen);
