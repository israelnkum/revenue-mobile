import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { primaryLight } from "../utils/colors";

export default function AuthTitle({ title }) {
  const { loginTitle } = styles;
  return (
    <View
      style={{
        alignItems: "center",
        display: "flex",
      }}>
      <Text style={loginTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loginTitle: {
    color: primaryLight,
    fontSize: Platform.OS === "ios" ? 26 : 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
