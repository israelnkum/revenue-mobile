import React from "react";
import { StyleSheet, View } from "react-native";
import AppLogo from "../components/commons/app-logo";

export default function AuthLayout({ children }) {
  const { container } = styles;
  return (
    <View style={container}>
      <AppLogo height={100} width={100} logoName={"caldriver.png"} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
