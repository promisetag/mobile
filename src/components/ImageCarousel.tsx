import { FlatList } from "react-native";
import { Box, HStack, Image, Pressable, ScrollView } from "native-base";
import { useCallback, useRef, useState } from "react";

export const ImageCarousel = ({ data, renderItem, width }) => {
  const imageCarouselRef = useRef<FlatList>();
  const [currentId, setCurrentId] = useState(1);

  const handleViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentId(viewableItems[0].key);
    }
  }, []);

  return (
    <Box>
      <FlatList
        ref={imageCarouselRef}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{
          waitForInteraction: true,
          viewAreaCoveragePercentThreshold: 95,
        }}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        snapToAlignment={"start"}
        snapToInterval={width}
        decelerationRate={"fast"}
        bounces={false}
      />
      <HStack justifyContent={"center"} mt={"2"}>
        <HStack space={"1"}>
          {data.map((item) => (
            <Box
              w={2}
              h={2}
              rounded={"full"}
              bg={currentId === item.id ? "blue.500" : "muted.400"}
              key={item.id}
            ></Box>
          ))}
        </HStack>
      </HStack>
      <Box my={"2"}>
        <ScrollView>
          <HStack space={"2"} justifyContent={"center"}>
            {data.map((item) => (
              <Pressable
                key={item.id}
                onPress={() =>
                  imageCarouselRef.current.scrollToIndex({
                    animated: true,
                    index: item.id - 1,
                  })
                }
              >
                <Image
                  src={item.thumbnail_url}
                  size={"sm"}
                  alt={`slide_tn_${item.id}`}
                />
              </Pressable>
            ))}
          </HStack>
        </ScrollView>
      </Box>
    </Box>
  );
};
