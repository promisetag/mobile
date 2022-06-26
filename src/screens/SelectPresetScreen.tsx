import { Screen } from "../components";
import { Box, Heading, Icon, Image, Input, Pressable, Text } from "native-base";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, LayoutAnimation, Platform, UIManager } from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const presets = [
  {
    id: 1,
    title: "Product One",
    image_url: require("../assets/images/samples/presets/product-preset-one.png"),
    tags: ["Superheroes", "Fitness", "Rides"],
  },
  {
    id: 2,
    title: "Product Two",
    image_url: require("../assets/images/samples/presets/product_preset_two.png"),
    tags: ["Pets"],
  },
  {
    id: 3,
    title: "Product Three",
    image_url: require("../assets/images/samples/presets/product_preset_three.png"),
    tags: ["Pets", "Fitness", "Love", "Rides"],
  },
  {
    id: 4,
    title: "Product Four",
    image_url: require("../assets/images/samples/presets/product_preset_four.png"),
    tags: ["Pets", "Superheroes", "Girl Power", "Fitness", "Love", "Rides"],
  },
  {
    id: 5,
    title: "Product Five",
    image_url: require("../assets/images/samples/presets/product-preset-one.png"),
    tags: ["Pets", "Girl Power", "Love"],
  },
  {
    id: 6,
    title: "Product Six",
    image_url: require("../assets/images/samples/presets/product_preset_two.png"),
    tags: ["Pets", "Superheroes", "Girl Power"],
  },
  {
    id: 7,
    title: "Product Seven",
    image_url: require("../assets/images/samples/presets/product_preset_three.png"),
    tags: ["Pets", "Superheroes", "Fitness"],
  },
  {
    id: 8,
    title: "Product Eight",
    image_url: require("../assets/images/samples/presets/product_preset_four.png"),
    tags: ["Superheroes", "Girl Power", "Love", "Rides"],
  },
];

export const SelectPresetScreen = () => {
  const [selectedTag, setSelectedTag] = useState("Pets");
  const [filter, setFilter] = useState("");
  const [designs, setDesigns] = useState(presets);

  const TAGS = [
    "Pets",
    "Superheroes",
    "Girl Power",
    "Fitness",
    "Love",
    "Rides",
  ];

  const handleOnTagSelection = (item) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    const filteredDesigns = presets.filter((design) =>
      design.tags.includes(item)
    );
    setDesigns(filteredDesigns);
    setSelectedTag(item);
  };

  const handleSearch = (text) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setFilter(text);
    setTimeout(function () {
      if (text !== "") {
        const filteredDesigns = presets.filter((design) => {
          return design.title
            .toLowerCase()
            .split(" ")
            .includes(text.toLowerCase());
        });
        setDesigns(filteredDesigns);
      } else {
        setDesigns(presets);
      }
    }, 50);
  };

  return (
    <Screen>
      <Box p={4} h={"full"} bg={"white"}>
        <Input
          w={"full"}
          rounded={"md"}
          borderColor={"muted.500"}
          placeholder={"Search by pendant name"}
          value={filter}
          onChangeText={handleSearch}
          InputRightElement={
            <Icon
              as={Feather}
              name={"search"}
              mr={2}
              size={6}
              color={"muted.400"}
            />
          }
        />
        <Heading mt={4} mb={2}>
          Design Presets
        </Heading>
        <Text>
          Many people prefer to select designs from these popular presets.
        </Text>
        <Box bg={"gray.100"} mt={4} px={2} py={2} rounded={"md"}>
          <FlatList
            data={TAGS}
            horizontal={true}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => (
              <Box ml={index === 0 ? 0 : 2} mr={2}>
                <Pressable onPress={() => handleOnTagSelection(item)}>
                  <Text
                    fontWeight={selectedTag === item ? "bold" : "normal"}
                    fontSize={"md"}
                  >
                    {item}
                  </Text>
                </Pressable>
              </Box>
            )}
          />
        </Box>
        <Box mt={4} flex={1} alignItems={"center"}>
          <FlatList
            data={designs}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <Box justifyContent={"center"} alignItems={"center"} my={2}>
                <Image
                  source={item.image_url}
                  resizeMode={"contain"}
                  size={"176px"}
                  alt={item.title}
                />
                <Text>{item.title}</Text>
              </Box>
            )}
          />
        </Box>
      </Box>
    </Screen>
  );
};
