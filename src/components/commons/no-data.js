import React from "react";
import { primary } from "../../utils/colors";
import { StyleSheet, Text, View } from "react-native";
import { TlaIcon } from "./tla-icon";

const NoData = ({ message }) => {
  return (
    <View style={styles.empty}>
      <TlaIcon name={"alert-circle-outline"} size={30} />
      <Text style={{ color: primary }}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  empty: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default NoData;
