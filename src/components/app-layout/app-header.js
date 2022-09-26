import React from "react";
import { Header } from "react-native-elements";
import { primary } from "../../utils/colors";

const AppHeader = () => {
  return (
    <Header
      style={{ height: 20, padding: 0 }}
      backgroundColor={primary}
      leftComponent={{ icon: "arrow-back", color: "#fff" }}
      centerComponent={{ text: "Payment History", style: { color: "#fff" } }}
      rightComponent={{ icon: "menu", color: "#fff" }}
    />
  );
};
export default AppHeader;
