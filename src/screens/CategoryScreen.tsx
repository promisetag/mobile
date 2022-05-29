import { FlatList } from "react-native";
import { Category, Screen } from "../components";
import { Heading, Text } from "native-base";
import { useGetCategoriesQuery } from "../services/promisetag-api";

const renderItem = ({ item }) => (
  <Category
    id={item.id}
    title={item.title}
    description={item.description}
    imageUrl={item.image_url}
    color={item.background_color}
  />
);

export const CategoryScreen = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  if (error) return <Text>Error: {error.error}</Text>;
  if (isLoading) return <Text>Loading...</Text>;

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
