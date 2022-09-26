import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { white } from "../../utils/colors";
import { connect } from "react-redux";

const Profile = props => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: white,
  },
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
