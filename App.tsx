import AsyncStorage from "@react-native-async-storage/async-storage";
import { useReduxDevToolsExtension } from "@react-navigation/devtools";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider, StatusBar } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { Linking, Platform, View } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import appTheme from "./src/assets/theme";
import { BottomDrawer } from "./src/components";
import { customFonts, routes } from "./src/constants";
import { useAppSelector } from "./src/hooks/redux-toolkit";
import { AppNavigator } from "./src/navigation";
import { store } from "./src/store";

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [initialNavigationState, setInitialNavigationState] = useState();
  const authenticated = useAppSelector((state) => state.auth.authenticated);
  const navigationRef = useNavigationContainerRef();
  useReduxDevToolsExtension(navigationRef);

  const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE_V1";

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(customFonts);
        const restoreNavigationState = async () => {
          const initialUrl = Linking.getInitialURL();
          if (Platform.OS !== "web" && initialUrl === null) {
            const savedStateString = await AsyncStorage.getItem(
              NAVIGATION_PERSISTENCE_KEY
            );
            const state = savedStateString
              ? JSON.parse(savedStateString)
              : undefined;
            console.log(state);
            if (state !== undefined) {
              setInitialNavigationState(state);
            }
          }
        };
       await restoreNavigationState();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NativeBaseProvider theme={appTheme}>
        <NavigationContainer
          ref={navigationRef}
          initialState={initialNavigationState}
          onStateChange={async (state) => {
            if (
              navigationRef.getCurrentRoute().name === routes.TAG_DESIGNER &&
              !authenticated
            ) {
              await AsyncStorage.setItem(
                NAVIGATION_PERSISTENCE_KEY,
                JSON.stringify(state)
              );
            }
          }}
        >
          <StatusBar barStyle={"light-content"} />
          <AppNavigator />
          {authenticated && <BottomDrawer />}
        </NavigationContainer>
      </NativeBaseProvider>
    </View>
  );
}

export default () => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  );
};
