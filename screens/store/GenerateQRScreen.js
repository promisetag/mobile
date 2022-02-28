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
  Input,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";
import QRCode from "react-native-qrcode-svg";
import ShoppingCartIcon from "../../assets/icons/ShoppingCartIcons";
import Screen from "../../components/Screen";

const GenerateQRScreen = () => {
  const [customerName, setCustomerName] = useState("Your Name");
  const [tagIcon, setTagIcon] = useState("alien");
  const [showModal, setShowModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const baseUrl = "http://promisetag.com";
  const name = customerName.toLowerCase().split(" ").join("-");
  let url = `${baseUrl}/${tagIcon}/${name}`;

  return (
    <>
      <Screen style={{ backgroundColor: "#b3d1d6" }}>
        <VStack>
          <Box h="40%">
            <HStack>
              <Box w="1/2">
                <VStack position="relative">
                  <Text textAlign="center" fontSize="lg" fontWeight="bold">
                    Front
                  </Text>
                  <Image
                    source={require("../../assets/images/qr/tagpng.png")}
                    alt="tag"
                    size="48"
                    resizeMode="contain"
                  />
                  <VStack
                    space="4"
                    position="absolute"
                    top="0"
                    left="0"
                    ml="74px"
                    mt="20"
                  >
                    {tagIcon === "deer" ? (
                      <Image
                        source={require("../../assets/images/qr/deer.png")}
                        alt="deer"
                        key="deer"
                        size="10"
                        resizeMode="contain"
                      />
                    ) : (
                      <Image
                        source={require("../../assets/images/qr/alien.png")}
                        alt="alien"
                        key="alien"
                        size="10"
                        resizeMode="contain"
                      />
                    )}
                    <QRCode
                      value={url}
                      color="#27272a"
                      backgroundColor="transparent"
                      size="450"
                      ecl="L"
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
                    size="48"
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
                    <Text fontSize="sm">{customerName}</Text>
                  </Box>
                </VStack>
              </Box>
            </HStack>
          </Box>
          <Box bg="white" h="60%" borderTopRadius="80px" pt="4" px="4">
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
                      setShowModal(true);
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
                      setShowNameModal(true);
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
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Choose an Icon</Modal.Header>
          <Modal.Body>
            <HStack>
              <Pressable
                onPress={() => {
                  setShowModal(false);
                  setTagIcon("deer");
                }}
              >
                <Image
                  source={require("../../assets/images/qr/deer.png")}
                  alt="deer-icon"
                  size="sm"
                  resizeMode="contain"
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setShowModal(false);
                  setTagIcon("alien");
                }}
              >
                <Image
                  source={require("../../assets/images/qr/alien.png")}
                  alt="alien-icon"
                  size="sm"
                  resizeMode="contain"
                />
              </Pressable>
            </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Modal isOpen={showNameModal} onClose={() => setShowNameModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Update Your Name</Modal.Header>
          <Modal.Body>
            <Input
              value={customerName}
              onChangeText={(text) => setCustomerName(text)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowNameModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowNameModal(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default GenerateQRScreen;
