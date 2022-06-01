import { useAppSelector } from "../hooks/redux-toolkit";
import { CategorySelectedScreen } from "../screens";

export const AppNavigator = () => {
  const authenticated = useAppSelector((state) => state.auth.authenticated);

  return <CategorySelectedScreen />;

  // return authenticated ? <AuthNavigator /> : <GuestNavigator />;
};
