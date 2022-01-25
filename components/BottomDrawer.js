import { Feather } from "@expo/vector-icons";
import { observer } from "mobx-react-lite";
import { useMst } from "../models/root";
import { useNavigation } from "@react-navigation/native";
import { Actionsheet, Icon, ScrollView } from "native-base";
import actionSheetItems from "../fixtures/ActionSheetItems";

const BottomDrawer = () => {
  const { drawer, auth } = useMst();

  const navigation = useNavigation();

  const logout = async () => {
    drawer.close();
    await auth.logout();
  };

  return (
    <Actionsheet isOpen={drawer.visible} onClose={drawer.close}>
      <Actionsheet.Content borderTopRadius="48">
        <ScrollView w="full">
          {actionSheetItems.map((item) => (
            <Actionsheet.Item
              key={item.title}
              startIcon={<Icon as={Feather} mr="1" size="6" name={item.icon} />}
              onPress={() => {
                drawer.close();
                navigation.navigate(item.screen);
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

export default observer(BottomDrawer);
