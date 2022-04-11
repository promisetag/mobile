import Screen from "../../components/Screen";
import {
    Alert,
    ArrowForwardIcon,
    Box,
    Button, Center,
    Flex,
    Heading,
    HStack,
    Image, Pressable,
    ScrollView,
    StatusBar,
    Text,
    VStack
} from "native-base";
import {AccountHeader} from "../../components/AccountHeader";
import {UserAvatar} from "../../components/UserAvatar";

const data = [
    {
        id: 1,
        imageUrl: require("../../assets/images/memories/Video.png"),
        title: "My Video Memories",
        spaceUsed: "30 MB"
    },
    {
        id: 2,
        imageUrl: require("../../assets/images/memories/Image.png"),
        title: "Upload Images",
        spaceUsed: "18 MB"
    },
    {
        id: 3,
        imageUrl: require("../../assets/images/memories/Audio.png"),
        title: "Upload Audio",
        spaceUsed: "12 MB"
    },
    {
        id: 4,
        imageUrl: require("../../assets/images/memories/T.png"),
        title: "Write your heart",
        spaceUsed: "28 KB"
    }
];

const PromisetagScreen = () => {

    const totalScans = "26";
    const usedSpace = "60";

    return (
        <Screen>
            <StatusBar barStyle={"dark-content"}/>
            <VStack h={"100%"}>
                <AccountHeader/>
                <Box bg={"white"} pt={"20"}><ScrollView px="8" bg={"white"} _contentContainerStyle={{pb: "40"}}>
                    <HStack bg={"teal.300"} borderRadius={"xl"} mb={"4"}>
                        <Box w={usedSpace + "%"} bg={"teal.600"} p={"4"} borderLeftRadius="xl">
                            <Heading size={"3xl"} color={"white"}>{usedSpace}%</Heading>
                            <Text color={"white"}>Upgrade your space to save more memories</Text>
                            <Button colorScheme={"amber"} rightIcon={<ArrowForwardIcon size="4"/>} variant={"ghost"}>Upgrade
                                now</Button>
                        </Box>
                    </HStack>
                    <Alert status={"error"} alignItems={"flex-start"} mb={"8"}>
                        <Text>Your subscription ends in 30 days. Kindly renew it.</Text>
                        <Button variant={"ghost"} colorScheme={"blue"}>Renew</Button>
                    </Alert>
                    <Heading mb={"4"}>My Memories</Heading>
                    <Flex flexDirection={"row"} flexWrap={"wrap"}>
                        {
                            data.map(d => (
                                <Pressable w={"45%"} mr={"4"} mb={"4"} key={d.id} onPress={() => alert("Hello")} >
                                    <Box p={'4'} borderColor={"muted.400"}
                                         borderWidth={"1"} borderRadius={"xl"}
                                         alignItems={"center"}>
                                        <Image key={d.id} source={d.imageUrl} size={"md"}
                                               alt={d.title}/>
                                        <Heading size={"xs"} mt={"4"}>{d.title}</Heading>
                                        <Text>{d.spaceUsed} in use</Text>
                                    </Box>
                                </Pressable>
                            ))
                        }
                    </Flex>
                    <HStack mt={"10"} justifyContent={"space-between"} pr={"20"}>
                        <Center>
                            <Heading size={"3xl"} color={"teal.400"}>{totalScans}</Heading>
                            <Text>Scans till now</Text>
                        </Center>
                        <Center position={"relative"}>
                            <Image position={"absolute"} source={require("../../assets/images/qr/qr-bg.png")}
                                   alt={"qr-bg"} size={"xl"}/>
                            <Image position={"absolute"} source={require("../../assets/images/qr/qr.png")} alt={"qr-bg"}
                                   size={"md"}/>
                        </Center>
                    </HStack>
                </ScrollView></Box>
                <UserAvatar/>
            </VStack>
        </Screen>
    );

}

export default PromisetagScreen