import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ApplicationProvider } from "./models/root";
import AppNavigator from "./navigation";
import BottomDrawer from "./components/BottomDrawer";
import { NativeBaseProvider } from "native-base";
import borno from "./assets/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={borno}>
      <ApplicationProvider>
        <NavigationContainer>
          <AppNavigator />
          <BottomDrawer />
        </NavigationContainer>
      </ApplicationProvider>
    </NativeBaseProvider>
  );
}
