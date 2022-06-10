import {
  Box,
  Flex,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { Screen } from "../components";
import * as DocumentPicker from "expo-document-picker";

export const UploadMediaScreen = ({ navigation }) => {
  const launchPicker = async (type) => {
    const files = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
      type: type,
    });
    console.log(files);
  };

  return (
    <>
      <Screen>
        <VStack h={"full"} bg={"#b4d1d7"}>
          <ScrollView>
            <Box h="45%">
              <HStack pt={2}>
                <Box w="1/2">
                  <Box position="relative">
                    <Text textAlign="center" fontSize="lg" fontWeight="bold">
                      Front
                    </Text>
                    <Image
                      source={require("../assets/images/samples/tagpng.png")}
                      alt="tag"
                      size="64"
                      resizeMode="contain"
                    />
                    <VStack
                      position={"absolute"}
                      height={"full"}
                      width={"full"}
                      justifyContent={"center"}
                      mt={"6"}
                      space={"4"}
                    >
                      <Flex justifyContent={"center"} alignItems={"center"}>
                        <Image
                          source={require("../assets/images/samples/deer.png")}
                          alt="deer"
                          key="deer"
                          size="16"
                          resizeMode="contain"
                        />
                      </Flex>
                      <Flex justifyContent={"center"} alignItems={"center"}>
                        <Image
                          source={require("../assets/images/samples/qr.png")}
                          alt="deer"
                          key="qr"
                          size="16"
                          resizeMode="contain"
                        />
                      </Flex>
                    </VStack>
                  </Box>
                </Box>
                <Box w="1/2">
                  <VStack position="relative">
                    <Text textAlign="center" fontSize="lg" fontWeight="bold">
                      Back
                    </Text>
                    <Image
                      source={require("../assets/images/samples/tagpng.png")}
                      alt="tag"
                      size="64"
                      resizeMode="contain"
                    />
                    <Flex
                      position="absolute"
                      top="0"
                      left="0"
                      mt="24"
                      ml="12"
                      w="24"
                      h="50%"
                      p="2"
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Text fontSize={16}>Amit Kumar Dubey</Text>
                    </Flex>
                  </VStack>
                </Box>
              </HStack>
            </Box>
            <Box
              bg="white"
              h="55%"
              borderTopRadius="80px"
              py="10"
              px="4"
              mt={4}
            >
              <HStack justifyContent={"center"} space={4}>
                <Pressable onPress={() => launchPicker("video/*")}>
                  <Box
                    shadow={9}
                    alignItems={"center"}
                    bg={"white"}
                    w={32}
                    h={32}
                    justifyContent={"center"}
                  >
                    <Image
                      source={require("../assets/images/samples/Video.png")}
                      alt="image"
                      size="sm"
                    />
                    <Text textAlign={"center"}>Upload Videos</Text>
                  </Box>
                </Pressable>
                <Pressable onPress={() => launchPicker("image/*")}>
                  <Box
                    shadow={9}
                    alignItems={"center"}
                    bg={"white"}
                    w={32}
                    h={32}
                    justifyContent={"center"}
                  >
                    <Image
                      source={require("../assets/images/samples/Image.png")}
                      alt="image"
                      size="sm"
                    />
                    <Text textAlign={"center"}>Upload Images</Text>
                  </Box>
                </Pressable>
              </HStack>
              <HStack justifyContent={"center"} space={4} mt={4}>
                <Pressable onPress={() => launchPicker("audio/*")}>
                  <Box
                    shadow={9}
                    alignItems={"center"}
                    bg={"white"}
                    w={32}
                    h={32}
                    justifyContent={"center"}
                  >
                    <Image
                      source={require("../assets/images/samples/Audio.png")}
                      alt="image"
                      size="sm"
                    />
                    <Text textAlign={"center"}>Upload Audio</Text>
                  </Box>
                </Pressable>
                <Pressable onPress={() => launchPicker("application/*")}>
                  <Box
                    shadow={9}
                    alignItems={"center"}
                    bg={"white"}
                    w={32}
                    h={32}
                    justifyContent={"center"}
                    px={2}
                  >
                    <Image
                      source={require("../assets/images/samples/T.png")}
                      alt="image"
                      size="sm"
                    />
                    <Text textAlign={"center"}>Write your heart out</Text>
                  </Box>
                </Pressable>
              </HStack>
            </Box>
          </ScrollView>
        </VStack>
      </Screen>
    </>
  );
};
