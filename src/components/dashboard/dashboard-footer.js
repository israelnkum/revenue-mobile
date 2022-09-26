import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppLogo from "../commons/app-logo";

export default function DashboardFooter() {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={require("../../assets/images/dashboard-img.png")}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.imgContainer}>
          <AppLogo
            height={50}
            width={50}
            path={require("../../assets/images/logo-white.png")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  imgContainer: {
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  imageStyle: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
