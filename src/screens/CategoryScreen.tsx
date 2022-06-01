import { LoadingScreen } from "./LoadingScreen";
import { FlatList } from "react-native";
import { Heading } from "native-base";
import { CategoryItem, Screen } from "../components";
import { useGetCategoriesQuery } from "../services/promisetag-api";

export const CategoryScreen = ({ navigation }) => {
  // @ts-ignore
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  if (error) {
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
      <Heading>Why are you here?</Heading>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
};
