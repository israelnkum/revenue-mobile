import React from "react";
import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

export default function TlaLoader({ visible }) {
  const _renderDefaultContent = () => {
    return (
      <View style={styles.background}>
        <ActivityIndicator color={"#fff"} size={"small"} />
        <View style={[styles.textContainer]}>
          <Text style={[styles.textContent]}>{"Please wait..."}</Text>
        </View>
      </View>
    );
  };

  const spinner = (
    <View
      style={[
        styles.container,
        { backgroundColor: "rgba(0,0,0,0.56)" /*overlayColor*/ },
      ]}
      key={`spinner_${Date.now()}`}>
      {_renderDefaultContent()}
    </View>
  );

  return (
    <View style={styles.background}>
      <Modal
        animationType={"none"}
        supportedOrientations={["landscape", "portrait"]}
        transparent
        visible={visible}
        statusBarTranslucent={true}>
        {spinner}
      </Modal>
    </View>
  );
}
TlaLoader.propTypes = {
  visible: PropTypes.bool,
};
const transparent = "transparent";
const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  container: {
    backgroundColor: transparent,
    bottom: 0,
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  textContainer: {
    alignItems: "center",
    bottom: 0,
    flex: 1,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  textContent: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#fff",
    height: 50,
    top: 70,
  },
});
