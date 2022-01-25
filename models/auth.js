import { types, flow } from "mobx-state-tree";
import * as Device from "expo-device";
import { Alert } from "react-native";

const AuthStore = types
  .model({
    state: types.enumeration("state", ["user", "guest", "pending"]),
    id: types.optional(types.number, 0),
    email: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
    token: types.optional(types.string, ""),
  })
  .actions((self) => ({
    changeState(updatedState) {
      self.state = updatedState.state;
      self.token = updatedState.token;
      self.id = updatedState.id;
      self.name = updatedState.name;
      self.email = updatedState.email;
    },
    login: flow(function* login(email, password) {
      self.state = "pending";
      try {
        const response = yield fetch("http://10.0.2.2:8000/api/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            device_name: Device.deviceName,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const result = yield response.json();

        if (response.status == 201) {
          const updatedAuth = {
            ...result.user,
            ...{ token: result.token, state: "user" },
          };
          self.changeState(updatedAuth);
        } else {
          Alert.alert("Failed to login", result.message);
          self.state = "guest";
        }
      } catch (error) {
        Alert.alert("Failed to login", error.message);
        self.state = "guest";
      }
    }),
    logout() {
      self.changeState({
        state: "guest",
        token: "",
        id: 0,
        name: "",
        email: "",
      });
    },
  }))
  .views((self) => ({
    get isLoggedIn() {
      return self.state === "user";
    },
    get firstName() {
      return self.name.split(" ")[0];
    },
  }));

export default AuthStore;
