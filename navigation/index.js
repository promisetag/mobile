import { observer } from "mobx-react-lite";
import { useMst } from "../models/root";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";

const AppNavigator = () => {
  const { auth } = useMst();

  return auth.isLoggedIn ? <HomeNavigator /> : <AuthNavigator />;
};

export default observer(AppNavigator);
