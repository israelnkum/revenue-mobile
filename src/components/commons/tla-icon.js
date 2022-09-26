import React from "react";
import { Icon } from "@ui-kitten/components";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

export const TlaIcon = props => {
  return props.name === null ? null : (
    <Icon
      fill={props.color}
      style={[styles.icon, { width: props.size, height: props.size }]}
      name={props.name}
      {...props}
    />
  );
};

TlaIcon.defaultProps = {
  color: "#8F9BB3",
  size: 32,
  name: null,
};

TlaIcon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};
const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
