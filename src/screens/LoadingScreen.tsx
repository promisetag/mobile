import { Screen } from "../components";
import { ActivityIndicator, StatusBar, View } from "react-native";

export const LoadingScreen = () => {
  return (
    <Screen>
      <StatusBar barStyle={"dark-content"} />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    </Screen>
  );
};
