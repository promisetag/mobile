import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import { useMst } from "../models/root";
import { observer } from "mobx-react-lite";

const AppNavigator = () => {
  const { auth } = useMst();

  return auth.isLoggedIn ? <AuthNavigator /> : <HomeNavigator />;
};

export default observer(AppNavigator);
