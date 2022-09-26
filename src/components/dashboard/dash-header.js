import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { primary, white } from "../../utils/colors";
import OpenDrawer from "../commons/openDrawer";
import ProfilePicture from "../commons/profile-picture";
import { connect } from "react-redux";

function DashHeader(props) {
  const { toggleDrawer, firstName, paymentDetail, userType, paymentToday } =
    props;
  const { avatarContainer, bottomBar, topBar, payment, primaryText } = styles;
  return (
    <View style={styles.top}>
      <View style={topBar}>
        <View style={avatarContainer}>
          <ProfilePicture />
          <Text style={[{ marginLeft: 10 }, primaryText]}>
            Welcome {firstName.split(" ")[0]}
          </Text>
        </View>
        <OpenDrawer toggleDrawer={toggleDrawer} />
      </View>
      <View style={bottomBar}>
        <View style={payment}>
          <Text style={primaryText}>
            Total {userType === "driver" ? "Payment" : "Collections Today"}
          </Text>
          <Text>GHC {paymentDetail.totalPayment}</Text>
        </View>
        {userType === "driver" && (
          <View
            style={[
              styles.btn,
              { backgroundColor: paymentToday === null ? "#da0000" : "green" },
            ]}>
            <View
              style={{
                paddingLeft: 5,
                paddingRight: 5,
              }}>
              <Text style={styles.btnText}>
                {paymentToday !== null && "No"} Arrears
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  const user = state.loginReducer.authUser.user;
  return {
    paymentDetail: state.loginReducer.authUser.payments,
    userType: user.type,
    paymentToday:
      user.type === "driver" ? user.info.activeVehicle.paymentToday : 0,
  };
};

export default connect(mapStateToProps)(DashHeader);
const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  top: {
    flex: 0.3,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(7,3,3,0.28)",
    shadowOpacity: 0.01,
    elevation: 5,
    shadowRadius: 2,
  },
  topBar: {
    padding: 20,
    paddingBottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomBar: {
    padding: 20,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  primaryText: {
    color: primary,
  },
  btn: {
    borderRadius: 8,
    paddingTop: 6,
    paddingBottom: 6,
    marginTop: 3,
    backgroundColor: "#3e8139",
  },
  btnText: {
    color: white,
    fontSize: 13,
    textAlign: "center",
  },
});
