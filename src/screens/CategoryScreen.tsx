import { LoadingScreen } from "./LoadingScreen";
import { FlatList } from "react-native";
import { Box, Heading } from "native-base";
import { CategoryItem, Screen } from "../components";
import { useGetCategoriesQuery } from "../services/promisetag-api";

export const CategoryScreen = ({ navigation }) => {
  const {
    data: categories,
    error,
    isLoading,
    isError,
  } = useGetCategoriesQuery();

  if (isError) {
    console.log(error);
    // @ts-ignore
    return <Text>Error: {error.error}</Text>;
  }
  if (isLoading) return <LoadingScreen />;

  const renderItem = ({ item }) => (
    <CategoryItem item={item} navigation={navigation} />
  );

  return (
    <Screen>
      <Box p={"8"}>
        <Heading>Why are you here?</Heading>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </Screen>
  );
};
