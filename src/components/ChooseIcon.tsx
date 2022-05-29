import {
  Actionsheet,
  Heading,
  HStack,
  Image,
  Pressable,
  VStack,
} from "native-base";

export const ChooseIcon = ({ isOpen, setIsOpen, setTagIcon, iconList }) => {
  return (
    <Actionsheet
      hideDragIndicator={true}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Actionsheet.Content>
        <VStack space="4" my="4">
          <Heading size="md">Choose an Icon</Heading>
          <HStack>
            {iconList.map((icon) => (
              <Pressable
                key={icon.name}
                onPress={() => {
                  setIsOpen(false);
                  setTagIcon(icon.name);
                }}
              >
                <Image
                  source={icon.source}
                  alt={icon.alt}
                  size="sm"
                  resizeMode="contain"
                />
              </Pressable>
            ))}
          </HStack>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
