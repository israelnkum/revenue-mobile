import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gray, primaryLight } from "../utils/colors";

export default function AuthFooter(props) {
  const { footerText, footerTextLink, footerText2, navigate } = props;
  const { container, infoText, infoText1 } = styles;
  return (
    <View style={container}>
      <Text style={infoText} onPress={navigate}>
        <Text style={infoText1}>{footerText}</Text> {footerTextLink}
      </Text>
      <Text style={infoText}>{footerText2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  infoText: {
    color: primaryLight,
    marginTop: 20,
  },
  infoText1: {
    color: gray,
  },
});
