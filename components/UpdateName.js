import { Actionsheet, Button, Heading, Input, VStack } from "native-base";

const UpdateName = ({ isOpen, setIsOpen, setCustomerName, customerName }) => {
  return (
    <Actionsheet
      hideDragIndicator={true}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Actionsheet.Content>
        <VStack space="4" my="4" size="sm" w="full" justifyContent="center">
          <Heading size="md" textAlign="center">
            Update your name
          </Heading>
          <Input
            size="lg"
            w="75%"
            mx="auto"
            placeholder="Enter your name"
            value={customerName}
            onChangeText={(text) => setCustomerName(text)}
          />
          <Button.Group space={2} mx="auto">
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onPress={() => {
                setIsOpen(false);
              }}
            >
              Update
            </Button>
          </Button.Group>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default UpdateName;
