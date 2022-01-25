import { StatusBar } from "expo-status-bar";
import { observer } from "mobx-react-lite";
import { FlatList, StyleSheet } from "react-native";
import Category from "../../components/Category";
import Screen from "../../components/Screen";
import { Heading } from "native-base";

const DATA = [
  {
    id: 1,
    title: "My Love",
    description: "In tempor, turpis nec euismod scelerisque.",
    image_url: "https://placeimg.com/200/300/any",
    color: "#d5cebf",
  },
  {
    id: 2,
    title: "My Promise",
    description: "Quisque erat eros, viverra eget, congue eget.",
    image_url: "https://placeimg.com/200/300/any",
    color: "#ebc6b9",
  },
  {
    id: 3,
    title: "Memories",
    description: "Vestibulum quam sapien, varius ut, blandit non.",
    image_url: "https://placeimg.com/200/300/any",
    color: "#ebd17e",
  },
];

const renderItem = ({ item }) => (
  <Category
    id={item.id}
    title={item.title}
    description={item.description}
    imageUrl={item.image_url}
    color={item.color}
  />
);

const CategoryScreen = () => {
  return (
    <Screen style={{ paddingHorizontal: 8 }}>
      <Heading>Why are you here?</Heading>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default observer(CategoryScreen);
