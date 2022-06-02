import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TourScreen } from "../screens";
import { useAppSelector } from "../hooks/redux-toolkit";
import { TabNavigator } from "./TabNavigator";

const GuestStack = createNativeStackNavigator();

export const GuestNavigator = () => {
  const boarding = useAppSelector((state) => state.boarding.value);
  if (boarding) {
    return (
      <GuestStack.Navigator>
        <GuestStack.Screen
          name="Tour"
          component={TourScreen}
          options={{
            headerShown: false,
          }}
        />
        <GuestStack.Screen
          name="Tab"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </GuestStack.Navigator>
    );
  }
  return (
    <GuestStack.Navigator>
      <GuestStack.Screen
        name="Tab"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </GuestStack.Navigator>
  );
};
