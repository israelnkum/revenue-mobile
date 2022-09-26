import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import Dashboard from "../dashboard";
import PayToe from "../toe/pay-toe";
import PaymentHistory from "../payment-history";
import { gray, primary, white } from "../../utils/colors";
import { View } from "react-native";
import { TlaIcon } from "../commons/tla-icon";
import OpenDrawer from "../commons/openDrawer";
import ProfilePicture from "../commons/profile-picture";
import Claims from "../claims";

const Tab = createBottomTabNavigator();
const AppTabNav = ({ navigation, userType }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "PaymentHistory") {
            iconName = "list-outline";
          } else if (route.name === "Dashboard") {
            iconName = "home-outline";
          } else if (route.name === "PayToe" || route.name === "CollectToe") {
            iconName = "credit-card-outline";
          } else if (route.name === "MakeClaim") {
            iconName = "edit-2-outline";
          }

          return (
            <TlaIcon
              name={iconName}
              size={15}
              color={focused ? primary : gray}
            />
          );
        },
        tabBarActiveTintColor: primary,
        tabBarsecondaryTintColor: gray,
        tabBarStyle: {
          height: 50,
          padding: 10,
          backgroundColor: white,
          paddingBottom: 10,
        },
        headerStyle: {
          backgroundColor: primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 15,
          textTransform: "capitalize",
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <View style={{ paddingLeft: 20 }}>
            <ProfilePicture size={30} />
          </View>
        ),
        headerRight: () => (
          <View style={{ paddingRight: 20 }}>
            <OpenDrawer
              toggleDrawer={() => {
                navigation.navigate("Settings");
              }}
              color={white}
            />
          </View>
        ),
      })}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MakeClaim"
        component={Claims}
        options={{ title: "Make Claim" }}
      />
      <Tab.Screen
        name="CollectToe"
        component={PayToe}
        options={{ title: userType === "driver" ? "Pay Toll" : "Collect Toll" }}
      />
      <Tab.Screen
        name="PaymentHistory"
        component={PaymentHistory}
        options={{ title: "Payment History" }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    userType: state.loginReducer.authUser.user.type,
  };
};

export default connect(mapStateToProps)(AppTabNav);
