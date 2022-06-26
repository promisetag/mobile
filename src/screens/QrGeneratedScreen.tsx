import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { Screen } from "../components";
import { useAppSelector } from "../hooks/redux-toolkit";
import { routes } from "../constants";

export const QrGeneratedScreen = ({ navigation }) => {
  const authenticated = useAppSelector((state) => state.auth.authenticated);
  if (authenticated) {
    navigation.navigate(routes.LOGIN);
  }
  return (
    <>
      <Screen>
        <VStack h={"full"} bg={"#b4d1d7"} flex={1}>
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
              bg="#8b3ecc"
              h="55%"
              borderTopRadius="80px"
              py="10"
              px="4"
              mt={4}
            >
              <Heading size={"xl"} textAlign={"center"} color={"lightText"}>
                Congratulations
              </Heading>
              <Text textAlign={"center"} color={"lightText"}>
                Your promise QR is successfully generated
              </Text>
              <Box
                mt={4}
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
              >
                <Image
                  alt={"qr-bg"}
                  size={"xl"}
                  source={require("../assets/images/samples/qr-bg.png")}
                />
                <Image
                  alt={"qr"}
                  size={"lg"}
                  source={require("../assets/images/samples/qr.png")}
                  position={"absolute"}
                  top={0}
                  mt={4}
                />
                <Pressable mt={4}>
                  <Box
                    w={64}
                    h={16}
                    bg={"yellow.500"}
                    rounded={"full"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text fontSize={"xl"} color={"white"}>
                      Proceed
                    </Text>
                  </Box>
                </Pressable>
              </Box>
            </Box>
          </ScrollView>
        </VStack>
      </Screen>
    </>
  );
};
