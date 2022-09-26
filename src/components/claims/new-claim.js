import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { gray, primary, white } from "../../utils/colors";
import { connect } from "react-redux";
import { TlaTextArea } from "../commons/tla-textarea";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { formatDate } from "../../utils/helpers";
import { addClaim } from "../../actions/claims/Actions";
import { getDriverVehicle } from "../../actions/drivers/Actions";
import { Toast } from "toastify-react-native";
import TlaAlert from "../commons/tla-alert";
import TlaLoader from "../commons/tla-loader";

const NewClaim = props => {
  const { addClaim, navigateToHome, driverId, driverVehicles, vehicles } = props;
  const [loading, setLoading] = useState(false);
  const [vehicleId, setVehicleId] = useState("");
  const [claimDate, setClaimDate] = useState(new Date());
  const [dateChanged, setDateChanged] = useState(false);
  const [reason, setReason] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setLoading(true);
    driverVehicles(driverId)
      .then(res => {
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || claimDate;
    setShow(Platform.OS === "ios");
    setClaimDate(currentDate);
    setDateChanged(true);
  };

  const showMode = currentMode => {
    setShow(true);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const handleSubmit = () => {
    setLoading(true);
    addClaim({
      reason: reason,
      claimDate: formatDate(claimDate),
      vehicleId: vehicleId,
      driverId: driverId,
    })
      .then(res => {
        Toast.success("Claim Submitted");
        setReason("");
        setVehicleId("");
        setDateChanged(false);
        setLoading(false);
      })
      .catch(() => {
        Toast.warning("Something went wrong!");
        setLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      <TlaAlert />
      <TlaLoader visible={loading} />
      <SafeAreaView>
        <ScrollView>
          <Text style={{ color: primary, marginBottom: 10 }}>
            Please fill the form below to make claim
          </Text>
          <Text style={{ color: "red", textAlign: "center" }}>
            Note: All Fields are required
          </Text>
          <View>
            <TlaTextArea
              value={reason}
              OnChangeText={value => setReason(value)}
              iconName={"person-outline"}
              placeholder={"What is your reason for this claim?"}
            />
          </View>
          <View style={styles.inputContainer}>
            {Platform.OS === "ios" ? (
              <Ionicons style={styles.prefix} name={"car"} size={20} />
            ) : (
              <MaterialIcons
                style={styles.prefix}
                name={"directions-car"}
                size={20}
              />
            )}
            <Picker
              mode={"dropdown"}
              selectedValue={vehicleId}
              style={{ height: 50, width: "90%", color: primary }}
              onValueChange={value => setVehicleId(value)}>
              <Picker.Item label="* Choose Vehicle" value="" />
              {vehicles.map(vehicle => (
                <Picker.Item
                  key={vehicle.id}
                  label={vehicle.vehicleNumber}
                  value={vehicle.id}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.calendar}>
            {Platform.OS === "ios" ? (
              <Ionicons style={styles.prefix} name={"car"} size={20} />
            ) : (
              <MaterialIcons
                style={styles.prefix}
                name={"calendar-today"}
                size={20}
              />
            )}
            <TouchableWithoutFeedback
              style={{ borderWidth: 1, borderColor: "red" }}
              onPress={showTimepicker}>
              <Text style={styles.calendarText}>
                {dateChanged ? formatDate(claimDate) : "* Choose Date"}
              </Text>
            </TouchableWithoutFeedback>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={claimDate}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity
              disabled={
                reason === "" || dateChanged === false || vehicleId === ""
              }
              onPress={handleSubmit}
              style={[
                styles.btnSubmit,
                {
                  backgroundColor:
                    reason === "" || dateChanged === false || vehicleId === ""
                      ? gray
                      : primary,
                },
              ]}>
              <Text style={styles.btnText}>Make Claim</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    marginTop: 0,
    backgroundColor: white,
  },
  prefix: {
    marginLeft: 10,
    fontWeight: "bold",
    color: primary,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderColor: primary,
  },
  btnSubmit: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 132,
    borderRadius: 18,
  },
  btnView: {
    paddingTop: 20,
    alignItems: "center",
  },
  btnText: {
    textAlign: "center",
    color: white,
  },
  inputLabel: {
    color: primary,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: 15,
    marginBottom: 15,
  },
  calendar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: 15,
    marginBottom: 15,
    height: 50,
    paddingLeft: 0,
    padding: 10,
  },
  calendarText: {
    marginLeft: 10,
    width: "100%",
    color: primary,
  },
});

const mapStateToProps = state => {
  return {
    vehicles: state.driverReducer.vehicles,
    driverId: state.loginReducer.authUser.user.driverId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addClaim: claim => dispatch(addClaim(claim)),
    driverVehicles: driverId => dispatch(getDriverVehicle(driverId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewClaim);
