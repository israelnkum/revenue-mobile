import React from "react";
import { StyleSheet } from "react-native";
import { RangeDatepicker } from "@ui-kitten/components";
import PropTypes from "prop-types";
import { TlaCaption } from "../tla-caption";

export const TlaDatePicker = props => {
  const [range, setRange] = React.useState({});
  const { label, helpingText, filter } = props;
  return (
    <RangeDatepicker
      filter={filter}
      label={label}
      caption={<TlaCaption caption={helpingText} />}
      style={styles.dateStyle}
      range={range}
      onSelect={nextRange => setRange(nextRange)}
    />
  );
};

TlaDatePicker.defaultProps = {
  label: "",
  helpingText: "",
  filter: null,
};

TlaDatePicker.propTypes = {
  label: PropTypes.string,
  helpingText: PropTypes.string,
  filter: PropTypes.func,
};

const styles = StyleSheet.create({
  dateStyle: {
    marginBottom: 10,
  },
});
