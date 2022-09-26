import { PermissionsAndroid, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CameraScreen } from "react-native-camera-kit";
import { TlaButton } from "../../commons/form/tla-button";
import PropTypes from "prop-types";

const AccessCamera = props => {
  const { vehicleNumber, setVehicleNumber, startScanning, setStartScanning } =
    props;

  const onQR_Code_Scan_Done = content => {
    setVehicleNumber(content);
    setStartScanning(false);
    console.log(content);
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera App Permission",
          message: "Revenue collector needs access to your camera",
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setVehicleNumber("");
        setStartScanning(true);
      } else {
        alert("CAMERA permission denied");
      }
    } catch (err) {
      alert("Camera permission err");
    }
  };
  const openCamera = () => {
    if (Platform.OS === "android") {
      requestCameraPermission();
    } else {
      setVehicleNumber("");
      setStartScanning(true);
    }
  };
  return !startScanning ? (
    <View style={styles.MainContainer}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>Scan QR-Code</Text>

      <Text style={styles.QR_text}>
        {vehicleNumber ? "Scanned QR Code: " + vehicleNumber : ""}
      </Text>
      <TlaButton onPress={openCamera} text={"Scan"} />
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <CameraScreen
        showFrame={true}
        scanBarcode={true}
        laserColor={"#FF3D00"}
        frameColor={"#00C853"}
        colorForScannerFrame={"black"}
        onReadCode={event => {
          onQR_Code_Scan_Done(event.nativeEvent.codeStringValue);
        }}
      />
    </View>
  );
};

AccessCamera.propTypes = {
  vehicleNumber: PropTypes.string,
  setVehicleNumber: PropTypes.func,
  startScanning: PropTypes.bool,
  setStartScanning: PropTypes.func,
};

export default AccessCamera;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    alignItems: "center",
    justifyContent: "center",
  },
  QR_text: {
    color: "#000",
    fontSize: 19,
    padding: 8,
    marginTop: 12,
  },
});
