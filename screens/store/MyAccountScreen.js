import {
    Avatar,
    Box,
    FlatList,
    Heading,
    HStack,
    Icon,
    IconButton,
    Image,
    Progress,
    SearchIcon,
    StatusBar,
    Text,
    VStack
} from "native-base";
import Screen from "../../components/Screen";
import DotsVerticalIcon from "../../assets/icons/DotsVerticalIcon";

const data = [
    {
        id: 1,
        image: require("../../assets/images/qr/qr.png"),
        title: "Aman",
        totalSpace: 120,
        usedSpace: 55,
    },
    {
        id: 2,
        image: require("../../assets/images/qr/qr.png"),
        title: "Anna",
        totalSpace: 120,
        usedSpace: 85,
    },
    {
        id: 3,
        image: require("../../assets/images/qr/qr.png"),
        title: "Amit",
        totalSpace: 120,
        usedSpace: 45,
    },
    {
        id: 4,
        image: require("../../assets/images/qr/qr.png"),
        title: "Sunita",
        totalSpace: 120,
        usedSpace: 40,
    },
];

const MyAccountScreen = ({navigation}) => {
    return (
        <Screen>
            <StatusBar barStyle="dark-content"/>
            <VStack>
                <HStack
                    alignItems="flex-start"
                    justifyContent="space-between"
                    pr="4"
                    pl={"45%"}
                    py="4"
                    borderTopRadius="32"
                    bgColor="muted.300"
                >
                    <Heading size="lg" width="32">
                        Avantika Ahuja
                    </Heading>
                    <IconButton
                        icon={<DotsVerticalIcon size="8"/>}
                    />
                </HStack>
                <Box pt={20} px="8" bg={"white"}>
                    <HStack justifyContent="space-between">
                        <Heading size="xs">My Promisetags</Heading>
                        <IconButton icon={<SearchIcon size="4"/>}/>
                    </HStack>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        renderItem={({item}) => {
                            return (
                                <Box mr="6" borderRadius="xl" width="40" height={"48"} bg="teal.200" px="2" py="4">
                                    <Image source={item.image} size="sm"
                                           alt={item.title}/>
                                    <Text color="white" fontWeight="bold" my={"3"}>
                                        {item.title}'s Promisetag
                                    </Text>
                                    <HStack justifyContent="space-between" mb="2">
                                        <Text color="teal.800" fontWeight="semibold">
                                            Space
                                        </Text>
                                        <Text color="teal.800" fontWeight="semibold">
                                            {item.usedSpace}/{item.totalSpace}MB
                                        </Text>
                                    </HStack>
                                    <Progress
                                        value={item.usedSpace}
                                        colorScheme="yellow"
                                        bg="teal.600"
                                    />
                                </Box>
                            )
                        }}
                    />
                    <HStack alignItems={"center"} justifyContent="space-between" bg="teal.200" p={8} mt={8}
                            borderRadius={"lg"}>
                        <Heading size={"md"}>Total Scans</Heading>
                        <Heading size={"2xl"}>102</Heading>
                    </HStack>
                </Box>
            </VStack>
            <Box
                position="absolute"
                mx="4"
                my="8"
                background="white"
                borderRadius="full"
                p="1"
                m="1"
            >
                <Avatar
                    bg="green.500"
                    source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    }}
                    size="2xl"
                />
            </Box>
        </Screen>
    );
};

export default MyAccountScreen;
