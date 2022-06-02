import { useAppSelector } from "../hooks/redux-toolkit";
import { AuthNavigator } from "./AuthNavigator";
import { GuestNavigator } from "./GuestNavigator";

export const AppNavigator = () => {
  const authenticated = useAppSelector((state) => state.auth.authenticated);

  return authenticated ? <AuthNavigator /> : <GuestNavigator />;
};
