import React from "react";
import AppTabNav from "./app-tab-nav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../settings/Profile";
import Settings from "../settings";

const Stack = createNativeStackNavigator();
const AppStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Home"}
        component={AppTabNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Settings" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
};

export default AppStackNav;
