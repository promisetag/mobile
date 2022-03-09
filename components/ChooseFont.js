import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
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
  Montserrat_900Black_Italic,
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
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Actionsheet,
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
  Select,
  VStack,
} from "native-base";
import { useState } from "react";

const ChooseFont = ({
  font,
  setFont,
  alignment,
  setAlignment,
  verticalAlignment,
  setVerticalAlignment,
  isOpen,
  setIsOpen,
}) => {
  const [family, setFamily] = useState("Roboto");
  const [weight, setWeight] = useState("400Regular");
  const [style, setStyle] = useState("");

  setFont(`${family}${weight}${style}`);

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

  const FONT_LIST = [
    {
      family: "Roboto",
      weights: [
        {
          name: "Thin",
          value: "_100Thin",
        },
        {
          name: "Light",
          value: "_300Light",
        },
        { name: "Regular", value: "_400Regular" },
        { name: "Medium", value: "_500Medium" },
        { name: "Bold", value: "_700Bold" },
        { name: "Black", value: "_900Black" },
      ],
      styles: [
        {
          name: "Normal",
          value: "",
        },
        {
          name: "Italic",
          value: "_Italic",
        },
      ],
    },
    {
      family: "Montserrat",
      weights: [
        {
          name: "Thin",
          value: "_100Thin",
        },
        {
          name: "ExtraLight",
          value: "_200ExtraLight",
        },
        {
          name: "Light",
          value: "_300Light",
        },
        { name: "Regular", value: "_400Regular" },
        { name: "Medium", value: "_500Medium" },
        { name: "SemiBold", value: "_600SemiBold" },
        { name: "Bold", value: "_700Bold" },
        { name: "ExtraBold", value: "_800ExtraBold" },
        { name: "Black", value: "_900Black" },
      ],
      styles: [
        {
          name: "Normal",
          value: "",
        },
        {
          name: "Italic",
          value: "_Italic",
        },
      ],
    },
    {
      family: "Inter",
      weights: [
        {
          name: "Thin",
          value: "_100Thin",
        },
        {
          name: "ExtraLight",
          value: "_200ExtraLight",
        },
        {
          name: "Light",
          value: "_300Light",
        },
        { name: "Regular", value: "_400Regular" },
        { name: "Medium", value: "_500Medium" },
        { name: "SemiBold", value: "_600SemiBold" },
        { name: "Bold", value: "_700Bold" },
        { name: "ExtraBold", value: "_800ExtraBold" },
        { name: "Black", value: "_900Black" },
      ],
      styles: [
        {
          name: "Normal",
          value: "",
        },
      ],
    },
  ];

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Actionsheet
        hideDragIndicator={true}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Actionsheet.Content alignItems="flex-start">
          <VStack space="8" my="4">
            <HStack space="2">
              <Heading size="md">Choose Font</Heading>
            </HStack>
            <VStack space="8" w="75%">
              <Box>
                <Heading size="sm">Font family</Heading>
                <Select
                  selectedValue={family}
                  onValueChange={(itemValue) => setFamily(itemValue)}
                >
                  {FONT_LIST.map((font) => (
                    <Select.Item
                      fontFamily={`${font.family}_400Regular`}
                      label={font.family}
                      value={font.family}
                      key={font.family}
                    />
                  ))}
                </Select>
              </Box>
              <Box>
                <Heading size="sm">Font weight</Heading>
                <Select
                  selectedValue="400Regular"
                  onValueChange={(itemValue) => setWeight(itemValue)}
                >
                  {FONT_LIST.find((font) => font.family === family).weights.map(
                    (weight) => (
                      <Select.Item
                        label={weight.name}
                        value={weight.value}
                        key={weight.name}
                      />
                    )
                  )}
                </Select>
              </Box>
              <Box>
                <Heading size="sm">Font style</Heading>
                <Select
                  selectedValue=""
                  onValueChange={(itemValue) => setWeight(itemValue)}
                >
                  {FONT_LIST.find((font) => font.family === family).styles.map(
                    (style) => (
                      <Select.Item
                        label={style.name}
                        value={style.value}
                        key={style.name}
                      />
                    )
                  )}
                </Select>
              </Box>
              <Box>
                <Heading size="sm">Vertical alignment</Heading>
                <HStack>
                  <IconButton
                    onPress={() => setVerticalAlignment("top")}
                    icon={<Icon as={MaterialIcons} name="align-vertical-top" />}
                    size="sm"
                  />
                  <IconButton
                    onPress={() => setVerticalAlignment("center")}
                    icon={
                      <Icon as={MaterialIcons} name="align-vertical-center" />
                    }
                    size="sm"
                  />
                  <IconButton
                    onPress={() => setVerticalAlignment("bottom")}
                    icon={
                      <Icon as={MaterialIcons} name="align-vertical-bottom" />
                    }
                    size="sm"
                  />
                </HStack>
              </Box>
              <Box>
                <Heading size="sm">Alignment</Heading>
                <HStack>
                  <IconButton
                    onPress={() => setAlignment("left")}
                    icon={<Icon as={Feather} name="align-left" />}
                    size="sm"
                  />
                  <IconButton
                    onPress={() => setAlignment("center")}
                    icon={<Icon as={Feather} name="align-center" />}
                    size="sm"
                  />
                  <IconButton
                    onPress={() => setAlignment("right")}
                    variant={alignment === "right" ? "outline" : "ghost"}
                    icon={<Icon as={Feather} name="align-right" />}
                    size="sm"
                  />
                </HStack>
              </Box>
            </VStack>
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    );
  }
};

export default ChooseFont;
