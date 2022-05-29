import {NavigationContainer} from "@react-navigation/native";
import {NativeBaseProvider, StatusBar} from "native-base";
import React from "react";
import borno from "./src/assets/theme";
import {useAppSelector} from "./src/hooks/redux-toolkit";
import {AppNavigator} from "./src/navigation";
import {BottomDrawer} from "./src/components";
import {persistStore} from "redux-persist";
import {store} from "./src/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

// if (window.server) {
//   window.server.shutdown();
// }
//
// window.server = createServer({
//   routes() {
//     this.get("/api/tours", () => {
//       console.log("getting tours");
//       return {};
//     });
//   },
// });

function App() {
  // const appIsReady = useResourceLoader();
  const authenticated = useAppSelector((state) => state.auth.authenticated);

  return (
    <NativeBaseProvider theme={borno}>
      <NavigationContainer>
        <StatusBar barStyle={"light-content"} />
        <AppNavigator />
        {authenticated && <BottomDrawer />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default function wrapperApp() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  );
}
