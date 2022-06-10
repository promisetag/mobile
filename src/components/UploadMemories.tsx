import { Feather } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import {
  Actionsheet,
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";

export const UploadMemories = ({ isOpen, setIsOpen }) => {
  const launchPicker = async (type) => {
    const files = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
      type: type,
    });
    console.log(files);
  };
  return (
    <Actionsheet
      hideDragIndicator={true}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Actionsheet.Content>
        <VStack space="8" my="4">
          <HStack space="2">
            <Icon as={Feather} name="upload" />
            <Heading size="md">Upload media files</Heading>
          </HStack>
          <Pressable onPress={() => launchPicker("video/*")}>
            <HStack
              width="full"
              space="8"
              borderColor="gray.300"
              borderWidth="2"
              p="2"
              borderRadius="md"
            >
              <Box maxW="60%">
                <Heading size="sm">Upload video</Heading>
                <Text>This is a sample text used for this app</Text>
              </Box>
              <Box>
                <Image
                  source={require("../assets/images/samples/Video.png")}
                  alt="image"
                  size="sm"
                />
              </Box>
            </HStack>
          </Pressable>
          <Pressable onPress={() => launchPicker("image/*")}>
            <HStack
              width="full"
              space="8"
              borderColor="gray.300"
              borderWidth="2"
              p="2"
              borderRadius="md"
            >
              <Box maxW="60%">
                <Heading size="sm">Upload pictures</Heading>
                <Text>This is a sample text used for this app</Text>
              </Box>
              <Box>
                <Image
                  source={require("../assets/images/samples/Image.png")}
                  alt="image"
                  size="sm"
                />
              </Box>
            </HStack>
          </Pressable>
          <Pressable onPress={() => launchPicker("audio/*")}>
            <HStack
              width="full"
              space="8"
              borderColor="gray.300"
              borderWidth="2"
              p="2"
              borderRadius="md"
            >
              <Box maxW="60%">
                <Heading size="sm">Upload audio</Heading>
                <Text>This is a sample text used for this app</Text>
              </Box>
              <Box>
                <Image
                  source={require("../assets/images/samples/Audio.png")}
                  alt="image"
                  size="sm"
                />
              </Box>
            </HStack>
          </Pressable>
          <Pressable onPress={() => launchPicker("application/*")}>
            <HStack
              width="full"
              space="8"
              borderColor="gray.300"
              borderWidth="2"
              p="2"
              borderRadius="md"
            >
              <Box maxW="60%">
                <Heading size="sm">Upload text</Heading>
                <Text>This is a sample text used for this app</Text>
              </Box>
              <Box>
                <Image
                  source={require("../assets/images/samples/T.png")}
                  alt="image"
                  size="sm"
                />
              </Box>
            </HStack>
          </Pressable>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
