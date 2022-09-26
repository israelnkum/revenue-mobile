import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "@ui-kitten/components";
import PropTypes from "prop-types";

const TlaCard = props => {
  const { children, style } = props;

  return <Card style={{ ...styles.card, ...style }}>{children}</Card>;
};

export default TlaCard;

TlaCard.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};
const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
  },
});
