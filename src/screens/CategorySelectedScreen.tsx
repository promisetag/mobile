import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "native-base";
import { Screen } from "../components";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useAppSelector } from "../hooks/redux-toolkit";
import { routes } from "../constants";

function CategorySelectedInfo({
  title,
  quantity,
  children,
  storageSpace,
  storageUnit,
}) {
  return (
    <VStack
      bg={"white"}
      p={"8"}
      space={"4"}
      shadow={"2"}
      rounded={"lg"}
      color={"muted.300"}
    >
      <Heading textAlign={"center"}>{title}</Heading>
      <Text fontSize={"sm"} textAlign={"center"}>
        {children}
      </Text>
      <VStack>
        <HStack
          space={4}
          borderBottomColor={"gray.200"}
          borderBottomWidth={"1"}
          p={"2"}
          alignItems={"center"}
        >
          <Icon as={<Feather name={"smartphone"} />} size={"8"} />
          <Text>{quantity} Promisetag</Text>
        </HStack>
        <HStack
          space={4}
          borderBottomColor={"gray.200"}
          borderBottomWidth={"1"}
          p={"2"}
          alignItems={"center"}
        >
          <Icon as={<MaterialIcons name={"qr-code"} />} size={"8"} />
          <Text>1 QR Code</Text>
        </HStack>
        <HStack
          space={4}
          borderBottomColor={"gray.200"}
          borderBottomWidth={"1"}
          p={"2"}
          alignItems={"center"}
        >
          <Icon as={<MaterialIcons name={"format-paint"} />} size={"8"} />
          <Text>1 Customizations</Text>
        </HStack>
        <HStack space={4} p={"2"} alignItems={"center"}>
          <Icon as={<MaterialCommunityIcons name={"floppy"} />} size={"8"} />
          <Text>
            {storageSpace} {storageUnit}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}

export const CategorySelectedScreen = ({ navigation }) => {
  const {
    title,
    backgroundImageUrl,
    tagQuantity,
    storageSpaceQuantity,
    storageSpaceUnit,
  } = useAppSelector((state) => state.category);
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
          src={backgroundImageUrl}
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
        <Box px={16} py={"8"} flex={"1"} justifyContent={"center"}>
          <CategorySelectedInfo
            title={title}
            quantity={tagQuantity}
            storageSpace={storageSpaceQuantity}
            storageUnit={storageSpaceUnit}
          >
            You get one Promisetag for the promises you make to yourself.
          </CategorySelectedInfo>
          <Button
            mt={"12"}
            size={"lg"}
            colorScheme={"teal"}
            onPress={() => navigation.navigate(routes.PRODUCT_LIST)}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Screen>
  );
};
