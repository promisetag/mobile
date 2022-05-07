import * as Device from "expo-device";
import { flow, types } from "mobx-state-tree";
import { Alert } from "react-native";
import { BASE_URL, HTTP_CLIENT_HEADERS } from "../constants/http-client";

const AuthStore = types
  .model({
    state: types.enumeration("state", ["user", "guest", "pending"]),
    id: types.optional(types.number, 0),
    email: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
    mobile: types.optional(types.string, ""),
    token: types.optional(types.string, ""),
  })
  .actions((self) => ({
    changeState(updatedState) {
      self.state = updatedState.state;
      self.token = updatedState.token;
      self.id = updatedState.id;
      self.name = updatedState.name;
      self.email = updatedState.email;
      self.mobile = updatedState.mobile_no;
    },
    register: flow(function* register(
      name,
      email,
      mobileNo,
      countryCode,
      password
    ) {
      self.state = "pending";
      try {
        const response = yield fetch(`${BASE_URL}/auth/register`, {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            mobileNo,
            countryCode,
            password,
            deviceName: Device.deviceName,
          }),
          headers: HTTP_CLIENT_HEADERS,
        });

        const result = yield response.json();

        if (response.ok) {
          console.log(result);
          self.login(email, password);
        } else {
          Alert.alert("Failed to login", result.message);
          self.state = "guest";
        }
      } catch (error) {
        Alert.alert("Failed to login", error.message);
        self.state = "guest";
      }
    }),
    login: flow(function* login(email, password) {
      self.state = "pending";
      try {
        const response = yield fetch(`${BASE_URL}/auth/login`, {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            deviceName: Device.deviceName,
          }),
          headers: HTTP_CLIENT_HEADERS,
        });

        const result = yield response.json();

        if (response.ok) {
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
