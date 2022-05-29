import {
  Badge,
  Box,
  Button,
  HStack,
  Radio,
  ScrollView,
  Text,
  TextArea,
  VStack,
} from "native-base";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { useRef, useState } from "react";

export const DeliveryTab = () => {
  const [code, setCode] = useState("");
  const [address, setAddress] = useState("1");
  const pinInput = useRef();

  const _checkCode = (code) => {
    if (code !== 123456) {
      pinInput.current.shake().then(() => setCode(""));
    }
  };

  return (
    <ScrollView>
      <VStack m="4" space="4">
        <Box>
          <Text fontWeight="bold" mb="2">
            Enter PIN Code
          </Text>
          <SmoothPinCodeInput
            codeLength={6}
            ref={pinInput}
            value={code}
            onTextChange={(code) => setCode(code)}
            onFulfill={_checkCode}
          />
        </Box>
        <Button size="lg" width="50%" mx="auto">
          Check Availability
        </Button>
        <Text textAlign="center" color="emerald.500">
          Deliverable will be made in 4-5 days
        </Text>
        <Radio.Group
          name="address"
          accessibilityLabel={"Select address for delivery"}
          value={address}
          onChange={(nextValue) => setAddress(nextValue)}
        >
          <Box mb={"2"} w={"100%"}>
            <HStack>
              <Radio value={"1"} colorScheme={"primary"}>
                Ashish Gole
              </Radio>
              <Badge colorScheme={"success"}>HOME</Badge>
            </HStack>
            <TextArea
              bg={"white"}
              w={"100%"}
              py={"2"}
              px={"4"}
              borderRadius={"md"}
              fontSize={"md"}
              mt={"2"}
            >
              Cecilia Chapman{"\n"}
              711-2880 Nulla St.{"\n"}
              Mankato Mississippi 96522{"\n"}
              (257) 563-7401
            </TextArea>
          </Box>
          <Box w={"100%"}>
            <HStack>
              <Radio value={"2"} colorScheme={"primary"}>
                Gaurang Bhagat
              </Radio>
              <Badge>OFFICE</Badge>
            </HStack>
            <TextArea
              bg={"white"}
              w={"100%"}
              py={"2"}
              px={"4"}
              borderRadius={"md"}
              fontSize={"md"}
              mt={"2"}
            >
              Theodore Lowe{"\n"}
              Ap #867-859 Sit Rd.{"\n"}
              Azusa New York 39531{"\n"}
              (793) 151-6230
            </TextArea>
          </Box>
        </Radio.Group>
        <Button mt={"4"} colorScheme={"emerald"}>
          Proceed
        </Button>
      </VStack>
    </ScrollView>
  );
};
