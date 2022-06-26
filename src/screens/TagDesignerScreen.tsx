import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black
} from "@expo-google-fonts/inter";
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic
} from "@expo-google-fonts/montserrat";
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic
} from "@expo-google-fonts/roboto";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack
} from "native-base";
import { useState } from "react";
import { Screen } from "../components";
import { ChooseFont } from "../components/ChooseFont";
import { ChooseIcon } from "../components/ChooseIcon";
import { UpdateName } from "../components/UpdateName";
import { routes } from "../constants";
import { setNextRoute } from "../features/navigationSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux-toolkit";

export const TagDesignerScreen = ({ navigation }) => {
  const authenticated = useAppSelector((state) => state.auth.authenticated);
  const dispatch = useAppDispatch();
  const [customerName, setCustomerName] = useState("Your Name");
  const [tagIcon, setTagIcon] = useState("deer");
  const [showChooseIconDialog, setShowChooseIconDialog] = useState(false);
  const [showUpdateNameDialog, setShowUpdateNameDialog] = useState(false);
  const [nameFont, setNameFont] = useState("Roboto_400Regular");
  const [nameFontSize, setNameFontSize] = useState("sm");
  const [nameAlignmentVertical, setNameAlignmentVertical] =
    useState("flex-end");
  const [nameAlignment, setNameAlignment] = useState("flex-start");
  const [showChooseFontDialog, setShowChooseFontDialog] = useState(false);

  const baseUrl = "http://promisetag.com";
  const name = customerName.toLowerCase().split(" ").join("-");
  let url = `${baseUrl}/${tagIcon}/${name}`;

  let fontsLoaded = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  const iconList = [
    {
      name: "deer",
      alt: "deer-icon",
      source: require("../assets/images/samples/deer.png"),
    },
    {
      name: "alien",
      alt: "alien-icon",
      source: require("../assets/images/samples/alien.png"),
    },
  ];

  const moveToNextScreen = () => {
    if (authenticated) {
      navigation.navigate(routes.QR_GENERATED);
    } else {
      dispatch(setNextRoute(routes.QR_GENERATED));
      navigation.navigate(routes.LOGIN);
    }
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
                          {tagIcon === "deer" ? (
                            <Image
                              source={require("../assets/images/samples/deer.png")}
                              alt="deer"
                              key="deer"
                              size="16"
                              resizeMode="contain"
                            />
                          ) : (
                            <Image
                              source={require("../assets/images/samples/alien.png")}
                              alt="alien"
                              key="alien"
                              size="16"
                              resizeMode="contain"
                            />
                          )}
                        </Flex>
                        <Flex justifyContent={"center"} alignItems={"center"}>
                          <Image
                            source={require("../assets/images/samples/qr.png")}
                            alt="deer"
                            key="qr"
                            size="16"
                            resizeMode="contain"
                            opacity={"40"}
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
                        alignItems={nameAlignment}
                        justifyContent={nameAlignmentVertical}
                      >
                        <Text fontSize={nameFontSize} fontFamily={nameFont}>
                          {customerName}
                        </Text>
                      </Flex>
                    </VStack>
                  </Box>
                </HStack>
              </Box>
              <Box bg="white" h="55%" borderTopRadius="80px" py="4" px="4">
                <VStack space="2">
                  <HStack
                    space="8"
                    px="8"
                    py="2"
                    justifyContent={"space-between"}
                  >
                    <VStack space="2">
                      <Pressable
                        onPress={() => {
                          setShowChooseIconDialog(true);
                        }}
                      >
                        <Box
                          bg={"#3c37cc"}
                          shadow="9"
                          rounded={"sm"}
                          w={16}
                          h={16}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Icon
                            as={MaterialCommunityIcons}
                            name={"cursor-default-click-outline"}
                            color={"white"}
                          />
                        </Box>
                      </Pressable>
                      <Text textAlign="center" fontSize="12">
                        Select Icon
                      </Text>
                    </VStack>
                    <VStack space="2">
                      <Pressable
                        onPress={() => {
                          setShowUpdateNameDialog(true);
                        }}
                      >
                        <Box
                          bg={"#fac304"}
                          shadow="9"
                          rounded={"sm"}
                          w={16}
                          h={16}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Icon
                            as={MaterialCommunityIcons}
                            name={"format-text"}
                            color={"white"}
                          />
                        </Box>
                      </Pressable>
                      <Text textAlign="center" fontSize="12">
                        Write Name
                      </Text>
                    </VStack>
                    <VStack space="2">
                      <Pressable
                        onPress={() => {
                          setShowChooseFontDialog(true);
                        }}
                      >
                        <Box
                          bg={"#ff36b2"}
                          shadow="9"
                          rounded={"sm"}
                          w={16}
                          h={16}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Icon as={Ionicons} name={"text"} color={"white"} />
                        </Box>
                      </Pressable>
                      <Text textAlign="center" fontSize="12">
                        Choose Font
                      </Text>
                    </VStack>
                  </HStack>
                  <Flex alignItems="center">
                    <Image
                      key={"view-qr"}
                      source={require("../assets/images/samples/qr.png")}
                      alt="qr"
                      size="20"
                      resizeMode="contain"
                      opacity={40}
                    />
                    <Text
                      mt={1}
                      w={64}
                      textAlign={"center"}
                      fontSize={14}
                      fontWeight={"bold"}
                      color={"muted.500"}
                    >
                      Upload your memories to generate your unique and personal
                      QR
                    </Text>
                    <Pressable my={4} pb={4} onPress={moveToNextScreen}>
                      <Box
                        bg={"yellow.500"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        w={64}
                        h={16}
                        rounded={"full"}
                      >
                        <Text fontSize={20} color={"white"}>
                          Generate QR
                        </Text>
                      </Box>
                    </Pressable>
                  </Flex>
                </VStack>
              </Box>
            </ScrollView>
          </VStack>
        </Screen>
        <ChooseIcon
          isOpen={showChooseIconDialog}
          setIsOpen={setShowChooseIconDialog}
          setTagIcon={setTagIcon}
          iconList={iconList}
        />
        <UpdateName
          customerName={customerName}
          setCustomerName={setCustomerName}
          isOpen={showUpdateNameDialog}
          setIsOpen={setShowUpdateNameDialog}
        />
        <ChooseFont
          font={nameFont}
          setFont={setNameFont}
          alignment={nameAlignment}
          setAlignment={setNameAlignment}
          verticalAlignment={nameAlignmentVertical}
          setVerticalAlignment={setNameAlignmentVertical}
          size={nameFontSize}
          setSize={setNameFontSize}
          isOpen={showChooseFontDialog}
          setIsOpen={setShowChooseFontDialog}
        />
      </>
    );
  }
};
