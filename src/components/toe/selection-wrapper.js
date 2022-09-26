import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const SelectionWrapper = props => {
  const { title, children, loading } = props;

  return loading ? (
    <Text>Please Wait ...</Text>
  ) : (
    <View style={styles.container}>
      <Text>{title}</Text>
      {children}
    </View>
  );
};

SelectionWrapper.defaultProps = {
  loading: false,
};

SelectionWrapper.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.any,
};

export default SelectionWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#ececec",
  },
});
