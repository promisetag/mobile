import { Feather } from "@expo/vector-icons";
import {
  Actionsheet,
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "native-base";

const UploadMemories = ({ isOpen, setIsOpen }) => {
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
                source={require("../assets/images/memories/Video.png")}
                alt="image"
                size="sm"
              />
            </Box>
          </HStack>
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
                source={require("../assets/images/memories/Image.png")}
                alt="image"
                size="sm"
              />
            </Box>
          </HStack>
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
                source={require("../assets/images/memories/Audio.png")}
                alt="image"
                size="sm"
              />
            </Box>
          </HStack>
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
                source={require("../assets/images/memories/T.png")}
                alt="image"
                size="sm"
              />
            </Box>
          </HStack>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default UploadMemories;
