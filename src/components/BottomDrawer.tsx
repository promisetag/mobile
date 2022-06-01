import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Actionsheet, Icon, ScrollView } from "native-base";
import { close } from "../features/drawerSlice";
import { logout } from "../features/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux-toolkit";

export const BottomDrawer = () => {
  const drawer = useAppSelector((state) => state.drawer);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const actionSheetItems = [
    {
      title: "My Cart",
      icon: "shopping-cart",
      screen: "Cart",
    },
    {
      title: "Billing & history",
      icon: "credit-card",
      screen: "",
    },
    {
      title: "My QR Code",
      icon: "command",
      screen: "",
    },
    {
      title: "Scan history",
      icon: "clock",
      screen: "",
    },
    {
      title: "Notification settings",
      icon: "bell",
      screen: "",
    },
    {
      title: "Updates",
      icon: "download",
      screen: "",
    },
    {
      title: "Help",
      icon: "help-circle",
      screen: "",
    },
    {
      title: "Policies",
      icon: "align-left",
      screen: "",
    },
    {
      title: "App share",
      icon: "share-2",
      screen: "",
    },
    {
      title: "Remove ads",
      icon: "credit-card",
      screen: "",
    },
    {
      title: "Delete profile",
      icon: "trash",
      screen: "",
    },
  ];

  return (
    <Actionsheet isOpen={drawer.visible} onClose={() => dispatch(close())}>
      <Actionsheet.Content borderTopRadius="48">
        <ScrollView w="full">
          {actionSheetItems.map((item) => (
            <Actionsheet.Item
              key={item.title}
              startIcon={<Icon as={Feather} mr="1" size="6" name={item.icon} />}
              onPress={() => {
                dispatch(close());
                navigation.navigate({ key: item.screen });
              }}
            >
              {item.title}
            </Actionsheet.Item>
          ))}
          <Actionsheet.Item
            startIcon={<Icon as={Feather} mr="1" size="6" name="log-out" />}
            onPress={() => logout()}
          >
            Logout
          </Actionsheet.Item>
        </ScrollView>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
