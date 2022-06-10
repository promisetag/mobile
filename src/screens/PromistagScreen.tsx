import {
  Alert,
  ArrowForwardIcon,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  VStack,
} from "native-base";
import { AccountHeader } from "../components/AccountHeader";
import { UserAvatar } from "../components/UserAvatar";
import { Screen } from "../components";
import { routes } from "../constants";

const data = [
  {
    id: 1,
    imageUrl: require("../assets/images/samples/Video.png"),
    title: "My Video Memories",
    spaceUsed: "30 MB",
    fileType: "video",
  },
  {
    id: 2,
    imageUrl: require("../assets/images/samples/Image.png"),
    title: "Upload Images",
    spaceUsed: "18 MB",
    fileType: "image",
  },
  {
    id: 3,
    imageUrl: require("../assets/images/samples/Audio.png"),
    title: "Upload Audio",
    spaceUsed: "12 MB",
    fileType: "audio",
  },
  {
    id: 4,
    imageUrl: require("../assets/images/samples/T.png"),
    title: "Write your heart",
    spaceUsed: "28 KB",
    fileType: "text",
  },
];

export const PromisetagScreen = ({ navigation }) => {
  const totalScans = "26";
  const usedSpace = "60";

  return (
    <Screen>
      <StatusBar barStyle={"dark-content"} />
      <VStack h={"100%"}>
        <AccountHeader />
        <Box bg={"white"} pt={"20"}>
          <ScrollView px="8" bg={"white"} _contentContainerStyle={{ pb: "40" }}>
            <HStack bg={"teal.300"} borderRadius={"xl"} mb={"4"}>
              <Box
                w={usedSpace + "%"}
                bg={"teal.600"}
                p={"4"}
                borderLeftRadius="xl"
              >
                <Heading size={"3xl"} color={"white"}>
                  {usedSpace}%
                </Heading>
                <Text color={"white"}>
                  Upgrade your space to save more memories
                </Text>
                <Button
                  colorScheme={"amber"}
                  rightIcon={<ArrowForwardIcon size="4" />}
                  variant={"ghost"}
                >
                  Upgrade now
                </Button>
              </Box>
            </HStack>
            <Alert status={"error"} alignItems={"flex-start"} mb={"8"}>
              <Text>Your subscription ends in 30 days. Kindly renew it.</Text>
              <Button variant={"ghost"} colorScheme={"blue"}>
                Renew
              </Button>
            </Alert>
            <Heading mb={"4"}>My Memories</Heading>
            <Flex flexDirection={"row"} flexWrap={"wrap"}>
              {data.map((d) => (
                <Pressable
                  w={"45%"}
                  mr={"4"}
                  mb={"4"}
                  key={d.id}
                  onPress={() =>
                    navigation.navigate(routes.FILE_LIST, {
                      fileType: d.fileType,
                    })
                  }
                >
                  <Box
                    p={"4"}
                    borderColor={"muted.400"}
                    borderWidth={"1"}
                    borderRadius={"xl"}
                    alignItems={"center"}
                  >
                    <Image
                      key={d.id}
                      source={d.imageUrl}
                      size={"md"}
                      alt={d.title}
                    />
                    <Heading size={"xs"} mt={"4"}>
                      {d.title}
                    </Heading>
                    <Text>{d.spaceUsed} in use</Text>
                  </Box>
                </Pressable>
              ))}
            </Flex>
            <HStack mt={"10"} justifyContent={"space-between"} pr={"20"}>
              <Center>
                <Heading size={"3xl"} color={"teal.400"}>
                  {totalScans}
                </Heading>
                <Text>Scans till now</Text>
              </Center>
              <Center position={"relative"}>
                <Image
                  position={"absolute"}
                  source={require("../assets/images/samples/qr-bg.png")}
                  alt={"qr-bg"}
                  size={"xl"}
                />
                <Image
                  position={"absolute"}
                  source={require("../assets/images/samples/qr.png")}
                  alt={"qr-bg"}
                  size={"md"}
                />
              </Center>
            </HStack>
          </ScrollView>
        </Box>
        <UserAvatar />
      </VStack>
    </Screen>
  );
};
