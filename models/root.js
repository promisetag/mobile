import { onSnapshot, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import AuthStore from "./auth";
import * as SecureStore from "expo-secure-store";
import DrawerStore from "./drawer";

const RootModel = types.model({
  auth: AuthStore,
  drawer: DrawerStore,
});

let initialState = RootModel.create({
  auth: {
    state: "guest",
  },
  drawer: {
    visible: false,
  },
});

let rootStore = initialState;

SecureStore.getItemAsync("rootStore").then((root) => {
  if (root) {
    rootStore.auth.changeState(JSON.parse(root).auth);
  }
});

onSnapshot(rootStore, async (snapshot) => {
  await SecureStore.setItemAsync("rootStore", JSON.stringify(snapshot));
});

const RootStoreContext = createContext(null);

export const ApplicationProvider = ({ children }) => (
  <RootStoreContext.Provider value={rootStore}>
    {children}
  </RootStoreContext.Provider>
);

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null)
    throw new Error("Store cannot be null, please add a context provider");
  return store;
}
