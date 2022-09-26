import React from "react";
import { Image, View } from "react-native";

export default function AppLogo({
                                  height,
                                  width,
                                  path = require("../../assets/images/caldriver.png"),
                                }) {
  return (
    <View
      style={{
        alignItems: "center",
        display: "flex",
      }}>
      <Image style={{ height: height, width: width }} source={path} />
    </View>
  );
}
