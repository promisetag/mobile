import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";
import QRCode from "react-native-qrcode-svg";
import ShoppingCartIcon from "../../assets/icons/ShoppingCartIcons";
import ChooseIcon from "../../components/ChooseIcon";
import Screen from "../../components/Screen";
import UpdateName from "../../components/UpdateName";
import UploadMemories from "../../components/UploadMemories";

const GenerateQRScreen = () => {
  const [customerName, setCustomerName] = useState("Your Name");
  const [tagIcon, setTagIcon] = useState("deer");
  const [showChooseIconDialog, setShowChooseIconDialog] = useState(false);
  const [showUpdateNameDialog, setShowUpdateNameDialog] = useState(false);
  const [showUploadMemoriesDialog, setShowUploadMemoriesDialog] =
    useState(false);

  const baseUrl = "http://promisetag.com";
  const name = customerName.toLowerCase().split(" ").join("-");
  let url = `${baseUrl}/${tagIcon}/${name}`;

  const iconList = [
    {
      name: "deer",
      alt: "deer-icon",
      source: require("../../assets/images/qr/deer.png"),
    },
    {
      name: "alien",
      alt: "alien-icon",
      source: require("../../assets/images/qr/alien.png"),
    },
  ];

  return (
    <>
      <Screen style={{ backgroundColor: "#b3d1d6" }}>
        <VStack>
          <Box h="45%">
            <HStack>
              <Box w="1/2">
                <VStack position="relative">
                  <Text textAlign="center" fontSize="lg" fontWeight="bold">
                    Front
                  </Text>
                  <Image
                    source={require("../../assets/images/qr/tagpng.png")}
                    alt="tag"
                    size="64"
                    resizeMode="contain"
                  />
                  <VStack
                    space="4"
                    position="absolute"
                    top="0"
                    left="0"
                    ml="70px"
                    mt="24"
                  >
                    {tagIcon === "deer" ? (
                      <Image
                        source={require("../../assets/images/qr/deer.png")}
                        alt="deer"
                        key="deer"
                        size="16"
                        resizeMode="contain"
                      />
                    ) : (
                      <Image
                        source={require("../../assets/images/qr/alien.png")}
                        alt="alien"
                        key="alien"
                        size="16"
                        resizeMode="contain"
                      />
                    )}
                    <QRCode
                      value={url}
                      color="#27272a"
                      backgroundColor="transparent"
                      size="650"
                      ecl="M"
                    />
                  </VStack>
                </VStack>
              </Box>
              <Box w="1/2">
                <VStack position="relative">
                  <Text textAlign="center" fontSize="lg" fontWeight="bold">
                    Back
                  </Text>
                  <Image
                    source={require("../../assets/images/qr/tagpng.png")}
                    alt="tag"
                    size="64"
                    resizeMode="contain"
                  />
                  <Box
                    position="absolute"
                    bottom="0"
                    mb="10"
                    left="0"
                    ml="16"
                    w="16"
                    borderColor="black"
                  >
                    <Text fontSize="md">{customerName}</Text>
                  </Box>
                </VStack>
              </Box>
            </HStack>
          </Box>
          <Box bg="white" h="55%" borderTopRadius="80px" pt="4" px="4">
            <VStack space="4">
              <Box h="24" as="flex" alignItems="center" position="relative">
                <Image
                  source={require("../../assets/images/qr/qr-bg.png")}
                  alt="qr"
                  size="24"
                  resizeMode="contain"
                />
                <Box position="absolute" left="50%" top="0" ml="-8" mt="4">
                  <QRCode
                    value={url}
                    color="#27272a"
                    backgroundColor="transparent"
                    size="650"
                    ecl="L"
                  />
                </Box>
              </Box>
              <HStack space="8" px="8" py="2" bg="#e7e2ef" borderRadius="md">
                <VStack w="12" space="2">
                  <IconButton
                    bg="#3c37cc"
                    shadow="9"
                    onPress={() => {
                      setShowChooseIconDialog(true);
                    }}
                    icon={
                      <Icon
                        as={MaterialCommunityIcons}
                        name="cursor-default-click-outline"
                        w="4"
                        h="4"
                        color="white"
                      />
                    }
                  />
                  <Text textAlign="center" fontSize="10px">
                    Select Icon
                  </Text>
                </VStack>
                <VStack w="12" space="2">
                  <IconButton
                    bg="#28b7c8"
                    onPress={() => setShowUploadMemoriesDialog(true)}
                    shadow="9"
                    icon={
                      <Icon
                        as={AntDesign}
                        name="cloudupload"
                        w="4"
                        h="4"
                        color="white"
                      />
                    }
                  />
                  <Text textAlign="center" fontSize="10px">
                    Upload Memories
                  </Text>
                </VStack>
                <VStack w="12" space="2">
                  <IconButton
                    bg="#fac304"
                    onPress={() => {
                      setShowUpdateNameDialog(true);
                    }}
                    shadow="9"
                    icon={
                      <Icon
                        as={MaterialCommunityIcons}
                        name="format-text"
                        w="4"
                        h="4"
                        color="white"
                      />
                    }
                  />
                  <Text textAlign="center" fontSize="10px">
                    Write Name
                  </Text>
                </VStack>
                <VStack w="12" space="2">
                  <IconButton
                    bg="#ff36b2"
                    shadow="9"
                    icon={
                      <Icon
                        as={Ionicons}
                        name="text"
                        w="4"
                        h="4"
                        color="white"
                      />
                    }
                  />
                  <Text textAlign="center" fontSize="10px">
                    Choose Font
                  </Text>
                </VStack>
              </HStack>
              <HStack space="2">
                <Checkbox accessibilityLabel="checked"></Checkbox>
                <Text>I have verified the final output of the QR code.</Text>
              </HStack>
              <HStack
                alignItems="center"
                justifyContent="space-between"
                bg="#3bd7cc"
                p="2"
                borderRadius="lg"
                shadow="4"
              >
                <Text ml="4" fontSize="xl" fontWeight="bold" color="white">
                  Rs. 1750
                </Text>
                <Button leftIcon={<ShoppingCartIcon w="3" h="3" />} bg="white">
                  Add to cart
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Screen>
      <ChooseIcon
        isOpen={showChooseIconDialog}
        setIsOpen={setShowChooseIconDialog}
        setTagIcon={setTagIcon}
        iconList={iconList}
      />
      <UploadMemories
        isOpen={showUploadMemoriesDialog}
        setIsOpen={setShowUploadMemoriesDialog}
      />
      <UpdateName
        customerName={customerName}
        setCustomerName={setCustomerName}
        isOpen={showUpdateNameDialog}
        setIsOpen={setShowUpdateNameDialog}
      />
    </>
  );
};

export default GenerateQRScreen;
