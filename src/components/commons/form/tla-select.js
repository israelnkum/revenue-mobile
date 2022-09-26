import React from "react";
import { StyleSheet } from "react-native";
import { Select, SelectItem } from "@ui-kitten/components";
import { TlaIcon } from "../tla-icon";
import PropTypes from "prop-types";

export const TlaSelect = props => {
  const { icon, options, selectedIndex, value, onSelect, label, helpingText } =
    props;
  return (
    <Select
      label={label}
      caption={helpingText}
      style={styles.selectStyles}
      value={value}
      accessoryLeft={<TlaIcon name={icon} />}
      selectedIndex={selectedIndex}
      onSelect={onSelect}>
      {options.map(option => (
        <SelectItem key={option} title={option} />
      ))}
    </Select>
  );
};
TlaSelect.defaultProps = {
  icon: null,
  options: [],
  label: "",
  helpingText: "",
};
TlaSelect.propTypes = {
  icon: PropTypes.string,
  options: PropTypes.array,
  onSelect: PropTypes.func,
  value: PropTypes.string,
  selectedIndex: PropTypes.object,
  label: PropTypes.string,
  helpingText: PropTypes.string,
};

const styles = StyleSheet.create({
  selectStyles: {
    marginBottom: 10,
  },
});
