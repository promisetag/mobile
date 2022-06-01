import { combineReducers, configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./features/drawerSlice";
import authReducer from "./features/authSlice";
import boardingReducer from "./features/boardingSlice";
import categoryReducer from "./features/categorySlice";
import { promisetagApi } from "./services/promisetag-api";
import { setupListeners } from "@reduxjs/toolkit/query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const reducers = combineReducers({
  [promisetagApi.reducerPath]: promisetagApi.reducer,
  drawer: drawerReducer,
  auth: authReducer,
  boarding: boardingReducer,
  category: categoryReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["boarding", "auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(promisetagApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
