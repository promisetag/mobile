import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { Screen } from "../components";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { routes } from "../constants";

function CategorySelectedInfo({ title, quantity, children, navigation }) {
  return (
    <VStack bg={"white"} p={"4"} space={"4"} shadow={"2"} rounded={"lg"}>
      <Heading textAlign={"center"}>{title}</Heading>
      <Text fontSize={"md"}>{children}</Text>
      <VStack>
        <HStack
          space={4}
          borderBottomColor={"gray.200"}
          borderBottomWidth={"1"}
          p={"2"}
        >
          <Icon as={<Feather name={"smartphone"} />} size={"8"} />
          <Text>{quantity} Promisetag</Text>
        </HStack>
        <HStack
          space={4}
          borderBottomColor={"gray.200"}
          borderBottomWidth={"1"}
          p={"2"}
        >
          <Icon as={<MaterialIcons name={"qr-code"} />} size={"8"} />
          <Text>1 QR Code</Text>
        </HStack>
        <HStack
          space={4}
          borderBottomColor={"gray.200"}
          borderBottomWidth={"1"}
          p={"2"}
        >
          <Icon as={<MaterialIcons name={"format-paint"} />} size={"8"} />
          <Text>1 Customizations</Text>
        </HStack>
      </VStack>
      <HStack justifyContent={"center"}>
        <Pressable
          w={12}
          h={12}
          bg={"teal.500"}
          rounded={"full"}
          justifyContent={"center"}
          alignItems={"center"}
          onPress={() => navigation.navigate(routes.PRODUCT_LIST)}
        >
          <Text color={"white"} fontSize={"lg"}>
            OK
          </Text>
        </Pressable>
      </HStack>
    </VStack>
  );
}

export const CategorySelectedScreen = ({ navigation }) => {
  return (
    <Screen>
      <Box flex={1}>
        <Image
          position={"absolute"}
          zIndex={0}
          w={"full"}
          h={"full"}
          flex={"1"}
          resizeMode={"cover"}
          source={require("../assets/images/samples/portrait.jpg")}
          alt={"portrait"}
        />
        <Box
          bg={"black"}
          flex={"1"}
          opacity={"40"}
          position={"absolute"}
          w={"full"}
          h={"full"}
        ></Box>
        <Box px={16} py={"8"}>
          <Heading textAlign={"center"} color={"white"} mb={24}>
            For whom do you need this Promisetag for?
          </Heading>
          <CategorySelectedInfo
            title={"For Myself"}
            quantity={"1"}
            navigation={navigation}
          >
            You get one Promisetag for the promises you make to yourself.
          </CategorySelectedInfo>
        </Box>
      </Box>
    </Screen>
  );
};
