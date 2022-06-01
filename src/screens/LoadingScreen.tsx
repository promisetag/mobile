import { Box, Spinner, StatusBar } from "native-base";
import { Screen } from "../components";

export const LoadingScreen = () => {
  return (
    <Screen>
      <StatusBar barStyle={"dark-content"} />
      <Box flex={1} justifyContent={"center"}>
        <Spinner size={"lg"} />
      </Box>
    </Screen>
  );
};
