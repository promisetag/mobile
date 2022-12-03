import {Button, Checkbox, Heading, HStack, Input, Spinner, StatusBar, Text, VStack,} from "native-base";
import {Screen} from "../components";
// import PhoneInput from "react-native-phone-number-input";
import {useRef, useState} from "react";
import {Pressable} from "react-native";
import {routes} from "../constants";

export const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [value, setValue] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const phoneInput = useRef(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [checked, setChecked] = useState(false);

    function handleSubmit() {
        auth.register(name, email, value, countryCode, password);
    }

    return (
        <Screen>
            <StatusBar barStyle="dark-content"/>
            {auth.state === "pending" && (
                <Spinner size={"lg"} position={"fixed"} w={"100%"} h={"100%"}/>
            )}
            <VStack px={"4"} space={"4"}>
                <Heading>Register to get your personalized promisetag.</Heading>
                <Text>
                    We highly value your data privacy. We do not share your sensitive data
                    with any third party.
                </Text>
                <Input
                    placeholder={"Full Name"}
                    bg={"white"}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder={"Email Address"}
                    bg={"white"}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                {/*<PhoneInput*/}
                {/*  defaultValue={value}*/}
                {/*  defaultCode={"IN"}*/}
                {/*  layout={"first"}*/}
                {/*  ref={phoneInput}*/}
                {/*  onChangeText={(text) => {*/}
                {/*    setValue(text);*/}
                {/*  }}*/}
                {/*  onChangeFormattedText={(text) => {*/}
                {/*    setFormattedValue(text);*/}
                {/*    setCountryCode(() => phoneInput.current?.getCountryCode() || "");*/}
                {/*  }}*/}
                {/*  withDarkTheme*/}
                {/*  withShadow*/}
                {/*  autoFocus*/}
                {/*/>*/}
                <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={"New password"}
                    bg={"white"}
                    variant={"filled"}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    // InputRightElement={
                    //   <Icon
                    //     as={
                    //       <MaterialIcons
                    //         name={showPassword ? "visibility" : "visibility-off"}
                    //       />
                    //     }
                    //     size={5}
                    //     mr={2}
                    //     onPress={() => setShowPassword(!showPassword)}
                    //   />
                    // }
                />
                {/*<Input*/}
                {/*  type={showConfirmPassword ? "text" : "password"}*/}
                {/*  placeholder={"Confirm password"}*/}
                {/*  bg={"white"}*/}
                {/*  variant={"filled"}*/}
                {/*  value={confirmPassword}*/}
                {/*  onChangeText={(text) => setConfirmPassword(text)}*/}
                {/*  InputRightElement={*/}
                {/*    <Icon*/}
                {/*      as={*/}
                {/*        <MaterialIcons*/}
                {/*          name={showConfirmPassword ? "visibility" : "visibility-off"}*/}
                {/*        />*/}
                {/*      }*/}
                {/*      size={5}*/}
                {/*      mr={2}*/}
                {/*      color={"muted.400"}*/}
                {/*      onPress={() => setShowConfirmPassword(!showConfirmPassword)}*/}
                {/*    />*/}
                {/*  }*/}
                {/*/>*/}
                <Checkbox value={"checked"} onChange={(values) => setChecked(values)}>
                    I agree to the terms and policies
                </Checkbox>
                <Button
                    size={"lg"}
                    colorScheme={"primary"}
                    onPress={() => handleSubmit()}
                    mb={4}
                >
                    Get Started
                </Button>
                <HStack justifyContent={"center"}>
                    <Text style={{textAlign: "center"}}>Already have an account? </Text>
                    <Pressable onPress={() => navigation.navigate(routes.LOGIN)}>
                        <Text style={{fontWeight: "bold"}}>Login</Text>
                    </Pressable>
                </HStack>
            </VStack>
        </Screen>
    );
};
