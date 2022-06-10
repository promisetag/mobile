import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Pressable,
  SearchIcon,
  SectionList,
  StatusBar,
  Text,
  VStack,
} from "native-base";
import { Screen } from "../components";
import DotsVerticalIcon from "../assets/icons/DotsVerticalIcon";

const data = [
  {
    title: "March, 2022",
    data: [
      {
        id: 1,
        fileUrl:
          "https://cdn.videvo.net/videvo_files/video/free/2013-08/large_watermarked/hd0992_preview.mp4",
        type: "video",
        filename: "Sample video",
        thumbnail:
          "https://i.vimeocdn.com/video/742404739-c5359641ad4ab68e7064211dbf53f956b54081e6dcdd96e9c560bbc80c6aa1fa-d_640x360.jpg",
      },
      {
        id: 2,
        fileUrl:
          "https://cdn.videvo.net/videvo_files/video/free/2013-08/large_watermarked/hd0992_preview.mp4",
        type: "video",
        filename: "Sample video",
        thumbnail:
          "https://i.vimeocdn.com/video/742404739-c5359641ad4ab68e7064211dbf53f956b54081e6dcdd96e9c560bbc80c6aa1fa-d_640x360.jpg",
      },
      {
        id: 3,
        fileUrl:
          "https://cdn.videvo.net/videvo_files/video/free/2013-08/large_watermarked/hd0992_preview.mp4",
        type: "video",
        filename: "Sample video",
        thumbnail:
          "https://i.vimeocdn.com/video/742404739-c5359641ad4ab68e7064211dbf53f956b54081e6dcdd96e9c560bbc80c6aa1fa-d_640x360.jpg",
      },
      {
        id: 4,
        fileUrl:
          "https://cdn.videvo.net/videvo_files/video/free/2013-08/large_watermarked/hd0992_preview.mp4",
        type: "video",
        filename: "Sample video",
        thumbnail:
          "https://i.vimeocdn.com/video/742404739-c5359641ad4ab68e7064211dbf53f956b54081e6dcdd96e9c560bbc80c6aa1fa-d_640x360.jpg",
      },
    ],
  },
  {
    title: "Feb, 2022",
    data: [
      {
        id: 5,
        fileUrl:
          "https://cdn.videvo.net/videvo_files/video/free/2013-08/large_watermarked/hd0992_preview.mp4",
        type: "video",
        filename: "Sample video",
        thumbnail:
          "https://i.vimeocdn.com/video/742404739-c5359641ad4ab68e7064211dbf53f956b54081e6dcdd96e9c560bbc80c6aa1fa-d_640x360.jpg",
      },
      {
        id: 6,
        fileUrl:
          "https://cdn.videvo.net/videvo_files/video/free/2013-08/large_watermarked/hd0992_preview.mp4",
        type: "video",
        filename: "Sample video",
        thumbnail:
          "https://i.vimeocdn.com/video/742404739-c5359641ad4ab68e7064211dbf53f956b54081e6dcdd96e9c560bbc80c6aa1fa-d_640x360.jpg",
      },
      {
        id: 7,
        fileUrl:
          "https://cdn.videvo.net/videvo_files/video/free/2013-08/large_watermarked/hd0992_preview.mp4",
        type: "video",
        filename: "Sample video",
        thumbnail:
          "https://i.vimeocdn.com/video/742404739-c5359641ad4ab68e7064211dbf53f956b54081e6dcdd96e9c560bbc80c6aa1fa-d_640x360.jpg",
      },
    ],
  },
  {
    title: "Jan, 2022",
    data: [
      {
        id: 8,
        fileUrl:
          "https://cdn.videvo.net/videvo_files/video/free/2013-08/large_watermarked/hd0992_preview.mp4",
        type: "video",
        filename: "Sample video",
        thumbnail:
          "https://i.vimeocdn.com/video/742404739-c5359641ad4ab68e7064211dbf53f956b54081e6dcdd96e9c560bbc80c6aa1fa-d_640x360.jpg",
      },
      {
        id: 9,
        fileUrl:
          "https://cdn.videvo.net/videvo_files/video/free/2013-08/large_watermarked/hd0992_preview.mp4",
        type: "video",
        filename: "Sample video",
        thumbnail:
          "https://i.vimeocdn.com/video/742404739-c5359641ad4ab68e7064211dbf53f956b54081e6dcdd96e9c560bbc80c6aa1fa-d_640x360.jpg",
      },
    ],
  },
];

const Item = ({ item, section }) => {
  return (
    <Box my="2">
      <Pressable>
        <HStack space="4">
          <Image source={{ uri: item.thumbnail }} size="sm" alt="thumbnail" />
          <VStack>
            <Text>{item.filename}</Text>
            <Text>12th March, 2022</Text>
            <Text>32 MB</Text>
          </VStack>
        </HStack>
      </Pressable>
    </Box>
  );
};

export const FileListScreen = ({ route }) => {
  const fileType = "video";
  let title = "My Video Memories";
  switch (fileType) {
    case "image":
      title = "My Picture Memories";
      break;

    case "audio":
      title = "My Audio Memories";
      break;

    case "text":
      title = "My Text Memories";
      break;
  }
  return (
    <Screen>
      <StatusBar barStyle={"dark-content"} />
      <Box mx="4">
        <HStack justifyContent="space-between">
          <Heading size="md">{title}</Heading>
          <HStack space="4">
            <IconButton icon={<SearchIcon size="4" />} variant="ghost" />
            <IconButton icon={<DotsVerticalIcon size="4" />} />
          </HStack>
        </HStack>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Heading size="sm" my="4">
              {title}
            </Heading>
          )}
          renderItem={({ item, section }) => (
            <Item item={item} section={section} />
          )}
        />
      </Box>
    </Screen>
  );
};
